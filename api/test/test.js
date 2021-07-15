const chai = require('chai');
const chatHttp = require('chai-http');
//const 'chai/register-should';
const {app} = require('../index');

chai.use(chatHttp);
const { expect } = chai;

describe('Testing para el API Golky:', () => {
    it('Enviar parametro text', (done) => {
        const text = "Test";
        chai.request(app)
          .get(`/api/v1/sendParam/:${text}`)
          .set('Accept', 'application/json')
          .end((err, res) => {           
            done();
          });
      });
});