</script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js">
{
  "@context": "http://schema.org",
  "@type": "Article",
  "name": "Python Getting Started",
  "headline": "Python Getting Started",
  "datePublished": "2018-09-11 11:00:00+08:00",
  "dateModified": "",
  "author": {
    "@type": "Person",
    "name": "yen",
    "url": "https://chiamingyen.github.io/cmsimfly/blog/author/yen.html"
  },
  "image": "https://chiamingyen.github.io/cmsimfly/blog/theme/images/post-bg.jpg",
  "url": "https://chiamingyen.github.io/cmsimfly/blog/2018-Fall-Python-Getting-Started.html",
  "description": "以下程式架構取自 http://lab.kmol.info/blog/brython-programming-environment.html, 使用 static/py/ 目錄中的 ace.py 程式定義. canvas { border: 1px solid..."
}
</script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushJScript.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushPython.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushXml.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushCpp.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushCSharp.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushLua.js">
	(function(){
		var corecss = document.createElement('link');
		var themecss = document.createElement('link');
		var corecssurl = "./../data/syntaxhighlighter/shCore.css";
		if ( corecss.setAttribute ) {
				corecss.setAttribute( "rel", "stylesheet" );
				corecss.setAttribute( "type", "text/css" );
				corecss.setAttribute( "href", corecssurl );
		} else {
				corecss.rel = "stylesheet";
				corecss.href = corecssurl;
		}
		document.getElementsByTagName("head")[0].insertBefore( corecss, document.getElementById("syntaxhighlighteranchor") );
		var themecssurl = "./../data/syntaxhighlighter/shThemeDefault.css?ver=3.0.9b";
		if ( themecss.setAttribute ) {
				themecss.setAttribute( "rel", "stylesheet" );
				themecss.setAttribute( "type", "text/css" );
				themecss.setAttribute( "href", themecssurl );
		} else {
				themecss.rel = "stylesheet";
				themecss.href = themecssurl;
		}
		//document.getElementById("syntaxhighlighteranchor").appendChild(themecss);
		document.getElementsByTagName("head")[0].insertBefore( themecss, document.getElementById("syntaxhighlighteranchor") );
	})();
	SyntaxHighlighter.config.strings.expandSource = '+ expand source';
	SyntaxHighlighter.config.strings.help = '?';
	SyntaxHighlighter.config.strings.alert = 'SyntaxHighlighter\n\n';
	SyntaxHighlighter.config.strings.noBrush = 'Can\'t find brush for: ';
	SyntaxHighlighter.config.strings.brushNotHtmlScript = 'Brush wasn\'t configured for html-script option: ';
	SyntaxHighlighter.defaults['pad-line-numbers'] = false;
	SyntaxHighlighter.defaults['toolbar'] = false;
	SyntaxHighlighter.all();
</script>
<script type="text/javascript">
init_mathjax = function() {
    if (window.MathJax) {
        // MathJax loaded
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
            },
            displayAlign: 'left', // Change this to 'center' to center equations.
            "HTML-CSS": {
                styles: {'.MathJax_Display': {"margin": 0}}
            }
        });
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}
init_mathjax();
</script>

<script type="text/javascript" src="./../static/ace/filereader.js"></script>

<script type="text/javascript" src="./../static/brython_stdlib.js"></script>

<!-- PrairieDraw.js 為延伸 sylvester.js 的 html5 canvas 繪圖應用程式庫 https://github.com/martin70/PrairieDraw.js -->

<script src="./../static/sylvester/PrairieDraw.js">
window.onload=function(){
brython({debug:1, pythonpath:['./../static']});
}
</script>

<script src="./../static/ace/ext-language_tools.js" type="text/javascript" charset="utf-8"></script>

<script src="./../static/ace/snippets/python.js" type="text/javascript" charset="utf-8">
function doSave(storage_id, filename){
    var blob = new Blob([localStorage[storage_id]], {type: "text/plain;charset=utf-8"});
    filename = document.getElementById(filename).value
    saveAs(blob, filename+".py");
}

from browser import document as doc
import ace

# Brython 3.3.4 內建的 container 名稱為  'container' 且 turtle 輸出為 svg 必須使用 div 訂定 id
Ace = ace.Editor(editor_id="kw_editor", console_id="kw_console", container_id="kw__container", storage_id="kw_py_src" )

Ace.editor.setValue('''# 導入 sys 模組
import sys
# 導入 keyword 模組
import keyword

# 利用 sys 模組中的 version_info 印出 Python 版次
print("Python version: ", sys.version_info)
# 利用 keyword 模組中的 kwlist 印出關鍵字
print("Python keywords: ", keyword.kwlist)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['kw_run'].bind('click', Ace.run)
doc['kw_show_console'].bind('click', Ace.show_console)
doc['kw_clear_console'].bind('click', Ace.clear_console)

from browser import document as doc
import ace

Ace = ace.Editor(editor_id="editor", console_id="console", container_id="first_container", storage_id="py_src" )

Ace.editor.setValue('''#ex1 簡單的 for 迴圈範例
for i in range(10):
    print(i)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['run'].bind('click', Ace.run)
doc['show_console'].bind('click', Ace.show_console)
doc['clear_console'].bind('click', Ace.clear_console)

from browser import document as doc
import ace

Ace = ace.Editor(editor_id="fun_editor", console_id="fun_console", container_id="fun_container", storage_id="fun_py_src" )

Ace.editor.setValue('''# 定義函式
def square_of_x(x):
    return x*x

# 呼叫函式
y = square_of_x(3)
# 列印 y 對應內容
print(y)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['fun_run'].bind('click', Ace.run)
doc['fun_show_console'].bind('click', Ace.show_console)
doc['fun_clear_console'].bind('click', Ace.clear_console)

from browser import document as doc
import ace

Ace = ace.Editor(editor_id="by_editor", console_id="by_console", container_id="by_container", storage_id="by_py_src" )

Ace.editor.setValue('''# First of all, the import of some libraries
from browser import document as doc
from browser import html

# All the elements will be inserted in the div with the "container" id
container = doc['by_container']

# We create a new div element
newdiv = html.DIV(id = "new-div")
# Now we add some style
newdiv.style = {"padding": "5px", 
               "backgroundColor": "#ADD8E6"}

# Now, lets add a table with a column with numbers and a
# column with a word on each cell
text = "Brython is really cool"
textlist = text.split()
table = html.TABLE()
for i, word in enumerate(textlist):
    table <= html.TR(html.TD(i + 1) + 
                     html.TD(word))
# Now we add some style to the table
table.style = {"padding": "5px", 
               "backgroundColor": "#aaaaaa",
               "width": "100%"}
# Now we add the table to the new div previously created
newdiv <= table + html.BR()

# a form? why not?
form = html.FORM()
input1 = html.INPUT(type="text", name="firstname", value="First name")
input2 = html.INPUT(type="text", name="lastname", value="Last name")
input3 = html.BUTTON("Button with no action!")
form <= input1 + html.BR() + input2 + html.BR() + input3

newdiv <= form + html.BR()

# Finally, we will add something more 'HTML5istic', a canvas with
# a color gradient in the newdiv previously created and below the form
canvas = html.CANVAS(width = 300, height = 300)
#canvas.style = {"width": "100%"}
ctx = canvas.getContext('2d')
ctx.rect(0, 0, 300, 300)
grd = ctx.createRadialGradient(150, 150, 10, 150, 150, 150)
grd.addColorStop(0, '#8ED6FF')
grd.addColorStop(1, '#004CB3')
ctx.fillStyle = grd
ctx.fill()

newdiv <= canvas
# And finally we append the newdiv element
# to the parent, in this case the div with the "container" id
container <= newdiv
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['by_run'].bind('click', Ace.run)
doc['by_show_console'].bind('click', Ace.show_console)
doc['by_clear_console'].bind('click', Ace.clear_console)
doc['by_clear_container'].bind('click', Ace.clear_container)

from browser import document as doc
import ace

Ace = ace.Editor(editor_id="clock_editor", console_id="clock_console", container_id="clock_container", storage_id="clock_py_src" )

Ace.editor.setValue('''# First of all, the import of some libraries
import time
import math
import datetime
from browser import document as doc
import browser.timer
from browser import html

sin,cos = math.sin,math.cos
width,height = 250,250 # canvas dimensions
ray = 100 # clock ray

# All the elements will be inserted in the div with the "container" id
container = doc['clock_container']

# We create a new div element
newdiv = html.DIV(id = "new-div")
# Now we add some style
newdiv.style = {"padding": "5px", 
               "backgroundColor": "#ADD8E6"}

canvas = html.CANVAS(width = width, height = height)
#canvas.style = {"width": "100%"}
ctx = canvas.getContext('2d')

def needle(angle,r1,r2,color="#000000"):
    # draw a needle at specified angle in specified color
    # r1 and r2 are percentages of clock ray
    x1 = width/2-ray*cos(angle)*r1
    y1 = height/2-ray*sin(angle)*r1
    x2 = width/2+ray*cos(angle)*r2
    y2 = height/2+ray*sin(angle)*r2
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()

def set_clock():
    # erase clock
    ctx.beginPath()
    ctx.fillStyle = "#FFF"
    ctx.arc(width/2,height/2,ray*0.89,0,2*math.pi)
    ctx.fill()

    # redraw hours
    show_hours()

    # print day
    now = datetime.datetime.now()
    day = now.day
    ctx.font = "bold 14px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle="#FFF"
    ctx.fillText(day,width*0.7,height*0.5)

    # draw needles for hour, minute, seconds    
    ctx.lineWidth = 3
    hour = now.hour%12 + now.minute/60
    angle = hour*2*math.pi/12 - math.pi/2
    needle(angle,0.05,0.5)
    minute = now.minute
    angle = minute*2*math.pi/60 - math.pi/2
    needle(angle,0.05,0.85)
    ctx.lineWidth = 1
    second = now.second+now.microsecond/1000000
    angle = second*2*math.pi/60 - math.pi/2
    needle(angle,0.05,0.85,"#FF0000") # in red

browser.timer.set_interval(set_clock,100)

ctx.beginPath()
ctx.lineWidth = 10
ctx.arc(width/2,height/2,ray,0,2*math.pi)
ctx.stroke()

for i in range(60):
    ctx.lineWidth = 1
    if i%5 == 0:
        ctx.lineWidth = 3
    angle = i*2*math.pi/60 - math.pi/3
    x1 = width/2+ray*cos(angle)
    y1 = height/2+ray*sin(angle)
    x2 = width/2+ray*cos(angle)*0.9
    y2 = height/2+ray*sin(angle)*0.9
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()

def show_hours():
    ctx.beginPath()
    ctx.arc(width/2,height/2,ray*0.05,0,2*math.pi)
    ctx.fillStyle = "#000"
    ctx.fill()
    for i in range(1,13):
        angle = i*math.pi/6-math.pi/2
        x3 = width/2+ray*cos(angle)*0.75
        y3 = height/2+ray*sin(angle)*0.75
        ctx.font = "20px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(i,x3,y3)
    # cell for day
    ctx.fillStyle = "#000"
    ctx.fillRect(width*0.65,height*0.47,width*0.1,height*0.06)

show_hours()
set_clock()

newdiv <= canvas
# And finally we append the newdiv element
# to the parent, in this case the div with the "container" id
container <= newdiv
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['clock_run'].bind('click', Ace.run)
doc['clock_show_console'].bind('click', Ace.show_console)
doc['clock_clear_console'].bind('click', Ace.clear_console)
doc['clock_clear_container'].bind('click', Ace.clear_container)

from browser import document as doc
import ace

Ace = ace.Editor(editor_id="oop1_editor", console_id="oop1_console", container_id="oop1_container", storage_id="oop1_py_src" )

Ace.editor.setValue('''# Robot class 定義
class Robot(object):
    def __init__(self, name, by):
        self._name = name
        self._build_year = by

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, newname):
        self._name = name

    @property
    def build_year(self):
        return self._build_year

    @build_year.setter
    def build_year(self, newby):
        self._build_year = newby

x = Robot("bob", 1993)
x.build_year = 1993
print(x.name)
print(x.build_year)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['oop1_run'].bind('click', Ace.run)
doc['oop1_show_console'].bind('click', Ace.show_console)
doc['oop1_clear_console'].bind('click', Ace.clear_console)

from browser import document as doc
import ace

Ace = ace.Editor(editor_id="link_editor", console_id="link_console", container_id="fourbar", storage_id="link_py_src" )

Ace.editor.setValue('''# 導入所需模組
from browser import document as doc
from browser import window
from browser import timer
from browser import html
import math

# 利用 window 擷取 PrairieDraw 程式庫變數物件, 然後以 new 方法轉為 Brython 變數
pdraw = window.PrairieDraw.new
# 利用 window 擷取 PrairieDrawAnim 程式庫變數物件, 然後以 new 方法轉為 Brython 變數
PrairieDrawAnim = window.PrairieDrawAnim.new

# 利用 window 擷取 sylvester 程式庫變數物件 Vector, 並將其 create 方法直接轉為 Brython 變數
# 在 sylvester 中的 $V 簡化變數無法直接在 Brython 程式中引用
vector = window.Vector.create

# 在 "fourbar" 畫布中建立 panim 動態模擬案例
panim = PrairieDrawAnim("fourbar")

# 平面連桿繪圖以 t = 0 起始
t = 0
# 控制轉動方向變數
direction = True

# 繪製不同 t 時間下的平面連桿
def draw():
    global t, direction, fast
    # 設定模擬繪圖範圍
    panim.setUnits(6, 6)
    # 設定箭頭線寬
    panim.setProp("arrowLineWidthPx",2)

    # 起始變數設定
    omega = 1
    length_bar1 = 1
    length_bar2 = 26/18
    length_bar3 = 2
    length_base = 40/18
    time = 0

    # 畫出地面直線
    G = vector([0, -0.5])
    panim.ground(G, vector([0, 1]), 10)

    # 連桿長度與角度計算
    A = t*omega # "theta"
    AD = length_bar1 #length of left bar
    AB = length_base #distance between two stationary pivots
    BC = length_bar3 #length of right bar
    CD = length_bar2 #length of middle bar
    BD = math.sqrt(AD*AD + AB*AB - 2*AD*AB*math.cos(A))
    C = math.acos((BC*BC + CD*CD - BD*BD)/(2*BC*CD))
    ABD = math.asin(CD * math.sin(C) / BD)
    DBC = math.asin(AD * math.sin(A) / BD)
    B = ABD + DBC
    D = math.pi - B - C

    # draw pivot
    pivot_left = vector([AB/-2, 0])
    pivot_right = vector([AB/2, 0])
    panim.pivot(vector([pivot_left.e(1), -0.5]), pivot_left, 0.5)
    panim.pivot(vector([pivot_right.e(1), -0.5]), pivot_right, 0.5)

    # 儲存轉換矩陣
    panim.save()
    #FIRST BAR
    panim.translate(pivot_left)
    panim.rotate(A)
    panim.rod(vector([0,0]), vector([AD,0]), 0.25)
    panim.point(vector([0,0]))

    #SECOND BAR
    panim.translate(vector([AD,0]))
    panim.rotate(A*-1)  #"undo" the original A rotation
    panim.rotate(D)     #rotate by D only
    panim.rod(vector([0,0]), vector([CD,0]), 0.25)
    panim.point(vector([0,0]))

    #THIRD BAR
    panim.translate(vector([CD,0]))
    panim.rotate(math.pi+C)
    panim.rod(vector([0,0]), vector([BC,0]), 0.25)
    panim.point(vector([0,0]))
    # 回復原先的轉換矩陣
    panim.restore()

    panim.point(vector([pivot_right.e(1), 0]))
    # 時間增量
    if direction == True:
        t += 0.08
    else:
        t += -0.08

# 先畫出 t = 0 的連桿機構
draw()

# 將 anim 設為 None
anim = None

def launchAnimation(ev):
    global anim
    # 初始啟動, anim 為 None
    if anim is None:
        # 每 0.08 秒執行一次 draw 函式繪圖
        anim = timer.set_interval(draw, 80)
        # 初始啟動後, 按鈕文字轉為"暫停"
        doc['power'].text = '暫停'
    elif anim == 'hold':
        # 當 anim 為 'hold' 表示曾經暫停後的啟動, 因此持續以 set_interval() 持續旋轉, 且將 power 文字轉為"暫停"
        anim = timer.set_interval(draw, 80)
        doc['power'].text = '暫停'
    else:
        # 初始啟動後, 使用者再按 power, 此時 anim 非 None 也不是 'hold', 因此會執行 clear_interval() 暫停
        # 且將 anim 變數設為 'hold', 且 power 文字轉為"繼續"
        timer.clear_interval(anim)
        anim = 'hold'
        doc['power'].text = '繼續'

def reverse(ev):
    global anim, direction
    # 當 anim 為 hold 時, 按鈕無效
    if anim != "hold":
        if direction == True:
            direction = False
        else:
            direction = True

doc["power"].bind("click", launchAnimation)
doc["reverse"].bind("click", reverse)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['link_run'].bind('click', Ace.run)
doc['link_show_console'].bind('click', Ace.show_console)
doc['link_clear_console'].bind('click', Ace.clear_console)

from browser import document as doc
# 表示要導入 data/py/ace.py
import ace

Ace = ace.Editor(editor_id="jansen_editor", console_id="jansen_console", container_id="jansen_container", storage_id="jansen_py_src" )

Ace.editor.setValue('''#jansen 多連桿機構驗算
from math import pi, cos, sin, sqrt, acos

radian = 180/pi
degree = pi/180

#PLAP
def plap(ax, ay, ac, bac, bx, by, ccw):
    if ccw == 1:
        cx= ac*cos(bac - acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ax 
        cy= ac*sin(bac - acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ay
    else:
        cx= ac*cos(bac + acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ax 
        cy= ac*sin(bac + acos((ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 + abs(ax - bx)**2 - abs(ay - by)**2)/(2*sqrt(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2)*abs(ax - bx)))) + ay
    return cx, cy

#PLLP
def pllp(ax, ay, ac, cb, bx, by, cw):
    if cw == 1:
        cx =  -((ay - by)*(-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 - sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx)) + (ac**2 - ax**2 - ay**2 + bx**2 + by**2 - cb**2)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))/(2*(ax - bx)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))
        cy =  (-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(-ax + bx))/(2*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))
    else:
        cx =  -((ay - by)*(-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx)) + (ac**2 - ax**2 - ay**2 + bx**2 + by**2 - cb**2)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))/(2*(ax - bx)*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))
        cy =  (-ac**2*ay + ac**2*by + ax**2*ay + ax**2*by - 2*ax*ay*bx - 2*ax*bx*by + ay**3 - ay**2*by + ay*bx**2 - ay*by**2 + ay*cb**2 + bx**2*by + by**3 - by*cb**2 + sqrt((-ac**2 + 2*ac*cb + ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2 - cb**2)*(ac**2 + 2*ac*cb - ax**2 + 2*ax*bx - ay**2 + 2*ay*by - bx**2 - by**2 + cb**2))*(ax - bx))/(2*(ax**2 - 2*ax*bx + ay**2 - 2*ay*by + bx**2 + by**2))
    return cx, cy

ax = -38
ay = 0
# b 為原點
bx = 0
by = 0
cx = 0
cy = 7.8
# m 為配合 PLAP 新增固定點
mx = 30
my = 7.8
# dcm ccw 方向角度
dcm = 30*degree
cd = 15
# 三角形 dcm 為 ccw plap d=(a, cd, dcm, m)
dx, dy = plap(cx, cy, cd, dcm, mx, my, ccw=1)
print("dx=", dx, "dy=", dy)
# 三角形 aed 為 cw pllp e=(a, ae, ed, d)
ae = 41.5
ed = 50
ex, ey = pllp(ax, ay, ae, ed, dx, dy, cw=1)
print("ex=", ex, "ey=", ey)
# 三角形 afe 為 cw pllp f=(a, af, fe, e)
af = 40.1
fe = 55.8
fx, fy = pllp(ax, ay, af, fe, ex, ey, cw=1)
print("fx=", fx, "fy=", fy)
# 三角形 dha 為 cw pllp h=(d, dh, ha, a)
dh = 61.9
ha = 39.3
hx, hy = pllp(dx, dy, dh, ha, ax, ay, cw=1)
print("hx=", hx, "hy=", hy)
# 三角形 hgf 為 cw pllp g=(h, hg, gf, f)
hg = 36.7
gf = 39.4
gx, gy = pllp(hx, hy, hg, gf, fx, fy, cw=1)
print("gx=", gx, "gy=", gy)
# 三角形 hkg 為 cw pllp k=(h, hk, kg, g)
hk = 49
kg = 65.7
kx, ky = pllp(hx, hy, hk, kg, gx, gy, cw=1)
print("kx=", kx, "ky=", ky)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['jansen_run'].bind('click', Ace.run)
doc['jansen_show_console'].bind('click', Ace.show_console)
doc['jansen_clear_console'].bind('click', Ace.clear_console)

from browser import document as doc
# 表示要導入 data/py/ace.py
import ace

Ace = ace.Editor(editor_id="numsyn_editor", console_id="numsyn_console", container_id="numsyn_container", storage_id="numsyn_py_src" )

Ace.editor.setValue('''#數目合成
from itertools import product

# NL links and NJ joints as inputs
class NumberSynthesis:
    def __init__(self, NL, NJ):
        self.NL = NL
        self.NJ = NJ

    @property
    def Mmax(self):
        if self.NL <= self.NJ and self.NJ <= (2*self.NL-3):
            return self.NJ - self.NL + 2
        elif (2*self.NL-3) <= self.NJ and self.NJ <= (self.NL*(self.NL-1)/2):
            return self.NL - 1
        else:
            raise ValueError("incorrect number.")

    @property
    def NLm(self):
        result = []
        correction = lambda l: sum((i+2)*l[i] for i in range(len(l))) == 2*self.NJ
        for symbols in product(range(self.NL+1), repeat=self.Mmax-2):
            NLMmax = self.NL - sum(symbols)
            answer = symbols+(NLMmax,)
            if correction(answer) and NLMmax>=0:
                result.append(answer)
        return tuple(result)

a = NumberSynthesis(9, 11)
print("the maximum number of joints incident to a link: ", a.Mmax)
print("link assortments of the generalized kinematic chains: ", a.NLm)
''')
Ace.editor.scrollToRow(0)
Ace.editor.gotoLine(0)

# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定
doc['numsyn_run'].bind('click', Ace.run)
doc['numsyn_show_console'].bind('click', Ace.show_console)
doc['numsyn_clear_console'].bind('click', Ace.clear_console)

                    var disqus = 'kmolab-github';
                    var disqus_shortname = 'kmolab-github';
                    var disqus_identifier = '/2018-Fall-Python-Getting-Started.html';
                    var disqus_url = 'https://chiamingyen.github.io/cmsimfly/blog/2018-Fall-Python-Getting-Started.html';
                </script>

<script type="text/javascript">
    var disqus_shortname = 'kmolab-github';
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
