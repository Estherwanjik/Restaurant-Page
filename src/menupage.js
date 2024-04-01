import rice from './rice.jpg';
import prawns from './prawns.jpg';

function showMenu () {
    document.body.style.backgroundColor = '#be9fbf';

    addMenuItem('Assotedrice', rice);
    addMenuItem('Prawns', prawns);
}

function addMenuItem (item, imageSrc) {
    const contentDiv = document.getElementById('content');

    const itemDiv = document.createElement('div');

    const name = document.createElement('h2');
    name.innerText = item;
    itemDiv.appendChild(name);


    const picture = document.createElement('img');
    picture.src = imageSrc;
    picture.alt = `picture of ${name}`;
    itemDiv.appendChild(picture);
    picture.height = 180
    picture.width = 180

    contentDiv.appendChild(itemDiv);
}

export {showMenu};