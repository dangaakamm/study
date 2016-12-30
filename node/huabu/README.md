#canvas基础
##canvas 标签说明
1.属性 width height 用来指定canvas大小
2.默认大小为300*150，宽高不能设置在样式内

##js绘图
1.获得canvas对象

    var canvas=document.querySelects("canvas")
2.获得canvas2d对象
    
    var obj=canvas.getContext("2d")
3.进行各种2d图形的操作
    cobj.fillRect(x,y,w,h)
##对于canvas图像的修饰
1.对于填充的样式的修饰

    1.1  fillStyle  可以填充纯色值，也可以填充渐变色，也可以填充html对象
    1.2  createLinearGradient  用来创建线性渐变的对象，接受四个参数，分别是起始点的坐标x1,y1,以及结束点的坐标x2,y2,
    1.3  addColorStop（）  设置颜色以及停靠的位置，用来对象的调用，
    1.4  createRadiaGradient（x1,y1,r1,x2,y2,r2）  用来创建径向渐变的对象，接受六个参数，第一个圆和第二个园内的位置，大小,颜色以及停靠位置
    1.5  createPattern（imgobj,repeat|repeat-x|repeat-y） 将html中的图像设置为图形的背景，接受两个参数，第一个是对象，第二个是填充方式
2.对于线条的修饰

    2.1  lineWidth  用来设置线条的宽度 **默认单位是px**
    2.2  strokeStyle  用来设置线条的颜色
3.注意

    3.1  canvas里面的颜色设置可以用四种方式，分别为关键字的方式、十六进制的方式、rgb的方式、rgba的方式
    3.2  canvas坐标系统  元素的左上角为原点，y轴越下越大，x轴越右越大
    3.3  canvas线条的渲染方式由中心点向两周延伸
4.投影的设置
    
    4.1  分别用四个属性来设置投影的颜色，模糊级别，x，y的偏移量
    **shadowColor**   **shadowBlur**   **shadowoffsetX**  **shadowoffsetY**
  