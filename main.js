//fetch to retrieve the profiles
//function to display profiles
//create html for each profile
//append html to the  body
// Lorenah McFaul

document.getElementById("profile-form").addEventListener("submit", function(event) { 
    event.preventDefault();

    const newProfile ={
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value
    };

const url = "http://localhost:3000/profiles";

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newProfile)
})
    .then(response => response.json())
    .then(data => {
        console.log("New profile added:", data);
        displayProfiles([data]);
        document.getElementById("profile-form").reset();   
    })
    .catch(error => {
        console.error("Error adding profiles:", error);
    });

});
function displayProfiles(profiles){
    const profileList = document.getElementById('profile-list');
    profileList.innerHTML = "";
    //loop through our profiles
    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        profileCard.innerHTML= `
        <h3>${profile.first_name} ${profile.last_name}</h3>
        <p>${profile.email}</p>
        <p>${profile.gender}</p>
        `;
        profileList.appendChild(profileCard);
        
    });
}

  

