$(document).ready(function(){
    var url="https://data.covid19india.org/data.json"

    $.getJSON(url,function(data){
        console.log(data)

        var total_recovered,total_deaths,total_confirmed
        var date1=[]
        var confirmed1=[]
        var recovered1=[]
        var deaths1=[]
        var date=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        $.each(data.cases_time_series,function(id,obj){
            date1.push(obj.dateymd)
            confirmed1.push(obj.totalconfirmed)
            recovered1.push(obj.totalrecovered)
            deaths1.push(obj.totaldeceased)
            date =date1.slice(534)
            confirmed=confirmed1.slice(534)
            recovered=recovered1.slice(534)
            deaths=deaths1.slice(534)

        })
        console.log(date)
        var mychart=document.getElementById("mychart").getContext('2d')
        var chart=new Chart(mychart,{
            type:'bar',
            data:{
                labels:date,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data: confirmed,
                        backgroundColor:"#A52A2A",
                        minBarLength:100
                    },
                    {
                        label:"Recovered Cases",
                        data: recovered,
                        backgroundColor:"#2ecc71",
                        minBarLength:100
                    },
                    {
                        label:"Deaths",
                        data: deaths,
                        backgroundColor:"#ff0000",
                        minBarLength:100
                    }
                ]
            },
            options:{}

        })
        
    })
})
