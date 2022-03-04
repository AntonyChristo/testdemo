var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
   //3.Use the same rest countries and print all countries name, region, sub region and population
    for (var i=0;i<data.length;i++){
        console.log(`countries :${data[i].countries }      region:${data[i].region}       subregion:${data[i].subregion}      population:${data[i].population}`);
    }
}