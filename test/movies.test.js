const request = require ('supertest')
const app = require('../app')

const sampleUser = {
	username: 'basic-thomas',
	password: 'sR-_pcoow-27-6PAwCD8'
}
let token;

beforeAll((done) => {
	request(app)
	  .post('/auth')
	  .send({
		username: sampleUser.username,
		password: sampleUser.password,
	  })
	  .end((err, response) => {
		  console.log(err)
		token = response.headers.authorization.split(" ")[1]
		done();
	  });
  });

describe("POST /movies", () => {
	describe("Given a title", () => {
		test("should respond with 200 status code", async () => {
			const response = await request(app).post("/movies").set('Authorization', `Bearer ${token}`).send({
				title: 'The Matrix',
			})
			expect(response.statusCode).toBe(200)
		})
	})
	describe("Not given a title", () => {

	})
})
