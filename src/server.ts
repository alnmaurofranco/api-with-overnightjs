import SetupServer from './app';
import 'reflect-metadata';

((): void => {
  try {
    // const port = Number(process.env.PORT);
    const server = new SetupServer();
    server.init();
    server.start(); // port
  } catch (err) {
    console.log(err);
  }
})();
