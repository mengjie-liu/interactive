try{(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-92400337-1','auto');ga('send','pageview');}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{;(function($){$.fn.accordion=function(options){var version='1.4.7.4';var o=$.extend({},$.fn.accordion.defaults,options);return this.each(function(){var containerID=o.container?'#'+this.id:'',objID=o.objID?o.objID:o.obj+o.objClass,Obj=o.container?containerID+' '+objID:'#'+this.id,El=Obj+' '+o.el,hTimeout=null;if(o.head)$(Obj).find(o.head).addClass('h');if(o.head){if($(El).next('div:not(.outer)').length){$(El).next('div:not(.outer)').wrap('<div class="outer" />');}
$(Obj+' .h').each(function(){var $this=$(this);if(o.wrapper=='div'&&!$this.parent('div.new').length){$this.add($this.next('div.outer')).wrapAll('<div class="new"></div>');}});}
$(El).each(function(){var $node=$(this);if($node.find(o.next).length||$node.next(o.next).length){if($node.find('> a').length){if(o.iconTrigger){$node.find('> a').addClass('link');}else{$node.find('> a').addClass("trigger");}}else{var anchor=o.iconTrigger?'<span class="heading" />':'<a class="trigger" href="#" />'
if(o.elToWrap){var $t=nodes($node),$s=$node.find(o.elToWrap),$object=$t.add($s);$object.wrapAll(anchor);}else{nodes($node).wrap(anchor);}}
if(o.iconTrigger){$node.find('> a, >span.heading').before('<a href="#" class="icon trigger"></a>');$node.find('> a.icon.trigger');}}else{$node.addClass('last-child');if(o.lastChild&&$node.find('> a').length){$node.find('> a').addClass("trigger");}}});function nodes(el){var txt=[];el.each(function(){$.each(this.childNodes,function(){if(this.nodeType==3&&$.trim(this.nodeValue)){txt.push(this);}})});return $(txt);};$(El+' a.trigger').closest(o.wrapper).find('> '+o.next).not('.shown').hide().closest(o.wrapper).find('a.open').removeClass('open').data('state',0);if(o.activeLink&&o.initShow){var fullURL=window.location.href,arrPath=fullURL.split(o.splitUrl),relPath=(o.uri!='full'&&fullURL.indexOf(o.splitUrl)>=0)?arrPath[arrPath.length-1]:fullURL;$(Obj+' a:not([href $= "#"])').each(function(){var a=$(this),fullHref,aHref;if(o.uri!='full'&&a.attr('href').indexOf(o.splitUrl)>=0){fullHref=a.attr('href').split(o.splitUrl);aHref=fullHref[fullHref.length-1];}else{aHref=a.attr('href');}
if(aHref==relPath){a.addClass('active').parent().attr('id','current').closest(o.obj).addClass('current');}});}
if(o.shift&&$(Obj+' a.active').closest(o.wrapper).prev(o.wrapper).length){var $currentWrap=$(Obj+' a.active').closest(o.wrapper),$curentStack=($().addBack)?$currentWrap.nextAll().addBack():$currentWrap.nextAll().andSelf(),$siblings=$currentWrap.siblings(o.wrapper),$first=$siblings.filter(":first");if(o.shift=='clicked'||(o.shift=='all'&&$siblings.length)){$currentWrap.insertBefore($first).addClass('shown').siblings(o.wrapper).removeClass('shown');}
if(o.shift=='all'&&$siblings.length>1){$curentStack.insertBefore($first);}}
if(o.initShow){$(Obj).find(o.initShow).show().addClass('shown').parents(Obj+' '+o.next).show().addClass('shown').end().parents(o.wrapper).find('> a.trigger, > '+o.el+' a.trigger').addClass('open').data('state',1);if(o.expandSub){$(Obj+' '+o.initShow).children(o.next).show().end().find('> a.trigger').addClass('open').data('state',1);}
if($(Obj+' '+o.initShow).next(o.next).length){$(Obj+' '+o.initShow).next(o.next).show().end().find('> a.trigger').addClass('open').data('state',1);}}
if(o.event=='click'){var ev='click';}else{if(o.focus){var f=' focus';}else{var f='';}
var ev='mouseenter'+f;}
var scrollElem;(typeof scrollableElement=='function')?(scrollElem=scrollableElement('html','body')):(scrollElem='html, body');$(Obj).delegate('a.trigger',ev,function(ev){var $thislink=$(this),$thisWrapper=$thislink.closest(o.wrapper),$nextEl=$thisWrapper.find('> '+o.next),$siblings=$thisWrapper.siblings(o.wrapper),$trigger=$(El+' a.trigger'),$shownEl=$thisWrapper.siblings(o.wrapper).find('>'+o.next+':visible'),shownElOffset;$shownEl.length?shownElOffset=$shownEl.offset().top:shownElOffset=false;function action(obj){if(($nextEl).length&&$thislink.data('state')&&(o.collapsible)){$thislink.removeClass('open');$nextEl.filter(':visible')[o.hideMethod](o.hideSpeed,function(){$thislink.data('state',0);});}
if(($nextEl.length&&!$thislink.data('state'))||(!($nextEl).length&&$thislink.closest(o.wrapper).not('.shown'))){if(!o.standardExpansible){$siblings.find('> a.open, >'+o.el+' a.open').removeClass('open').data('state',0).end().find('> '+o.next+':visible')[o.hideMethod](o.hideSpeed);if(shownElOffset&&shownElOffset<$(window).scrollTop()){$(scrollElem).animate({scrollTop:shownElOffset},o.scrollSpeed);}}
$thislink.addClass('open');$nextEl.filter(':hidden')[o.showMethod](o.showSpeed,function(){$thislink.data('state',1);});}
if(o.shift&&$thisWrapper.prev(o.wrapper).length){var $thisStack=($().addBack)?$thisWrapper.nextAll().addBack():$thisWrapper.nextAll().andSelf(),$first=$siblings.filter(":first");if(o.shift=='clicked'||(o.shift=='all'&&$siblings.length)){$thisWrapper.insertBefore($first).addClass('shown').siblings(o.wrapper).removeClass('shown');}
if(o.shift=='all'&&$siblings.length>1){$thisStack.insertBefore($first);}}}
if(o.event=='click'){action($trigger);if($thislink.is('[href $= "#"]')){return false;}else{if($.isFunction(o.retFunc)){return o.retFunc($thislink)}else{return true;}}}
if(o.event!='click'){hTimeout=window.setTimeout(function(){action($trigger);},o.interval);$thislink.click(function(){$thislink.blur();if($thislink.attr('href')=='#'){$thislink.blur();return false;}});}});if(o.event!='click'){$(Obj).delegate('a.trigger','mouseleave',function(){window.clearTimeout(hTimeout);});}
function scrollableElement(els){for(var i=0,argLength=arguments.length;i<argLength;i++){var el=arguments[i],$scrollElement=$(el);if($scrollElement.scrollTop()>0){return el;}else{$scrollElement.scrollTop(1);var isScrollable=$scrollElement.scrollTop()>0;$scrollElement.scrollTop(0);if(isScrollable){return el;}}};return[];};});};$.fn.accordion.defaults={container:true,obj:'ul',objClass:'.accordion',objID:'',wrapper:'li',el:'li',head:'',next:'ul',iconTrigger:false,initShow:'',expandSub:true,showMethod:'slideDown',hideMethod:'slideUp',showSpeed:400,hideSpeed:800,scrollSpeed:600,activeLink:true,event:'click',focus:true,interval:400,collapsible:true,standardExpansible:false,lastChild:true,shift:false,elToWrap:null,uri:'full',splitUrl:'/',retFunc:null};var msie=false;if(typeof window.attachEvent!='undefined'){msie=true;}
$.fn.slideFadeDown=function(speed,callback){return this.animate({opacity:'show',height:'show'},speed,function(){if(msie){this.style.removeAttribute('filter');}
if(jQuery.isFunction(callback)){callback();}});};$.fn.slideFadeUp=function(speed,callback){return this.animate({opacity:'hide',height:'hide'},speed,function(){if(msie){this.style.removeAttribute('filter');}
if(jQuery.isFunction(callback)){callback();}});};})(jQuery);}catch(e){console.error('Error in file:/templates/webcamtaxi/javascript/jquery.nestedAccordion.js; Error:'+e.message);};
