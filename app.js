const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".icons span");
const days = document.querySelector(".days");
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(date, currMonth, currYear);
const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); //  getting  day of week
  let lastDayOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //  getting last date of month
  let lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate(); //  getting last date of last month

  let liEle = "";
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    liEle += `<li class="inactive">${lastDayOfLastMonth - i}</li>`; // add last days of last month
  }
  for (let i = 1; i <= lastDayOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liEle += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = 1; i <= 42 - firstDayOfMonth - lastDayOfMonth; i++) {
    liEle += `<li class="inactive">${i}</li>`; // add first days of next month
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  days.innerHTML = liEle;
};
renderCalendar();
prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    console.log(icon);
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
