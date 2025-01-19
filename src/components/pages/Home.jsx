import React from "react";
import VerticalTempPlace from "../VerticalTempPlace";
import HorizontalTempPlace from "../HorizontalTempPlace";
import WeatherDetail from "../WeatherDetail";
import Clock from "../Clock";
function Home() {
  const data = {
    type: "C",
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1737277200,
        main: {
          temp: 29.7,
          feels_like: 29.05,
          temp_min: 27.11,
          temp_max: 29.7,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1011,
          humidity: 37,
          temp_kf: 2.59,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 12,
        },
        wind: {
          speed: 4.11,
          deg: 284,
          gust: 3.88,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-19 09:00:00",
      },
      {
        dt: 1737288000,
        main: {
          temp: 27.71,
          feels_like: 28.05,
          temp_min: 26.07,
          temp_max: 27.71,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 49,
          temp_kf: 1.64,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 7.3,
          deg: 316,
          gust: 8.83,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-19 12:00:00",
      },
      {
        dt: 1737298800,
        main: {
          temp: 25.94,
          feels_like: 26.08,
          temp_min: 25.94,
          temp_max: 25.94,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1012,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 6.35,
          deg: 345,
          gust: 7.96,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-19 15:00:00",
      },
      {
        dt: 1737309600,
        main: {
          temp: 25.76,
          feels_like: 25.78,
          temp_min: 25.76,
          temp_max: 25.76,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1012,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 3.02,
          deg: 25,
          gust: 3.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-19 18:00:00",
      },
      {
        dt: 1737320400,
        main: {
          temp: 25.18,
          feels_like: 25.09,
          temp_min: 25.18,
          temp_max: 25.18,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.61,
          deg: 34,
          gust: 2.85,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-19 21:00:00",
      },
      {
        dt: 1737331200,
        main: {
          temp: 24.43,
          feels_like: 24.26,
          temp_min: 24.43,
          temp_max: 24.43,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 3.48,
          deg: 14,
          gust: 4.16,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-20 00:00:00",
      },
      {
        dt: 1737342000,
        main: {
          temp: 24.4,
          feels_like: 24.12,
          temp_min: 24.4,
          temp_max: 24.4,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1012,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 2.98,
          deg: 53,
          gust: 3.27,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-20 03:00:00",
      },
      {
        dt: 1737352800,
        main: {
          temp: 26.62,
          feels_like: 26.62,
          temp_min: 26.62,
          temp_max: 26.62,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1013,
          humidity: 45,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 2.02,
          deg: 322,
          gust: 2.19,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-20 06:00:00",
      },
      {
        dt: 1737363600,
        main: {
          temp: 26.3,
          feels_like: 26.3,
          temp_min: 26.3,
          temp_max: 26.3,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 6.88,
          deg: 319,
          gust: 6.65,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-20 09:00:00",
      },
      {
        dt: 1737374400,
        main: {
          temp: 25.78,
          feels_like: 25.95,
          temp_min: 25.78,
          temp_max: 25.78,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 7.16,
          deg: 324,
          gust: 8.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-20 12:00:00",
      },
      {
        dt: 1737385200,
        main: {
          temp: 25.66,
          feels_like: 25.9,
          temp_min: 25.66,
          temp_max: 25.66,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1011,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 6.04,
          deg: 334,
          gust: 7.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-20 15:00:00",
      },
      {
        dt: 1737396000,
        main: {
          temp: 25.66,
          feels_like: 25.8,
          temp_min: 25.66,
          temp_max: 25.66,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.64,
          deg: 20,
          gust: 3.28,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-20 18:00:00",
      },
      {
        dt: 1737406800,
        main: {
          temp: 25.15,
          feels_like: 25.24,
          temp_min: 25.15,
          temp_max: 25.15,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1010,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.69,
          deg: 4,
          gust: 2.28,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-20 21:00:00",
      },
      {
        dt: 1737417600,
        main: {
          temp: 24.56,
          feels_like: 24.46,
          temp_min: 24.56,
          temp_max: 24.56,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 3.77,
          deg: 14,
          gust: 4.34,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-21 00:00:00",
      },
      {
        dt: 1737428400,
        main: {
          temp: 24.5,
          feels_like: 24.23,
          temp_min: 24.5,
          temp_max: 24.5,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 2.95,
          deg: 20,
          gust: 3.2,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-21 03:00:00",
      },
      {
        dt: 1737439200,
        main: {
          temp: 26.36,
          feels_like: 26.36,
          temp_min: 26.36,
          temp_max: 26.36,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1012,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 2.89,
          deg: 339,
          gust: 3.33,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-21 06:00:00",
      },
      {
        dt: 1737450000,
        main: {
          temp: 26.44,
          feels_like: 26.44,
          temp_min: 26.44,
          temp_max: 26.44,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1008,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 6.66,
          deg: 320,
          gust: 6.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-21 09:00:00",
      },
      {
        dt: 1737460800,
        main: {
          temp: 25.64,
          feels_like: 25.85,
          temp_min: 25.64,
          temp_max: 25.64,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1008,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 8.45,
          deg: 325,
          gust: 9.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-21 12:00:00",
      },
      {
        dt: 1737471600,
        main: {
          temp: 25.83,
          feels_like: 26.09,
          temp_min: 25.83,
          temp_max: 25.83,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1010,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 6.88,
          deg: 342,
          gust: 9.24,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-21 15:00:00",
      },
      {
        dt: 1737482400,
        main: {
          temp: 25.79,
          feels_like: 25.97,
          temp_min: 25.79,
          temp_max: 25.79,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.86,
          deg: 8,
          gust: 3.44,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-21 18:00:00",
      },
      {
        dt: 1737493200,
        main: {
          temp: 25.39,
          feels_like: 25.45,
          temp_min: 25.39,
          temp_max: 25.39,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1009,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 2.96,
          deg: 357,
          gust: 3.35,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-21 21:00:00",
      },
      {
        dt: 1737504000,
        main: {
          temp: 24.6,
          feels_like: 24.6,
          temp_min: 24.6,
          temp_max: 24.6,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1009,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 3.71,
          deg: 4,
          gust: 4.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-22 00:00:00",
      },
      {
        dt: 1737514800,
        main: {
          temp: 24.59,
          feels_like: 24.44,
          temp_min: 24.59,
          temp_max: 24.59,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1011,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 2.87,
          deg: 21,
          gust: 3.18,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-22 03:00:00",
      },
      {
        dt: 1737525600,
        main: {
          temp: 26.37,
          feels_like: 26.37,
          temp_min: 26.37,
          temp_max: 26.37,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 49,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 23,
        },
        wind: {
          speed: 2.56,
          deg: 332,
          gust: 2.84,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-22 06:00:00",
      },
      {
        dt: 1737536400,
        main: {
          temp: 25.64,
          feels_like: 25.72,
          temp_min: 25.64,
          temp_max: 25.64,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1008,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 7.83,
          deg: 321,
          gust: 6.97,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-22 09:00:00",
      },
      {
        dt: 1737547200,
        main: {
          temp: 25.47,
          feels_like: 25.59,
          temp_min: 25.47,
          temp_max: 25.47,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1008,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 9.3,
          deg: 327,
          gust: 9.95,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-22 12:00:00",
      },
      {
        dt: 1737558000,
        main: {
          temp: 25.36,
          feels_like: 25.47,
          temp_min: 25.36,
          temp_max: 25.36,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1010,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 7.34,
          deg: 341,
          gust: 9.81,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-22 15:00:00",
      },
      {
        dt: 1737568800,
        main: {
          temp: 24.74,
          feels_like: 24.78,
          temp_min: 24.74,
          temp_max: 24.74,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 6.29,
          deg: 346,
          gust: 7.29,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-22 18:00:00",
      },
      {
        dt: 1737579600,
        main: {
          temp: 24.22,
          feels_like: 24.16,
          temp_min: 24.22,
          temp_max: 24.22,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1009,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 5.62,
          deg: 352,
          gust: 6.26,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-22 21:00:00",
      },
      {
        dt: 1737590400,
        main: {
          temp: 23.76,
          feels_like: 23.42,
          temp_min: 23.76,
          temp_max: 23.76,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1009,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 5.56,
          deg: 8,
          gust: 7.41,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-23 00:00:00",
      },
      {
        dt: 1737601200,
        main: {
          temp: 23.51,
          feels_like: 23.04,
          temp_min: 23.51,
          temp_max: 23.51,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 43,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 17,
        },
        wind: {
          speed: 4.57,
          deg: 17,
          gust: 5.93,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-23 03:00:00",
      },
      {
        dt: 1737612000,
        main: {
          temp: 25.77,
          feels_like: 25.47,
          temp_min: 25.77,
          temp_max: 25.77,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 11,
        },
        wind: {
          speed: 5.34,
          deg: 349,
          gust: 6.27,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-23 06:00:00",
      },
      {
        dt: 1737622800,
        main: {
          temp: 26.04,
          feels_like: 26.04,
          temp_min: 26.04,
          temp_max: 26.04,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1008,
          humidity: 48,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 9.22,
          deg: 327,
          gust: 9.12,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-23 09:00:00",
      },
      {
        dt: 1737633600,
        main: {
          temp: 25.74,
          feels_like: 25.73,
          temp_min: 25.74,
          temp_max: 25.74,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1007,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 10.3,
          deg: 331,
          gust: 11.49,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-23 12:00:00",
      },
      {
        dt: 1737644400,
        main: {
          temp: 25.71,
          feels_like: 25.77,
          temp_min: 25.71,
          temp_max: 25.71,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1009,
          humidity: 55,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 7.63,
          deg: 348,
          gust: 9.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-23 15:00:00",
      },
      {
        dt: 1737655200,
        main: {
          temp: 25.3,
          feels_like: 25.19,
          temp_min: 25.3,
          temp_max: 25.3,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1009,
          humidity: 50,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 4.73,
          deg: 358,
          gust: 6.33,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-23 18:00:00",
      },
      {
        dt: 1737666000,
        main: {
          temp: 24.6,
          feels_like: 24.34,
          temp_min: 24.6,
          temp_max: 24.6,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1007,
          humidity: 47,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 4.49,
          deg: 11,
          gust: 6.86,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-23 21:00:00",
      },
      {
        dt: 1737676800,
        main: {
          temp: 24.04,
          feels_like: 23.52,
          temp_min: 24.04,
          temp_max: 24.04,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 1007,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 4.15,
          deg: 22,
          gust: 4.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2025-01-24 00:00:00",
      },
      {
        dt: 1737687600,
        main: {
          temp: 24.15,
          feels_like: 23.53,
          temp_min: 24.15,
          temp_max: 24.15,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 35,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 2.45,
          deg: 51,
          gust: 2.69,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-24 03:00:00",
      },
      {
        dt: 1737698400,
        main: {
          temp: 26.6,
          feels_like: 26.6,
          temp_min: 26.6,
          temp_max: 26.6,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 40,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 0.49,
          deg: 38,
          gust: 1.35,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2025-01-24 06:00:00",
      },
    ],
    city: {
      id: 1275339,
      name: "Mumbai",
      coord: {
        lat: 19.0144,
        lon: 72.8479,
      },
      country: "IN",
      population: 1000000,
      timezone: 19800,
      sunrise: 1737251081,
      sunset: 1737291211,
    },
  };
  return (
    <div className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto_auto_auto_auto] gap-[20px]">
      <div className="flex items-center row-span-2 col-span-2 justify-between p-[20px]">
        <div className="grid gap-5">
          <h1 className="text-4xl font-bold">
            {data.city.name},
            <span className="text-xl font-normal text-primary-color">
              {data.city.country}
            </span>
          </h1>
          <h1 className="text-5xl font-semibold">
            {data.list[0].main.temp}° {data.type}
          </h1>
        </div>
        <img
          src={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          alt="data.list[0].weather[0].icon"
          className="h-36"
        />
      </div>
      <div className="row-span-1 col-start-3 p-[20px]">
        <Clock />
      </div>
      <div className="row-start-3 row-span-2 col-span-2 bg-dark-color rounded-lg p-[20px]">
        <h2 className="text-xl font-semibold">Today Forcast</h2>
        <div className="flex flex-wrap justify-between">
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
          <VerticalTempPlace
            iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
            time="6:00"
            temp="21°"
          />
        </div>
      </div>
      <div className="row-start-2 row-span-3 col-start-3  bg-dark-color rounded-lg p-[20px] grid ">
        <h2 className="text-xl font-semibold">5 Days Forcast</h2>
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
        <HorizontalTempPlace
          iconPath={"/weather/" + data.list[0].weather[0].icon + ".svg"}
          time="6:00"
          temp="21°"
        />
      </div>
      <div className="row-start-5 row-span-2 col-span-3  bg-dark-color rounded-lg p-[20px] ">
        <h2 className="text-xl font-semibold">Weather Details</h2>
        <div className="flex flex-wrap justify-between">
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
        </div>
        <div className="flex flex-wrap justify-between">
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
          <WeatherDetail title="Wind Speed" value="12km/h"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
