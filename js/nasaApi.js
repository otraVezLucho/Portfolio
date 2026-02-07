
const urlAPOD = 'https://api.nasa.gov/planetary/apod?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';
const urlAsteroid = 'https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';
const urlAsteroidsOverall = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';
export async function getNasaData(){
    const response = await fetch(urlAPOD);
   
    if(!response.ok){
        console.log("Unable to fetch data");
    }
    const data = await response.json();
    console.log("APOD Data:\n",data);
    
    //Assing the image APOD to the img element
    const imgAPODElement = document.querySelector('.imgAPOD');
    imgAPODElement.src=data.hdurl;

    const titleElement = document.querySelector('.titleImageAPOD');
    titleElement.innerHTML = data.title;
    const explanationElement = document.querySelector('.explanation');
    explanationElement.innerHTML = data.explanation;

    getAsteroids()
    
}


async function getAsteroids() {
    const responseAsteroidUrl = await fetch(urlAsteroid);
    const responseAsOverall = await fetch(urlAsteroidsOverall);
    if (!responseAsteroidUrl.ok || !responseAsOverall.ok){
        alert("Unable to fetch data")
    }


    let data = await responseAsteroidUrl.json();
    console.log("Asteroid data:\n",data);
    
    data = await responseAsOverall.json();
    console.log("Overall Asteroids Data:\n", data);
    console.log("Overall Asteroids DataList:\n", data.near_earth_objects);

    const nearEarthObjectsList = document.querySelector('.listNearEarthObjects');

    for (let i = 0; i < data.near_earth_objects.length;i++){
        const createLiObject = document.createElement('li');
        createLiObject.classList.add('itemObjectList');
        createLiObject.innerText = data.near_earth_objects[i].name + "  -  Estimated Diameter (km):  " + data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max ;
        nearEarthObjectsList.appendChild(createLiObject);
        console.log(data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max);
        
    }



    

}