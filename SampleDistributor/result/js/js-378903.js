</script>
</head>

<body>
<h1>STL VIEWER</h1>
</div>
<div style="width:800px; margin:auto; position:relative; font-size: 9pt; color: #777777;">
    <canvas id="cv" style="border: 1px solid;" width="800" height="600" ></canvas>
    <div id="tip" style="display:block; color:#000000; padding:5px; position:absolute; left:10px; top:550px; background-color:#c0c0c0; height:32px; width:250px; border-radius:5px; border:1px solid #000000; font-family:Arial,sans-serif; opacity:0.5;"> 
        Drag mouse to rotate <br> Drag mouse with shift pressed to zoom
    </div>
</div>
<h2>View Edit</h2>
<div style="width:800px;margin-left:50px;height:70px;border: 1px solid;">
    Model Color:<input id="mdlClr" style="margin-right: 50px;" type="color" value="#00ff40" onchange="changeOption('ModelColor',this.value)"></input>
    Back Color1:<input id="bckClr1" style="margin-right: 50px;" type="color" onchange="changeOption('BackgroundColor1',this.value)"></input>
    Back Color2:<input id="bckClr2" type="color" onchange="changeOption('BackgroundColor2',this.value)"></input><br />
    Render Mode:
    <select id="render" style="margin-right: 50px;" onchange="changeOption('RenderMode',this.value)">
        <option>Flat</option>
        <option>Point</option>
        <option>Wireframe</option>
        <option>Smooth</option>
    </select>
    Definition:
    <select id="defini" onchange="changeOption('Definition',this.value)">
        <option>Standard</option>
        <option>low</option>
        <option>high</option>
    </select>
</div>
<br />
This web application do not support the InternetExplorer.

<script type="text/javascript">
    var viewer3d;
    function getOptions(){
        var mc = document.getElementById("mdlClr").value;
        var bc1 = document.getElementById("bckClr1").value;
        var bc2 = document.getElementById("bckClr2").value;
        var ren = document.getElementById("render").value;
        var def = document.getElementById("defini").value;
        return {ModelColor: mc,
                BackgroundColor1: bc1,
                BackgroundColor2: bc2,
                RenderMode: ren,
                Definition: def};
    }
    function readSTLfile(opt){
        var canvas = document.getElementById('cv');
        viewer3d = new JSC3D.Viewer(canvas);
        viewer3d.setParameter('SceneUrl', opt.SceneUrl);
        viewer3d.setParameter('InitRotationX', 0);
        viewer3d.setParameter('InitRotationY', 0);
        viewer3d.setParameter('InitRotationZ', 0);
        viewer3d.setParameter('ModelColor', opt.ModelColor);
        viewer3d.setParameter('BackgroundColor1', opt.BackgroundColor1);
        viewer3d.setParameter('BackgroundColor2', opt.BackgroundColor2);
        viewer3d.setParameter('RenderMode', opt.RenderMode);
        viewer3d.setParameter('Definition', opt.Definition);
        viewer3d.init();
        viewer3d.update();
    }
    function changeOption(strOpt,strValue){
    console.log("change " + strOpt + " to " + strValue);
        viewer3d.setParameter(strOpt, strValue);
        viewer3d.init();
        viewer3d.update();
    }
    function openByUrl(){
        var url = document.getElementById("url").value;
        var opt = getOptions();
        opt.SceneUrl = document.getElementById("url").value;
        readSTLfile(opt);
    }
    function openByPass(){
        var pass = document.getElementById("url").value;
        var opt = getOptions();
        var fs = document.getElementById("pass").files;
        var f = fs[0];
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {            
                opt.SceneUrl = e.target.result;
                console.log(opt.SceneUrl);
                readSTLfile(opt);
            };
        })(f);
        reader.readAsDataURL(f);
    }
    function openByGet(){
        var q = GetQueryString();
        console.log(q);
        var url = q.src;
        var opt = getOptions();
        opt.SceneUrl = url;
        readSTLfile(opt);
    }
    function GetQueryString(){
        if( 1 < window.location.search.length )
        {
            var query = window.location.search.substring( 1 );
            var parameters = query.split( '&' );
            var result = new Object();
            for( var i = 0; i < parameters.length; i++ )
            {
                var element = parameters[ i ].split( '=' );
                var paramName = decodeURIComponent( element[ 0 ] );
                var paramValue = decodeURIComponent( element[ 1 ] );
                result[ paramName ] = decodeURIComponent( paramValue );
            }
            return result;
        }
        return null;
    }
    window.onload = function(){
        openByGet();
    }
