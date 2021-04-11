require('dotenv').config()
const express = require('express')
const appServer = require('../../../../bin/app/server');
const mockedEnv = require('mocked-env')
const sinon = require('sinon');
const request = require('supertest');

describe(__filename, () => {

    let restore
    beforeEach(() => {
      // pass object with modified / added / deleted values
      // it will be merged into existing process.env
      restore = mockedEnv({
        PORT:'9000',
        OMDB_API:'http://www.omdbapi.com',
        OMDB_API_KEY:'faf7e5bb',
        MYSQL_CONNECTION_LIMIT:'10',
        MYSQL_HOST:'localhost',
        MYSQL_USERNAME:'root',
        MYSQL_PASSWORD:'',
        MYSQL_DATABSE:'stockbit'
      });
      request(appServer);
    })

    it('works', () => {
      // appServer();
    })

    afterEach(() => {
      // don't forget to restore the old process.env
      restore()
    })
})