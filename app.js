const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const img = document.querySelector(".img");
  const first = document.querySelector(".first");
  const last = document.querySelector(".last");
  const phone = document.querySelector(".phone");
  const email = document.querySelector(".email");
  const btn = document.querySelector(".btn");

  fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then()
});
