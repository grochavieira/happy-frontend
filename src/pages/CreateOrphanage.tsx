import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { FiPlus } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

import {
  Container,
  Form,
  Fieldset,
  ButtonSelect,
  ImagesContainer,
  ImagePreview,
} from "../styles/pages/create-orphanage";
import { InputBlock, ConfirmButton } from "../styles/global";

interface Image {
  url: string;
  name: string;
}

export default function CreateOrphanage() {
  const history = useHistory();
  const { title } = useContext(ThemeContext);
  const [userLocation, setUserLocation] = useState({
    latitude: -20.7104846,
    longitude: -46.5521557,
  });
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [whatsapp, setWhatsapp] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<Image[]>([]);

  useEffect(() => {
    async function getUserLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (err) => {
          console.log(err);
        },
        {
          timeout: 30000,
        }
      );
    }
    getUserLocation();
  }, []);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat: latitude, lng: longitude } = event.latlng;

    setPosition({
      latitude,
      longitude,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const { latitude, longitude } = position;

      const data = new FormData();

      data.append("name", name);
      data.append("about", about);
      data.append("latitude", String(latitude));
      data.append("longitude", String(longitude));
      data.append("instructions", instructions);
      data.append("opening_hours", opening_hours);
      data.append("open_on_weekends", String(open_on_weekends));
      data.append("whatsapp", whatsapp);

      images.forEach((image) => {
        data.append("images", image);
      });

      await api.post("orphanages", data);

      console.log({
        name,
        about,
        instructions,
        opening_hours,
        latitude,
        longitude,
        open_on_weekends,
      });

      toast.success("Orfanato cadastrado com sucesso!");
      history.push("/success");
    } catch (error) {
      toast.error("Não foi possível realizar o cadastro!");
    }
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);

    setImages([...images, ...selectedImages]);

    const selectedImagesPreview = selectedImages.map((image) => {
      return { url: URL.createObjectURL(image), name: image.name };
    });

    setPreviewImages([...previewImages, ...selectedImagesPreview]);
  }

  function handleDeleteImages(image: any) {
    const newImages = images.filter(
      (savedImage) => savedImage.name !== image.name
    );

    const newPreviewImages = previewImages.filter(
      (previewImage) => previewImage.url !== image.url
    );

    setPreviewImages(newPreviewImages);
    setImages(newImages);
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <legend>Dados</legend>

            <Map
              onClick={handleMapClick}
              center={[userLocation.latitude, userLocation.longitude]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                id="name"
                maxLength={300}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map((image) => {
                  return (
                    <ImagePreview key={image.url}>
                      <img src={image.url} alt={name} />
                      <button
                        type="button"
                        onClick={() => handleDeleteImages(image)}
                      >
                        <ImCross size={20} />
                      </button>
                    </ImagePreview>
                  );
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} />
                </label>
              </ImagesContainer>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </Fieldset>

          <Fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                id="instructions"
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de Visita</label>
              <input
                value={opening_hours}
                onChange={(e) => setOpeningHours(e.target.value)}
                id="opening_hours"
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                id="whatsapp"
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect>
                <button
                  onClick={() => setOpenOnWeekends(true)}
                  type="button"
                  className={open_on_weekends ? "active" : ""}
                >
                  Sim
                </button>
                <button
                  onClick={() => setOpenOnWeekends(false)}
                  type="button"
                  className={!open_on_weekends ? "active" : ""}
                >
                  Não
                </button>
              </ButtonSelect>
            </InputBlock>
          </Fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </Form>
      </main>
    </Container>
  );
}
