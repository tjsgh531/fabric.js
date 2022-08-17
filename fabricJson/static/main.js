const canvas = new fabric.Canvas("c");

function randomColor(){
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

const random_color = randomColor();
let rect = new fabric.Rect({
    top: 100,
    left: 100,
    width:100,
    height:100,
    fill : random_color,
    stroke: 'black',
    strokeWidth :4,
});

canvas.add(rect);
canvas.requestRenderAll();

const save_btn = document.getElementById('save_btn');
save_btn.addEventListener('click', ()=>{
    data = JSON.stringify(canvas);
    $.ajax({
        type:'POST',
        url: "/ajax/",
        data: data,
        headers:{
            'X-CSRFTOKEN' : '{{ csrf_token }}'
        },
        success:function(json){
            console.log("data pass success", json);
        },
        error : function(xhr, errmsg, err){
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
});
