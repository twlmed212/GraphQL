import { PError } from "../main.js";

export async function fetchData(url, token, query, method = "POST") {
    try {
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
        };

        if (query) {
            options.body = JSON.stringify({ query });
        }
        PError(`Headers : URL ${url}`, "green", options)
        const response = await fetch(url, options);
        if (!response.ok){
            return JSON.parse('{"error": "true"}')
        }
        return await response.json();
    } catch (err) {
        PError(`Error : ${err}`, "red")
    }
}
    