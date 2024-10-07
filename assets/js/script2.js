var color;
const letra = document.querySelector("input");

letra.addEventListener('keydown', function (event) {
    if (event.key === 'a'  || event.key === "A") {
        color = 'pink';
        pintar(color);
        
    } else if (event.key === 's' || event.key === "S") {
        color = 'orange';
        pintar(color);
    } else if (event.key === 'd' || event.key === "D") {
        color = 'lightblue';
        pintar(color);
    }
    else if (event.key === 'q' || event.key === "Q") {
        color = 'purple';
        agregarDiv(color);
    }
    else if (event.key === 'w' || event.key === "W") {
        color = 'grey';
        agregarDiv(color);
    } else if (event.key === 'e' || event.key === "E") {
        color = 'brown';
        agregarDiv(color);
    }
    });


    function pintar(color){
        const key = document.querySelector('#key');
        key.style.backgroundColor = color;
    }; 

    function agregarDiv(color) {
        contenedor = document.querySelector(".container");
        nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = 'black solid 1.5px';
        nuevoDiv.style.backgroundColor = color;
        contenedor.appendChild(nuevoDiv);
    };


