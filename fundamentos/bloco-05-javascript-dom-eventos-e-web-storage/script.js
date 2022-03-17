// Inserting the header background color
let header = document.getElementById("header-container");
header.style.backgroundColor = "#00c36d";

// Inserting the footer background color
let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#003735";

// Inserting the urgents tasks headings background color
let urgentsTasks = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < urgentsTasks.length; index++) {
  urgentsTasks[index].style.backgroundColor = "#ba00f5";
}

// Inserting the no urgents tasks headings background color
let noUrgentsTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noUrgentsTasks.length; index++) {
  noUrgentsTasks[index].style.backgroundColor = "#232525";
}

// Inserting urgents tasks sectionbackground
let urgentsTasksSection = document.getElementsByClassName('emergency-tasks')[0];
urgentsTasksSection.style.backgroundColor = "#ff9d78";

// Inserting no urgents tasks sectionbackground
let noUrgentsTasksSection = document.getElementsByClassName('no-emergency-tasks')[0];
noUrgentsTasksSection.style.backgroundColor = "#f4ef4d";

