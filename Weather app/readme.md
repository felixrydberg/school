Lib: Anime.js 
Animation blob, "week list" fade in and translateY up.


Form: 
    -Input, placeholder required: City name
    -Submit, Search for city

Main Figure:
    -Today: 100% width top 
        -Horizontal list
    -Next 5 days flex no-wrap
        -list för 3 kraven (Icon, Temperatur, Desc. In this order)



Icon: data.weather.icon (https://www.weatherbit.io/api/codes)

Temp: data.temp

Luftfuktighet: data.rh %



API KEY: 5d1dd1bec194429d99de01090d43dac6

Link 1: https://api.weatherbit.io/v2.0/current?lang=sv&
    lat=${lat}&
    lon=${lon}&
    key=5d1dd1bec194429d99de01090d43dac6&
    include=minutely


Link 2: https://api.weatherbit.io/v2.0/current?lang=sv&
    key=5d1dd1bec194429d9&
    city=${city}
    include=minutely

Link 3: https://api.weatherbit.io/v2.0/current?lang=sv&
    key=5d1dd1bec194429d9&
    postal_code=${zipcode}&
    country=${country}
    include=minutely




TODO: 
    Set value of lat lon from api
    under 1024