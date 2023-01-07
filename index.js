document.getElementById("alice").addEventListener("click", book);
document.getElementById("hyde").addEventListener("click", book);
document.getElementById("lord").addEventListener("click", book);

function book(e) {
    e.preventDefault();
    if (e.target.id == "alice") {
        read("AliceInWonderland.txt", "Alice In WonderLand");
    }
    if (e.target.id == "hyde") {
        read("JekyllAndHyde.txt", "Jekyll And Hyde");
    }
    if (e.target.id == "lord") {
        read("LOTR.txt", "Lord Of The Rings");
    }
}

// read

function read(url, title) {
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = function () {
        var textt = client.responseText;
        document.getElementById("title").innerText = title;
        document.getElementById("booktxt").innerText = textt;
        document.getElementById("len").innerText = textt.length;
        var split = textt.split(' ');
        // split.trim();
        var count=0;
        for (var i = 0; i < split.length; i++) {
            count++;
        }
        document.getElementById("showCount").innerHTML = count;
    // lengths(t);
}
client.send();
}
function high()
{
let sea=document.getElementById("sd").value;
let paragraph=document.getElementById("booktxt");
// sea=sea.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
let pattern=new RegExp(`${sea}`,"gi");
paragraph.innerHTML=paragraph.textContent.replace
(pattern,match=>`<mark>${match}</mark>`);
}