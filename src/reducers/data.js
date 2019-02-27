const data = (
  state = {
    data: {
      Loading: {
        location: { name: "Loading", tz_id: "Australia/Sydney" },
        current: {
          temp_c: 0,
          is_day: 0,
          condition: {
            text: "Loading",
            icon: "//cdn.apixu.com/weather/64x64/night/116.png",
            code: 1003
          },
          wind_kph: 0,
          wind_degree: 0,
          wind_dir: "",
          humidity: 0,
          vis_km: 0,
          uv: 0
        },
        forecast: {
          forecastday: [
            {
              date: "2019-01-25",
              date_epoch: 1548374400,
              day: {
                maxtemp_c: 30.2,
                maxtemp_f: 86.4,
                mintemp_c: 24.7,
                mintemp_f: 76.5,
                avgtemp_c: 26.2,
                avgtemp_f: 79.1,
                maxwind_mph: 17.7,
                maxwind_kph: 28.4,
                totalprecip_mm: 0.3,
                totalprecip_in: 0.01,
                avgvis_km: 18.9,
                avgvis_miles: 11.0,
                avghumidity: 78.0,
                condition: {
                  text: "Patchy rain possible",
                  icon: "//cdn.apixu.com/weather/64x64/day/176.png",
                  code: 1063
                },
                uv: 13.2
              },
              astro: {
                sunrise: "06:09 AM",
                sunset: "08:05 PM",
                moonrise: "11:10 PM",
                moonset: "10:21 AM"
              }
            },
            {
              date: "2019-01-26",
              date_epoch: 1548460800,
              day: {
                maxtemp_c: 32.6,
                maxtemp_f: 90.7,
                mintemp_c: 21.9,
                mintemp_f: 71.4,
                avgtemp_c: 27.4,
                avgtemp_f: 81.3,
                maxwind_mph: 14.1,
                maxwind_kph: 22.7,
                totalprecip_mm: 0.0,
                totalprecip_in: 0.0,
                avgvis_km: 19.7,
                avgvis_miles: 12.0,
                avghumidity: 67.0,
                condition: {
                  text: "Partly cloudy",
                  icon: "//cdn.apixu.com/weather/64x64/day/116.png",
                  code: 1003
                },
                uv: 13.6
              },
              astro: {
                sunrise: "06:10 AM",
                sunset: "08:05 PM",
                moonrise: "11:46 PM",
                moonset: "11:27 AM"
              }
            },
            {
              date: "2019-01-27",
              date_epoch: 1548547200,
              day: {
                maxtemp_c: 31.3,
                maxtemp_f: 88.3,
                mintemp_c: 23.2,
                mintemp_f: 73.8,
                avgtemp_c: 26.5,
                avgtemp_f: 79.8,
                maxwind_mph: 17.2,
                maxwind_kph: 27.7,
                totalprecip_mm: 6.9,
                totalprecip_in: 0.27,
                avgvis_km: 14.4,
                avgvis_miles: 8.0,
                avghumidity: 78.0,
                condition: {
                  text: "Moderate or heavy rain shower",
                  icon: "//cdn.apixu.com/weather/64x64/day/356.png",
                  code: 1243
                },
                uv: 13.6
              },
              astro: {
                sunrise: "06:11 AM",
                sunset: "08:04 PM",
                moonrise: "No moonrise",
                moonset: "12:31 PM"
              }
            },
            {
              date: "2019-01-28",
              date_epoch: 1548633600,
              day: {
                maxtemp_c: 27.6,
                maxtemp_f: 81.7,
                mintemp_c: 24.0,
                mintemp_f: 75.2,
                avgtemp_c: 24.7,
                avgtemp_f: 76.4,
                maxwind_mph: 13.9,
                maxwind_kph: 22.3,
                totalprecip_mm: 3.1,
                totalprecip_in: 0.12,
                avgvis_km: 14.3,
                avgvis_miles: 8.0,
                avghumidity: 85.0,
                condition: {
                  text: "Moderate or heavy rain shower",
                  icon: "//cdn.apixu.com/weather/64x64/day/356.png",
                  code: 1243
                },
                uv: 9.7
              },
              astro: {
                sunrise: "06:12 AM",
                sunset: "08:03 PM",
                moonrise: "12:20 AM",
                moonset: "01:33 PM"
              }
            },
            {
              date: "2019-01-29",
              date_epoch: 1548720000,
              day: {
                maxtemp_c: 30.1,
                maxtemp_f: 86.2,
                mintemp_c: 24.2,
                mintemp_f: 75.6,
                avgtemp_c: 26.4,
                avgtemp_f: 79.5,
                maxwind_mph: 17.9,
                maxwind_kph: 28.8,
                totalprecip_mm: 0.4,
                totalprecip_in: 0.02,
                avgvis_km: 16.9,
                avgvis_miles: 10.0,
                avghumidity: 76.0,
                condition: {
                  text: "Patchy rain possible",
                  icon: "//cdn.apixu.com/weather/64x64/day/176.png",
                  code: 1063
                },
                uv: 12.9
              },
              astro: {
                sunrise: "06:13 AM",
                sunset: "08:03 PM",
                moonrise: "12:56 AM",
                moonset: "02:33 PM"
              }
            },
            {
              date: "2019-01-30",
              date_epoch: 1548806400,
              day: {
                maxtemp_c: 29.4,
                maxtemp_f: 84.9,
                mintemp_c: 23.7,
                mintemp_f: 74.7,
                avgtemp_c: 26.3,
                avgtemp_f: 79.4,
                maxwind_mph: 20.4,
                maxwind_kph: 32.8,
                totalprecip_mm: 0.0,
                totalprecip_in: 0.0,
                avgvis_km: 18.6,
                avgvis_miles: 11.0,
                avghumidity: 73.0,
                condition: {
                  text: "Partly cloudy",
                  icon: "//cdn.apixu.com/weather/64x64/day/116.png",
                  code: 1003
                },
                uv: 7.0
              },
              astro: {
                sunrise: "06:14 AM",
                sunset: "08:02 PM",
                moonrise: "01:33 AM",
                moonset: "03:32 PM"
              }
            },
            {
              date: "2019-01-31",
              date_epoch: 1548892800,
              day: {
                maxtemp_c: 29.7,
                maxtemp_f: 85.5,
                mintemp_c: 24.0,
                mintemp_f: 75.2,
                avgtemp_c: 26.2,
                avgtemp_f: 79.2,
                maxwind_mph: 22.6,
                maxwind_kph: 36.4,
                totalprecip_mm: 0.0,
                totalprecip_in: 0.0,
                avgvis_km: 20.0,
                avgvis_miles: 12.0,
                avghumidity: 70.0,
                condition: {
                  text: "Partly cloudy",
                  icon: "//cdn.apixu.com/weather/64x64/day/116.png",
                  code: 1003
                },
                uv: 7.0
              },
              astro: {
                sunrise: "06:15 AM",
                sunset: "08:01 PM",
                moonrise: "02:13 AM",
                moonset: "04:28 PM"
              }
            }
          ]
        }
      }
    }
  },
  action
) => {
  switch (action.type) {
    case "ADD_DATA":
      let newdata = state.data;
      newdata[action.city] = action.data;
      return {
        ...state,
        data: newdata
      };
    case "DELETE_DATA":
      let tempdata = Object.keys(state.data)
        .filter(key => key !== action.id)
        .reduce((obj, key) => {
          obj[key] = state.data[key];
          return obj;
        }, {});
      return {
        ...state,
        data: tempdata
      };
    default:
      return state;
  }
};
export default data;
