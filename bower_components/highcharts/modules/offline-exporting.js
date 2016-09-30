!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){function e(t,e){var n=r.getElementsByTagName("head")[0],o=r.createElement("script");o.type="text/javascript",o.src=t,o.onload=e,n.appendChild(o)}var n=t.win,o=n.navigator,r=n.document;t.CanVGRenderer={},t.Chart.prototype.exportChartLocal=function(a,i){var c,l,h,s,g,p=this,d=t.merge(p.options.exporting,a),m=o.userAgent.indexOf("WebKit")>-1&&o.userAgent.indexOf("Chrome")<0,f=d.scale||2,u=n.URL||n.webkitURL||n,v=0,w=function(){if(d.fallbackToExportServer===!1)throw"Fallback to export server disabled";p.exportChart(d)},x=function(t,e,o,a,i,c,l){var h=new n.Image;m||(h.crossOrigin="Anonymous"),h.onload=function(){var n,c=r.createElement("canvas"),s=c.getContext&&c.getContext("2d");if(s){c.height=h.height*f,c.width=h.width*f,s.drawImage(h,0,0,c.width,c.height);try{n=c.toDataURL(),o(n,e)}catch(g){if("SecurityError"!==g.name&&"SECURITY_ERR"!==g.name&&"SecurityError"!==g.message)throw g;a(t,e)}}else i(t,e);l&&l(t,e)},h.onerror=function(){c(t,e),l&&l(t,e)},h.src=t},y=function(t){try{if(!m&&o.userAgent.toLowerCase().indexOf("firefox")<0)return u.createObjectURL(new n.Blob([t],{type:"image/svg+xml;charset-utf-16"}))}catch(e){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(t)},b=function(t,e){var a,i=r.createElement("a"),c=(d.filename||"chart")+"."+e;if(o.msSaveOrOpenBlob)o.msSaveOrOpenBlob(t,c);else if(void 0!==i.download)i.href=t,i.download=c,i.target="_blank",r.body.appendChild(i),i.click(),r.body.removeChild(i);else try{if(a=n.open(t,"chart"),void 0===a||null===a)throw 1}catch(l){n.location.href=t}},C=function(){var a,i,l=p.sanitizeSVG(c.innerHTML);if(d&&"image/svg+xml"===d.type)try{o.msSaveOrOpenBlob?(i=new MSBlobBuilder,i.append(l),a=i.getBlob("image/svg+xml")):a=y(l),b(a,"svg")}catch(h){w()}else a=y(l),x(a,{},function(t){try{b(t,"png")}catch(e){w()}},function(){var a=r.createElement("canvas"),i=a.getContext("2d"),c=l.match(/^<svg[^>]*width\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*f,h=l.match(/^<svg[^>]*height\s*=\s*\"?(\d+)\"?[^>]*>/)[1]*f,s=function(){i.drawSvg(l,0,0,c,h);try{b(o.msSaveOrOpenBlob?a.msToBlob():a.toDataURL("image/png"),"png")}catch(t){w()}};a.width=c,a.height=h,n.canvg?s():(p.showLoading(),e(t.getOptions().global.canvasToolsURL,function(){p.hideLoading(),s()}))},w,w,function(){try{u.revokeObjectURL(a)}catch(t){}})},O=function(t,e){++v,e.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",t),v===l.length&&C()};t.wrap(t.Chart.prototype,"getChartHTML",function(t){return c=this.container.cloneNode(!0),t.apply(this,Array.prototype.slice.call(arguments,1))}),p.getSVGForExport(d,i),l=c.getElementsByTagName("image");try{for(l.length||C(),s=0,g=l.length;s<g;++s)h=l[s],x(h.getAttributeNS("http://www.w3.org/1999/xlink","href"),{imageElement:h},O,w,w,w)}catch(L){w()}},t.getOptions().exporting.buttons.contextButton.menuItems=[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}}]});