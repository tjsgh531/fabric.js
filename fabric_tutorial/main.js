let canvas = new fabric.Canvas('c');

const rect = new fabric.Rect({
    width : 200,
    height : 200,
    fill : 'pink',
    top : 200,
    left : 200,
    angle : 45,
});

canvas.add(rect);

rect.set({left:20, top:50 });
canvas.renderAll();

// Ellips / Line / Polygon / polyline /

const circle = new fabric.Circle({
    radius: 100,
    fill: 'green',
    left:100,
    top:100,
});

const triangle = new fabric.Triangle({
    width: 20,
    height:30, 
    fill:'blue',
    left: 50,
    top:50,
});

canvas.add(circle, triangle);

/* 속성들 
위치 : left right top bottom
면적 : height, width
렌더링 : fill, opacity, stroke, strikeWidth
사이즈 : scaleX, scaleY
회전 : angle,
상하좌우 반전 : flipX, flipY
비대칭 : skewX, skewY
*/
rect.set('fill', 'red');
rect.set({strokeWidth: 5, storke: 'rgba(100, 200, 200, 0.5)'});
rect.set('angle', 15).set('flipY', true);

/* fabric 객체 메뉴얼 함수 생성하기 */
/*
fabric.Image의 경우는 Html <img> 요소에 접근 하기위해
getElement/setElement 메서드가 필요할 수 있는데,
이런 것들을 구현할 수 있겠지요.
 */

fabric.Object.prototype.getAngleInRadians = function(){
    return this.get('angle') / 180 * Math.PI;
};

const rect2 = new fabric.Rect({ angle : 45});
console.log(rect2.getAngleInRadians());

const circle2 = new fabric.Circle({angle : 30, radius: 10});
console.log(circle.getAngleInRadians());

/* Canvas 내 객체 받아오기 + 지우기 */
console.log(canvas.item(0));
console.log(canvas.getObjects());
canvas.remove(rect);

/* Canvas 설정 */

const canvas2 = new fabric.Canvas('c2', {
    backgroundColor : "rgb(100, 100, 200)",
    selectionColor : 'blue',
    selectionLineWidth : 2,
});

canvas2.setBackgroundImage("./peace.jpg");

/* Canvas event(상호작용) */
canvas2.selection = false; // 그룹화(여러개 동시 선택)를 못하게 만듬
circle.set('selectable', false); // 그 개체를 마우스로 조작 못하게 만듬

// Cavas 전체를 마우스로 조작 못하게 막음
const staticCanvas = new fabric.StaticCanvas('c3');

staticCanvas.add(
    new fabric.Rect({
        width:100, height:200,
        left : 100, top:100,
        fill: 'yellow',
        angle:30,
    })
);

/*  Images */
const canvas4 = new fabric.Canvas('c4');
const imgElement = document.getElementById('my-image');
const imgInstance = new fabric.Image(imgElement, {
    left:100,
    top:100,
    angle:30,
    opacity: 0.85
});

canvas4.add(imgInstance);

fabric.Image.fromURL('./peace.jpg', function(oImg){
    oImg.scale(0.5).set('flipX', true);
    canvas4.add(oImg);
});

/* Paths */
// move, line, curve, arc
const canvas5 = new fabric.Canvas('c5');
const path = new fabric.Path('M 0 0 L 30 10 L 170 200 z');
path.set({ left:120, top: 120, stroke: 'black', strokeWidth: 4, fill:'white'});
canvas5.add(path);