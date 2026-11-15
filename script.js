const items = [...document.querySelectorAll(".nav-list .list")];

items.forEach((item, index) => {
  const link = item.querySelector("a");

  link.addEventListener("click", event => {
    event.preventDefault();

    items.forEach(entry => {
      entry.classList.remove("active");
      entry.querySelector("a").removeAttribute("aria-current");
    });

    item.classList.add("active");
    link.setAttribute("aria-current", "page");
  });

  link.addEventListener("keydown", event => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();

    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + items.length) % items.length;
    items[nextIndex].querySelector("a").focus();
  });
});
