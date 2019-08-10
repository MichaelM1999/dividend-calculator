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
            }
            if (dayofweek === "Sunday") {
                recentday = (moment().subtract(2, 'days').format("DD"));
                mostrecentdate = [year, month, recentday].join('-');
                console.log(mostrecentdate);
                let closeC = response["Time Series (Daily)"][mostrecentdate]["4. close"];
                let volume = response["Time Series (Daily)"][mostrecentdate]["6. volume"];
                console.log(closeC);
                console.log(volume);
            }
            if (dayofweek === "Saturday") {
                recentday = (moment().subtract(1, 'days').format("DD"));
                mostrecentdate = [year, month, recentday].join('-');
                console.log(mostrecentdate);
                let closeC = response["Time Series (Daily)"][mostrecentdate]["4. close"];
                let volume = response["Time Series (Daily)"][mostrecentdate]["6. volume"];
                console.log(closeC);
                console.log(volume);
            }
            
            console.log(closeC);
            console.log(volume);

            $.post("/api/buy") // use to post when they add to the database
        });





    })
});