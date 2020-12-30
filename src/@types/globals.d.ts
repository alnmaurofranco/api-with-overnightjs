/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
