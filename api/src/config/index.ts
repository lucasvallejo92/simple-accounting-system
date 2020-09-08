export default {
    /**
     * Port number
     */
    port: Number(process.env.PORT) || 5000,

    /**
     * Log level
     */
    logs: {
      level: process.env.LOG_LEVEL || 'none',
    },
    
    /**
     * API configs
     */
    api: {
      prefix: '/api',
    },
  };