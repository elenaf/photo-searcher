import { token } from './constants/constants';

class Api {
    constructor(baseUrl, apiKey) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    search(query) {
        return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`
            }
        })
        .then(res => res.json())
        .then(data => data.results.map(item => ({
            id: item.id,
            alt: item.alt_description,
            url: item.urls.small,
            title: item.description,
            author: item.user.name,
        })))
    }
}

export const api = new Api(
    'https://api.unsplash.com',
    token
);