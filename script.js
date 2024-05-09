let search = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>
{
    search.classList.toggle("active");
    shopingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

let shopingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () =>
{
    shopingCart.classList.toggle("active");
    search.classList.remove("active");
    loginForm.classList.remove("active");
}

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>
{
    loginForm.classList.toggle("active");
    search.classList.remove("active");
    shopingCart.classList.remove("active");
}

window.onscroll = () =>
{
    search.classList.remove("active");
    shopingCart.classList.remove("active");
    loginForm.classList.remove("active");
}




