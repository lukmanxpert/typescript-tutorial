const User = (name: string | null) => {
  if (typeof name === "string") {
    console.log(name);
  } else {
    console.log("name not provided");
  }
};

User("Sheikh Lukman");
