const totalPages = 5;
let currentPage = 1;

const container = document.getElementById("pagination-container");

const pagination = document.createElement("div");
pagination.className = "pagination";
const ul = document.createElement("ul");

for (let i = 1; i <= totalPages; i++) {
  const li = document.createElement("li");
  li.className = "page-item";
  const link = document.createElement("a");
  link.href = "#";
  link.className = "page-link";
  link.textContent = i;


  link.addEventListener("click", () => {
    currentPage = i;

    updateActivePage();
   
  });

  li.appendChild(link);
  ul.appendChild(li);
}

pagination.appendChild(ul);
container.appendChild(pagination);


updateActivePage();

function updateActivePage() {
  const pageLinks = document.querySelectorAll(".page-link");
  pageLinks.forEach((link, index) => {
    if (index + 1 === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
