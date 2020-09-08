import config from './config';
import Server from './api/server';
import router from './api/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

/**
 * CORS
 */
server.app.use( cors({ origin: true, credentials: true  }) );

/**
 * Routes
 */
server.app.use('/', router );

server.start( () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️ 
    ################################################
      `);
});