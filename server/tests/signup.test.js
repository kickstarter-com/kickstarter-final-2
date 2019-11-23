// const request = require("supertest");
// const app = require("../index");
// const validateRegisterInput = require("../validation/register");

// describe("Test the Sugn up GET request", () => {
//   // test("It shouldn't be an empty email and password", () => {
//   //   const data = {
//   //     email: "d1@hello.com",
//   //     password: "123456789abc"
//   //   };
//   //   return request(app)
//   //     .get("/register")
//   //     .then(response => {
//   //       expect(validateRegisterInput(data)).toStrictEqual({
//   //         errors: {
//   //           email: "Email field is required",
//   //           password: "Password must be at least 8 characters"
//   //         },
//   //         isValid: false
//   //       });
//   //     });
//   // });

//   test("It shouldn be valid", () => {
//     const data = {
//       email: "d1@hello.com",
//       password: "123456789abc"
//     };
//     return request(app)
//       .get("/register")
//       .then(response => {
//         console.log(response.data);
//         expect(validateRegisterInput(data)).toEqual({
//           errors: {},
//           isvalid: true
//         });
//       });
//   });
// });
