const showActiveMembersButton = document.getElementById("activeMembers");
const showAllMembersButton = document.getElementById("allMembers");
// const allMembers = document.getElementById("dataTable").getElementsByTagName("tr");
const allMembers = document.querySelectorAll("#dataTable tbody tr");
let allMembersShown = false;

showActiveMembersButton.addEventListener("click", function () {
  filterMembers(true);
  showActiveMembersButton.classList.toggle("active-button");
  showAllMembersButton.classList.toggle("active-button");
});

showAllMembersButton.addEventListener("click", function () {
  filterMembers(false);
  showActiveMembersButton.classList.toggle("active-button");
  showAllMembersButton.classList.toggle("active-button");
});

function filterMembers(showActive) {
  allMembers.forEach((row) => {
    const statusCell = row.getElementsByTagName("td")[5];
    const status = statusCell
      ? statusCell.textContent.trim().toLowerCase()
      : "";
    if (showActive && status !== "active") {
      row.style.display = "none";
    } else {
      row.style.display = "";
    }
  });
}

// input search
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();

  Array.from(allMembers).forEach((member) => {
    let memberMatchesSearch = false;
    Array.from(member.getElementsByTagName("td")).forEach((cell) => {
      if (cell.textContent.toLowerCase().includes(searchTerm)) {
        memberMatchesSearch = true;
      }
    });
    if (memberMatchesSearch) {
      member.style.display = "";
    } else {
      member.style.display = "none";
    }
  });
});
