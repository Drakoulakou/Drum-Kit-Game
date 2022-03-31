// sounds
const crash = document.getElementById("sound-crach");
const kick = document.getElementById("sound-kick");
const snare = document.getElementById("sound-snare");
const tom1 = document.getElementById("sound-tom1");
const tom2 = document.getElementById("sound-tom2");
const tom3 = document.getElementById("sound-tom3");
const tom4 = document.getElementById("sound-tom4");

// buttons
const buttonCrush = document.querySelector(".w.drum");
const buttonKick = document.querySelector(".a.drum");
const buttonSnare = document.querySelector(".s.drum");
const buttontom1 = document.querySelector(".d.drum");
const buttontom2 = document.querySelector(".j.drum");
const buttontom3 = document.querySelector(".k.drum");
const buttontom4 = document.querySelector(".l.drum");

// listeners
buttonCrush.addEventListener("click", crashPlay)
buttonKick.addEventListener("click", kickPlay)
buttonSnare.addEventListener("click", snarePlay)
buttontom1.addEventListener("click", tom1Play)
buttontom2.addEventListener("click", tom2Play)
buttontom3.addEventListener("click", tom3Play);
buttontom4.addEventListener("click", tom4Play)

document.addEventListener('keydown', function(event) {

    if(event.key === 'w') { crashPlay(); animate('w')}
    if(event.key === 'a') { kickPlay(); animate('a')}
    if(event.key === 's') { snarePlay(); animate('s')}
    if(event.key === 'd') { tom1Play(); animate('d')}
    if(event.key === 'j') { tom2Play(); animate('j')}
    if(event.key === 'k') { tom3Play(); animate('k')}
    if(event.key === 'l') { tom4Play(); animate('l')}
});

function kickPlay(){
    kick.currentTime=0;
    kick.play();
}

function tom1Play(){
    tom1.currentTime=0;
    tom1.play();
}

function tom2Play(){
    tom2.currentTime=0;
    tom2.play();
}

function tom3Play(){
    tom3.currentTime=0;
    tom3.play();
}

function tom4Play(){
    tom4.currentTime=0;
    tom4.play();
}

function snarePlay(){
    snare.currentTime=0;
    snare.play();
}

function crashPlay(){
    crash.currentTime=0;
    crash.play();
}

function animate(letter) {
    document.querySelector('.' + letter).classList.toggle('pressed')

    setTimeout(function(){
        document.querySelector('.' + letter).classList.toggle('pressed')
    },100);
}

// CLEAN CODE

// var configuration = [
//     { sound: 'sound-crach', element: '.w.drum', button: 'w'},
//     { sound: 'sound-kick', element: '.a.drum', button: 'a'},
//     { sound: 'sound-snare', element: '.s.drum', button: 's'},
//     { sound: 'sound-tom1', element: '.d.drum', button: 'd'},
//     { sound: 'sound-tom2', element: '.j.drum', button: 'j'},
//     { sound: 'sound-tom3', element: '.k.drum', button: 'k'},
//     { sound: 'sound-tom4', element: '.l.drum', button: 'l'},
// ];

// for (var i = 0; i < configuration.length-1; i++) {
//     const sound = document.getElementById(configuration[i].sound);
//     const button= document.querySelector(configuration[i].element);
//     button.addEventListener("click", function() { playSound(sound); animate(configuration[i].button) })
//     pressButton(i, sound);
// }

// function pressButton(i, sound) {
//     document.addEventListener('keydown', function(event) {
//         if(event.key === configuration[i].button) { playSound(sound); animate(event.key) }
//     });
// }

// function playSound(instrument){
//     instrument.currentTime=0;
//     instrument.play();
// }