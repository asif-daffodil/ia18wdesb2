const navRow = document.getElementById("navRow");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navRow.childNodes[1].classList.remove("btbc");
    navRow.childNodes[1].classList.add("bg-dark");
  } else {
    navRow.childNodes[1].classList.remove("bg-dark");
    navRow.childNodes[1].classList.add("btbc");
  }
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    navRow.classList.add("d-none");
  } else {
    navRow.classList.remove("d-none");
  }
});
