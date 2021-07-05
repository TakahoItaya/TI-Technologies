let map;
let marker;
let infoWindow;
let center = {
  lat: 35.6582906492718, // 緯度
lng: 139.70221625540262// 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 17
    });

     marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map // マーカーを立てる地図を指定
});

    infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">〒150-6124 <br>東京都渋谷区渋谷２丁目２４−１２ スクランブルスクエア ２４階</div>' // 吹き出しに表示する内容
});
 marker.addListener('click', function() { // マーカーをクリックしたとき
     infoWindow.open(map, marker); // 吹き出しの表示
    });
    }


    $(function(){
      $('#nav-btn').on('click' ,function(){
          $(this).toggleClass('-active');
          $('#nav').toggleClass('-active');
      });
  });

  $('a[href^="#"]').click(function(){
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-30;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });

  $('#nav a[href]').on('click', function(event) {
      $('#nav-btn').trigger('click');
  });


  AOS.init()