
if (window.location.pathname.split('/').slice(-1)[0] != "love4.html") {
    window.setInterval(() => {
        console.log('add  event');
        document.querySelector('#cb').addEventListener('mouseover', (cb) => {
            console.log(cb);
            const i = Math.floor(Math.random() * 500) + 1;
            const j = Math.floor(Math.random() * 500) + 1;

            cb.target.style.left = i + "px"
            cb.target.style.top = j + "px"

        });
    }, 7090)
}

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 32, // higher number = slower
        tempTypeSpeed = 0;

    var type = function () {

        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}
let page = window.location.pathname.split('/').slice(-1)[0];
if (page != "love.html") {
    var typer = document.getElementById('typewriter');
    typewriter = setupTypewriter(typer);
    typewriter.type();
} else {
    document.querySelector('#play_love').addEventListener('click', () => {
        let audio = document.querySelector("#my_audio");
        audio.play();
        audio.volume = 0.1;
        document.querySelector("#play_love").style.display = 'none';
        var typer = document.getElementById('typewriter');
        typer.style.display = 'block'
        typewriter = setupTypewriter(typer);
        typewriter.type();
    })
}




