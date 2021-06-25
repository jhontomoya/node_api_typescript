import server from './server';

/**
 * Binds and listens for connections on the specified host
 */
 server.listen(server.get('port'));
 console.log(`Listening on ${server.get('port')}`);