import axios from 'axios';
import { successResponse, errorResponse } from '../utils/response';

const BASE_URL = 'http://localhost:5000';

/**
 * Get list of transactions
 */
export const getTransactions = async () => {
    let response = null;
    await axios.get(`${BASE_URL}/transactions`)
    .then(resp => {
        response = successResponse(resp.data);
    })
    .catch(e => {
        console.error(e);
        response = errorResponse('ERROR');
    });
    return response;
}

/**
 * Get single transaction by id
 * @param {string} id 
 */
export const geTransaction = async (id) => {
    let response = null;
    await axios.get(`${BASE_URL}/transactions/${id}`)
    .then(resp => {
        response = successResponse(resp.data);
    })
    .catch(e => {
        console.error(e);
        response = errorResponse('ERROR');
    });
    return response;
}

/**
 * Set new transaction
 * @param {*} data 
 */
export const setTransaction = async (data) => {
    let response = null;
    await axios.post(`${BASE_URL}/transactions`, data)
    .then(resp => {
        response = successResponse(resp.data);
    })
    .catch(e => {
        console.error(e);
        response = errorResponse('ERROR');
    });
    return response;
}

/**
 * Get current balance
 */
export const getBalance = async () => {
    let response = null;
    await axios.get(`${BASE_URL}/balance`)
    .then(resp => {
        response = successResponse(resp.data);
    })
    .catch(e => {
        console.error(e);
        response = errorResponse('ERROR');
    });
    return response;
}
