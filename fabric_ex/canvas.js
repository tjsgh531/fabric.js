class draw{
    constructor(){
        this.canvas = new fabric.Canvas('c');
        this.current_obj = null;
        
        this.selectShape();
        this.selectColor();
        this.selectSize();
        this.draw();

        this.img_file = document.querySelector('#image_file');
        this.img_file.addEventListener('change',()=>{
            this.fileImage.bind(this);
        });

    }
    draw(){
        this.canvas.clear();
        switch(this.selectShape.dataset.shape){
            case "circle":
                this.drawCircle(this.selectedSize, this.selectedColor.dataset.color);
                break;
            case "rectangle":
                this.drawRectangle(this.selectedSize, this.selectedColor.dataset.color);
                break;
            case "triangle":
                this.drawTriangle(this.selectedSize, this.selectedColor.dataset.color);
                break;
        }
    }

    drawCircle(size, color) {
        let radius = 50;
        let posX = 250;
        let posY = 250;

        switch(size){
            case '1':
                radius = 50;
                break;
            case '2':
                radius = 80;
                break;
            case '3':
                radius = 120;
                break;
        }

        posX -= radius;
        posY -= radius; 

        const circle = new fabric.Circle({
            radius: radius,
            fill: color,
            left: posX,
            top: posY,
        });
        this.canvas.add(circle);
    }

    drawTriangle(size, color){
        let width = 100;
        let height = 100;
        let posX = 250;
        let posY = 250;

        switch(size){
            case '1':
                width = 100;
                height = 100;
                break;
            case '2' :
                width = 160;
                height = 160;
                break;
            case '3':
                width = 240;
                height = 240;
                break;
        }

        posX -= width/2;
        posY -= height/2;

        const triangle = new fabric.Triangle({
            width: width,
            height : height,
            fill: color,
            left: posX,
            top:posY,
        });

        this.canvas.add(triangle);
    }

    drawRectangle(size, color){
        let width = 100;
        let height = 100;
        let posX = 250;
        let posY = 250;

        switch(size){
            case '1':
                width = 100;
                height = 100;
                break;
            case '2' :
                width = 160;
                height = 160;
                break;
            case '3':
                width = 240;
                height = 240;
                break;
        }

        posX -= width/2;
        posY -= height/2;

        const Rectangle = new fabric.Rect({
            width: width,
            height: height,
            left: posX,
            top: posY,
            fill: color,
        });

        this.canvas.add(Rectangle);
    }

    drawImage(url){
        console.log(url);
        new fabric.Image.fromURL(`${url}`, function(oImg){
            this.canvas.add(oImg);
        });
    }

    selectShape(){
        this.selectShape = document.querySelector('.shape_box_active');
        const shapeBoxes = document.querySelectorAll('.shape_box');
        shapeBoxes.forEach(element => {
            element.addEventListener('click', ()=>{
                this.selectShape.classList.remove('shape_box_active');
                element.classList.add('shape_box_active');
                this.selectShape = element;
                this.draw();
            });
        });
    }

    selectColor(){
        this.selectedColor = document.querySelector('.color_box_active');
        const colorBoxes = document.querySelectorAll('.color_box');
        colorBoxes.forEach(element => {
            element.addEventListener('click', ()=>{
                this.selectedColor.classList.remove('color_box_active');
                element.classList.add('color_box_active');
                this.selectedColor = element;
                this.draw();
            });
        });
    }

    selectSize(){
        const colorBoxes = document.querySelectorAll('.size_box');
        colorBoxes.forEach(element => {
            element.addEventListener('change',(e)=>{
                if(element.checked){
                    this.selectedSize = element.dataset.size
                }
                this.draw();
            });
        });
    }

    fileImage(){
        let file_url = this.img_file.files[0];
        let pic_url = URL.createObjectURL(file_url);
        new fabric.Image.fromURL(`${pic_url}`, function(oImg){
            this.canvas.add(oImg);
        });
    }
}

window.onload = () =>{
    const draw_tool = new draw()
}