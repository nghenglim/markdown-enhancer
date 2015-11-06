### Markdown Enhancer JS

Markdown Enhancer JS is a plugin to customize your markdown especially for static site generator such as Jekyll or Hugo. Main purpose to let the markdown support Github checkbox `- [ ]` or `- [x]` which is not officially supported.

### Results
![mardown-enhancer-JS](https://github.com/nghenglim/markdown-enhancer/raw/master/image.png "mardown-enhancer-JS")

### How To Use
Including the CSS
```
<link rel="stylesheet" href="{{ .Site.BaseURL }}/css/markdown_enhancer_bootswatch_paper.css"/>
```
Including the JS and call the markdown enhancer
```
<script src="{{ .Site.BaseURL }}/js/markdown_enhancer.js"></script>
<script type="text/javascript">
$( document ).ready(function() {
  $('body').markdown_enhancer();
});
</script>
```
