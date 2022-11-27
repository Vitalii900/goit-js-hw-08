!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds));var t=localStorage.getItem("videoplayer-current-time");JSON.parse(t)})),t.getVideoTitle().then((function(e){console.log("title:",e)}))}();
//# sourceMappingURL=02-video.c9f238db.js.map
