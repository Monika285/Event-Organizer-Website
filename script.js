let loggedIn = false;

// Elements
const loginBtn = document.getElementById("loginBtn");
const createEventBtn = document.getElementById("createEventBtn");
const loginModal = document.getElementById("loginModal");
const eventModal = document.getElementById("eventModal");
const loginForm = document.getElementById("loginForm");
const eventForm = document.getElementById("eventForm");
const eventCards = document.getElementById("eventCards");

// Open Login Modal
loginBtn.addEventListener("click", () => {
  if (!loggedIn) {
    loginModal.classList.remove("hidden");
  } else {
    loggedIn = false;
    loginBtn.textContent = "Login";
    createEventBtn.classList.add("disabled");
    eventCards.innerHTML = "";
    alert("Logged out successfully!");
  }
});

// Handle Login Form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loggedIn = true;
  loginModal.classList.add("hidden");
  loginBtn.textContent = "Logout";
  createEventBtn.classList.remove("disabled");
  alert("Login successful!");
  loginForm.reset();
});

// Open Create Event Modal
createEventBtn.addEventListener("click", () => {
  if (loggedIn) {
    eventModal.classList.remove("hidden");
  }
});

// Handle Create Event Form
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const desc = document.getElementById("eventDesc").value;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <button class="deleteBtn">X</button>
    <h3>${title}</h3>
    <small>${date}</small>
    <p>${desc}</p>
  `;

  // Delete Event
  card.querySelector(".deleteBtn").addEventListener("click", () => {
    card.remove();
  });

  eventCards.appendChild(card);
  eventModal.classList.add("hidden");
  eventForm.reset();
});

// Close modals
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    loginModal.classList.add("hidden");
    eventModal.classList.add("hidden");
  });
});
