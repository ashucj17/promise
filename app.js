const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 1 complered");
    resolve();
  }, 1000);
});

myPromise.then(function () {
  console.log("Async 1 resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 Completed");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved");
});

let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 3 completed");
    resolve({ emploeName: "Ashish", employeId: 123456 });
  }, 3000);
}).then((user) => {
  console.log(user);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Working on Async Task 4");
    let error = true;
    if (!error) {
      resolve({ empFirstName: "Ashish", empLastName: "Kamur", empId: 124578 });
    } else {
      reject("Working on error");
    }
  }, 5000);
})
  .then((employeDetails) => {
    console.log(employeDetails);
    return employeDetails.empFirstName;
  })
  .then((empName) => {
    console.log(empName);
  })
  .catch((error) => console.log(error))
  .finally(() =>
    console.log("Either error resolved or it still under process")
  );

// Handling Promise with async awit and catch

let myNewPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("working with Async task using awaits methods");
    let error = true;
    if (!error) {
      resolve({ username: "ashish", userId: "alphaONE" });
    } else {
      reject("working on error with awaits");
    }
  }, 6000);
});

async function myAsync() {
  try {
    const response = await myNewPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
myAsync();
