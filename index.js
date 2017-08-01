/**
* hexo-tag-rtl
* https://github.com/bluemix/hexo-tag-rtl
* Copyright (c) 2017, bluemix.me
* Licensed under the MIT license.
*
* Syntax:
* {% rtl [html tag]%}
*  <RTL text> 
* {% endrtl %} 
*/

hexo.extend.tag.register('rtl', function(args, content){
	var className = "div"
	if (args[0]) { className = args[0] }
	var tag = "<" + className + " dir='rtl'>"
	tag += content
	tag += "</" + className + ">"
	return tag;
}, {ends: true});