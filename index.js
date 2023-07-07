const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke")

const apiKey = "nr6hcre+ZYdIqK/aPhX+0w==scvoHe6z2JTu6YNl";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeE1.innerText = "Updating...";
        btnE1.disabled = true;
        btnE1.innerText = "Loading...";
        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";

        jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText = "An error happened, try again later";
        console.log(error);
        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";
    }
    
}

btnE1.addEventListener("click", getJoke)