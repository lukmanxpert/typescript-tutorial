let id: number | string;
id = 50;
id = "50";

console.log(id);

const displayId = (id: number | string): void => {
  console.log("id is", id);
};

displayId(50);
displayId("50");
