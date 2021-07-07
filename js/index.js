// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
	// Iteration 1: set the visibility of `<section class="mushroom">`
	document.querySelectorAll('.mushroom').forEach(el => {
    if (state.mushrooms) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
	// Iteration 1: set the visibility of `<section class="green-pepper">`
	document.querySelectorAll('.green-pepper').forEach(el => {
		if (state.greenPeppers) {
			el.style.visibility = 'visible';
		} else {
			el.style.visibility = 'hidden';
		}
	});
}

function renderWhiteSauce() {
	// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
	if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
	// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
	if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btns = ['.btn-pepperoni', '.btn-mushrooms', '.btn-green-peppers', '.btn-sauce', '.btn-crust']
  const states = Object.keys(state)
  btns.forEach(function (btnSelector, index) {
    const $btn = document.querySelector(btnSelector); // '.btn-pepperoni'
    const stateName = states[index]; // 'pepperoni'
    if (state[stateName] === true) {
      $btn.classList.add('active')
    } else {
      $btn.classList.remove('active')
    }
  })
  // const $btnPep = document.querySelector('.btn-pepperoni')
  // if (state.pepperoni === true) {
  //   $btnPep.classList.add('active')
  // } else {
  //   $btnPep.classList.remove('active')
  // }
  // const $btnMush = document.querySelector('.btn-mushrooms')
  // if (state.mushrooms === true) {
  //   $btnMush.classList.add('active')
  // } else {
  //   $btnMush.classList.remove('active')
  // }
  // const $btnGreen = document.querySelector('.btn-green-peppers')
  // if (state.greenPeppers === true) {
  //   $btnGreen.classList.add('active')
  // } else {
  //   $btnGreen.classList.remove('active')
  // }
  // const $btnSauce = document.querySelector('.btn-sauce')
  // if (state.whiteSauce === true) {
  //   $btnSauce.classList.add('active')
  // } else {
  //   $btnSauce.classList.remove('active')
  // }
  // const $btnCrust = document.querySelector('.btn-crust')
  // if (state.glutenFreeCrust === true) {
  //   $btnCrust.classList.add('active')
  // } else {
  //   $btnCrust.classList.remove('active')
  // }
}

// NOT FINISHED
function renderPrice() {
	// Iteration 4: change the HTML of `<aside class="panel price">`let list = document.querySelector('#topList')
	let list = "";
	let price = basePrice;
	for (let i in state) {
		if (state[i]) {
			list += `<li>$ ${ingredients[i].price} ${ingredients[i].name}</li>`;
			price += ingredients[i].price;
		}
	}
	document.querySelector('.panel.price ul').innerHTML = list;
	document.querySelector('.panel.price strong').innerText = `$${price}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
	state.greenPeppers = !state.greenPeppers;
	renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
	state.whiteSauce = !state.whiteSauce;
	renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
	state.glutenFreeCrust = !state.glutenFreeCrust;
	renderEverything();
});