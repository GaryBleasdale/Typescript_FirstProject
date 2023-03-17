var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var isOpen;
var propertyDashboard = document.querySelector('.properties');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
var properties = [
    {
        image: 'https://metro.co.uk/wp-content/uploads/2023/03/GettyImages-1309290300-d18c.jpg?quality=90&strip=all',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: 'marywinkle@gmail.com',
        available: true
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/PA260057.JPG',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        available: false
    },
    {
        image: 'https://www.buyincolombia.com/wp-content/uploads/2018/08/buy-in-colombia-colombia-real-estate-realty-finca-raiz-colombia-lots-for-sale-lotes-en-venta-guatavita-gv-19-56-818x540.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: 'andyluger@aol.com',
        available: true
    }
];
function showReviewTotal(value, reviews, loyaltyUser) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString();
    reviewTotalDisplay.innerHTML += " | last reviewed by: ".concat(reviews[0].name);
    loyaltyUser ? reviewTotalDisplay.innerHTML += "&#9733" : reviewTotalDisplay.innerHTML += "";
}
showReviewTotal(reviews.length, reviews, reviews[0].loyaltyUser);
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.firstName);
var displayProperties = function (properties) {
    properties.forEach(function (e) {
        propertyDashboard.innerHTML += "<div class='single-property-container'><h2>".concat(e['title'], "</h2><img src=").concat(e['image'], " class='property-image'/></div>");
    });
};
displayProperties(properties);
