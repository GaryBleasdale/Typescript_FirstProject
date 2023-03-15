var reviewTotalDisplay = document.querySelector('#reviews');
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
function showReviewTotal(value) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString();
}
showReviewTotal(reviews.length);
function showMostRecentReviewerName(reviews) {
    var mostRecentReviewerIndex;
    var parsedDatesArray = reviews.map(function (element) {
        var date = new Date(element.date);
        return date;
    });
    console.log(parsedDatesArray);
    reviewTotalDisplay.innerHTML += " ".concat(reviews[0].name);
}
showMostRecentReviewerName(reviews);
