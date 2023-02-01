let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissor = document.getElementsByClassName('scissor')[0];
let leftText = document.getElementById('left');
let rightText = document.getElementById('right');
let initScore = 0;
let score = document.getElementById('score_display');

let rock2 = document.getElementsByClassName('rock')[1];
let paper2 = document.getElementsByClassName('paper')[1];
let scissor2 = document.getElementsByClassName('scissor')[1];
let e = ((window.outerWidth) / 2) + 350;

let pc_appear = document.getElementById('appear-1');
// console.log(pc_appear)
let h1 = document.getElementsByClassName('h1')[0];
let rules_show = document.getElementsByClassName('rules-div')[0];

let line1 = document.getElementsByClassName('line-1')[0];
let line2 = document.getElementsByClassName('line-2')[0];
let line3 = document.getElementsByClassName('line-3')[0];

let left = document.getElementById('left');

let middle = document.getElementsByClassName('middle')[0];

const arrayPc = [rock2, paper2, scissor2];
let ele;

function hover() {
    scissor.classList.add('HoverClass1');
    rock.classList.add('HoverClass1');
    paper.classList.add('HoverClass1');

}
hover();

function scissorFun() {
    rock.style.visibility = 'hidden';
    paper.style.visibility = 'hidden';
    scissor.setAttribute( "onClick", "javascript: Boo()")

    line1.style.visibility = 'hidden';
    line2.style.visibility = 'hidden';
    line3.style.visibility = 'hidden';

    leftText.style.visibility = 'visible';
    rightText.style.visibility = 'visible';

    scissor.classList.remove('HoverClass1');
    rock.classList.remove('HoverClass1');
    paper.classList.remove('HoverClass1');
    left.innerText = 'YOU PICKED';

    random1();
}

function rockFun() {
    scissor.style.visibility = 'hidden';
    paper.style.visibility = 'hidden';
    rock.setAttribute( "onClick", "javascript: Boo()")

    line1.style.visibility = 'hidden';
    line2.style.visibility = 'hidden';
    line3.style.visibility = 'hidden';

    leftText.style.visibility = 'visible';
    rightText.style.visibility = 'visible';

    scissor.classList.remove('HoverClass1');
    rock.classList.remove('HoverClass1');
    paper.classList.remove('HoverClass1');

    left.innerText = 'YOU PICKED';

    random1();
}

function paperFun() {
    rock.style.visibility = 'hidden';
    scissor.style.visibility = 'hidden';
    paper.setAttribute( "onClick", "javascript: Boo()")

    line1.style.visibility = 'hidden';
    line2.style.visibility = 'hidden';
    line3.style.visibility = 'hidden';

    leftText.style.visibility = 'visible';
    rightText.style.visibility = 'visible';

    scissor.classList.remove('HoverClass1');
    rock.classList.remove('HoverClass1');
    paper.classList.remove('HoverClass1');
    
    left.innerText = 'YOU PICKED';

    random1();
}


function random1() {

    const random = Math.floor(Math.random() * arrayPc.length);
    ele = arrayPc[random]
    // console.log(ele)

    //Rock selected by Player
    if (scissor.style.visibility === 'hidden' && paper.style.visibility === 'hidden') {

        rock.style.position = 'relative';
        rock.style.top = '2rem';
        rock.style.right = '21rem'

        ele.style.position = 'absolute';
        ele.style.left = `${e - 100}px`;
        ele.style.top = '25rem';

        if (ele === paper2) {
            ele.style.position = 'absolute';
            ele.style.left = `${e - 215}px`;
            ele.style.top = '28rem';
        }

        middle.style.position = 'absolute';
        middle.style.left = `${e - 365}px`;
        middle.style.top = '22rem';

        if (ele === scissor2) {

            h1.innerText = 'YOU WIN AGAINST PC';
            rock.classList.add('HoverClass2');
            initScore += 1;
            score.innerText = initScore;
        } else if (ele === rock2) {
            h1.innerText = 'DRAW';
        } else {

            h1.innerText = 'YOU LOSE AGAINST PC';
            ele.classList.add('HoverClass2');
        }
        ele.style.visibility = 'visible';
        middle.style.visibility = 'visible';

    }
    //Scissor selected by Player
    else if (rock.style.visibility === 'hidden' && paper.style.visibility === 'hidden') {

        scissor.style.position = 'relative';
        scissor.style.top = '2rem';
        scissor.style.right = '4rem'

       
        ele.style.position = 'absolute';
        ele.style.left = `${e - 100}px`;
        ele.style.top = '25rem';

        if (ele === paper2) {
            ele.style.position = 'absolute';
            ele.style.left = `${e - 215}px`;
            ele.style.top = '28rem';
        }

        middle.style.position = 'absolute';
        middle.style.left = `${e - 365}px`;
        middle.style.top = '22rem';

        if (ele === scissor2) {


            h1.innerText = 'DRAW';
        } else if (ele === rock2) {

            h1.innerText = 'YOU LOSE AGAINST PC';
            ele.classList.add('HoverClass2');
        } else {

            h1.innerText = 'YOU WIN AGAINST PC';
            scissor.classList.add('HoverClass2');
            initScore += 1;
            score.innerText = initScore;
        }
        ele.style.visibility = 'visible';
        middle.style.visibility = 'visible';

    }
    //Paper selected by Player
    else {

        paper.style.position = 'relative';
        paper.style.top = '-9.6rem';
        paper.style.left = '-10.2rem'

        ele.style.position = 'absolute';
        ele.style.left = `${e - 100}px`;
        ele.style.top = '25rem';

        if (ele === paper2) {
            ele.style.position = 'absolute';
            ele.style.left = `${e - 215}px`;
            ele.style.top = '28rem';
        }

        middle.style.position = 'absolute';
        middle.style.left = `${e - 365}px`;
        middle.style.top = '22rem';

        if (ele === scissor2) {
            h1.innerText = 'YOU LOSE AGAINST PC';
            ele.classList.add('HoverClass2');
        } else if (ele === rock2) {

            h1.innerText = 'YOU WIN AGAINST PC';
            paper.classList.add('HoverClass2');
            initScore += 1;
            score.innerText = initScore;
        } else {

            h1.innerText = 'DRAW';
        }
        ele.style.visibility = 'visible';
        middle.style.visibility = 'visible';

    }

    return ele;

}

function playAgain() {
    rock.style.visibility = 'visible';
    paper.style.visibility = 'visible';
    scissor.style.visibility = 'visible';
    middle.style.visibility = 'hidden';

    line1.style.visibility = 'visible';
    line2.style.visibility = 'visible';
    line3.style.visibility = 'visible';

    leftText.style.visibility = 'hidden';
    rightText.style.visibility = 'hidden';

    scissor.classList.remove('HoverClass1');
    scissor.classList.add('HoverClass1');
    scissor.classList.remove('HoverClass2');

    rock.classList.remove('HoverClass1');
    rock.classList.add('HoverClass1');
    rock.classList.remove('HoverClass2');

    paper.classList.remove('HoverClass1');
    paper.classList.add('HoverClass1');
    paper.classList.remove('HoverClass2');

    scissor2.classList.remove('HoverClass2');
    rock2.classList.remove('HoverClass2');
    paper2.classList.remove('HoverClass2');

    ele.style.visibility = 'hidden';

    scissor.style.top = '0rem'
    scissor.style.right = '0rem'
    scissor.setAttribute( "onClick", "javascript: scissorFun()");

    rock.style.top = '0rem'
    rock.style.right = '0rem'
    rock.setAttribute( "onClick", "javascript: rockFun()");

    paper.style.top = '0rem'
    paper.style.right = '0rem'
    paper.style.left = '1rem'
    paper.style.bottom = '0rem'
    paper.setAttribute( "onClick", "javascript: paperFun()");
}

function rules() {
    rules_show.style.visibility = 'visible'
    
}

function close_rules() {
    rules_show.style.visibility = 'hidden'
    
}





