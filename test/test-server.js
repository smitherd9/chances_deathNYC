import React from 'react';
import TestUtils from 'react-addons-test-utils';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../js/server.js');
var nock = require('nock');

var should = chai.should();
var expect = chai.expect();
chai.use(chaiHttp);
chai.use(require('chai-things'));
var app = server.app;

// import { should, expect, request } from 'chai';
// should();
// request();
// expect();
// import chaiHttp from 'chai-http';
// var chai = require('chai')
// var chaiHttp = require('chai-http'); 

// var nock = require('nock');
// import nock from 'nock';
// import server from '../js/server';
// const app = server.app;
// chai.use(chaiHttp);
// var should = chai.should();



//response is undefined?


describe('ethnicity', () => {

    nock(/cityofnewyork\.us/)
        .get(/resource/)
        .reply(200, [{
        	"race_ethnicity": "Asian and Pacific Islander",
        	"ageAdjusted": "166.3",
			"deathRate": "109.6",
			"leadingCause": "Diseases of Heart (I00-I09, I11, I13, I20-I51)",
			"deathNum": "546",
			"sex": "M",
			"year": "2008"
        }, {
        	"race_ethnicity": "Asian and Pacific Islander",
       	 	"ageAdjusted": "123.5",
        	"deathRate": "95",
        	"leadingCause": "Malignant Neoplasms (Cancer: C00-C97)",
        	"deathNum": "473",
        	"sex": "M",
        	"year": "2008"
    }]);



     it('should return status code 200 and json on GET', function(done) {
        chai.request(app)
            .get('/ethnicity/Asian and Pacific Islander')
            .end(function(err, res) {
                if (err) {
                    return res.status(404).json({
                        message: 'Not Found'
                    });
                }
                console.log(res.body);
                res.should.have.status(200);
                res.should.be.json;       
                res.body.should.be.a('array');
                res.body.should.all.have.property('race_ethnicity');
                res.body.should.all.have.property('ageAdjusted');
                res.body.should.all.have.property('deathRate');
                res.body.should.all.have.property('leadingCause');
                res.body.should.all.have.property('deathNum');
                res.body.should.all.have.property('sex');
                res.body.should.all.have.property('year');
                // res.body.should.have.deep.property('[0].ageAdjusted', '166.3');
                // res.body.should.contain.a.thing.with.property('race_ethnicity', 'Asian and Pacific Islander');
                // res.body.leadingCause.should.be.a('string');

                done();
            });
    });

});





describe('sex', () => {

    nock(/cityofnewyork\.us/)
        .get(/resource/)
        .reply(200, [{
        	"race_ethnicity": "Asian and Pacific Islander",
        	"ageAdjusted": "166.3",
			"deathRate": "109.6",
			"leadingCause": "Diseases of Heart (I00-I09, I11, I13, I20-I51)",
			"deathNum": "546",
			"sex": "M",
			"year": "2008"
        }, {
        	"race_ethnicity": "Asian and Pacific Islander",
       	 	"ageAdjusted": "123.5",
        	"deathRate": "95",
        	"leadingCause": "Malignant Neoplasms (Cancer: C00-C97)",
        	"deathNum": "473",
        	"sex": "M",
        	"year": "2008"
    }]);



     it('should return status code 200 and json on GET', function(done) {
        chai.request(app)
            .get('/sex/M')
            .end(function(err, res) {
                if (err) {
                    return res.status(404).json({
                        message: 'Not Found'
                    });
                }
                console.log(res.body);
                res.should.have.status(200);
                res.should.be.json;       
                res.body.should.be.a('array');
                res.body.should.all.have.property('race_ethnicity');
                res.body.should.all.have.property('ageAdjusted');
                res.body.should.all.have.property('deathRate');
                res.body.should.all.have.property('leadingCause');
                res.body.should.all.have.property('deathNum');
                res.body.should.all.have.property('sex');
                res.body.should.all.have.property('year');
                // res.body.should.have.deep.property('[0].ageAdjusted', '166.3');
                // res.body.should.contain.a.thing.with.property('race_ethnicity', 'Asian and Pacific Islander');
                // res.body.leadingCause.should.be.a('string');

                done();
            });
    });

});





describe('year', () => {

    nock(/cityofnewyork\.us/)
        .get(/resource/)
        .reply(200, [{
        	"race_ethnicity": "Asian and Pacific Islander",
        	"ageAdjusted": "166.3",
			"deathRate": "109.6",
			"leadingCause": "Diseases of Heart (I00-I09, I11, I13, I20-I51)",
			"deathNum": "546",
			"sex": "M",
			"year": "2008"
        }, {
        	"race_ethnicity": "Asian and Pacific Islander",
       	 	"ageAdjusted": "123.5",
        	"deathRate": "95",
        	"leadingCause": "Malignant Neoplasms (Cancer: C00-C97)",
        	"deathNum": "473",
        	"sex": "M",
        	"year": "2008"
    }]);



     it('should return status code 200 and json on GET', function(done) {
        chai.request(app)
            .get('/year/2008')
            .end(function(err, res) {
                if (err) {
                    return res.status(404).json({
                        message: 'Not Found'
                    });
                }
                console.log(res.body);
                res.should.have.status(200);
                res.should.be.json;       
                res.body.should.be.a('array');
                res.body.should.all.have.property('race_ethnicity');
                res.body.should.all.have.property('ageAdjusted');
                res.body.should.all.have.property('deathRate');
                res.body.should.all.have.property('leadingCause');
                res.body.should.all.have.property('deathNum');
                res.body.should.all.have.property('sex');
                res.body.should.all.have.property('year');
                // res.body.should.have.deep.property('[0].ageAdjusted', '166.3');
                // res.body.should.contain.a.thing.with.property('race_ethnicity', 'Asian and Pacific Islander');
                // res.body.leadingCause.should.be.a('string');

                done();
            });
    });

});


