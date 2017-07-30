# hexo-tag-rtl

Force RTL layout direction when used in a mixed RTL and LTR texts.

# About
> This is a [Hexo](http://hexo.io/) tag plugin for changing the direction of your writing (layout)

## Installation
```bash
npm install --save hexo-tag-rtl
```

## Usage

```bash
{% rtl %}
  RTL text
{% endrtl %} 
```
## Example

An English document, but wants to have and RTL direction

```
مقتطفات من بعض الحكم

{% rtl %}
مقتطفات من بعض الحكم
{% endrtl %}

“A small leak will sink a great ship.” - Benjamin Franklin

{% rtl %}
"لو أنك عشتَ في الماضي و تصرفت كأنك في الماضي ، سوف يكون صعباً على المُستقبلِ أن يراكَ." - Body of Lies
{% endrtl %}

```

which results in
![screenshot.png](screenshot.png)


## Authors

[blueMix](bluemix.me)