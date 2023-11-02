

const products = [
    {
      id: 0,
      image: 'buy-apple-iphone-14-pro-128gb-61-super-retina-xdr-wi-fi-5g-deep-purple-mobile-wibi-want-it-buy-it-kuwait-526028_large.webp',
      title: 'Apple iPhone 14 Pro Max - 256GB',
      price: 1800,
    },
    {
      id: 1,
      image: 'OnePlus11R5G.webp',
      title: 'OnePlus 11 R',
      price: 120,
    },
    {
      id: 2,
      image: 'oppo-f17-pro-mobile.jpg',
      title: 'Matte Black Oppo F17 Pro Mobile',
      price: 230,
    },
    {
      id: 3,
      image: '1359169_R_SET.jpg',
      title: 'Samsung Galaxy Tab S8',
      price: 100,
    }
  ];
  
  const cart = [];
  
  function renderProduct(product, index) {
    const { image, title, price } = product;
    const productElement = document.createElement('div');
    productElement.classList.add('box');
  
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    const img = document.createElement('img');
    img.classList.add('images');
    img.src = image;
    imgBox.appendChild(img);
  
    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    const productName = document.createElement('p');
    productName.textContent = title;
    const productPrice = document.createElement('h2');
    productPrice.textContent = `$ ${price}.00`;
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Karta əlavə edin';
    addToCartButton.addEventListener('click', () => addtocart(index));
  
    bottom.appendChild(productName);
    bottom.appendChild(productPrice);
    bottom.appendChild(addToCartButton);
  
    productElement.appendChild(imgBox);
    productElement.appendChild(bottom);
  
    return productElement;
  }
  
  function renderCart() {
    let total = 0;
    const cartItemContainer = document.getElementById('cartItem');
    const totalElement = document.getElementById('total');
    const countElement = document.getElementById('count');
  
    if (cart.length === 0) {
      cartItemContainer.innerHTML = 'Sizin kartınız boşdur';
      totalElement.innerHTML = '$ 0.00';
      countElement.textContent = 0;
    } else {
      const cartItems = cart.map((item, index) => {
        const { image, title, price } = item;
        total += price;
  
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        const rowImg = document.createElement('div');
        rowImg.classList.add('row-img');
        const rowing = document.createElement('img');
        rowing.classList.add('rowing');
        rowing.src = image;
        rowImg.appendChild(rowing);
  
        const titleElement = document.createElement('p');
        titleElement.style.fontSize = '12px';
        titleElement.textContent = title;
        const priceElement = document.createElement('h2');
        priceElement.style.fontSize = '15px';
        priceElement.textContent = `$ ${price}.00`;
  
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('fa-solid', 'fa-trash');
        deleteButton.addEventListener('click', () => delElement(index));
  
        cartItem.appendChild(rowImg);
        cartItem.appendChild(titleElement);
        cartItem.appendChild(priceElement);
        cartItem.appendChild(deleteButton);
  
        return cartItem;
      });
  
      cartItemContainer.innerHTML = ''; 
      cartItems.forEach((cartItem) => {
        cartItemContainer.appendChild(cartItem);
      });
  
      totalElement.innerHTML = `$ ${total}.00`;
      countElement.textContent = cart.length;
    }
  }
  
  function addtocart(index) {
    cart.push({ ...products[index] });
    renderCart();
  }
  
  function delElement(index) {
    cart.splice(index, 1);
    renderCart();
  }
  
  const rootElement = document.getElementById('root');
  products.forEach((product, index) => {
    const productElement = renderProduct(product, index);
    rootElement.appendChild(productElement);
  });
  