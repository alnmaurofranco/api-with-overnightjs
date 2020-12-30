import SetupServer from '@src/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  server.start();
  global.testRequest = supertest(server.getApp());
});
