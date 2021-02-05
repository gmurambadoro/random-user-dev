import axios from "axios";
import queryString from "query-string";

export const NATIONALITIES = 'AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US'.split(', ');

const instance = axios.create({
    baseURL: 'https://randomuser.me/api/',
});

export const randomPerson = async (params = {}) => {
    params['noinfo'] = true;

    return instance.get(`/?${queryString.stringify(params)}`)
        .then(response => response.data)
        .then(data => {
            const {results = {}} = data;

            return results[0] || {};
        }
    );
};


export const randomMale = async (params = {}) => randomPerson({ ...params, gender: 'male'});
export const randomFemale = async (params = null) => randomPerson({ ...params, gender: 'female'});