

//Constants
const LOD_LOW = 0;
const LOD_MED = 1;
const LOD_HIG = 2;
const LOD_ULT = 3; //Should talk with kotlos bout dat

const POW_QUALITY = "high-performance";
const POW_DEFAULT = "default";
const POW_SAVER   = "low-power";  


//Document
var CanvasElement = null;


//Rendering
var GL = null;
var RenderSettings = null;
var ModelQueue = [];

var UITarger = null;

//Timing
var TimePrev = null;
var TimeNow = null;
var TimeElapsed = null;

