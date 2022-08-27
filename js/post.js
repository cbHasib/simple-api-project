function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


function displayPost(postData){
    const postContainer = document.getElementById('post');

    
    for(const post of postData){
        const {title, body} = post;
        const div = document.createElement('div');
        div.innerHTML = `<div
        class="block h-full mx-auto p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">${body}</p>
        </div>`;

  
        
        postContainer.appendChild(div);

    }

    postContainer.parentNode.parentNode.parentNode.classList.add('bg-slate-900');

}



loadPosts();