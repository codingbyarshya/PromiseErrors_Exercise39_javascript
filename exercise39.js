const isLogged = true;

const validateLogging = (isLogged) =>
  new Promise((resolve, reject) => {
    if (isLogged) resolve(Math.random());
    else reject(new Error("User is not logged in"));
  });

const checkIfGreater = (number) =>
  new Promise((resolve, reject) => {
    if (typeof number !== "number")
      reject(new Error(`${number} is not a number`));
    else if (number > 0.5) resolve({ name: "John", age: 24 });
    else reject(new Error(`${number} is less than 0.5`));
  });

const getUserInfo = (validatation, greatness, isLogged) => {
  validatation(isLogged)
    .then((n) => checkIfGreater(n))
    .then((userInfo) => console.log(userInfo))
    .catch((err) => console.log(err))
    .finally(() => console.log("done completely"));
};

getUserInfo(validateLogging, checkIfGreater, isLogged);