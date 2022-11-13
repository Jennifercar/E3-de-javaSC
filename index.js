const pizzas =  [
    {   
	    id: 1 ,
		tipo: "caprese",
		ingredientes: ["tomate", "albaca"],
		precio: 1500,
		imagen:  ['./img/capress.jpg'],
	},
	{   
	    id: 2 ,
		tipo: "jyq",
		ingredientes: ["jamon","queso"],
		precio: 1200,
		imagen:  ['./img/jamonqueso.jpg'],
	},
	{   
	    id: 3 ,
		tipo: "anchoas",
		ingredientes: ["anchoas","anchoas" , "morron"],
		precio: 1800,
		imagen:  ['./img/anchoas.jpg'],
	},
	{   
	    id: 4 ,
		tipo: "muzza",
		ingredientes: ["anchoas","anchoas" , "morron"],
		precio: 1800,
		imagen:  ['./img/pizza-muzzarella-muzza.jpg'],
	},
	{   
	    id: 5 ,
		tipo: "especial",
		ingredientes: ["pollo", "salsa de tomate" , "muzarella"],
		precio: 1200,
		imagen:  ['./img/.jpg'],
		
		
	},
	{   
	    id: 6 ,
		tipo: "humita",
		ingredientes: ["humita","cebolla", "choclo" , "muzarela"],
		precio: 1500,
		imagen:  ['./img/car.jpg'],
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

const saveLocalStorage = (listPizzas) => {
  localStorage.setItem("listado", JSON.stringify(listPizzas));
};



const renderBusqueda = (pizza) => {
    if (pizza) {
		conteiner.innerHTML = `
      <div class="card" >
      <h2 class="cardTipo">${pizza.tipo}</h2>
      <h3 > Precio: $${pizza.precio} </h3>
      <h3 > Ingredientes: ${pizza.ingredientes} </h3>
	  <img src= "${pizza.imagen} "/>
          </div>
      `
    }
	//width="50" height="50"
};

const renderLista = (listPizzas) => {
    conteiner.innerHTML = listPizzas.map((pizza) => renderBusqueda(pizza)).join("");
  };

const submitSearch = (e) => {
    e.preventDefault()
	const searchValue = input_number.value;
    if (!searchValue || searchValue == "") 
     return console.log ("Ingrese un numero del 1 al 6");
     console.log(listado);
     renderLista();
    const searchedPizza = buscaPizza(parseInt(searchValue));
	console.log(searchedPizza);
	saveLocalStorage();
    renderBusqueda(searchedPizza);
	
    
};

const init = () => {
    renderLista(listPizzas);


form.addEventListener("submit", submitSearch)
}

init()