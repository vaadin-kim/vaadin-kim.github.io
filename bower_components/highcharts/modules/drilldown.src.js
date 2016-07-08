!function(i){"object"==typeof module&&module.exports?module.exports=i:i(Highcharts)}(function(i){"use strict";function t(i,t,e){var o,l;return t.rgba.length&&i.rgba.length?(i=i.rgba,t=t.rgba,o=1!==t[3]||1!==i[3],l=(o?"rgba(":"rgb(")+Math.round(t[0]+(i[0]-t[0])*(1-e))+","+Math.round(t[1]+(i[1]-t[1])*(1-e))+","+Math.round(t[2]+(i[2]-t[2])*(1-e))+(o?","+(t[3]+(i[3]-t[3])*(1-e)):"")+")"):l=t.input||"none",l}var e=function(){},o=i.getOptions(),l=i.each,r=i.extend,n=i.format,s=i.pick,a=i.wrap,d=i.Chart,p=i.seriesTypes,h=p.pie,c=p.column,u=i.Tick,g=i.fireEvent,w=i.inArray,v=1;l(["fill","stroke"],function(e){i.Fx.prototype[e+"Setter"]=function(){this.elem.attr(e,t(i.Color(this.start),i.Color(this.end),this.pos))}}),r(o.lang,{drillUpText:"◁ Back to {series.name}"}),o.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#0d233a",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#0d233a",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}},i.SVGRenderer.prototype.Element.prototype.fadeIn=function(i){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:s(this.newOpacity,1)},i||{duration:250})},d.prototype.addSeriesAsDrilldown=function(i,t){this.addSingleSeriesAsDrilldown(i,t),this.applyDrilldown()},d.prototype.addSingleSeriesAsDrilldown=function(i,t){var o,n,s,a,d,p=i.series,h=p.xAxis,c=p.yAxis,u=i.color||p.color,g=[],m=[];this.drilldownLevels||(this.drilldownLevels=[]),a=p.options._levelNumber||0,d=this.drilldownLevels[this.drilldownLevels.length-1],d&&d.levelNumber!==a&&(d=void 0),t=r({color:u,_ddSeriesId:v++},t),n=w(i,p.points),l(p.chart.series,function(i){i.xAxis!==h||i.isDrilling||(i.options._ddSeriesId=i.options._ddSeriesId||v++,i.options._colorIndex=i.userOptions._colorIndex,i.options._levelNumber=i.options._levelNumber||a,d?(g=d.levelSeries,m=d.levelSeriesOptions):(g.push(i),m.push(i.options)))}),s={levelNumber:a,seriesOptions:p.options,levelSeriesOptions:m,levelSeries:g,shapeArgs:i.shapeArgs,bBox:i.graphic?i.graphic.getBBox():{},color:u,lowerSeriesOptions:t,pointOptions:p.options.data[n],pointIndex:n,oldExtremes:{xMin:h&&h.userMin,xMax:h&&h.userMax,yMin:c&&c.userMin,yMax:c&&c.userMax}},this.drilldownLevels.push(s),o=s.lowerSeries=this.addSeries(t,!1),o.options._levelNumber=a+1,h&&(h.oldPos=h.pos,h.userMin=h.userMax=null,c.userMin=c.userMax=null),p.type===o.type&&(o.animate=o.animateDrilldown||e,o.options.animation=!0)},d.prototype.applyDrilldown=function(){var i,t=this.drilldownLevels;t&&t.length>0&&(i=t[t.length-1].levelNumber,l(this.drilldownLevels,function(t){t.levelNumber===i&&l(t.levelSeries,function(t){t.options&&t.options._levelNumber===i&&t.remove(!1)})})),this.redraw(),this.showDrillUpButton()},d.prototype.getDrilldownBackText=function(){var i,t=this.drilldownLevels;if(t&&t.length>0)return i=t[t.length-1],i.series=i.seriesOptions,n(this.options.lang.drillUpText,i)},d.prototype.showDrillUpButton=function(){var i,t,e=this,o=this.getDrilldownBackText(),l=e.options.drilldown.drillUpButton;this.drillUpButton?this.drillUpButton.attr({text:o}).align():(i=l.theme,t=i&&i.states,this.drillUpButton=this.renderer.button(o,null,null,function(){e.drillUp()},i,t&&t.hover,t&&t.select).attr({align:l.position.align,zIndex:9}).add().align(l.position,!1,l.relativeTo||"plotBox"))},d.prototype.drillUp=function(){for(var i,t,e,o,r,n=this,s=n.drilldownLevels,a=s[s.length-1].levelNumber,d=s.length,p=n.series,h=function(i){var r;l(p,function(t){t.options._ddSeriesId===i._ddSeriesId&&(r=t)}),r=r||n.addSeries(i,!1),r.type===e.type&&r.animateDrillupTo&&(r.animate=r.animateDrillupTo),i===t.seriesOptions&&(o=r)};d--;)if(t=s[d],t.levelNumber===a){if(s.pop(),e=t.lowerSeries,!e.chart)for(i=p.length;i--;)if(p[i].options.id===t.lowerSeriesOptions.id&&p[i].options._levelNumber===a+1){e=p[i];break}e.xData=[],l(t.levelSeriesOptions,h),g(n,"drillup",{seriesOptions:t.seriesOptions}),o.type===e.type&&(o.drilldownLevel=t,o.options.animation=n.options.drilldown.animation,e.animateDrillupFrom&&e.chart&&e.animateDrillupFrom(t)),o.options._levelNumber=a,e.remove(!1),o.xAxis&&(r=t.oldExtremes,o.xAxis.setExtremes(r.xMin,r.xMax,!1),o.yAxis.setExtremes(r.yMin,r.yMax,!1))}this.redraw(),0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align(),this.ddDupes.length=[]},c.prototype.supportsDrilldown=!0,c.prototype.animateDrillupTo=function(i){if(!i){var t=this,o=t.drilldownLevel;l(this.points,function(i){i.graphic&&i.graphic.hide(),i.dataLabel&&i.dataLabel.hide(),i.connector&&i.connector.hide()}),setTimeout(function(){t.points&&l(t.points,function(i,t){var e=t===(o&&o.pointIndex)?"show":"fadeIn",l="show"===e||void 0;i.graphic&&i.graphic[e](l),i.dataLabel&&i.dataLabel[e](l),i.connector&&i.connector[e](l)})},Math.max(this.chart.options.drilldown.animation.duration-50,0)),this.animate=e}},c.prototype.animateDrilldown=function(i){var t,e=this,o=this.chart.drilldownLevels,n=this.chart.options.drilldown.animation,a=this.xAxis;i||(l(o,function(i){e.options._ddSeriesId===i.lowerSeriesOptions._ddSeriesId&&(t=i.shapeArgs,t.fill=i.color)}),t.x+=s(a.oldPos,a.pos)-a.pos,l(this.points,function(i){i.graphic&&i.graphic.attr(t).animate(r(i.shapeArgs,{fill:i.color}),n),i.dataLabel&&i.dataLabel.fadeIn(n)}),this.animate=null)},c.prototype.animateDrillupFrom=function(t){var e=this.chart.options.drilldown.animation,o=this.group,n=this;l(n.trackerGroups,function(i){n[i]&&n[i].on("mouseover")}),delete this.group,l(this.points,function(l){var n=l.graphic,s=function(){n.destroy(),o&&(o=o.destroy())};n&&(delete l.graphic,e?n.animate(r(t.shapeArgs,{fill:t.color}),i.merge(e,{complete:s})):(n.attr(t.shapeArgs),s()))})},h&&r(h.prototype,{supportsDrilldown:!0,animateDrillupTo:c.prototype.animateDrillupTo,animateDrillupFrom:c.prototype.animateDrillupFrom,animateDrilldown:function(t){var e=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],o=this.chart.options.drilldown.animation,n=e.shapeArgs,s=n.start,a=n.end-s,d=a/this.points.length;t||(l(this.points,function(t,l){t.graphic.attr(i.merge(n,{start:s+l*d,end:s+(l+1)*d,fill:e.color}))[o?"animate":"attr"](r(t.shapeArgs,{fill:t.color}),o)}),this.animate=null)}}),i.Point.prototype.doDrilldown=function(i,t){var e,o=this.series,l=o.chart,r=l.options.drilldown,n=(r.series||[]).length;for(l.ddDupes||(l.ddDupes=[]);n--&&!e;)r.series[n].id===this.drilldown&&w(this.drilldown,l.ddDupes)===-1&&(e=r.series[n],l.ddDupes.push(this.drilldown));g(l,"drilldown",{point:this,seriesOptions:e,category:t,points:void 0!==t&&this.series.xAxis.ddPoints[t].slice(0)}),e&&(i?l.addSingleSeriesAsDrilldown(this,e):l.addSeriesAsDrilldown(this,e))},i.Axis.prototype.drilldownCategory=function(i){var t,e,o=this.ddPoints[i];for(t in o)e=o[t],e&&e.series&&e.series.visible&&e.doDrilldown&&e.doDrilldown(!0,i);this.chart.applyDrilldown()},i.Axis.prototype.getDDPoints=function(i,t){var e=this.ddPoints;return e||(this.ddPoints=e={}),e[i]||(e[i]=[]),e[i].levelNumber!==t&&(e[i].length=0),e[i]},u.prototype.drillable=function(){var t=this.pos,e=this.label,o=this.axis,l=o.ddPoints&&o.ddPoints[t];e&&l&&l.length?(e.basicStyles||(e.basicStyles=i.merge(e.styles)),e.addClass("highcharts-drilldown-axis-label").css(o.chart.options.drilldown.activeAxisLabelStyle).on("click",function(){o.drilldownCategory(t)})):e&&e.basicStyles&&(e.styles={},e.css(e.basicStyles),e.on("click",null))},a(u.prototype,"addLabel",function(i){i.call(this),this.drillable()}),a(i.Point.prototype,"init",function(t,e,o,l){var r=t.call(this,e,o,l),n=e.xAxis,s=n&&n.ticks[l],a=n&&n.getDDPoints(l,e.options._levelNumber);return r.drilldown&&(i.addEvent(r,"click",function(){e.xAxis&&e.chart.options.drilldown.allowPointDrilldown===!1?e.xAxis.drilldownCategory(l):r.doDrilldown()}),a&&(a.push(r),a.levelNumber=e.options._levelNumber)),s&&s.drillable(),r}),a(i.Series.prototype,"drawDataLabels",function(i){var t=this.chart.options.drilldown.activeDataLabelStyle;i.call(this),l(this.points,function(i){i.drilldown&&i.dataLabel&&i.dataLabel.attr({"class":"highcharts-drilldown-data-label"}).css(t)})});var m,f=function(i){i.call(this),l(this.points,function(i){i.drilldown&&i.graphic&&i.graphic.attr({"class":"highcharts-drilldown-point"}).css({cursor:"pointer"})})};for(m in p)p[m].prototype.supportsDrilldown&&a(p[m].prototype,"drawTracker",f)});