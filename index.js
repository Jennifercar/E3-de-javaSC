const pizzas =  [
    {   
	    id: 1 ,
		tipo: "Caprese",
		ingredientes: ["tomate", "albaca"],
		precio: 1500,
		imagen:  ['./img/capress.jpg '],
	},
	{   
	    id: 2 ,
		tipo: "Jyq",
		ingredientes: ["jamon","queso"],
		precio: 1200,
		imagen:  ['./img/jamonqueso.jpg'],
	},
	{   
	    id: 3 ,
		tipo: "Anchoas",
		ingredientes: ["anchoas","anchoas" , "morron"],
		precio: 1800,
		imagen:  ['./img/anchoas.jpg'],
	},
	{   
	    id: 4 ,
		tipo: "Muzza",
		ingredientes: ["anchoas","aceitunas" , "morron"],
		precio: 1800,
		imagen:  ['./img/pizza-muzzarella-muzza.jpg'],
	},
	{   
	    id: 5 ,
		tipo: "Especial",
		ingredientes: ["pollo", "salsa de tomate" , "muzarella"],
		precio: 1200,
		imagen:  ['./img/pollo.jpg'],
		
		
	},
	{   
	    id: 6 ,
		tipo: "Humita",
		ingredientes: ["humita","cebolla", "choclo" , "muzarela"],
		precio: 1500,
		imagen:  ['./img/humita.jpg'],
	},
]

const input_number = document.getElementById('input-number')
const conteiner = document.getElementById('conteiner')
const form = document.getElementById("form")
const input_buton = document.getElementById('input-buton')

input_buton.addEventListener('click', ()=> {
    console.log(input_number.value);
});

function mostrarValorInput(){
    console.log(input_number.value)
}

const buscaPizza = (value) => pizzas.find((pizza) => pizza.id === value)

let listado = JSON.parse(localStorage.getItem("listado")) || [];

const saveLocalStorage = (listado) => {
  localStorage.setItem("listado", JSON.stringify(listado));
};



const renderBusqueda = (pizza) => {
    return `
      <div class="card" >
      <h2 class="cardTipo">${pizza.tipo}</h2>
      <h3 class="cardPrecioIng" > Precio: $${pizza.precio} </h3>
      <h3 class="cardPrecioIng"> Ingredientes: ${pizza.ingredientes} </h3>
	  <img class="imagen" src= "${pizza.imagen} "/>
          </div>
      `
    
	//width="50" height="50"
};

const renderLista = (listPizzas) => {
    conteiner.innerHTML = listPizzas.map((pizza) => renderBusqueda(pizza)).join("");
  };

const showEmptyError = () => {
	conteiner.innerHTML = ` 
	<div >
	<h2 class="cardPrecioIng"> Ingresa un número del 1 al 6 y mirá la magia </h2>
	</div>
	` 

};

const errorDeId = (pizzas) => {
	if (!pizzas){ 
	conteiner.innerHTML = ` 
	<div >
	<h2 class="cardPrecioIng"> No existe una pizza con ese Id ingresado </h2>
	</div>
	` 
}
};


const submitSearch = (e) => {
    e.preventDefault()
	const searchValue = input_number.value;
    if (!searchValue || searchValue == "") 
	if (!searchValue) {
        showEmptyError(searchValue);
	}else{ (!pizzas) 
			errorDeId(pizzas);
     return 
	
}
	
    const searchedPizza = buscaPizza(Number(searchValue));

	listado=[searchedPizza];
	saveLocalStorage(listado);
    renderLista(listado);
	
    
};

const init = () => {
    renderLista(listado);


form.addEventListener("submit", submitSearch)
}

init()