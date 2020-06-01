        // ======================================================================================================================
        var loc = []
        var deaths = []
        var discharged = []
        var indian = []
        var foreign = []

        async function display_myChart() {
            await fetch("https://api.rootnet.in/covid19-in/stats/latest")
                .then(res => res.json())
                .then((data) => {
                    var i = 1;
                    data.data.regional.forEach(async function (states) {
                        loc.push(states.loc)
                        deaths.push(parseInt(states.deaths))
                        discharged.push(parseInt(states.discharged))
                        indian.push(parseInt(states.confirmedCasesIndian))
                        foreign.push(parseInt(states.confirmedCasesForeign))

                        var table = document.getElementById("mytable");
                        var row = table.insertRow(i);

                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        var cell5 = row.insertCell(4);
                        var cell6 = row.insertCell(5);


                        cell1.innerHTML = states.loc;
                        cell2.innerHTML = states.confirmedCasesIndian;
                        cell3.innerHTML = states.discharged;
                        cell4.innerHTML = states.deaths;
                        cell5.innerHTML = states.confirmedCasesForeign;
                        cell6.innerHTML = states.totalConfirmed;

                        i = i + 1;

                    })
                    document.getElementById("death_id").innerHTML=data.data.summary.deaths;
                    document.getElementById("recovered_id").innerHTML = data.data.summary.discharged;
                    document.getElementById("totalconfirmed_id").innerHTML = data.data.summary.total;
                });
            var ctx = document.getElementById('myChart1').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: loc,
                    datasets: [{
                        label: 'Death Stats',
                        backgroundColor: 'rgb(255, 0, 0)',
                        data: deaths,
                        fill: false,
                    },
                    {
                        label: 'Recovered Stats',
                        backgroundColor: 'rgb(50, 200, 0)',
                        data: discharged,
                        fill: false,
                    },
                    ]
                },
                options: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'black'
                        }
                    }
                }
            });

            var ctx0 = document.getElementById('myChart2').getContext('2d');
            var chart0 = new Chart(ctx0, {
                type: 'line',
                data: {
                    labels: loc,
                    datasets: [{
                        label: 'Confirmed Cases Indian',
                        backgroundColor: 'rgb(255, 0, 0)',
                        data: indian,
                        fill: false,
                    },
                    {
                        label: 'Confirmed Cases Foreign',
                        backgroundColor: 'rgb(50, 200, 0)',
                        data: foreign,
                        fill: false,
                    },
                    ]
                },
                options: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'black'
                        }
                    }
                }
            });
        }
        display_myChart()