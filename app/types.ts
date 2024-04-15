export type Country = {
    name: {
      common: string,
    },
    flags : {
      svg: string,
      alt: string,
    },
    translations: {
      rus: {
        common: string,
        official: string,
      },
    },
    capital: string,
    region: string,
    subregion: string,
    population: number,
    languages: {
      [key: string]: string,
    },
  };