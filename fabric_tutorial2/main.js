/* 애니메이션 */
const canvas = new fabric.Canvas('c');

const rect = new fabric.Rect({
    width: 100,
    height: 100,
    fill: 'pink',
});
canvas.add(rect);

rect.animate('angle', 45, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 3000,
    easing: fabric.util.ease.easeOutBounce
});

rect.animate('left', '+=100', {
    onChange: canvas.renderAll.bind(canvas)
});

/* 이미지 필터 */
const canvas2 = new fabric.Canvas('c2');

fabric.Image.fromURL('peace.jpg', function(img){
    img.filters.push(
        new fabric.Image.filters.Grayscale(),
        new fabric.Image.filters.Sepia(),
        new fabric.Image.filters.Brightness({ brightness:0}),
    );
    img.applyFilters()
    canvas2.add(img);
});

/* 그라디언트 */
const canvas3 = new fabric.Canvas('c3');

const circle = new fabric.Circle({
    left: 100,
    top : 100,
    radius : 50,
});
canvas3.add(circle);

circle.set('fill', new fabric.Gradient({
    type: 'linear',
    gradientUnits: 'pixels', // or 'percentage'
    coords: { x1: 0, y1: 0, x2: 50, y2: 0 },
    colorStops:[
        { offset: 0, color: 'red' },
        { offset: 1, color: 'pink'}
    ]
}));

/* 텍스트 */
// Multiline support : 몰?루 
// Text alignment : Left, Center, right 정렬기능 제공
// Text background : 백그라운드 역시 텍스트 정렬을 지원합니다. 
// Text decoration : 텍스트 장식 지원
// Line height : 멀티 라인에 대한 높이 간격 설정
// Char spacing : 문자 간격 설정 
// Subranges : 텍스트 객체 색상 및 속성 지정 가능?!? 
// Multibyte : 이모티콘
// On canvas editing : 대화형 클래스를 통해 캔버스에서 직접 편집이 가능?
const canvas4 = new fabric.Canvas('c4');

const text = new fabric.Text('hello world', { 
    left : 100,
    top: 100,
    fontFamily: 'Comic Sans',
    fontSize: 40,
    fontWeight: 900,
    underline: true,
    linethrough: true,
    overline: true,
    shadow: 'rgba(0,0,0,0.2) 0 0 5px',
    fontStyle:'italic',
    stroke: '#ff1318',
    strokeWidth: 2,
    textAlign: 'right',
    lineHeight: 3,
    textBackgroundColor: 'rgb(0, 200, 0)'
});
canvas4.add(text);

/* Event */
const canvas5 = new fabric.Canvas('c5');
canvas5.on('mouse:down', function(options){
    console.log(options.e.clientX, options.e.clientY);
});

const rect2 = new fabric.Rect({
    width: 100, height: 50, fill: 'green'
});

canvas5.add(rect2);

rect2.on('selected', function(){
    console.log('selected a rectangle');
});

const circle2 = new fabric.Circle({
    radius: 75, 
    fill: 'blue',
});

canvas5.add(circle2);

circle2.on('selected', function(){
    console.log('selected a circle');
});