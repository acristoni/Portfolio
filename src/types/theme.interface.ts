export default interface Theme {
    name: string;
    colors: {
      primary: string,
      secondary: string,
      ternary: string,
      quaternary: string,
      quintenary: string,
    },
    fonts: {
      main: string,
      name: string,
      skills: string
    },
    mobileSize: number,
    miniSize: number
}
  