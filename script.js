function fetchElement() {
    fetch('element.json')
    .then(response => response.json())
    .then(data => {
        for (let element of data) {
            const projet = document.querySelector('.projet');

            projet.innerHTML += `
                <div class="bloc_projet">
                    <img src=${element.image} alt=${element.alt} />

                    <span>
                        <p class="bloc_title">${element.title}</p>
                        <p class="bloc_description">${element.description}</p>
                        <button>
                            <a href="${element.github}" target="_blank">Lien Github</a>
                        </button>
                    </span>
                </div>
            `
        }
    })
}

fetchElement()