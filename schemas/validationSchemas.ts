/**
 * 
 */

const signUpSchema = {
    type: "object",
    properties: {
      name: { type: "string", maxLength: 30 },
      email: { type: "string", format: 'email', minLength: 5, maxLength: 50 },
      password: { type: "string", minLength: 4, maxLength: 50 },
      passwordConfirm: { type: "string", minLength: 4, maxLength: 50 },
      phone: { type: "string", maxLength: 40 },
      role: { type: "string", maxLength: 20 },
      birthDate: { type: "string", format: 'date'},
    },
    required: ["name", "email", "password", "passwordConfirm"],
    additionalProperties: false
  }
