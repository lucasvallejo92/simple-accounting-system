
/**
 * Generate a success response
 * @param {Object} data 
 * @param {String} message 
 */
export const successResponse = (data, message = null) => ({
    data: data,
    success: true,
    message: message
});

/**
 * Generate an error response
 * @param {String} message 
 * @param {Object} data 
 */
export const errorResponse = (message, data = null) => ({
    data: data,
    success: false,
    message: message
});