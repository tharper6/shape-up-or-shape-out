const MAX_VALUE = 600
const getRandomValue = (max, min) => Math.floor(Math.random() * (max - min));



class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div class="newShape"></div>')
        this.render();
        this.remove();
    }
    // function to draw shape to the DOM
    render() {
        $('#shape-container').append(this.div)
        this.top = getRandomValue(MAX_VALUE, this.height)
        this.left = getRandomValue(MAX_VALUE, this.width)
        this.div.css({
            height: this.height,
            width: this.width,
            top: this.top,
            left: this.left,
        })
    }

    remove() {
        this.div.dblclick(() => {
            this.div.remove();
        })
    }
}

// when calling super, you have to have the same amount of properties as the parent

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.css('backgroundColor', '#f50c00')
        this.div.click(() => {
            return this.decribe();
        })
    }
    decribe() {
        let s = $('.square-side').val();
        $('.span-name').html('Square')
        $('.span-height').html(s)
        $('.span-width').html(s)
        $('.span-area').html(s * s)
        $('.span-perimeter').html((s * 2) + (s * 2))
        $('.span-radius').html('N/A')
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.css('backgroundColor', '#00ff80')
        this.div.click(() => {
            return this.decribe();
        })
    }
    decribe() {
        let h = $('.rectangle-height').val();
        let w = $('.rectangle-width').val();
        $('.span-name').html('Rectangle')
        $('.span-height').html(h)
        $('.span-width').html(w)
        $('.span-area').html(h * w)
        $('.span-perimeter').html((h * 2) + (w * 2))
        $('.span-radius').html('N/A')
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2)
        this.div.css({
            backgroundColor: '#f700ff',
            borderRadius: '50%'
        })
        this.div.click(() => {
            return this.decribe();
        })
    }
    decribe() {
        let r = $('.circle-radius').val();
        $('.span-name').html('Circle')
        $('.span-height').html('N/A')
        $('.span-width').html('N/A')
        $('.span-area').html((r * r) * (Math.PI))
        $('.span-perimeter').html((r * 2) * (Math.PI))
        $('.span-radius').html(((r * 2) * (Math.PI)) / (2 * Math.PI))
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.addClass('createTriangle')
        this.div.click(() => {
            return this.decribe();
        })
    }
    decribe() {
        let h = $('.triangle-height').val();
        $('.span-name').html('Triangle')
        $('.span-height').html(h)
        $('.span-width').html(h)
        $('.span-area').html(h * w)
        $('.span-perimeter').html((h + h) + h)
        $('.span-radius').html('N/A')
    }
}

$('.square-btn').click(() => {
    let s = $('.square-side').val();
    new Square(s, s)
})

$('.rectangle-btn').click(() => {
    let h = $('.rectangle-height').val();
    let w = $('.rectangle-width').val();
    new Rectangle(h, w)
})

$('.circle-btn').click(() => {
    let r = $('.circle-radius').val();
    new Circle(r, r)
})

$('.triangle-btn').click(() => {
    let h = $('.triangle-height').val()
    new Triangle(h, h)
})