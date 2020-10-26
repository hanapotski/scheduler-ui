export const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'https://localhost:8000';


export const ADD_EVENT_URL = `${BASE_URL}/addEvent`;
export const UPDATE_EVENT_URL = `${BASE_URL}/updateEvent`;
export const ALL_EVENTS_URL = `${BASE_URL}/events`;
export const ARCHIVE_EVENT_URL = `${BASE_URL}/archiveEvent`;
export const SIGNIN_URL = `${BASE_URL}/signin`;
export const SIGNUP_URL = `${BASE_URL}/signup`;
