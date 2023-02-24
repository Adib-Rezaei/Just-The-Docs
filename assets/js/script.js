const instructors = [
    {
        fullName: 'Dr. Fadaei',
        image: 'Dr.Fadaei.jpg',
        emailAddress: 'h.fadaei@ut.ac.ir',
    },
]

const chiefTAs = [
    {
        fullName: 'Paria Khoshtab',
        image: 'Paria.jpg',
        emailAddress: 'paria.khoshtab2019@gmail.com',
    },
]

const supervisors = [
    {
        fullName: 'Hesam Asadollahzadeh',
        image: 'Hesam.jpg',
        emailAddress: 'asadzadeh.hesam@ut.ac.ir',
    },
    {
        fullName: 'Parnian Fazel',
        image: 'Parnian.jpg',
        emailAddress: 'pr.fazel@gmail.com',
    },
]

const teachingAssistants = [

    {
        fullName: 'Taha Fakharian',
        image: 'Taha.jpg',
        emailAddress: 'taha.fakharian@gmail.com',
    },
    {
        fullName: 'Kianoush Arshi',
        image: 'Kia.jpg',
        emailAddress: 'kianoosharshi@gmail.com',
    },
    {
        fullName: 'Negar Moradi',
        image: 'Negar.jpg',
        emailAddress: 'negar.m0rd@gmail.com',
    },
    {
        fullName: 'Adib Rezaei',
        image: 'Adib.jpg',
        emailAddress: 'adibrezaeish@gmail.com',
    },
    {
        fullName: 'Amir Farahani',
        image: 'Amir.jpg',
        emailAddress: 'amirferyg@gmail.com',
    },
    {
        fullName: 'Mahsa Hemmatpanah',
        image: 'woman_avatar.png',
        emailAddress: 'hemmatp.m@gmail.com',
    },
    {
        fullName: 'Arash Mohammadpour',
        image: 'Arash.jpg',
        emailAddress: 'arashmdp@gmail.com',
    },
    {
        fullName: 'Moein Karami',
        image: 'Moein.jpg',
        emailAddress: 'moein2000n@gmail.com',
    },{
        fullName: 'Ali Akhgary',
        image: 'man_avatar.png',
        emailAddress: 'amin.akhgary2000@gmail.com',
    },
    {
        fullName: 'Navid Dehban',
        image: 'Navid.jpg',
        emailAddress: 'naviddhn@gmail.com',
    },
    {
        fullName: 'Masoud Tahmasbi',
        image: 'Masoud.jpg',
        emailAddress: 'masoud.tfard@gmail.com',
    },
    {
        fullName: 'Mohammad Saadati',
        image: 'Mohammad.jpg',
        emailAddress: 'masoud.tfard@gmail.com',
    },
    {
        fullName: 'Omid Panakari',
        image: 'Omid.jpg',
        emailAddress: 'omid.panakari.s@gmail.com',
    },
    {
        fullName: 'Alireza Arbabi',
        image: 'Alireza.jpg',
        emailAddress: 'alireza2621@gmail.com',
    },
    {
        fullName: 'Pasha Barahimi',
        image: 'Pasha.jpg',
        emailAddress: 'pashabarahimi@gmail.com',
    },
]

function getProfile(person) {
    return `
        <div class="main-container">
            <img src="assets/image/${person.image}" class="profile-picture">
            <div class="container">
                <h3>${person.fullName}</h3>
                <a href="mailto: ${person.emailAddress}">${person.emailAddress}</a>
            </div>
        </div>
    `
}

function setStaff(staff, container) {
    let staffNode = ''
    staff.forEach(person => {
        const profileCard = getProfile(person)
        staffNode += profileCard;
    })

    container.innerHTML = staffNode
}

const instructorContainer = document.getElementById('instructor')
const chiefContainer = document.getElementById('chief')
const supervisorContainer = document.getElementById('supervisor')
const taContainer = document.getElementById('ta')

setStaff(instructors, instructorContainer)
setStaff(chiefTAs, chiefContainer)
setStaff(supervisors, supervisorContainer)
setStaff(teachingAssistants, taContainer)
