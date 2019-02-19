$(document).ready(function(){
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu');
    var nav_link = $('.menu a');
    link.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    nav_link.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    

});

function slowScroll(id){
    var offset = 0;
    $('html,body').animate({
        scrollTop: $(id).offset ().top - offset
    }, 700);
    return false;
}




// модальные окна



var contact = document.getElementById("contact");
    contact.addEventListener('click',function(){

    swal("Контакты", "+3803434522\n\nnikita.babanin@mail.ru");
       
});


var contac = document.getElementById("contac");
    contac.addEventListener('click',function(){

    swal("Контакты", "+3803434522\n\nnikita.babanin@mail.ru");

});

var cent = document.getElementById("cent");
    cent.addEventListener('click',function(){

        swal("Заявка отправлена", "В ближайшее время, наш консультант свяжется с вами.", "success");
    })


var foot = document.getElementById("foot-link");
foot.addEventListener('click',function(){
    swal("Вы уверенны что хотите выйти за пределы сайта?", {
        buttons: ["Отмена!", "Продолжить!"],
      });
})

