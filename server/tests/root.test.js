const request = require("supertest");
const app = require("../index");

describe("Test the root GET request", () => {
  test("It should response 200 status code", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should return all data", () => {
    return request(app)
      .get("/")
      .then(response => {
        let data = response.body.length;
        expect(data).toBe(101);
      });
  });
});
