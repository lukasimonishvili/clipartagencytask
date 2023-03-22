// global variables
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menuList = document.getElementById("menuList");
const navBar = document.getElementById("navBar");
const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

// toggle menu functions
const toggleMenu = () => {
  navBar.classList.toggle("left-0");
  navBar.classList.toggle("left-full");
};

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

// display menu items
const menuItems = [
  "პოლიტიკა",
  "საზოგადოება",
  "Covid-19",
  "სამართალი",
  "ბიზნესი & ეკონომიკა",
  "კრიმინალი",
  "შემთხვევა",
  "მსოფლიო",
  "სპორტი",
  "რელიგია",
  "ხელოვნება",
];

const renderMenu = (list) => {
  let result = "";
  const listArray = list ? list : menuItems;
  for (let i = 0; i < listArray.length; i++) {
    result += `<li class="whitespace-nowrap text-smallText text-interface-400 ${
      i ? "mt-2.5" : ""
    } medium:m-0 medium:py-4 medium:text-headerText ${
      i ? "medium:ml-12" : ""
    }"><a href="#">${listArray[i]}</a></li>`;
  }

  if (list) {
    result += `<li class="group whitespace-nowrap text-headerText ml-12 text-primary py-4 flex items-center cursor-pointer relative">
                    <span>მეტი</span>
                    <img alt=" " src="./img/drop-down.svg" class="ml-2" />
                    <div id="subMenu" class="z-30 scale-0 absolute bg-white top-12 -left-1/2 py-6 pl-4 pr-20 mt-1 rounded-lg shadow-small transition-all duration-300 group-hover:scale-100"></div>
                </li>`;
  }
  menuList.innerHTML = result;
};
renderMenu();

// search bar functions
let screenWidth = window.innerWidth;

const openSearch = () => {
  searchBox.classList.add("scale-100");
  searchBox.classList.add("pointer-events-auto");
  searchButton.classList.add("bg-white");
  searchInput.focus();
};

const closeSearch = () => {
  if (screenWidth < 1024) {
    searchBox.classList.remove("scale-100");
    searchBox.classList.remove("pointer-events-auto");
    searchButton.classList.remove("bg-white");
    searchInput.value = "";
  }
};

searchButton.addEventListener("click", openSearch);
searchInput.addEventListener("blur", closeSearch);

if (screenWidth >= 1024) {
  openSearch();
}

// hide unfited menu items in "more" box

const renderSubMenu = (list) => {
  const subMenu = document.getElementById("subMenu");
  let result = "";
  for (let i = 0; i < list.length; i++) {
    result += `<div class="text-interface-400 text-headerText ${
      i ? "mt-6" : ""
    }"><a href="#">${list[i]}</a></div>`;
  }
  subMenu.innerHTML = result;
};

const hideUnfitedMenuItems = () => {
  if (screenWidth >= 1240) {
    const containerWidth = screenWidth >= 1920 ? 1312 : 1128;
    const moreButtonWidth = 55;
    const spaceBetweenMenuItems = 48;
    const freeSpace = containerWidth - moreButtonWidth;
    let spaceUsed = 0;
    let checkpointIndex = 0;

    for (let i = 0; i < navBar.childNodes[3].childNodes.length; i++) {
      const element = navBar.childNodes[3].childNodes[i];
      const elementWidth = +window
        .getComputedStyle(element)
        .width.split("px")[0];
      spaceUsed += elementWidth + spaceBetweenMenuItems;

      if (freeSpace < spaceUsed) {
        checkpointIndex = i;
        break;
      }
    }

    if (checkpointIndex) {
      const mainMenuItems = menuItems.slice(0, checkpointIndex);
      const subMenuItems = menuItems.slice(checkpointIndex, menuItems.length);
      renderMenu(mainMenuItems);
      renderSubMenu(subMenuItems);
    }
  }
};

hideUnfitedMenuItems();

// window resize tools

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;

  if (screenWidth < 1024) {
    closeSearch();
  } else {
    openSearch();
  }
  renderMenu();
  hideUnfitedMenuItems();
});
