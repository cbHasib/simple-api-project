function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}


function displayPhotos(photos){
    const photosContainer = document.getElementById('photo');
    console.log(photos)

    for(const photo of photos){
        const {id, title, url, thumbnailUrl} = photo;
        const div = document.createElement('div');
        div.innerHTML = `<figure
        class="relative w-full transition-all duration-300 cursor-pointer">
        <button>
            <img class="w-full rounded-lg filter grayscale hover:grayscale-0"
                src=${url}
                alt="${title}">
        </button>
        <figcaption class="absolute bottom-0 w-full rounded-b-lg text-center px-4 py-2 text-sm font-semibold text-white bg-cyan-500">
            <p>${id}. ${title}</p>
        </figcaption>

        <button onclick="this.parentNode.classList.add('hidden')" class="absolute top-2 right-2 text-white bg-cyan-400 rounded-full">
            <img class="w-6" src="img/remove.png" alt="">
        </button>
    </figure>`;


    photosContainer.appendChild(div);
    }
}

loadPhotos();





function openImage(imageUrl){
    const modalImage = document.getElementById('modal-image');
    modalImage.removeAttribute('src');
    modalImage.setAttribute('src', 'https://via.placeholder.com/900/92c952');
}
