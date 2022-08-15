const canvas = new fabric.Canvas('c');
fabric.Object.prototype.transparentCorners = false;

let padding = 0;

const file_input = document.getElementById('file');
let file_url;

file_input.addEventListener('change',()=>{
    let file = file_input.files[0];
    file_url = URL.createObjectURL(file); 
    
    fabric.Image.fromURL(file_url, function(img){
        img.scaleToWidth(100);
        let patternSourceCanvas = new fabric.StaticCanvas();
        patternSourceCanvas.add(img);
        patternSourceCanvas.renderAll();
    
        let pattern = new fabric.Pattern({
            source: patternSourceCanvas.getElement(),
            repeat: 'no-repeat',
        });
    
        let circle = new fabric.Circle({
            radius:150,
            fill : pattern,
            stroke: 'black',
            strokeWidth: 3,
            objectCaching: false,
        });
        
        canvas.centerObject(circle);
        canvas.add(circle);
        
        document.getElementById('img-width').oninput = function(){
            img.scaleToWidth(parseInt(this.value *5, 10));
            patternSourceCanvas.setDimensions({
                width: img.getScaledWidth() + padding,
                height: img.getScaledHeight() + padding,
            });
            canvas.requestRenderAll();
        };

        document.getElementById('img-angle').oninput = function(){
            img.set('angle', this.value*5);
            patternSourceCanvas.renderAll();
            canvas.requestRenderAll();
        };

        document.getElementById('img-padding').oninput = function () {
            padding = parseInt(this.value*5, 10);
            patternSourceCanvas.setDimensions({
                width: img.getScaledWidth() + padding,
                height: img.getScaledHeight() + padding,
            });
            canvas.requestRenderAll();
        };

        document.getElementById('img-offset-x').oninput = function () {
            pattern.offsetX = parseInt(this.value*5, 10);
            canvas.requestRenderAll();
        };

        document.getElementById('img-offset-y').oninput = function () {
            pattern.offsetY = parseInt(this.value*5, 10);
            canvas.requestRenderAll();
        };

        document.getElementById('img-repeat').onclick = function () {
            pattern.repeat = this.checked ? 'repeat' : 'no-repeat';
            canvas.requestRenderAll();
        };
    });
});