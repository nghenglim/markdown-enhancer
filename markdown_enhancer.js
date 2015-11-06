$.fn.markdown_enhancer = function () {
  $(this).find('ul li').each(function(){
    var text = $(this).text();
    var newtext = text.substr(4);
    var checked = -1;
    if (text.startsWith("[ ] ")) {
      checked = 0;
      $(this).html('<input type="checkbox">'+newtext);
    } else if (text.startsWith("[x] ")) {
      checked = 1;
      $(this).html('<input type="checkbox" checked>'+newtext);
    }

    if (checked >= 0) {
      var str_checked = checked ? "checked" : "";
      $(this).html('<input class="task-list-item-checkbox" type="checkbox" disabled '+ str_checked +'>'+newtext);
      $(this).parent().addClass("task-list");
      $(this).addClass("task-list-item");
    }
  });
}
