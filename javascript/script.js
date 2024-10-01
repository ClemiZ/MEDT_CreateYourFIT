let totalPrice = 0;

function createMap() {
    var map = L.map('map').setView([48.268280, 14.252352], 16);
    var marker = L.marker([48.2683, 14.2517]).addTo(map);
    marker.bindPopup("<p style='font-family: Lucida Sans Typewriter; font-weight: bold; font-size: 18px;'>CreateYourFIT Headquarters</p>").openPopup();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function toStart() {
    document.getElementById("header").innerHTML = `
                                                                <h1>Was ist CreateYourFIT</h1>
                                                            `;
    document.getElementById("wrapper").innerHTML = `<div class="front">
                                                                <p class="leftText">CreateYourFIT lässt dich mit deinem Style freien Lauf lassen.
                                                                  Also mach dich schick mit CreateYourFIT!</p>
                                                                <img class="margin" src="media/Untitled-2.png" alt="">
                                                                <input id="startButton" type="button" value="CREATE ->" onclick="toCreation()">
                                                                <input id="InfoButton" type="button" value="More" onclick="toDetailed()">
                                                              </div>`

}

function toCreation() {
    document.getElementById("header").innerHTML = `
        <img class="return" src="./media/Untitled-2.png" alt="" onclick="toStart()">
        <h1>Erstelle hier dein eigenes Outfit!</h1>`;

    document.getElementById("wrapper").innerHTML = `
        <div id="frontGrid">
        <div id="fitSelection">
            <div class="box">
                <img src="${shoes[0].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 0)">
                <p class="boxText">${shoes[0].name}</p>
                <p class="boxText">${shoes[0].price}€</p>
            </div>
            <div class="box">
                <img src="${shoes[1].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 1)">
                <p class="boxText">${shoes[1].name}</p>
                <p class="boxText">${shoes[1].price}€</p>
            </div>
            <div class="box">
                <img src="${shoes[2].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 2)">
                <p class="boxText">${shoes[2].name}</p>
                <p class="boxText">${shoes[2].price}€</p>
            </div>
            <div class="box">
                <img src="${shoes[3].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 3)">
                <p class="boxText">${shoes[3].name}</p>
                <p class="boxText">${shoes[3].price}€</p>
            </div>
            
        </div>
        
        <div id="currentFit">
                <div id="shoes" class="clothingSelected"></div>
                <div id="trousers" class="clothingSelected"></div>
                <div id="shirt" class="clothingSelected"></div>
        </div>
        
        <div id="nav">
            <div onclick="toShoes()" class="navItem"><img style="width: 100%" src="media/shoe_vector.jpg" alt="shoes"></div>
            <div onclick="toShirts()" class="navItem"><img style="width: 100%" src="media/shirt_vector.jpg" alt="shirts"></div>
            <div onclick="toTrousers()" class="navItem"><img style="width: 100%" src="media/trousers_vector.png" alt="trousers"></div>
            
        </div>
        <div onclick="finish()" id="finishItem"><img style="width: 100%;" src="media/right-arrow.svg" alt="Finish"></div>
        
        
        
        </div>`

}

function toShirts() {
    document.getElementById('fitSelection').innerHTML = `
                                                                  
        <div class="box">
            <img src="${shirts[0].image}" class="boxImages" alt="image" onclick="addToFit('shirt', 0)">
            <p class="boxText">${shirts[0].name}</p>
            <p class="boxText">${shirts[0].price}€</p>
        </div>
        <div class="box">
            <img src="${shirts[1].image}" class="boxImages" alt="image" onclick="addToFit('shirt', 1)">
            <p class="boxText">${shirts[1].name}</p>
            <p class="boxText">${shirts[1].price}€</p>
        </div>
        <div class="box">
            <img src="${shirts[2].image}" class="boxImages" alt="image" onclick="addToFit('shirt', 2)">
            <p class="boxText">${shirts[2].name}</p>
            <p class="boxText">${shirts[2].price}€</p>
        </div>
        <div class="box">
            <img src="${shirts[3].image}" class="boxImages" alt="image" onclick="addToFit('shirt', 3)">
            <p class="boxText">${shirts[3].name}</p>
            <p class="boxText">${shirts[3].price}€</p>
        </div>`

}

function toTrousers() {
    document.getElementById('fitSelection').innerHTML = `
                                                                  
        <div class="box">
            <img src="${trousers[0].image}" class="boxImages" alt="image" onclick="addToFit('trousers', 0)">
            <p class="boxText">${trousers[0].name}</p>
            <p class="boxText">${trousers[0].price}€</p>
        </div>
        <div class="box">
            <img src="${trousers[1].image}" class="boxImages" alt="image" onclick="addToFit('trousers', 1)">
            <p class="boxText">${trousers[1].name}</p>
            <p class="boxText">${trousers[1].price}€</p>
        </div>
        <div class="box">
            <img src="${trousers[2].image}" class="boxImages" alt="image" onclick="addToFit('trousers', 2)">
            <p class="boxText">${trousers[2].name}</p>
            <p class="boxText">${trousers[2].price}€</p>
        </div>
        <div class="box">
            <img src="${trousers[3].image}" class="boxImages" alt="image" onclick="addToFit('trousers', 3)">
            <p class="boxText">${trousers[3].name}</p>
            <p class="boxText">${trousers[3].price}€</p>
        </div>`


}

function toShoes() {
    document.getElementById('fitSelection').innerHTML = `
        <div class="box">
            <img src="${shoes[0].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 0)">
            <p class="boxText">${shoes[0].name}</p>
            <p class="boxText">${shoes[0].price}€</p>
        </div>
        <div class="box">
            <img src="${shoes[1].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 1)">
            <p class="boxText">${shoes[1].name}</p>
            <p class="boxText">${shoes[1].price}€</p>
        </div>
        <div class="box">
            <img src="${shoes[2].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 2)">
            <p class="boxText">${shoes[2].name}</p>
            <p class="boxText">${shoes[2].price}€</p>
        </div>
        <div class="box">
            <img src="${shoes[3].image}" class="boxImages" alt="image" onclick="addToFit('shoe', 3)">
            <p class="boxText">${shoes[3].name}</p>
            <p class="boxText">${shoes[3].price}€</p>
        </div>`

}


function toDetailed() {


    document.getElementById("header").innerHTML = `
                                                                <img class="return" src="media/Untitled-2.png" alt="" onclick="toStart()">
                                                                <h1>Mehr Info</h1>`
    document.getElementById("wrapper").innerHTML = `
           
        <div>
          <h1>Was ist unsere Mission</h1>
        </div>
        <div class="front">
          <p class="leftText">Um den Kleiderkauf so einfach und so klimaeffizient wie möglich zu machen haben wir eine kleine Auswahl
            an Partnerfirmen dessen Produkte wir vermitteln. So kannst du dir sicher sein, dass das Produkt klimafreundlich
            produziert wird und gut ausschaut.
          </p>
          <img class="margin" src="Placeholder.xyz" alt="Bild vom Shop">
        </div>
          <h1>Wer wir sind</h1>      
        <div class="front">
        <div id="map"></div>
          
          <p class="rightText">Wir sind ein kleines Team aus Leonding, Österreich.
                              Unsere Teammitglieder haben ein gemeinsames Hobby für Webdevelopment und wir wollen gemeinsam
                              das Leben unserer Kunden vereinfachen.
          </p>
          
        </div>    
        `
    setTimeout(function () {
        createMap()
    }, 100)


}

function addToFit(toAdd, idToAdd) {


    if (toAdd === "shoe") {
        document.getElementById("shoes").innerHTML = `<img style="width: 100%" src="${shoes[idToAdd].image}" alt="Chosen Shoes">`;
    } else if (toAdd === "shirt") {
        document.getElementById("shirt").innerHTML = `<img style="width: 100%" src="${shirts[idToAdd].image}" alt="Chosen Shirt">`;
    } else if (toAdd === "trousers") {
        document.getElementById("trousers").innerHTML = `<img style="width: 100%" src="${trousers[idToAdd].image}" alt="Chosen Trousers">`;
    } else {
        console.log("not a valid input: input shoe, shirt or trousers")
    }
}

function finish() {
    document.getElementById("wrapper").innerHTML = `
           
        <div>
          <h1>Was ist unsere Mission</h1>
        </div>
        <div class="front">
          <p class="leftText">Um den Kleiderkauf so einfach und so klimaeffizient wie möglich zu machen haben wir eine kleine Auswahl
            an Partnerfirmen dessen Produkte wir vermitteln. So kannst du dir sicher sein, dass das Produkt klimafreundlich
            produziert wird und gut ausschaut.
          </p>
          <img class="margin" src="Placeholder.xyz" alt="Bild vom Shop">
        </div>
          <h1>Wer wir sind</h1>      
        <div class="front">
        <div id="map"></div>
          
          <p class="rightText">Wir sind ein kleines Team aus Leonding, Österreich.
                              Unsere Teammitglieder haben ein gemeinsames Hobby für Webdevelopment und wir wollen gemeinsam
                              das Leben unserer Kunden vereinfachen.
          </p>
          
        </div>    
        `

}

