const canvas = new fabric.Canvas('c');
const fonts = ["DynaPuff", "Silkscreen","Nanum Pen Script", "Jua"]

const textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
    left:50,
    top:50,
    width : 150,
    fontSize: 20
});
canvas.add(textbox).setActiveObject(textbox);
fonts.unshift("times New Roman");

const font_selector = document.getElementById('font_selector');
fonts.forEach(function(font){
    let option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    font_selector.appendChild(option);
});

font_selector.onchange = function(){
    if (this.value !== 'Times New Roman'){
        loadAndUse(this.value);
    }else{
        canvas.getActiveObject().set("fontFamily", this.value);
        canvas.requestRenderAll();
    }
};

function loadAndUse(font){
    let myfont = new FontFaceObserver(font);
    myfont.load().then(function(){
        canvas.getActiveObject().set("fontFamily", font);
        canvas.requestRenderAll();
    }).catch(function(e){
        console.log(e);
        alert('font loading failed' + font);
    });
}