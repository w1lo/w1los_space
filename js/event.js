


function OnLoadEventHandler() {
    
    /*LOAD SETTINGS FROM LocalStorage*/
    RenderSettings = window.localStorage.getItem('RENDSETT');
    if(RenderSettings === null) {

        RenderSettings = {};

        //Create Defaults
        RenderSettings.AntiAlias            = true;
        RenderSettings.PowPreference        = POW_DEFAULT;
        RenderSettings.TextureQuality       = LOD_MED;
        RenderSettings.ModelQuality         = LOD_MED;
        RenderSettings.Gamma                = 0.5;

        window.localStorage.setItem('RENDSETT', RenderSettings);
    }


    /*GL CONTEXT CREATION*/
    CanvasElement = document.getElementById('window');
    CanvasElement.style = "width: " + window.innerWidth + "px; height: " + window.innerHeight + "px;";

    GL = CanvasElement.getContext("webgl", {
        antialias: RenderSettings.AntiAlias,
        powerPreference: RenderSettings.PowPreference
    });

    if(GL === null) {

        alert("Web Browser Not Compatible With WebGL!");
        window.location = "https://www.google.com/intl/en_us/chrome/";
    }


    /*SETUP GL*/
    GL.viewport(0, 0, window.innerWidth, window.innerHeight);
    GL.clearColor(0, 0, 0, 1);

    GL.enable(GL.DEPTH_TEST);
	GL.enable(GL.CULL_FACE);
	GL.frontFace(GL.CCW);
	GL.cullFace(GL.BACK)

    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);


    /*SETUP TIMING*/
    TimePrev = performance.now();
    TimeNow = performance.now();

    /*INIT UI*/
    UITarger = Image(window.innerWidth, window.innerHeight);

    /*START GAME*/
    requestAnimationFrame(NextFrame);
}

function OnResizeEventHandler() {

    CanvasElement.style = "width: " + window.innerWidth + "px; height: " + window.innerHeight + "px;";
    GL.viewport(0, 0, window.innerWidth, window.innerHeight);
}

function OnKeyPressHandler(event) {

}

function OnKeyDownEventHandler(event) {

}

function OnMouseDownHandler(event) {

}

function OnMouseMoveEventHandler(event) {

}

function OnMouseWheelHandler(event) {

}




//Create Event Listeners
window.onload = OnLoadEventHandler;
window.onresize = OnResizeEventHandler;
window.onkeypress = OnKeyPressHandler;
window.onkeydown = OnKeyDownEventHandler;
window.onmousedown = OnMouseDownHandler;
window.onmousemove = OnMouseMoveEventHandler;
window.onmousewheel = OnMouseWheelHandler;
