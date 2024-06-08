const inallhakber = document.getElementById("inAllhakber");
const restallhakber = document.getElementById("restAllhakber");
const res1 = document.querySelector("h2.res1");

inallhakber.addEventListener("click", () => {
  res1.innerHTML = Number(res1.innerHTML) + 1;
});

restallhakber.addEventListener("click", () => {
  res1.innerHTML = 0;
});

const inSubhanAllah = document.getElementById("inSubhanAllah");
const resSubhanAllah = document.getElementById("restSubhanAllah");
const res2 = document.querySelector("h2.res2");

inSubhanAllah.addEventListener("click", () => {
  res2.innerHTML = Number(res2.innerHTML) + 1;
});

resSubhanAllah.addEventListener("click", () => {
  res2.innerHTML = 0;
});

const inAlhamdulillah = document.getElementById("inAlhamdulillah");
const restAlhamdulillah = document.getElementById("restAlhamdulillah");
const res3 = document.querySelector("h2.res3");

inAlhamdulillah.addEventListener("click", () => {
  res3.innerHTML = Number(res3.innerHTML) + 1;
});

restAlhamdulillah.addEventListener("click", () => {
  res3.innerHTML = 0;
});

const restAll = document.getElementById("restAll");

restAll.addEventListener("click", () => {
  res1.innerHTML = 0;
  res2.innerHTML = 0;
  res3.innerHTML = 0;
});
