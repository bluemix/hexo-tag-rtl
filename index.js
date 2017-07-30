/**
* hexo-tag-rtl
* https://github.com/bluemix/hexo-tag-rtl
* Copyright (c) 2017, bluemix.me
* Licensed under the MIT license.
*
* Syntax:
* {% rtl %}
*  <RTL text> 
* {% endrtl %} 
*/

hexo.extend.tag.register('rtl', function(args, content){
	var tag = "<p dir='rtl'>"
	tag += content
	tag += "</p>"
	return tag;
}, {ends: true});