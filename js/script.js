url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const resultContainer = document.querySelector(".results");

async function getTeams () {

    try {
        response = await fetch(url);
        result = await response.json();

        // console.log(result);

        resultContainer.innerHTML = [];

        for (let i = 0; i < 15; i++) {
            
            // if (result[i].teamName[0] === "c" || result[i].teamName[0] === "C"){
            //     continue;
            // }

            //Using startsWith() method => case sensitive!

            if(result[i].teamName.startsWith("C")) {
                continue;
            }

            resultContainer.innerHTML += `<div class="card">${result[i].teamName}</div>`
        }
    }

    catch (error) {
        resultContainer.innerHTML = `<div class="error">An error has ocurred</div>`
    }
}

getTeams ();