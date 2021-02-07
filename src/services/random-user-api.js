import axios from "axios";
import queryString from "query-string";

export const NATIONALITIES = 'AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US'.split(', ');

const CORS_ENABLE = false; // use this flag to enable/disable cors - this is just a workaround

const CORS_HEROKU_BASE_URL = 'https://cors-anywhere.herokuapp.com/';

const instance = axios.create({
    baseURL: `${CORS_ENABLE ? CORS_HEROKU_BASE_URL : ''}https://randomuser.me/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export const randomPerson = async (params = {}) => {
    return instance.get(`/?${queryString.stringify(params)}&noinfo`)
        .then(response => response.data)
        .then(data => {
            const {results = {}} = data;

            return results[0] || {};
        }
    );
};


export const randomMale = async (params = {}) => randomPerson({ ...params, gender: 'male'});
export const randomFemale = async (params = null) => randomPerson({ ...params, gender: 'female'});