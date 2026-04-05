const container = document.getElementById("userContainer");
const errorMsg = document.getElementById("errorMsg");

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("API Error");
        }

        const users = await response.json();
        displayUsers(users);

    } catch (error) {
        errorMsg.textContent = "Failed to load data. Please try again.";
        console.error(error);
    }
}

function displayUsers(users) {
    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>City: ${user.address.city}</p>
        `;

        container.appendChild(card);
    });
}

// call function
fetchUsers();