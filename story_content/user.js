window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();

//------------------------------------------------------
// Read slider values
//------------------------------------------------------

// Project Update Today
var putImpact = player.GetVar("v1p_PUT");
var putDeadline = player.GetVar("v2d_PUT");
var putConsequence = player.GetVar("v3c_PUT");

// Executive Presentation
var epImpact = player.GetVar("v4p_EP");
var epDeadline = player.GetVar("v5d_EP");
var epConsequence = player.GetVar("v6c_EP");

// Client Complaint
var ccImpact = player.GetVar("v7p_CC");
var ccDeadline = player.GetVar("v8d_CC");
var ccConsequence = player.GetVar("v9c_CC");

//------------------------------------------------------
// Calculate totals
//------------------------------------------------------

var putTotal = putImpact + putDeadline + putConsequence;
var epTotal = epImpact + epDeadline + epConsequence;
var ccTotal = ccImpact + ccDeadline + ccConsequence;

// Save totals
player.SetVar("PUT_Total", putTotal);
player.SetVar("EP_Total", epTotal);
player.SetVar("CC_Total", ccTotal);

//------------------------------------------------------
// Rank the tasks from highest to lowest
//------------------------------------------------------

var tasks = [
    {
        name: "Project Update Today",
        score: putTotal
    },
    {
        name: "Executive Presentation",
        score: epTotal
    },
    {
        name: "Client Complaint",
        score: ccTotal
    }
];

// Sort by score (highest first)
tasks.sort(function(a, b) {
    return b.score - a.score;
});

//------------------------------------------------------
// Save ranked priorities
//------------------------------------------------------

player.SetVar("FirstPriority", tasks[0].name);
player.SetVar("SecondPriority", tasks[1].name);
player.SetVar("ThirdPriority", tasks[2].name);
}

};
