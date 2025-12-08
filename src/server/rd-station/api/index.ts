import axios from 'axios';

export const rdStationURL = axios.create({
    baseURL: 'https://crm.rdstation.com/api/v1/',
});
