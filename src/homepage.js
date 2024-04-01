import restaurant from './restaurant.jpg';



function showHome () {
    document.body.style.backgroundColor = 'grey';

    const contentDiv = document.getElementById('content');

    const title = document.createElement('h2');
    title.innerText = 'Simba Dishes';
    contentDiv.appendChild(title);

     // Add the image to our existing div.
    const restaurantPic = new Image();
    restaurantPic.src = restaurant;
    contentDiv.appendChild(restaurantPic);
    restaurantPic.alt = 'Dine With Us!';
    restaurantPic.height = 180;
    restaurantPic.width = 180;
    
    const description = document.createElement('p');
    description.innerText = 'A swahili cusine restaurant,where we serve souvery dishes that will melt your heart.You surely will love it.You are all welcome!!';
    contentDiv.appendChild(description); 
}
export {showHome};