let image = document.getElementById("image");
let name = document.getElementById("name");
let gender = document.getElementById("gender");
let age = document.getElementById("age");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let candidates;
let candidate;
let i = 0;

function getUsers() {
    fetch("https://randomuser.me/api/?results=50").then((response) => {
        return response.json();
    }).then((data) => {
        candidates = data.results;
        nextCvIterator(candidates);
        console.log(candidate)
        console.log(candidates)
        nextCandidate();
    })

}

getUsers()

function nextCvIterator(candidates) {
    return {
        next: function () {
            if (i < candidates.length) {
                i++
                return { value: candidates[i], done: false }
            }
            else {
                return { done: true }
            }
        }
    }
}

function previousCvIterator(candidates) {
    return {
        next: function () {
            if (i >1) {
                i--;
                return { value: candidates[i], done: false }
            }
            else {
                return { done: true }
            }
        }
    }
}


function nextCandidate() {
    candidate = nextCvIterator(candidates);
    let currentCandidate = candidate.next().value;
    if (currentCandidate != undefined) {
        image.src = `${currentCandidate.picture.large}`;
        name.innerHTML = `${currentCandidate.name.title} ${currentCandidate.name.first} ${currentCandidate.name.last}`
        gender.innerHTML = `${currentCandidate.gender}`
        age.innerHTML = `${currentCandidate.dob.age} years`;
        email.innerHTML = `${currentCandidate.email}`;
        phone.innerHTML = `${currentCandidate.phone}`;
        address.innerHTML = `${currentCandidate.location.city} ${currentCandidate.location.state} ${currentCandidate.location.country}`;
    }
    else{
        alert("Showed Last Candidate's application");
        window.location.reload();
    }
}
let next = document.getElementById("next");
next.addEventListener("click", nextCandidate);

function previousCandidate() {
    candidate = previousCvIterator(candidates);
    let currentCandidate = candidate.next().value;
    if (currentCandidate != undefined) {
        image.src = `${currentCandidate.picture.large}`;
        name.innerHTML = `${currentCandidate.name.title} ${currentCandidate.name.first} ${currentCandidate.name.last}`
        gender.innerHTML = `${currentCandidate.gender}`
        age.innerHTML = `${currentCandidate.dob.age} years`;
        email.innerHTML = `${currentCandidate.email}`;
        phone.innerHTML = `${currentCandidate.phone}`;
        address.innerHTML = `${currentCandidate.location.city} ${currentCandidate.location.state} ${currentCandidate.location.country}`;
    }
    else{
        alert("Showing First Candidate's application");
    }
}
let previous = document.getElementById("previous");
previous.addEventListener("click", previousCandidate);