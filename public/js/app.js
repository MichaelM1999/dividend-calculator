$(document).ready(function () {
    const year = moment().format("YYYY");
    const month = moment().format("MM");
    const day = moment().format("DD");
    console.log(year);
    console.log(month);
    console.log(day);

    todaysdate = [year, month, day].join('-');
    console.log(todaysdate);
    const dayofweek = moment().format("dddd");
    console.log(dayofweek);
    $('#submit').on("click", function () {
        $(".stockPrice").val("");
        $(".stockVol").val("");
        $(".stockName").val("");
        console.log("HELLO?")

        let dval = $('#val').val();
        console.log(dval);
        const apikey = "SEY5863UOBCH9KA8"
        const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + dval + "&outputsize=compact&apikey=" + apikey
        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            // console.log(moment().subtract(2, 'days').format("DD"));
            if (dayofweek === "Monday" || dayofweek === "Tuesday" || dayofweek === "Wednesday" || dayofweek === "Thursday" || dayofweek === "Friday") {
                let closeC = response["Time Series (Daily)"][todaysdate]["4. close"];
                let volume = response["Time Series (Daily)"][todaysdate]["6. volume"];
                console.log(closeC);
                console.log(volume);
                stockDisplay(volume, closeC, dval);
            }
            if (dayofweek === "Sunday") {
                recentday = (moment().subtract(2, 'days').format("DD"));
                mostrecentdate = [year, month, recentday].join('-');
                console.log(mostrecentdate);
                let closeC = response["Time Series (Daily)"][mostrecentdate]["4. close"];
                let volume = response["Time Series (Daily)"][mostrecentdate]["6. volume"];
                console.log(closeC);
                console.log(volume);
                stockDisplay(volume, closeC, dval);
            }
            if (dayofweek === "Saturday") {
                recentday = (moment().subtract(1, 'days').format("DD"));
                mostrecentdate = [year, month, recentday].join('-');
                console.log(mostrecentdate);
                let closeC = response["Time Series (Daily)"][mostrecentdate]["4. close"];
                let volume = response["Time Series (Daily)"][mostrecentdate]["6. volume"];
                console.log(closeC);
                console.log(volume);
                stockDisplay(volume, closeC, dval);
            }

            console.log(closeC);
            console.log(volume);
            stockDisplay(volume, closeC, dval);
            // $.post("/api/buy") // use to post when they add to the database
        });
    });
    $('#link').on('click', event => {
        event.preventDefault()
        window.location = '/add';
        // console.log('working');
    });
    $('#portfolio').on('click', event => {
        event.preventDefault()
        window.location = '/portfolio';
        // console.log('working');
    });

});
const stockDisplay = (volume, price, name) => {
    $(".searched").append("there are currently " + volume + " shares of " + name + " avalable at $" + price + " per share. ")
}


// day of the week
// function myFunction() {
//     let d = new Date();
//     let weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";

//     let n = weekday[d.getDay()];
//     console.log(n);
// };
// myFunction();

// collects time for api 
// let today = new Date();
// let year = today.getFullYear()
// year.toString();
// let month = (today.getMonth() + 1)
// if (month.length < 2) {
//     month = "0" + month
// };
// month.toString();
// console.log(month);
// let day = today.getDate();
// day.toString();
// if (day.length < 2) {
//     day = "0" + day
// };
// todaysdate = [year, month, day].join('-');
// console.log(todaysdate);
// // toString(date);
// // api call and data collection