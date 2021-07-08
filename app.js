function send(){
    const input = document.getElementsByTagName("input")[0].value;
    const input2 = document.getElementsByTagName("textarea")[0].value;

    if(input != "" )alert("isi dari title:  "+ input)

    if(input2 != "")alert("Isi Descriptsi:  "+input2)

}







function fecthData(){
    const url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

    fetch("data.xml").then(response=>{
        return response.json()
    }).then(data=>{
        
        const {name,images,artists,type} = data.album 
        const getnameArtist = artists.map(name=>{
            return `<p> ${name.name} </p>`
        })

        const [,image2,] = images
        console.log(images);
        const album_text = document.querySelector(".album-text");
        const img = document.getElementById("album-image");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const h4 = document.createElement("h4");
        const button = document.createElement("button")

        h3.innerHTML = getnameArtist
        p.innerHTML = name
        h4.innerHTML = type
        button.setAttribute("class","btn btn-primary")
        button.innerHTML = "DownLoad Now"


        img.setAttribute("src",image2.url);
        album_text.appendChild(h3)
        album_text.appendChild(p)
        album_text.appendChild(h4)
        album_text.appendChild(button);
    }).catch((err)=>{
        alert(`API error message: ${err} `)
    })

}

fecthData();






