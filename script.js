//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()

//主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()

//底部梯形
   ctx.beginPath()
   ctx.moveTo(150,350)
   ctx.lineTo(175,225)
   ctx.lineTo(225,225)
   ctx.lineTo(250,350)
   ctx.closePath()
   ctx.fillStyle="#c1cbd7"
   ctx.fill()
   ctx.strokeStyle="#8696a7"
   ctx.stroke()

//中間梯形
   ctx.beginPath()
   ctx.moveTo(165,225)
   ctx.lineTo(155,180)
   ctx.lineTo(245,180)
   ctx.lineTo(235,225)
   ctx.closePath()
   ctx.fillStyle="#8696a7"
   ctx.fill()
   ctx.strokeStyle="#8696a7"
   ctx.stroke()

//中間長方形
   ctx.beginPath()
   ctx.moveTo(175,180)
   ctx.lineTo(175,150)
   ctx.lineTo(225,150)
   ctx.lineTo(225,180)
   ctx.closePath()
   ctx.fillStyle="#c1cbd7"
   ctx.fill()
   ctx.strokeStyle="#8696a7"
   ctx.stroke()

//小梯形
   ctx.beginPath()
   ctx.moveTo(170,150)
   ctx.lineTo(160,120)
   ctx.lineTo(240,120)
   ctx.lineTo(230,150)
   ctx.closePath()
   ctx.fillStyle="#8696a7"
   ctx.fill()
   ctx.strokeStyle="#8696a7"
   ctx.stroke()

//小長方形
   ctx.beginPath()
   ctx.moveTo(175,120)
   ctx.lineTo(175,100)
   ctx.lineTo(225,100)
   ctx.lineTo(225,120)
   ctx.closePath()
   ctx.fillStyle="#c1cbd7"
   ctx.fill()
   ctx.strokeStyle="#8696a7"
   ctx.stroke()

//最上面塔
  ctx.beginPath()
  ctx.moveTo(195,100)
  ctx.lineTo(195,50)
  ctx.lineTo(205,50)
  ctx.lineTo(205,100)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//格子線1
  ctx.beginPath()
  ctx.moveTo(175,350)
  ctx.lineTo(200,225)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//格子線2
  ctx.beginPath()
  ctx.moveTo(200,350)
  ctx.lineTo(225,225)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//格子線3
  ctx.beginPath()
  ctx.moveTo(175,225)
  ctx.lineTo(200,350)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//格子線4
  ctx.beginPath()
  ctx.moveTo(200,225)
  ctx.lineTo(225,350)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//格子線5
  ctx.beginPath()
  ctx.moveTo(180,100)
  ctx.lineTo(190,120)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//6
  ctx.beginPath()
  ctx.moveTo(205,100)
  ctx.lineTo(215,120)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//7
  ctx.beginPath()
  ctx.moveTo(195,100)
  ctx.lineTo(180,120)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//8
  ctx.beginPath()
  ctx.moveTo(215,100)
  ctx.lineTo(205,120)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()

//9
  ctx.beginPath()
  ctx.moveTo(175,110)
  ctx.lineTo(225,110)
  ctx.closePath()
  ctx.fillStyle="#8696a7"
  ctx.fill()
  ctx.strokeStyle="#8696a7"
  ctx.stroke()


//小窗戶
  ctx.beginPath()
      ctx.arc(200,175,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(185,175)
      ctx.lineTo(215,175)
    ctx.closePath()
      ctx.fillStyle="white"
      ctx.fill()
      ctx.strokeStyle="8696a"
      ctx.stroke()

//旗子
ctx.beginPath()
        ctx.moveTo(200,50)
        ctx.lineTo(200,0 -mouse.y/3)
        ctx.lineTo(225,15 - (time%5)-mouse.y/3)
        ctx.lineTo(200,25-mouse.y/3)
      ctx.closePath()
      ctx.fillStyle="#965454"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke() 
  
//車子
    ctx.fillStyle="#d8caaf"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="#8696a7"
    ctx.fill()
    ctx.strokStyle = "#c7b8a1"
    ctx.stroke()

//確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})
