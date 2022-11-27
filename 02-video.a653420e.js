const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))})),function(){const e=localStorage.getItem("videoplayer-current-time"),o=JSON.parse(e);e&&t.setCurrentTime(o)}(),t.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.a653420e.js.map
