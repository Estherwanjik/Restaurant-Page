import founders from './founders.jpg';
import fresh from './fresh.jpg';

function showAbout () {
    document.body.style.backgroundColor = '#eedd82';
    
    const contentDiv = document.getElementById('content');

    const owners = document.createElement('h2');
    owners.innerText = 'Our Founders';
    contentDiv.appendChild(owners);

    const foundersImg= new Image();
    foundersImg.src = founders;
    contentDiv.appendChild(foundersImg);
    foundersImg.alt = 'real picture of real founders'; 
    foundersImg.height = 180;
    foundersImg.width = 180;

    const description = document.createElement('p');
    description.innerText = 'Our Founders use only homegrown, fresh, all-natural produce sourced from ethical places. They have been maintaining this quality ever since they founded this food establishment 17 years ago.';
    contentDiv.appendChild(description);


    const freshImg = new Image();
    freshImg.src = fresh;
    contentDiv.appendChild(freshImg);
    freshImg.alt = 'homegrown, fresh, all-natural produce sourced from ethical places';
    freshImg.height = 180;
    freshImg.width = 180;

}
export {showAbout};