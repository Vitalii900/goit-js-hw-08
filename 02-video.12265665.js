const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds));const t=localStorage.getItem("videoplayer-current-time");JSON.parse(t)})),t.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.12265665.js.map
