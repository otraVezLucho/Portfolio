
const urlAPOD = 'https://api.nasa.gov/planetary/apod?api_key=5ltZ2p6Et0anp5uXdfdGgt6QGzJt56WkHHcYGuF9';

export async function getImageAPOD(){
    const response = await fetch(urlAPOD);
    if(!response.ok){
        console.log("Unable to fetch data");
    }
    const data = await response.json();
    console.log(data);
    
    //Assing the image APOD to the img element
    const imgAPODElement = document.querySelector('.imgAPOD');
    imgAPODElement.src=data.hdurl;

    const titleElement = document.querySelector('.titleImageAPOD');
    titleElement.innerHTML = data.title;
    const explanationElement = document.querySelector('.explanation');
    explanationElement.innerHTML = data.explanation;
    
}