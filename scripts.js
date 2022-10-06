
let colorArray = [
    'red',
    'teal',
    'yellow',
    'pink',
    'purple',
    'cyan',
    'green',
    'blue',
    'red',
    'teal',
    'yellow',
    'pink',
    'purple',
    'cyan',
    'green',
    'blue',
]

var selectedColor = null;

let cards = document.querySelectorAll('.cards');

cards.forEach((card) => {
    card.addEventListener('click', function(e) {
        document.getElementById('result').innerText = '';
        this.style.backgroundColor = this.id
        checkColor(this.id)
    })
})

let shuffleColors = () => {
    lent = colorArray.length;
    for (let i = lent -1; i >= 0; i--) {
        let rndm = Math.floor(Math.random() * colorArray.length);
        const color = colorArray[rndm];
        cards[i].setAttribute('id', color)
        colorArray.splice(rndm, 1)
    }
}
shuffleColors();

let reset = () => {
    cards.forEach((card) => {
        card.style.backgroundColor = '#e5e7eb'
        selectedColor = null;
    })
    document.getElementById('result').innerText = ''
}

let checkColor = (color) => {
    console.log(color);
    if (selectedColor != null) {
        if (selectedColor !== color) {
            document.getElementById('result').innerText = "Failed! Try Again."
            // location.reload();
            setTimeout(() => {
                reset();
                shuffleColors();
            }, 2000)
        }else{
            selectedColor = null;
        }
    }else{
        selectedColor = color;
    }
}

