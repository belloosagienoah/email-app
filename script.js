const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

const eventHandler1 = () => {
  button1.style.visibility = "visible";
  button2.style.visibility = "visible";
  button3.style.visibility = "visible";
};

const eventHandler2 = () => {
  button1.style.visibility = "";
  button2.style.visibility = "";
  button3.style.visibility = "";
};
