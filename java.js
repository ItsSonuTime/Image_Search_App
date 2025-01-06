
const AccessKey = `Gy-Y-VA_mJF-XHZ_d_nNl_J3YiSPvXbc3SeaQ4V3ExY`


const inputBox = document.getElementById("searchbox");
const searchBtn = document.getElementById("searchbtn");
const Boxcontainer = document.getElementById("boxcontainer");

async function myimage(query){
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${AccessKey}`;
    const response = await fetch(url);
    const data = await response.json();
   if(data.results.length>0){
     displayImage(data.results);
   }else{
    imageContainer.innerHTML = `<p>No results found for "${query}".</p>`;
   }
}

function displayImage(images){
    Boxcontainer.innerHTML = "";
    images.forEach((image) => {
        const imageElement = document.createElement("img");
        imageElement.src = image.urls.small;
        imageElement.alt = image.alt_description || "Image";
        imageElement.style.height = "200px"
        imageElement.style.width = "230px"
        imageElement.style.marginTop = "30px"
        imageElement.style.justifyContent = "space-around" 
        imageElement.style.border = "3px solid black "
           imageElement.style.boxShadow= " 0px 0px 10px white"
        Boxcontainer.appendChild(imageElement)

    })
     

}
searchBtn.addEventListener("click", ()=>{
    
    const query = inputBox.value.trim();
    if(query){
        myimage(query);
}else{
    alert("Please Enter Something")}}
)
