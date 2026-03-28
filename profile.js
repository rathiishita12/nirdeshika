// profile.js

document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Please log in to view your profile.");
        window.location.href = "login.html";
        return;
    }

    // Sync token to cookies so port 5050 Assessment can read it
    document.cookie = `token=${token}; path=/; max-age=3600`;

    try {
        const response = await fetch("http://localhost:3000/dashboard", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {
            // Update profile with user data
            document.getElementById("profileUsername").innerText = data.user.username;
            document.getElementById("profileEmail").innerText = data.user.email;

            // Check if element exists before setting it, then set the count from DB
            const statBox = document.querySelector(".stat-box h4");
            if (statBox) {
                statBox.innerText = data.user.assessment_count || 0;
            }
        } else {
            // Token might be invalid or expired
            alert("Session expired. Please log in again.");
            localStorage.removeItem("token");
            window.location.href = "login.html";
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Connection error fetching profile details.");
        document.getElementById("profileUsername").innerText = "Error loading profile";
        document.getElementById("profileEmail").innerText = "";
    }

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("token");
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    });
});
