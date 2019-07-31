$(document).ready(function () {
    $('#submit').on("click", function () {
        let dval = $('#val').val();
        console.log(dval);
        // day of the week
        function myFunction() {
            let d = new Date();
            let weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            let n = weekday[d.getDay()];
            console.log(n);
        };
        myFunction();
        /// prices
        // const ford = 10.23;
        // const ge = 10.50;
        // const apple = 197.92;
        // const disney = 139.64;
        // api key
        const apikey = "SEY5863UOBCH9KA8"
        const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + dval + "&outputsize=compact&apikey=" + apikey
        // collects time for api 
        let today = new Date();
        let year = today.getFullYear()
        toString(year);
        let month = "0" + (today.getMonth() + 1)
        toString(month);
        let day = today.getDate();
        toString(day);
        if (month.length < 2) {
            month = "0" + month
        };
        if (day.length < 2) {
            day = "0" + day
        };
        todaysdate = [year, month, day].join('-');
        // toString(date);
        console.log(todaysdate);
        // api call and data collection
        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            let closeC = response["Time Series (Daily)"][todaysdate]["4. close"];
            let volume = response["Time Series (Daily)"][todaysdate]["6. volume"];

            if (n === "sunday") {
                recentday = (today.getDate() - 2);
                mostrecentdate = [year, month, recentday].join('-');
                closeC = response["Time Series (Daily)"][mostrecentdate]["4. close"];
                let volume = response["Time Series (Daily)"][mostrecentdate]["6. volume"];
            }

            if (n === "saturday") {
                recentday = (today.getDate() - 1);
                mostrecentdate = [year, month, recentday].join('-');
                closeC = response["Time Series (Daily)"][mostrecentdate]["4. close"];
                let volume = response["Time Series (Daily)"][mostrecentdate]["6. volume"];
            }
            
            console.log(closeC);
            console.log(volume);
        });





    })
});