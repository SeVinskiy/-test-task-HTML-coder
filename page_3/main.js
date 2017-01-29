"use strict";

  //анимация меню
  $(document).ready(function() {
    $('div.container > ul > li:has(ul)').hover(
        function(){
            $(this).children('ul.invisibleList').slideDown(300);
        },
        function(){
            $(this).children('ul.invisibleList').slideUp(300);
        }
    );
  });


  //скрытие меню, анимация если ширина экр. меньше 960
  $("i.openMenu").on("click", function(){
    $('header > div > ul').addClass("visibleUl");
    $("i.openMenu").css("display", "none");
    $("i.closeMenu").css("display", "inline-block");
  });

  $("i.closeMenu").on("click", function(){
    $('header > div > ul').removeClass("visibleUl");
    $("i.closeMenu").css("display", "none");
    $("i.openMenu").css("display", "inline-block");
  });


  //Drag&drop
  function dragStart() {
      event.dataTransfer.setData("Text", event.target.id);
  }

  function allowDrop () {
      event.preventDefault();
  }

  function drop() {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      $(event.target).append(document.getElementById(data));
  }
