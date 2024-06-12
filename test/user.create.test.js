const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const tracer = require('tracer')
var expect = chai.expect;

chai.should()
chai.use(chaiHttp)
tracer.setLevel('warn')

const endpointToTest = '/api/user';

describe('Test Suite for API Functions', () => {

    describe('POST /api/user', () => {
        it('should create a new user and return status 200', (done) => {
            chai.request(server)
                .post('/api/user')
                .send({
                    email: 'a.test@example.com',
                    firstName: 'John',
                    lastName: 'Doe',
                    isActive: true,
                    password: 'Test1234',
                    phoneNumber: '0612345678',
                    roles: ['user'],
                    street: '123 Main St',
                    city: 'Example City'
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('user');
                    expect(res.body.user).to.have.property('id');
                    done();
                });
        });
    });

    describe('GET /api/user', () => {
        it('should return all users', (done) => {
            chai.request(server)
                .get('/api/user')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('users');
                    expect(res.body.users).to.be.an('array');
                    done();
                });
        });
    });

    describe('DELETE /api/user/:id', () => {
        it('should delete a user by id and return status 200', (done) => {
            const userId = 1;
            chai.request(server)
                .delete(`/api/user/${userId}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('User deleted succesfully');
                    done();
                });
        });
    });
});
