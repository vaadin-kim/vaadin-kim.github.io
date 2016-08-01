!function(t){"object"==typeof module&&module.exports?module.exports=t:t(Highcharts)}(function(t){var i=t.seriesTypes,e=t.map,o=t.merge,n=t.extend,l=t.extendClass,r=t.getOptions(),s=r.plotOptions,a=function(){},h=t.each,d=t.grep,c=t.pick,p=t.Series,u=t.stableSort,v=t.Color,g=function(t,i,e){var o;e=e||this;for(o in t)t.hasOwnProperty(o)&&i.call(e,t[o],o,t)},f=function(t,i,e,o){return o=o||this,t=t||[],h(t,function(n,l){e=i.call(o,e,n,l,t)}),e},x=function(t,i,e){var o;e=e||this,o=i.call(e,t),o!==!1&&x(o,i,e)};s.treemap=o(s.scatter,{showInLegend:!1,marker:!1,borderColor:"#E0E0E0",borderWidth:1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.node.val}</b><br/>"},layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,states:{hover:{borderColor:"#A0A0A0",brightness:i.heatmap?0:.1,shadow:!1}},drillUpButton:{position:{align:"right",x:-10,y:10}}});var y={pointAttrToOptions:{},pointArrayMap:["value"],axisTypes:i.heatmap?["xAxis","yAxis","colorAxis"]:["xAxis","yAxis"],optionalAxis:"colorAxis",getSymbol:a,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",translateColors:i.heatmap&&i.heatmap.prototype.translateColors};i.treemap=l(i.scatter,o(y,{type:"treemap",trackerGroups:["group","dataLabelsGroup"],pointClass:l(t.Point,{setVisible:i.pie.prototype.pointClass.prototype.setVisible}),getListOfParents:function(i,e){var o=f(i,function(t,i,e){var o=c(i.parent,"");return void 0===t[o]&&(t[o]=[]),t[o].push(e),t},{});return g(o,function(i,o,n){""!==o&&-1===t.inArray(o,e)&&(h(i,function(t){n[""].push(t)}),delete n[o])}),o},getTree:function(){var t,i=this,o=e(this.data,function(t){return t.id}),n=i.getListOfParents(this.data,o);return i.nodeMap=[],t=i.buildNode("",-1,0,n,null),x(this.nodeMap[this.rootNode],function(t){var e=!1,o=t.parent;return t.visible=!0,(o||""===o)&&(e=i.nodeMap[o]),e}),x(this.nodeMap[this.rootNode].children,function(t){var i=!1;return h(t,function(t){t.visible=!0,t.children.length&&(i=(i||[]).concat(t.children))}),i}),this.setTreeValues(t),t},init:function(t,i){var e=this;p.prototype.init.call(e,t,i),e.options.allowDrillToNode&&e.drillTo()},buildNode:function(t,i,e,o,n){var l,r,s=this,a=[],d=s.points[i];return h(o[t]||[],function(i){r=s.buildNode(s.points[i].id,i,e+1,o,t),a.push(r)}),l={id:t,i:i,children:a,level:e,parent:n,visible:!1},s.nodeMap[l.id]=l,d&&(d.node=l),l},setTreeValues:function(t){var i,e=this,o=e.options,l=0,r=[],s=e.points[t.i];return h(t.children,function(t){t=e.setTreeValues(t),r.push(t),t.ignore?x(t.children,function(t){var i=!1;return h(t,function(t){n(t,{ignore:!0,isLeaf:!1,visible:!1}),t.children.length&&(i=(i||[]).concat(t.children))}),i}):l+=t.val}),u(r,function(t,i){return t.sortIndex-i.sortIndex}),i=c(s&&s.value,l),n(t,{children:r,childrenTotal:l,ignore:!(c(s&&s.visible,!0)&&i>0),isLeaf:t.visible&&!l,levelDynamic:o.levelIsConstant?t.level:t.level-e.nodeMap[e.rootNode].level,name:c(s&&s.name,""),sortIndex:c(s&&s.sortIndex,-i),val:i}),t},calculateChildrenAreas:function(t,i){var e,n=this,l=n.options,r=this.levelMap[t.levelDynamic+1],s=c(n[r&&r.layoutAlgorithm]&&r.layoutAlgorithm,l.layoutAlgorithm),a=l.alternateStartingDirection,p=[];e=d(t.children,function(t){return!t.ignore}),r&&r.layoutStartingDirection&&(i.direction="vertical"===r.layoutStartingDirection?0:1),p=n[s](i,e),h(e,function(t,e){var l=p[e];t.values=o(l,{val:t.childrenTotal,direction:a?1-i.direction:i.direction}),t.pointValues=o(l,{x:l.x/n.axisRatio,width:l.width/n.axisRatio}),t.children.length&&n.calculateChildrenAreas(t,t.values)})},setPointValues:function(){var t=this,i=t.xAxis,e=t.yAxis;h(t.points,function(t){var o,n,l,r,s=t.node,a=s.pointValues;a?(o=Math.round(i.translate(a.x,0,0,0,1)),n=Math.round(i.translate(a.x+a.width,0,0,0,1)),l=Math.round(e.translate(a.y,0,0,0,1)),r=Math.round(e.translate(a.y+a.height,0,0,0,1)),t.shapeType="rect",t.shapeArgs={x:Math.min(o,n),y:Math.min(l,r),width:Math.abs(n-o),height:Math.abs(r-l)},t.plotX=t.shapeArgs.x+t.shapeArgs.width/2,t.plotY=t.shapeArgs.y+t.shapeArgs.height/2):(delete t.plotX,delete t.plotY)})},setColorRecursive:function(t,i){var e,o,n=this;t&&(e=n.points[t.i],o=n.levelMap[t.levelDynamic],i=c(e&&e.options.color,o&&o.color,i),e&&(e.color=i),t.children.length&&h(t.children,function(t){n.setColorRecursive(t,i)}))},algorithmGroup:function(t,i,e,o){this.height=t,this.width=i,this.plot=o,this.direction=e,this.startDirection=e,this.total=0,this.nW=0,this.lW=0,this.nH=0,this.lH=0,this.elArr=[],this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(t,i){return Math.max(t/i,i/t)}},this.addElement=function(t){this.lP.total=this.elArr[this.elArr.length-1],this.total=this.total+t,0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH)),this.elArr.push(t)},this.reset=function(){this.nW=0,this.lW=0,this.elArr=[],this.total=0}},algorithmCalcPoints:function(t,i,e,o){var n,l,r,s,a,d=e.lW,c=e.lH,p=e.plot,u=0,v=e.elArr.length-1;i?(d=e.nW,c=e.nH):a=e.elArr[e.elArr.length-1],h(e.elArr,function(t){(i||v>u)&&(0===e.direction?(n=p.x,l=p.y,r=d,s=t/r):(n=p.x,l=p.y,s=c,r=t/s),o.push({x:n,y:l,width:r,height:s}),0===e.direction?p.y=p.y+s:p.x=p.x+r),u+=1}),e.reset(),0===e.direction?e.width=e.width-d:e.height=e.height-c,p.y=p.parent.y+(p.parent.height-e.height),p.x=p.parent.x+(p.parent.width-e.width),t&&(e.direction=1-e.direction),i||e.addElement(a)},algorithmLowAspectRatio:function(t,i,e){var o,n=[],l=this,r={x:i.x,y:i.y,parent:i},s=i.direction,a=0,d=e.length-1,c=new this.algorithmGroup(i.height,i.width,s,r);return h(e,function(e){o=i.width*i.height*(e.val/i.val),c.addElement(o),c.lP.nR>c.lP.lR&&l.algorithmCalcPoints(t,!1,c,n,r),a===d&&l.algorithmCalcPoints(t,!0,c,n,r),a+=1}),n},algorithmFill:function(t,i,e){var o,n,l,r,s,a=[],d=i.direction,c=i.x,p=i.y,u=i.width,v=i.height;return h(e,function(e){o=i.width*i.height*(e.val/i.val),n=c,l=p,0===d?(s=v,r=o/s,u-=r,c+=r):(r=u,s=o/r,v-=s,p+=s),a.push({x:n,y:l,width:r,height:s}),t&&(d=1-d)}),a},strip:function(t,i){return this.algorithmLowAspectRatio(!1,t,i)},squarified:function(t,i){return this.algorithmLowAspectRatio(!0,t,i)},sliceAndDice:function(t,i){return this.algorithmFill(!0,t,i)},stripes:function(t,i){return this.algorithmFill(!1,t,i)},translate:function(){var t,i,e,n;p.prototype.translate.call(this),this.rootNode=c(this.options.rootId,""),this.levelMap=f(this.options.levels,function(t,i){return t[i.level]=i,t},{}),e=this.tree=this.getTree(),this.axisRatio=this.xAxis.len/this.yAxis.len,this.nodeMap[""].pointValues=t={x:0,y:0,width:100,height:100},this.nodeMap[""].values=i=o(t,{width:t.width*this.axisRatio,direction:"vertical"===this.options.layoutStartingDirection?0:1,val:e.val}),this.calculateChildrenAreas(e,i),this.colorAxis?this.translateColors():this.options.colorByPoint||this.setColorRecursive(this.tree,void 0),n=this.nodeMap[this.rootNode].pointValues,this.xAxis.setExtremes(n.x,n.x+n.width,!1),this.yAxis.setExtremes(n.y,n.y+n.height,!1),this.xAxis.setScale(),this.yAxis.setScale(),this.setPointValues()},drawDataLabels:function(){var t,i,e=this,n=d(e.points,function(t){return t.node.visible});h(n,function(n){i=e.levelMap[n.node.levelDynamic],t={style:{}},n.node.isLeaf||(t.enabled=!1),i&&i.dataLabels&&(t=o(t,i.dataLabels),e._hasPointLabels=!0),n.shapeArgs&&(t.style.width=n.shapeArgs.width),n.dlOptions=o(t,n.options.dataLabels)}),p.prototype.drawDataLabels.call(this)},alignDataLabel:i.column.prototype.alignDataLabel,pointAttribs:function(t,i){var e,o=this.levelMap[t.node.levelDynamic]||{},n=this.options,l=i&&n.states[i]||{};return e={stroke:t.borderColor||o.borderColor||l.borderColor||n.borderColor,"stroke-width":c(t.borderWidth,o.borderWidth,l.borderWidth,n.borderWidth),dashstyle:t.borderDashStyle||o.borderDashStyle||l.borderDashStyle||n.borderDashStyle,fill:t.color||this.color,zIndex:"hover"===i?1:0},t.node.level<=this.nodeMap[this.rootNode].level?(e.fill="none",e["stroke-width"]=0):t.node.isLeaf?i&&(e.fill=v(e.fill).brighten(l.brightness).get()):e.fill=c(n.interactByLeaf,!n.allowDrillToNode)?"none":v(e.fill).setOpacity("hover"===i?.75:.15).get(),e},drawPoints:function(){var t=this,e=d(t.points,function(t){return t.node.visible});h(e,function(i){var e="levelGroup-"+i.node.levelDynamic;t[e]||(t[e]=t.chart.renderer.g(e).attr({zIndex:1e3-i.node.levelDynamic}).add(t.group)),i.group=t[e],i.pointAttr={"":t.pointAttribs(i),hover:t.pointAttribs(i,"hover"),select:{}}}),i.column.prototype.drawPoints.call(this),t.options.allowDrillToNode&&h(e,function(i){var e,o;i.graphic&&(o=i.drillId=t.options.interactByLeaf?t.drillToByLeaf(i):t.drillToByGroup(i),e=o?"pointer":"default",i.graphic.css({cursor:e}))})},drillTo:function(){var i=this;t.addEvent(i,"click",function(t){var e,o=t.point,n=o.drillId;n&&(e=i.nodeMap[i.rootNode].name||i.rootNode,o.setState(""),i.drillToNode(n),i.showDrillUpButton(e))})},drillToByGroup:function(t){var i=this,e=!1;return t.node.level-i.nodeMap[i.rootNode].level!==1||t.node.isLeaf||(e=t.id),e},drillToByLeaf:function(t){var i,e=this,o=!1;if(t.node.parent!==e.rootNode&&t.node.isLeaf)for(i=t.node;!o;)i=e.nodeMap[i.parent],i.parent===e.rootNode&&(o=i.id);return o},drillUp:function(){var t,i,e=null;this.rootNode&&(t=this.nodeMap[this.rootNode],e=null!==t.parent?this.nodeMap[t.parent]:this.nodeMap[""]),null!==e&&(this.drillToNode(e.id),""===e.id?this.drillUpButton=this.drillUpButton.destroy():(i=this.nodeMap[e.parent],this.showDrillUpButton(i.name||i.id)))},drillToNode:function(t){this.options.rootId=t,this.isDirty=!0,this.chart.redraw()},showDrillUpButton:function(t){var i,e,o=this,n=t||"< Back",l=o.options.drillUpButton;l.text&&(n=l.text),this.drillUpButton?this.drillUpButton.attr({text:n}).align():(i=l.theme,e=i&&i.states,this.drillUpButton=this.chart.renderer.button(n,null,null,function(){o.drillUp()},i,e&&e.hover,e&&e.select).attr({align:l.position.align,zIndex:9}).add().align(l.position,!1,l.relativeTo||"plotBox"))},buildKDTree:a,drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,getExtremes:function(){p.prototype.getExtremes.call(this,this.colorValueData),this.valueMin=this.dataMin,this.valueMax=this.dataMax,p.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var i={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};p.prototype.bindAxes.call(this),t.extend(this.yAxis.options,i),t.extend(this.xAxis.options,i)}}))});