fabric.Object.prototype.objectCaching = true;

var canvas = new fabric.Canvas('c');
canvas.isDrawingMode = true;

canvas.on('before:path:created', function(opt) {
    var path = opt.path;
    var pathInfo = fabric.util.getPathSegmentsInfo(path.path);
    path.segmentsInfo = pathInfo;
    var pathLength = pathInfo[pathInfo.length - 1].length;
    var text = 'This is a demo of text on a path. This text should be small enough to fit in what you drawn.';
    var fontSize = 2.5 * pathLength / text.length;
    var text = new fabric.Text(text, { fontSize: fontSize, path: path, top: path.top, left: path.left });
    canvas.add(text);
});

canvas.on('path:created', function(opt) {
    canvas.remove(opt.path);
});

const download_btn = document.getElementById('download');
download_btn.addEventListener('click', ()=>{
    console.log("여기 되매??");
    const filename = 'canvas.png';
    const data = canvas.toDataURL();

    /*
    const blob = new Blob([data], {type: 'imge/png'});
    const path = window.URL.createObjectURL(blob);
    */

    const link = document.createElement('a');
    link.href = data;
    link.download = filename;
    link.click();
    link.remove();
});
