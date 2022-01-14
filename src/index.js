const { Student } = require("./db/models");
const bcrypt = require("bcrypt");

/* 
c
r
u
d

*/

const createPasswordHash = async (password) => {
  try {
    return bcrypt.hashSync(password, 10);
  } catch (e) {
    console.log("error create password");
  }
};

const createStudent = async (data) => {
  try {
    data.passwordHash = await createPasswordHash(data.password);
    const createStudent = await Student.create(data);
    return createStudent;
  } catch (e) {
    throw e;
  }
};
