// VERSION: 1.7 LAST UPDATE: 16.12.2010
/*
 * THIS IS FREE SCRIPT BUT LEAVE THIS COMMENT IF
 * YOU WANT USE THIS CODE ON YOUR SITE
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * http://wilq32.blogspot.com
 * 
 */
(function(f){for(var g,k=document.getElementsByTagName("head")[0].style,i="transformProperty WebkitTransform OTransform msTransform".split(" "),h=0;h<i.length;h++)if(k[i[h]]!==undefined)g=i[h];var j='v'==='\v';jQuery.fn.extend({ImageRotate:function(b){if(!(this.Wilq32&&this.Wilq32.PhotoEffect)){b=f.extend(true,{},b);return(new Wilq32.PhotoEffect(this.get(0),b))._temp}},rotate:function(b){if(!(this.length===0||typeof b=="undefined")){if(typeof b=="number")b={angle:b};for(var a=[],c=0,e=
this.length;c<e;c++){var d=this.get(c);typeof d.Wilq32=="undefined"?a.push(f(f(d).ImageRotate(b))):d.Wilq32.PhotoEffect._rotate(b.angle)}return a}},rotateAnimation:function(b){if(!(this.length===0||typeof b=="undefined")){if(typeof b=="number")b={animateAngle:b};for(var a=[],c=0,e=this.length;c<e;c++){var d=this.get(c);typeof d.Wilq32=="undefined"?a.push(f(f(d).ImageRotate(b))):d.Wilq32.PhotoEffect.rotateAnimation(b)}return a}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){function b(a,
c){this._img=a;this._parameters=c||{};this._parameters.angle=this._angle=c.angle||0;this._parameters.animateAngle=typeof c.animateAngle=="number"?c.animateAngle:this._angle;this._parameters.easing=c.easing||function(e,d,l,m,n){return-m*((d=d/n-1)*d*d*d-1)+l};this._parameters.duration=c.duration||1E3}return g?function(a,c){b.call(this,a,c);a.Wilq32={PhotoEffect:this};this._temp=this._img;this._BindEvents(a,this._parameters.bind);this._rotate(this._parameters.angle);this._parameters.angle!=this._parameters.animateAngle&&
this.rotateAnimation(this._parameters)}:function(a,c){b.call(this,a,c);this._parameters.className=a.className;this._parameters.id=a.getAttribute("id");this._temp=document.createElement("span");this._temp.style.display="inline-block";this._temp.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._temp,a);if(a.complete)this._Loader();else{var e=this;jQuery(this._img).bind("load",function(){e._Loader()})}}}();Wilq32.PhotoEffect.prototype={rotateAnimation:function(b){this._parameters.animateAngle=
b.animateAngle;this._parameters.callback=b.callback||this._parameters.callback||function(){};this._animateStart()},_BindEvents:function(b,a){if(a)for(var c in a)if(a.hasOwnProperty(c))for(var e in a[c])a[c].hasOwnProperty(e)&&jQuery(b).bind(e,a[c][e])},_Loader:function(){function b(){this._rotate(this._parameters.angle);this._parameters.angle!=this._parameters.animateAngle&&this.rotateAnimation(this._parameters)}return j?function(){var a=this._img.width,c=this._img.height;this._img.parentNode.removeChild(this._img);
this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=c+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=c;this._container.style.position="absolute";this._container.setAttribute("coordsize",a-1+","+(c-1));this._container.appendChild(this._vimage);this._temp.appendChild(this._container);
this._temp.style.position="relative";this._temp.style.width=a+"px";this._temp.style.height=c+"px";this._temp.setAttribute("id",this._parameters.id);this._temp.className=this._parameters.className;this._BindEvents(this._temp,this._parameters.bind);b.call(this)}:function(){this._temp.setAttribute("id",this._parameters.id);this._temp.className=this._parameters.className;this._width=this._img.width;this._height=this._img.height;this._widthHalf=this._width/2;this._heightHalf=this._height/2;var a=Math.sqrt(this._height*
this._height+this._width*this._width);this._widthAdd=a-this._width;this._heightAdd=a-this._height;this._widthAddHalf=this._widthAdd/2;this._heightAddHalf=this._heightAdd/2;this._img.parentNode.removeChild(this._img);this._aspectW=(parseInt(this._img.style.width,10)||this._width)/this._img.width;this._aspectH=(parseInt(this._img.style.height,10)||this._height)/this._img.height;this._canvas=document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";
this._canvas.style.left=-this._widthAddHalf+"px";this._canvas.style.top=-this._heightAddHalf+"px";this._canvas.Wilq32=this._temp.Wilq32;this._temp.appendChild(this._canvas);this._temp.style.width=this._width+"px";this._temp.style.height=this._height+"px";this._BindEvents(this._canvas,this._parameters.bind);this._cnv=this._canvas.getContext("2d");b.call(this)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},
_animate:function(){var b=+new Date,a=b-this._animateStartTime>this._parameters.duration;this._parameters.callback&&a&&this._parameters.callback();if(a&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img){this._angle=this._parameters.easing(0,b-this._animateStartTime,this._animateStartAngle,this._parameters.animateAngle-this._animateStartAngle,this._parameters.duration);this._rotate(~~(this._angle*10)/10)}var c=this;this._timer=setTimeout(function(){c._animate.call(c)},
10)}},_rotate:function(){var b=Math.PI/180;return j?function(a){this._container.style.rotation=a+"deg"}:g?function(a){this._img.style[g]="rotate("+a+"deg)"}:function(a){if(!(!this._img.width||typeof a!="number")){a=a%360*b;this._canvas.width=this._width+this._widthAdd;this._canvas.height=this._height+this._heightAdd;this._cnv.translate(this._widthAddHalf,this._heightAddHalf);this._cnv.translate(this._widthHalf,this._heightHalf);this._cnv.rotate(a);this._cnv.translate(-this._widthHalf,-this._heightHalf);
this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}}()};if(j)Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");return function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(b){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}()})(jQuery);