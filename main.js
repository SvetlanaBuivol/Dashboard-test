const showActiveMembersButton = document.getElementById("activeMembers");
const showAllMembersButton = document.getElementById('allMembers');
const allMembers = document.getElementById("dataTable").getElementsByTagName("tr");
let allMembersShown = false;

showActiveMembersButton.addEventListener("click", function () {
    filterMembers(true)
    showActiveMembersButton.classList.toggle('active-button')
    showAllMembersButton.classList.toggle('active-button')
});

showAllMembersButton.addEventListener('click', function () {
    filterMembers(false)
    showActiveMembersButton.classList.toggle('active-button')
    showAllMembersButton.classList.toggle('active-button')
})

function filterMembers(showActive) {
  for (let i = 1; i < allMembers.length; i++) {
    const statusCell = allMembers[i].getElementsByTagName("td")[5];
    const status = statusCell
      ? statusCell.textContent.trim().toLowerCase()
      : "";

    if (showActive && status !== "active") {
      allMembers[i].style.display = "none";
    } else {
      allMembers[i].style.display = "";
    }
  }
}

// input search
const searchInput = document.getElementById('searchInput')
// const dataTable = document.getElementById('dataTable')

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim()

    Array.from(allMembers).forEach(member => {
        let memberMatchesSearch = false;
        Array.from(member.getElementsByTagName('td')).forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchTerm)) {
                memberMatchesSearch = true
            }
        })
        if (memberMatchesSearch) {
            member.style.display = ''
        } else {
            member.style.display = 'none'
        }
    })
})