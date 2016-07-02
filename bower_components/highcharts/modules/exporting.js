!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var e,n=t.win,o=n.document,i=t.Chart,r=t.addEvent,a=t.removeEvent,s=t.fireEvent,l=t.createElement,p=t.discardElement,c=t.css,u=t.merge,h=t.each,d=t.extend,g=t.splat,m=Math.max,x=t.isTouchDevice,f=t.Renderer.prototype.symbols,y=t.getOptions();d(y.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"}),y.navigation={menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:"none",color:"#303030",fontSize:x?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}},y.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}},t.post=function(t,e,n){var i,t=l("form",u({method:"post",action:t,enctype:"multipart/form-data"},n),{display:"none"},o.body);for(i in e)l("input",{type:"hidden",name:i,value:e[i]},null,t);t.submit(),p(t)},d(i.prototype,{sanitizeSVG:function(t){return t.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­").replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(t){return t.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(e){var n,i,r,a,s,c=this,m=u(c.options,e),x=m.exporting.allowHTML;return o.createElementNS||(o.createElementNS=function(t,e){return o.createElement(e)}),i=l("div",null,{position:"absolute",top:"-9999em",width:c.chartWidth+"px",height:c.chartHeight+"px"},o.body),r=c.renderTo.style.width,s=c.renderTo.style.height,r=m.exporting.sourceWidth||m.chart.width||/px$/.test(r)&&parseInt(r,10)||600,s=m.exporting.sourceHeight||m.chart.height||/px$/.test(s)&&parseInt(s,10)||400,d(m.chart,{animation:!1,renderTo:i,forExport:!0,renderer:"SVGRenderer",width:r,height:s}),m.exporting.enabled=!1,delete m.data,m.series=[],h(c.series,function(t){a=u(t.options,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:t.visible}),a.isInternal||m.series.push(a)}),e&&h(["xAxis","yAxis"],function(t){h(g(e[t]),function(e,n){m[t][n]=u(m[t][n],e)})}),n=new t.Chart(m,c.callback),h(["xAxis","yAxis"],function(t){h(c[t],function(e,o){var i=n[t][o],r=e.getExtremes(),a=r.userMin,r=r.userMax;i&&(void 0!==a||void 0!==r)&&i.setExtremes(a,r,!0,!1)})}),r=n.getChartHTML(),m=null,n.destroy(),p(i),x&&(i=r.match(/<\/svg>(.*?$)/))&&(i='<foreignObject x="0" y="0" width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">'+i[1]+"</body></foreignObject>",r=r.replace("</svg>",i+"</svg>")),r=this.sanitizeSVG(r),r=r.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'")},getSVGForExport:function(t,e){var n=this.options.exporting;return this.getSVG(u({chart:{borderRadius:0}},n.chartOptions,e,{exporting:{sourceWidth:t&&t.sourceWidth||n.sourceWidth,sourceHeight:t&&t.sourceHeight||n.sourceHeight}}))},exportChart:function(e,n){var o=this.getSVGForExport(e,n),e=u(this.options.exporting,e);t.post(e.url,{filename:e.filename||"chart",type:e.type,width:e.width||0,scale:e.scale||2,svg:o},e.formAttributes)},print:function(){var t=this,e=t.container,i=[],r=e.parentNode,a=o.body,l=a.childNodes;t.isPrinting||(t.isPrinting=!0,t.pointer.reset(null,0),s(t,"beforePrint"),h(l,function(t,e){1===t.nodeType&&(i[e]=t.style.display,t.style.display="none")}),a.appendChild(e),n.focus(),n.print(),setTimeout(function(){r.appendChild(e),h(l,function(t,e){1===t.nodeType&&(t.style.display=i[e])}),t.isPrinting=!1,s(t,"afterPrint")},1e3))},contextMenu:function(t,e,n,i,s,p,u){var g,x,f,y=this,b=y.options.navigation,v=b.menuItemStyle,w=y.chartWidth,S=y.chartHeight,k="cache-"+t,E=y[k],C=m(s,p),G=function(e){y.pointer.inClass(e.target,t)||x()};E||(y[k]=E=l("div",{className:t},{position:"absolute",zIndex:1e3,padding:C+"px"},y.container),g=l("div",null,d({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},b.menuStyle),E),x=function(){c(E,{display:"none"}),u&&u.setState(0),y.openMenu=!1},r(E,"mouseleave",function(){f=setTimeout(x,500)}),r(E,"mouseenter",function(){clearTimeout(f)}),r(o,"mouseup",G),r(y,"destroy",function(){a(o,"mouseup",G)}),h(e,function(t){if(t){var e=t.separator?l("hr",null,null,g):l("div",{onmouseover:function(){c(this,b.menuItemHoverStyle)},onmouseout:function(){c(this,v)},onclick:function(e){e&&e.stopPropagation(),x(),t.onclick&&t.onclick.apply(y,arguments)},innerHTML:t.text||y.options.lang[t.textKey]},d({cursor:"pointer"},v),g);y.exportDivElements.push(e)}}),y.exportDivElements.push(g,E),y.exportMenuWidth=E.offsetWidth,y.exportMenuHeight=E.offsetHeight),e={display:"block"},n+y.exportMenuWidth>w?e.right=w-n-s-C+"px":e.left=n-C+"px",i+p+y.exportMenuHeight>S&&"top"!==u.alignOptions.verticalAlign?e.bottom=S-i-C+"px":e.top=i+p-C+"px",c(E,e),y.openMenu=!0},addButton:function(n){var o,i,r=this,a=r.renderer,s=u(r.options.navigation.buttonOptions,n),l=s.onclick,p=s.menuItems,c={stroke:s.symbolStroke,fill:s.symbolFill},h=s.symbolSize||12;if(r.btnCount||(r.btnCount=0),r.exportDivElements||(r.exportDivElements=[],r.exportSVGElements=[]),s.enabled!==!1){var g,m=s.theme,x=m.states,f=x&&x.hover,x=x&&x.select;delete m.states,l?g=function(t){t.stopPropagation(),l.call(r,t)}:p&&(g=function(){r.contextMenu(i.menuClassName,p,i.translateX,i.translateY,i.width,i.height,i),i.setState(2)}),s.text&&s.symbol?m.paddingLeft=t.pick(m.paddingLeft,25):s.text||d(m,{width:s.width,height:s.height,padding:0}),i=a.button(s.text,0,0,g,m,f,x).attr({title:r.options.lang[s._titleKey],"stroke-linecap":"round"}),i.menuClassName=n.menuClassName||"highcharts-menu-"+r.btnCount++,s.symbol&&(o=a.symbol(s.symbol,s.symbolX-h/2,s.symbolY-h/2,h,h).attr(d(c,{"stroke-width":s.symbolStrokeWidth||1,zIndex:1})).add(i)),i.add().align(d(s,{width:i.width,x:t.pick(s.x,e)}),!0,"spacingBox"),e+=(i.width+s.buttonSpacing)*("right"===s.align?-1:1),r.exportSVGElements.push(i,o)}},destroyExport:function(t){var e,n,t=t.target;for(e=0;e<t.exportSVGElements.length;e++)(n=t.exportSVGElements[e])&&(n.onclick=n.ontouchstart=null,t.exportSVGElements[e]=n.destroy());for(e=0;e<t.exportDivElements.length;e++)n=t.exportDivElements[e],a(n,"mouseleave"),t.exportDivElements[e]=n.onmouseout=n.onmouseover=n.ontouchstart=n.onclick=null,p(n)}}),f.menu=function(t,e,n,o){return["M",t,e+2.5,"L",t+n,e+2.5,"M",t,e+o/2+.5,"L",t+n,e+o/2+.5,"M",t,e+o-1.5,"L",t+n,e+o-1.5]},i.prototype.callbacks.push(function(t){var n,o=t.options.exporting,i=o.buttons;if(e=0,o.enabled!==!1){for(n in i)t.addButton(i[n]);r(t,"destroy",t.destroyExport)}})});