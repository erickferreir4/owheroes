export function setObjectValue(obj, name, value) {
    let set = new Function("object", `object.${name} = ${value}; return object`);
    return set(obj)
}

export function getObjectValue(obj, name) {
    let get = new Function("obj", `return obj.${name};`);
    return get(obj)
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token))
}

export function getToken() {
    return JSON.parse(localStorage.getItem('token'))
}


let sounds = [
    "Ana",
    "Ashe",
    "Baptiste",
    "Bastion",
    "Brigitte",
    "Doomfist",
    "D.Va",
    "Echo",
    "Genji",
    "Hanzo",
    "Junkrat",
    "Lúcio",
    "McCree",
    "Mei",
    "Mercy",
    "Moira",
    "Orisa",
    "Pharah",
    "Reaper",
    "Reinhardt",
    "Roadhog",
    "Sigma",
    "Soldier:_76",
    "Sombra",
    "Symmetra",
    "Torbjörn",
    "Tracer",
    "Widowmaker",
    "Winston",
    "Wrecking_Ball",
    "Zarya",
    "Zenyatta"
]

let heroes = [
    "ana",
    "ashe",
    "baptiste",
    "bastion",
    "brigitte",
    "doomfist",
    "dva",
    "echo",
    "genji",
    "hanzo",
    "junkrat",
    "lucio",
    "mccree",
    "mei",
    "mercy",
    "moira",
    "orisa",
    "pharah",
    "reaper",
    "reinhardt",
    "roadhog",
    "sigma",
    "soldier-76",
    "sombra",
    "symmetra",
    "torbjorn",
    "tracer",
    "widowmaker",
    "winston",
    "wrecking-ball",
    "zarya",
    "zenyatta",
]


function heroFetch() {

    let array = []


    heroes.forEach( (el, indexEl) => {


        let url = `http://localhost:8081/heroes/${el}.html`


        fetch(url).then( r => r.text())
            .then( html => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');

                //console.log(result)

                let name = doc.querySelector('.hero-name').innerText
                let role = doc.querySelector('.hero-detail-role .hero-detail-role-name').innerText
                let diff = (3 - doc.querySelectorAll('.hero-detail-difficulty .star.m-empty').length)
                let thumb = doc.querySelector('a.hero-portrait[data-hero-id="'+el+'"] .hero-portrait-image').style.backgroundImage.split(/"/)[1]

                    let bg;
                    try {
                        bg = doc.querySelector('.hero-detail-video .video-background-vid source').src
                    } catch( e ) {
                        bg = doc.querySelector('.hero-detail-image-wrapper .hero-detail-image').style.backgroundImage.split(/"/)[1]
                    }


                    let real_name = doc.querySelector('.name .hero-bio-copy').innerText
                    let occupation = doc.querySelector('.occupation .hero-bio-copy').innerText
                    let affiliation = doc.querySelector('.affiliation .hero-bio-copy').innerText
                    let base = doc.querySelector('.base .hero-bio-copy').innerText
                    let phrase = doc.querySelector('.hero-bio-quote').innerText
                    //let story = JSON.stringify(doc.querySelector('.hero-bio-backstory').innerText)
                    let story = doc.querySelector('.hero-bio-backstory').innerText
                    //let description = JSON.stringify(doc.querySelector('.hero-detail-description').innerText)
                    let description = doc.querySelector('.hero-detail-description').innerText





                    //console.log(story)

                    let hero = {
                        "name": name,
                        "role": role,
                        "difficulty": diff,
                        "description": description,
                        "thumb": thumb,
                        "bg": bg,
                        "real_name": real_name,
                        "occupation": occupation,
                        "affiliation": affiliation,
                        "base_of_operations": base,
                        "story": story,
                        "audio": []
                    }

                    let abilities = []
                    doc.querySelectorAll('.hero-detail-wrapper > .hero-ability').forEach( (elm, index) => {


                        let name = elm.querySelector('.hero-ability-descriptor > h4').innerText
                        let description = elm.querySelector('.hero-ability-descriptor > p').innerText
                        let img = elm.querySelector('.HeroAbility img.HeroAbility-iconInner').src
                        let video = doc.querySelectorAll('#abilities video')[index+1].querySelector('source').src



                        let ability = {
                            "name": name,
                            "description": description,
                            "img": img,
                            "video": video
                        }


                        abilities.push(ability)
                    })

                    hero.abilities = abilities


                    let url_sound = `http://localhost:8081/sounds/${sounds[indexEl]}.html`
                    let audio;
                    fetch(url_sound).then( r => r.text())
                    .then( htmlEl => {
                        var parserEl = new DOMParser();
                        var docEl = parser.parseFromString(htmlEl, 'text/html');

                        let audio1;
                        let audio2;
                        try {
                            audio1 = docEl.querySelector('#Chatter').parentElement.nextElementSibling.querySelectorAll('audio')[0].querySelector('source').src.replace(/\/revision.*/, '')
                            audio2 = docEl.querySelector('#Chatter').parentElement.nextElementSibling.querySelectorAll('audio')[1].querySelector('source').src.replace(/\/revision.*/, '')
                        } catch( e ) {
                            console.log(sounds[indexEl])
                            audio2 = docEl.querySelector('#Chatter').parentElement
                                .nextElementSibling.nextElementSibling.nextElementSibling
                                .querySelectorAll('audio')[0].querySelector('source').src.replace(/\/revision.*/, '')
                        }

                        audio =[ 
                            {"file": audio1},
                            {"file": audio2}
                        ] 

                        hero.audio = audio
                    })








                    array.push(hero)

                    console.log(array)
                })
    })


                setTimeout( () => {
                    console.log(JSON.stringify(array))

                    fetch('http://localhost:3000/api/v1/heroes', {
                        method: 'POST',
                            headers: {
                                "Content-type": "application/json"
                            },
                            body:JSON.stringify(array)
                    })
                }, 5000)





}
