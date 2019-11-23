const request = require("supertest");
const app = require("../index");

describe("Test the id GET request", () => {
  test("It should response 200 status code", () => {
    return request(app)
      .get("/:id")
      .then(response => {
        expect(response.statusCode).toBe(302);
      });
  });

  test("It should redirect to post page", () => {
    return request(app)
      .get("/:id")
      .then(response => {
        expect(response.header.location).toBe(
          "https://proxy-kikstarter.herokuapp.com/?id=:id"
        );
      });
  });
});
