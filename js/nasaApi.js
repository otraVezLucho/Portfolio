
const urlAPOD = 'https://api.nasa.gov/planetary/apod?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';
const urlAsteroid = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';
const urlAsteroidsOverall = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';

const urlRover = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';

export async function getNasaData(){
    const response = await fetch(urlAPOD);
   
    if(!response.ok){
        console.log("Unable to fetch data");
    }
    const data = await response.json();
    //console.log("APOD Data:\n",data);
    
    //Assing the image APOD to the img element
    const imgAPODElement = document.querySelector('.imgAPOD');
    imgAPODElement.src=data.hdurl;

    const titleElement = document.querySelector('.titleImageAPOD');
    titleElement.innerHTML = data.title;
    const explanationElement = document.querySelector('.explanation');
    explanationElement.innerHTML = data.explanation;

    getAsteroids()

    
    
    const buttonGetImage = document.querySelector('.buttonGetImage');
    buttonGetImage.addEventListener('click', changeAPOD)

    //EPIC picture code
    getEPICPictures();
}
    
async function getAsteroids() {
    const responseAsteroidUrl = await fetch(urlAsteroid);
    const responseAsOverall = await fetch(urlAsteroidsOverall);
    if (!responseAsteroidUrl.ok || !responseAsOverall.ok){
        alert("Unable to fetch data")
    }


    let data = await responseAsteroidUrl.json();
    //console.log("Asteroid data:\n",data);
    
    data = await responseAsOverall.json();
    //console.log("Overall Asteroids Data:\n", data);
    //console.log("Overall Asteroids DataList:\n", data.near_earth_objects);

    const nearEarthObjectsList = document.querySelector('.listNearEarthObjects');

    for (let i = 0; i < data.near_earth_objects.length;i++){
        const createLiObject = document.createElement('li');
        createLiObject.classList.add('itemObjectList');
        createLiObject.innerText = data.near_earth_objects[i].name + "  -  Estimated Diameter (km):  " + data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max ;
        nearEarthObjectsList.appendChild(createLiObject);
        //console.log(data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max);
        
    }





    

}

async function changeAPOD(){
    
    const getDate = document.getElementById('dateInput'); //getDate.value WILL RETURN A STRING NOT A DATE BEWARE, IT MUST BE CONVERTED TO A DATE OBJECT
    //console.log(getDate.value);
    const hoy = new Date();
    const fechaISO = hoy.toLocaleDateString('en-CA');
    let urlAPODDate;
    let response;
    //console.log("esta es la fecha",fechaISO);

    //This will validate if the date given by the user is a future date. 
    if (getDate.value > fechaISO){
         urlAPODDate = `https://api.nasa.gov/planetary/apod?date=${fechaISO}&api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9`;
         response = await fetch(urlAPODDate);
        //console.log(fechaISO);
        const labelMessageDate = document.querySelector('.labelPickDate');
        labelMessageDate.textContent = " You only can request pictures of previous days otherwise you'll see the today's picture"
    }else{
        urlAPODDate = `https://api.nasa.gov/planetary/apod?date=${getDate.value}&api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9`;
        response = await fetch(urlAPODDate);
        //console.log(getDate.value);
         
    }


    
    const data = await response.json();
   // console.log(data);
    
    const imgAPODElement = document.querySelector('.imgAPOD');
    imgAPODElement.src = data.hdurl;
    const titleElement = document.querySelector('.titleImageAPOD');
    titleElement.innerHTML = data.title;
    const explanationElement = document.querySelector('.explanation');
    explanationElement.innerHTML = data.explanation;
     
}




let urlEPIC = 'https://epic.gsfc.nasa.gov/api/natural/date/2025-12-31';
async function getEPICPictures(){

    //this will get the today's date with the right format
    let todayDate = new Date();
    const dateISO = todayDate.toLocaleDateString('en-CA');
    console.log(dateISO);
    
    
    let partsOfDate = dateISO.split('-');
    
    console.log(partsOfDate[0]);
    let newFormatDate = `${partsOfDate[0]}/${partsOfDate[1]}/${partsOfDate[2]}`
    console.log(newFormatDate);
    
    //this event is going to process the url by default and assing the url to the element img
    const getDateByEPIC = document.querySelector('.buttonGetImageEPIC');
    const imgEpic = document.querySelector('.imgEPIC');
    imgEpic.src = 'https://epic.gsfc.nasa.gov/archive/natural/2025/12/31/png/epic_1b_20251231215419.png';
    let dateToSend="";
    let response = await fetch(urlEPIC);
    //console.log(await response.json());

    //this event will create new img element depending on the date given
    getDateByEPIC.addEventListener('click', async()=>{
         dateToSend = getDateEPIC(dateISO);

        let dateTocheck = new Date(dateToSend);

        console.log(dateTocheck.toLocaleDateString('en-CA'));
        
        urlEPIC = `https://epic.gsfc.nasa.gov/api/natural/date/${dateTocheck.toLocaleDateString('en-CA')}`;
         response = await fetch(urlEPIC);

         if(!response.ok){
             alert("unable to fetch the data");
             const imgTitle = document.querySelector('.titleImgEpic');
             imgTitle.textContent = "Service unavailable temporaly"

         }
         const data2 = await response.json();
         console.log(data2);


         for(let i =0; i < data2.length;i++){
            
             urlEPIC = `https://epic.gsfc.nasa.gov/archive/natural/${dateToSend}/png/${data2[i].image}.png`
             console.log(urlEPIC);
         //https://epic.gsfc.nasa.gov/archive/natural/2026/02/03/png/epic_1b_20260203093643.png
             //https://epic.gsfc.nasa.gov/api/natural/date/2026-02-03/png/epic_1b_20260203112445.png
             //https://epic.gsfc.nasa.gov/api/natural/date/2026-02-03/png/epic_1b_20260203112445.png
             
             imgEpic.src = urlEPIC
         }
    });

}


function getDateEPIC(todayDate){

    
    const getDateInputEpic = document.getElementById('dateInputEpic');
    //console.log(typeof(getDateInputEpic.value));
     
    let dateEnteredSplited = getDateInputEpic.value.split('-');

    const messageEpicButton = document.querySelector('.labelPickDateEPIC');

    if (getDateInputEpic.value > todayDate){
        messageEpicButton.textContent = " You only can request pictures of previous days otherwise you'll see the today's picture";        let todayDateFormat = todayDate.split('-');
        return `${todayDateFormat[0]}/${todayDateFormat[1]}/${todayDateFormat[2]}`;

    } else {
        messageEpicButton.textContent = " Some recent pictures are not available yet. Please try an older date";
        return `${dateEnteredSplited[0]}/${dateEnteredSplited[1]}/${dateEnteredSplited[2]}`;
    }

    
    
    
}