/**
 * The MyCustomError class.
 */
class MyCustomError extends Error {
  constructor(myProp = "myName", ...params) {
    super(...params);
    this.name = "MyCustomError";
    this.myProp = myProp;
    this.date = new Date();
  }
}

try {
  throw new MyCustomError("No name", "myMessage");
} catch (e) {
  console.error(e.name);
  console.error(e.myProp);
  console.error(e.message);
  console.error(e.stack);
  console.error(e.date);
}
