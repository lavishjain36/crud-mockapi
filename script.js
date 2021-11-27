let roomClean = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Cleaned");
  }, 3000);
});

let removeGarbage = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Garbage Removed");
  }, 2000);
});

let GetThrPrice = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Won the  Price");
  }, 200);
});

roomClean
  .then(function (result) {
    console.log(result);
    return removeGarbage;
  })
  .then(function (result) {
    console.log(result);
    return GetThrPrice;
  })
  .then(function (result) {
    console.log(result);
  });

let promiseall = Promise.allSettled([roomClean, removeGarbage, GetThrPrice]);
promiseall
  .then(function (result) {
    console.log("All Promise Are Resolved");
    console.log(result);
  })
  .catch(function (error) {
    console.log("Some Promise Are Rejected");
    console.log(error);
  });

//   promise.race=>
//   it also takes an array of input
//   and returns a new promise which fulfilled as soon as one of the promises in input array fulfills or rejected as soon as one ofthe promise
//   in the array reject.
