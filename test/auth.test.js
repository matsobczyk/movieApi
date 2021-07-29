const request = require ('supertest')
const app = require('../app')

const sampleUser = {
	username: 'basic-thomas',
	password: 'sR-_pcoow-27-6PAwCD8'
}

describe("POST /auth", () => {
	describe("Given a username and password", () => {
		test("should respond with 200 status code", async () => {
			const response = await request(app).post("/auth").send({
				username: sampleUser.username,
				password: sampleUser.password
			})
			expect(response.statusCode).toBe(200)
		})
		test("response should be json", async () => {
			const response = await request(app).post("/auth").send({
				username: sampleUser.username,
				password: sampleUser.password
			})
			expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
		})
	})

	describe("Without username and password", () => {

	})
})
