function loadComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
}

function displayComment(comments) {
  const commentContainer = document.getElementById("comment");

  for (const comment of comments) {
    const { name, email, body } = comment;

    const div = document.createElement("div");
    div.innerHTML = ` <article
    class="block mx-auto p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center mb-4 space-x-4">

        <div class="space-y-1 font-medium dark:text-white">
            <p>${email}<time datetime="2014-08-16 19:00"
                    class="block text-sm text-gray-500 dark:text-gray-400">Joined on August
                    2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${name}</h3>
    </div>
    
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">${body}</p>
    

    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400"><span id="helpful-count">00</span>
            people found this helpful</p>
        <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <button onclick="helpfulCount(this)" id="btn-helpful"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</button>
            <div onclick="deleteComment(this)"
                class="pl-4 text-sm font-medium text-blue-600 hover:underline hover:cursor-pointer dark:text-blue-500">
                Delete this comment</div>
        </div>
    </aside>
</article>`;

commentContainer.appendChild(div);
  }
}

function deleteComment(element) {
  const parentElement = element.parentNode.parentNode.parentNode.parentNode;
  parentElement.classList.add("hidden");
}

function helpfulCount(element) {
  const countElement = element.parentNode.parentNode.children[0].children[0];
  let count = parseInt(
    element.parentNode.parentNode.children[0].children[0].innerText
  );
  count++;
  countElement.innerText = count;
}


loadComment();
