class Product {
    // title = 'DEFAULT TITLE';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
            this.render();
        }
    }

    render() {};

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);

        if (cssClasses) {
            rootElement.className = cssClasses;
        }

        if (attributes && attributes.length > 0) {
            attributes.forEach(attr => {
                rootElement.setAttribute(attr.name, attr.value);
            });
        }
        document.getElementById(this.hookId).append(rootElement);

        return rootElement;
    }
}

class ProductList extends Component {
    products = [];

    constructor(renderHookId) {
        super(renderHookId);
        this.fetchProducts();
    }

    fetchProducts() {
        this.products = [
            new Product('A Pillow', 'https://images-na.ssl-images-amazon.com/images/I/51TMBezh1WL._AC_SX522_.jpg', 19.99, 'A soft pillow'),

            new Product('A Carpet', 'https://images-na.ssl-images-amazon.com/images/I/812Ebhh1PtL._AC_SX522_.jpg', 89.99, 'A nice enough carpet')
        ];
        this.renderProducts();
    }

    renderProducts() {
        for (const prod of this.products) {
            new ProductItem(prod, 'prod-list');
        }
    }

    render() {
        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);

        if (this.products && this.products.length > 0) {
            this.renderProducts();
        }

    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML =  `<h2>Total \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, currentItem) => {
            return prevValue + currentItem.price;
        }, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    orderProducts() {
        if (this.items.length === 0) {
            alert('Nothing in your cart!');
            return false;
        }
        console.log('Ordering...');
        console.log(this.items);
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2>Total \$${0}</h2>
            <button>Order Now</button>
        `;
        const orderButton = cartEl.querySelector('button');
        orderButton.addEventListener('click', this.orderProducts.bind(this));
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
        prodEl.innerHTML = `
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
    }
}

class Shop extends Component {
    constructor() {
        super();
    }

    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();
