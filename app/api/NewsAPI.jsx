import axios from 'axios';

const BASE_URL = ' https://newsapi.org';

const API_KEY = '213327409d384371851777e7c7f78dfe';

export const getSources = () => {
    const requestUrl = `${BASE_URL}/v1/sources?language=en`;

    return axios.get(requestUrl).then((res) => {
        return res.data.sources;
    }, (res) => {
        throw new Error(res.data.message);
    });
};

export const getHeadlines = () => {
    const requestUrl = `${BASE_URL}/v1/articles`;

    return axios.get(requestUrl, {'apiKey': API_KEY}).then((res) => {
        return res.data.articles;
    }, (res) => {
        throw new Error(res.data.message);
    });
};