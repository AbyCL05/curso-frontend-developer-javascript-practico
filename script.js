const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuMobile = document.querySelector(" .mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCart");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu () {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains(".inactive")
    if (!isShoppingCartClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    menuDesktop.classList.toggle("inactive")
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains(".inactive")
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    menuMobile.classList.toggle("inactive")
}

function toggleCarAside () {
    const isMobileMenuClosed = menuMobile.classList.contains("inactive")
    const isDesktopMenuClosed = menuDesktop.classList.contains(".inactive")
    if (!isMobileMenuClosed && !isDesktopMenuClosed) {            //Funciona +o-, de viceversa falta pulir
        menuMobile.classList.add("inactive")
        menuDesktop.classList.add(".inactive")
    }
    shoppingCartContainer.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Ruedas',
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pedales',
    price: 50,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Timón',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts (arr) {
    for ( product of arr) {
        const  productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProductCard = document.createElement('img');
        imgProductCard.setAttribute('src', product.image);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv  = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName)
       
    
        const productInfoFigure = document.createElement('figure')
        const imgFigure = document.createElement('img')
        imgFigure.setAttribute('src', "./icons/bt_add_to_cart.svg" )
    
        productCard.append(imgProductCard, productInfo)
        productInfo.append(productInfoDiv, productInfoFigure )
        productInfoFigure.appendChild(imgFigure)
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);




