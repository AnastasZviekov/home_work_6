//2 options/ Option 1


hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow=destination.concat(native, hero);
rainbow=rainbow.reverse();
nameHero=`Richard`;

for (i=0; i<rainbow.length;i++) {
    if (rainbow[i]===`Ivan`) {
        rainbow[i]=`${nameHero}`
    }

    if (rainbow[i]===`Poltava`) {
        rainbow[i]=`Vain`
    }
}

indexofIn=rainbow.indexOf(`In`);
console.log(indexofIn);
rainbow.splice(indexofIn, 0, `Gave`, `Battle`);


colors=["red", "oranje", "yellow","green", "blue", "darkblue","blueviolet" ];

for (i=0; i<rainbow.length; i++) {
    rainbow[i]=`<div class="item"> <div class="round ${colors[i]}"></div> ${rainbow[i]}</div>`
}

console.log(rainbow);
document.write(`<div class="d_flex">${rainbow.join(" ")}</div>`);


//Option 2

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow=destination.concat(native, hero);
rainbow=rainbow.reverse();
nameHero=`Richard`;

rainbow.pop(`Poltava`);
rainbow.splice(5, 1, `${rainbow[0]}`);
rainbow.shift(rainbow[0]);
rainbow.unshift(`${nameHero}`);

for(i=0; i<rainbow.length;i++) {
    if (rainbow[i] === `York`) {
        rainbow[i + 1] = `Gave`;
    };
    if (rainbow[i] === `Gave`) {
        rainbow[i + 1] = `Battle`;
    };
}

rainbow. push( `In`,`Vain`)


console.log(rainbow);






