const BASE_URL = "https://api.giphy.com"
const APIKEY = "qQLlc0Uw4J2FAjEDGziI9XGAdFVtUz8c"

async function fetchData(path, limit = "", rating = "", { query = "" } = {}) {
    try {
        const res = await fetch(
            `${BASE_URL}${path}?api_key=${APIKEY}${limit}${rating}${query}`
        );
        return res.json();
    } catch (error) {
        throw new Error(error);
    }
}