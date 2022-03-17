const config = {
    apiUrl :process.env.REACT_APP_API_URL || "https://api.punkapi.com/",

    endpoints: {
        beers: "v2/beers",
        beer: "v2/beers/:id",
    },
}

export default config;