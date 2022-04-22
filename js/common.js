const searchEl = document.querySelector(".sub-menu .search")
const searchIcon = searchEl.querySelector(".material-icons");
const searchInput = searchEl.querySelector("input")

searchEl.addEventListener("click",(event)=>{
  searchInput.focus();
});

searchInput.addEventListener("focus",()=>{
  searchEl.classList.add("focused");
  searchInput.setAttribute("placeholder","통합검색");
});

searchInput.addEventListener("blur",()=>{
  searchEl.classList.remove("focused");
  searchInput.setAttribute("placeholder","");
  searchInput.value = "";
});


const date = new Date();
const thisYear = date.getFullYear();
document.querySelector(".copyright .this-year").innerText = thisYear;

