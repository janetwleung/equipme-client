import axios from "axios";

const apiURL = "http://localhost:8080";


// GET Gloves List
export const fetchGlovesList = () => {
    return axios.get(`${apiURL}/gloves`);
};

// GET Specific Glove
export const fetchSpecificGlove = (selectedGloveId) => {
    return axios.get(`${apiURL}/gloves/${selectedGloveId}`);
};

// GET Bats List
export const fetchBatsList = () => {
    return axios.get(`${apiURL}/bats`);
};

// GET Specific Bat
export const fetchSpecificBat = (selectedBatId) => {
    return axios.get(`${apiURL}/bats/${selectedBatId}`);
};

// GET Cleats List
export const fetchCleatsList = () => {
    return axios.get(`${apiURL}/cleats`);
};

// GET Cleats List
export const fetchSpecificCleat = (selectedCleatId) => {
    return axios.get(`${apiURL}/cleats/${selectedCleatId}`);
};

// GET Sports
export const fetchSports = () => {
    return axios.get(`${apiURL}/sports`);
}