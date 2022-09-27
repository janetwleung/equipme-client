import axios from "axios";

const apiURL = "https://equipmeserver.herokuapp.com";


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

// GET Specific Cleat
export const fetchSpecificCleat = (selectedCleatId) => {
    return axios.get(`${apiURL}/cleats/${selectedCleatId}`);
};

// GET Sports
export const fetchSports = () => {
    return axios.get(`${apiURL}/sports`);
}

// GET Specific Sport
export const fetchSpecificSport = (selectedSportId) => {
    return axios.get(`${apiURL}/sports/${selectedSportId}`);
}

// GET Athletes
export const fetchAthletes = () => {
    return axios.get(`${apiURL}/athletes`);
}

// Get Specific Athlete
export const fetchSpecificAthlete = (selectedAthleteId) => {
    return axios.get(`${apiURL}/athletes/${selectedAthleteId}`);
}