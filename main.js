function onClickHighlightSelected(itens, active) {
  for (const links of itens) {
    links.addEventListener("click", () => {
      active.classList.remove("active");
      links.classList.add("active");

      menuList.classList.remove("show");
      menuIcon.src = "./assets/icons/menu.svg";
      document.body.style.overflow = "visible";
    });
  }
}

menuButton.addEventListener("click", function () {
  const sectionsMenuList = menuList.querySelectorAll(".title");
  const lastActiveItemMenu = menuList.querySelector(".title.active");

  if (menuList.className == "") {
    menuList.classList.add("show");

    menuIcon.src = "./assets/icons/close.svg";
    document.body.style.overflow = "hidden";

    onClickHighlightSelected(sectionsMenuList, lastActiveItemMenu);
  } else {
    menuList.classList.remove("show");

    menuIcon.src = "./assets/icons/menu.svg";
    document.body.style.overflow = "visible";
  }
});
