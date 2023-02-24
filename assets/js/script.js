const mainContainer = document.getElementsByClassName('my-container')[0]

const staffInfo = [
    ['Adib Rezaei', 'Adib', 'adibrezaeish@gmail.com', '4th year undergraduate interested in ML'],
    ['Hesam asadollahzade', 'Hesam', 'hesoyam@gmail.com', '4th year undergraduate interested in ML']
]

let staffElements = ''
staffInfo.forEach(person => {
    const profileCard = `
        <div class="main-container">
            <img src="assets/image/${person[1]}.jpg" class="profile-picture">
            <div class="container">
                <h2>${person[0]}</h2>
                <a href="mailto: ${person[2]}">${person[2]}</a>
                <p>${person[3]}</p>
            </div>
        </div>
    `
    staffElements += profileCard;
})

mainContainer.innerHTML = staffElements
