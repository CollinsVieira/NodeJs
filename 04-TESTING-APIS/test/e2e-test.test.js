const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp)

const url = "http://localhost:3000";

describe('Inserte nombre y precio', () => {
    it('Esperamos un nombre y un precio', (done) => {
        chai.request(url)
            .post('/api/v1/products/')
            .send(
                {
                    name: 'Producto 1',
                    price: 100
                }
            )
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.have.status(200)
                done()
            })
    })
})

