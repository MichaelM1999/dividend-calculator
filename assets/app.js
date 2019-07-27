$(document).ready(function () {
    $('#submit').on("click", function () {
        let dval = $('#val').val();
        console.log(dval);
/// prices
const ford = 10.23;
const ge = 10.50;
const apple = 197.92;
const disney = 139.64;
// months 
    const apikey = "SEY5863UOBCH9KA8"
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + dval + "&outputsize=compact&apikey=" + apikey
    let today = new Date();
    let year = today.getFullYear()
    toString(year);
    let month = "0" + (today.getMonth()+1)
    toString(month);
    let day = today.getDate();
    toString(day);
    if (month.length < 2) {month = "0" + month};
    if (day.length < 2) {day = "0" + day};
    todaysdate = [year, month, day].join('-');
    // toString(date);
    console.log(todaysdate);
    $.ajax({
        url: url,
              method: "GET"
            }).then(function(response){
                console.log(response)
                let closeC = response["Time Series (Daily)"][toString(todaysdate)]["4. close"];
                let volume = response["Time Series (Daily)"]["2019-07-29"]["4. close"]
            });

            



    })
});