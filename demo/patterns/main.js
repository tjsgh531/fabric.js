
const canvas =new fabric.Canvas('c');
//fabric.Object.prototype.transparentCorners = false;

function loadPattern(url){
    fabric.util.loadImage(url, function(img){
        text.set('fill', new fabric.Pattern({
            source: img,
            repeat: 'no-repeat'
        }));
        shape.set('fill', new fabric.Pattern({
            source: img,
            repeat: 'no-repeat'
        }));
        canvas.renderAll();
    });
}

let text = new fabric.Text('Honey, \nI\'m subtle',{
    fontSize : 250,
    left: 0,
    top:0,
    lineHeight:1,
    originX: 'left',
    fontWeight: 'bold',
    statefullCache: true,
    scaleX: 0.4,
    scaleY : 0.4
});

let shape = new fabric.Rect({
    width: 200,
    height: 100,
    left: 10,
    top: 300,
    stroke: 'black',
    strokeWidth:3,
});

canvas.add(text, shape);

let file = document.querySelector('.img_file');
file.addEventListener('change', ()=>{
    let file_url = URL.createObjectURL(file.files[0]);
    loadPattern(file_url);
});

