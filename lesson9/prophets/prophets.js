const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
        p1.textContent = prophets[i].birthdate + ' - ' + prophets[i].death;
        p2.innerHTML = `Birthplace: ${prophets[i].birthplace} </br> Number of Children: ${prophets[i].numofchildren}`; 
        p3.innerHTML = `Years as Prophet: ${prophets[i].length} </br> Number in Order: ${prophets[i].order} `;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', `The prophet ${prophets[i].name} ${prophets[i].lastname}!`)
        image.style.boxShadow = '0 0 30px #999'

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);
        card.appendChild(p3);

        document.querySelector('div.cards').appendChild(card);
    }
  });