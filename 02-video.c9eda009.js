!function(){var e,t,o=document.querySelector("iframe"),r=new Vimeo.Player(o);r.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))})),e=localStorage.getItem("videoplayer-current-time"),t=JSON.parse(e),e&&r.setCurrentTime(t),r.getVideoTitle().then((function(e){console.log("title:",e)}))}();
//# sourceMappingURL=02-video.c9eda009.js.map
