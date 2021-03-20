import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryDark?: string;
      primaryLight?: string;
      secondary: string;
      secondaryDark?: string;
      secondaryLight?: string;
      tertiary: string;
      tertiaryDark?: string;
      tertiaryLight?: string;
      gradientText: string;
      title: string;
      text: string;
      background: string;
      formBackground: string;
      inputBackground: string;
      borderColor: string;
      green: string;
    };
  }
}
