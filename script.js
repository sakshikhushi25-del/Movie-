let btn = document.getElementById("btn");

let resultDiv = document.getElementById("result");

btn.addEventListener("click", showInformation);
async function showInformation() {
    let input = document.getElementById("input");
    resultDiv.innerHTML ="<p>Generating...</p>";

    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyA11IIKecCl_XEWnUaAYI8zq0JJBiSkpxw", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            contents: [{
                parts: [{
                    text: `give the information according to ${input.value}
                    movie name with year
                    director name,
                    actor name,
                    actress name,
                    songs in movie,
                    generate it in proper way don't give asterisk`
                }]
            }]
        })
    })
    let data = await response.json();
    let output = data?.candidates[0]?.content?.parts[0]?.text;
    resultDiv.innerHTML = `<pre>${output}</pre>`;
}