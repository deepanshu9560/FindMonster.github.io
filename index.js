import { arrObj } from './monster.js';

document.querySelector('.search-field').addEventListener('keyup', function (e) {
    let searchInp = e.currentTarget.value.toLowerCase();
    let findMonster = document.querySelectorAll('.monster');
    console.log(findMonster)
    for (let monster of findMonster) {
        let name = monster.children[1].innerText.toLowerCase();
        let email = monster.children[2].innerText.toLowerCase();

        if (name.includes(searchInp) || email.includes(searchInp)) {
            monster.style.display = 'flex';
        } else {
            monster.style.display = 'none';
        }
    }
})

// let searchInp = document.querySelector('.search-field').value.toLowerCase();
// let findMonsterss = document.querySelectorAll('.monster');
// console.log(findMonsterss)

// for(let monsterM of findMonsterss){
//     console.log(monsterM)
//     let name = monsterM.children[1].innerText.toLowerCase();
//     if(name.includes(searchInp)){
//         console.log('ok')
//     }else{
//         document.write('404')
//     }
// }

for (let monsterT of arrObj) {
    // console.log(monsterT);
    monster(monsterT);
}

let dabba = document.querySelectorAll('.monster');
dabba.forEach((els) => {
    if (els.style.backgroundColor.includes('rgb(0, 0, 0)') || els.style.backgroundColor.includes('#000000')) {
        // console.log(els.childNodes);
        // console.log(els.children)
        els.children[1].style.color = '#ffffff';
        els.childNodes[2].style.color = '#ffffff';
    }
})

monster();
function monster(efe) {
    let monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';

    let img = document.createElement('img');
    img.className = 'roboImage';
    img.src = `https://robohash.org/${efe.id}`;
    img.alt = 'robo'

    let name = document.createElement('p');
    name.className = 'name';
    name.innerText = `${efe.name}`;

    let email = document.createElement('p')
    email.className = 'email';
    email.innerText = `${efe.email}`;

    monsterDiv.append(img, name, email);
    document.querySelector('.monsters').append(monsterDiv)

    let arr = ['#000000', '#993535', '#22b9b9', '#f3ff00', '#ff0000', '#ef00ff', '#0043ff', '#00ffdc', '#00ff14'];

    let a = Math.floor(Math.random() * arr.length);
    // console.log(a)
    let b = arr[a];
    // console.log(b);
    monsterDiv.style.backgroundColor = b;
    monsterDiv.style.border = `2px solid ${b}`

}

