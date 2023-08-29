
const memeLoad = () => {
    const URL = "https://meme-api.com/gimme/20";
    fetch(URL)
        .then((res) => res.json())
        .then((data) => showMeme(data.memes))
}

const showMeme = (data) => {
    // console.log(data);
    data.forEach((meme) => {
        console.log(meme);

        const memeSection = document.getElementById('meme-id');
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card w-full glass shadow-2xl">
            <figure><img class="w-full h-64" src="${meme.url}" alt="car!"/></figure>
            </div>
        `
        memeSection.appendChild(div);
    });
}
memeLoad();