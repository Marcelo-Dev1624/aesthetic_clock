const secondDisplay = document.getElementById("seconds");
const minutesDisplay = document.getElementById("minutes");
const hoursDisplay = document.getElementById("hours");
const dayDisplay = document.getElementById("day");
const monthDisplay = document.getElementById("month");
const yearDisplay = document.getElementById("year");

/* Not used at the moment, its a function to convert the index of the month to its equivalent, as string
function convertNumberMonthToText(month) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber" ];

  switch (month) {
    case month == 0:
      monthDisplay.innerHTML = months[0];
      break;
    case month == 1:
      monthDisplay.innerHTML = months[1];
      break;
    case month == 2:
      monthDisplay.innerHTML = months[2];
      break;

    case month == 3:
      monthDisplay.innerHTML = months[3];
      break;
    case month == 4:
      monthDisplay.innerHTML = months[4];
      break;

    case month == 5:
      monthDisplay.innerHTML = months[5];
      break;
    case month == 6:
      monthDisplay.innerHTML = months[6];
      break;

    case month == 7:
      monthDisplay.innerHTML = months[7];
      break;
    case month == 8:
      monthDisplay.innerHTML = months[8];
      break;

    case month == 9:
      monthDisplay.innerHTML = months[9];
      break;
    case month == 10:
      monthDisplay.innerHTML = months[10];
      break;

    case month == 11:
      monthDisplay.innerHTML = months[11];
      break;
  }

  return month;
}

*/

function setDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  hoursDisplay.innerHTML = `${hours}`;
  minutesDisplay.innerHTML = `${minutes}`;
  secondDisplay.innerHTML = `${seconds}`;
  monthDisplay.innerHTML =`${month}`
  dayDisplay.innerHTML = `${day}`;
  yearDisplay.innerHTML = `${year}`;
}



setInterval(setDate, 1000);
setDate();
