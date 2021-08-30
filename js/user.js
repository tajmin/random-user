const getRandomUser = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => displayUser(data));
};
getRandomUser();

const displayUser = data => {
    const container = document.getElementById('user-container');
    const arr = data.results[0];
    console.log(arr)
    const card = document.createElement('div');
    card.innerHTML =
        `<div>
            <img src="${arr.picture.large}" class="img-fluid mx-auto mt-5 d-block" style="border-radius: 50%; border: 3px solid #ffc107;">
            <div class="card-body text-center text-warning">
                <h3 id="info" class="mb-4 mt-3">${arr.name.first} ${arr.name.last}</h3>             
                <div class="btn-group d-flex w-75 mx-auto">
                    <button onclick="displayInfo('${arr.email}')" type="button" class="btn btn-outline-warning"><i class="far fa-envelope"></i></button>                
                    <button onclick="displayInfo('${arr.dob.date}')" type="button" class="btn btn-outline-warning"><i class="far fa-calendar-alt"></i></button>                
                    <button onclick="displayInfo('${arr.location.street.number} ${arr.location.street.name}, ${arr.location.city}, ${arr.location.country}')" type="button"     class="btn btn-outline-warning"><i class="fas fa-location-arrow"></i></button>
                    <button onclick="displayInfo('${arr.cell}')" type="button" class="btn btn-outline-warning"><i class="fas fa-phone"></i></button>
                </div>   
            </div>
        </div>`;
    card.classList.add('card', 'border', 'border-2', 'border-warning');
    // card.classList.add('cardborder-3 border-warning');
    card.style.width = '100%';
    container.appendChild(card);
};

const displayInfo = info => {
    const infoTag = document.getElementById('info')
    infoTag.innerText = info;
}