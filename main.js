//const url = "https://covid19.mathdro.id/api/countries/USA"

const Cdata = {};
$(document).ready(function(){
    $(".button").click( function(){
        let query = $('#input').val();
        getData(query);
       
    })
})

getData = query =>{
   let api = `https://covid19.mathdro.id/api/countries/${query}`;

   fetch(api)
   .then(res => res.json())
   .then(data => 
    {
        
        Cdata.totalConfirmed = data.confirmed.value;
        Cdata.deathConfirmed = data.deaths.value;
        Cdata.recovered = data.recovered.value; 
        Cdata.country1 = query;
        Cdata.date = data.lastUpdate.slice(0,10);

    })
    .then(() => {
        displayData();
        query = ""
    })
    .catch(err => {
        console.log(err)
        alert("Country not found!!")
        
    });
   
}
displayData  = () =>{
    console.log( Cdata.totalConfirmed)
    $('#total').html(Cdata.totalConfirmed); 
    $('#recover').html(Cdata.recovered);
    $('#death').html(Cdata.deathConfirmed);
    $('#country').html(Cdata.country1);
    $('#date').html( Cdata.date)
   
}

  
