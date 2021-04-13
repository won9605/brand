var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
	  center: new kakao.maps.LatLng(37.488346464180616, 127.00972725757175), // 지도의 중심좌표
	  level: 4 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
  imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
  imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(37.488346464180616, 127.00972725757175); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition,
image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
  '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
  '    <span class="title text-left"><span class="map-tit">TIRE CODI 본사</span><br>연락처:1588-8878<br>주소: 서울특별시 서초구 서초동 반포대로 90</span>' +
  '  </a>' +
  '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.488346464180616, 127.00972725757175);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  position: position,
  content: content,
  yAnchor: 1 
});

$(function(){
	$(".fa-angle-down1").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up1").css("display","block");
	  $(".map-store1").slideDown();
		  var mapContainer = document.getElementById('map-gangdong'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.54679644061981, 127.14347138305081), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.54679644061981, 127.14347138305081); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 강동점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.54679644061981, 127.14347138305081);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up1").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down1").css("display","block");
	  $(".map-store1").slideUp();
	});
  });



  // 강서 클릭시 지도
  $(function(){
	$(".fa-angle-down2").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up2").css("display","block");
	  $(".map-store2").slideDown();
		  var mapContainer = document.getElementById('map-gangseo'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.559022805630455, 126.84519810960448), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.559022805630455, 126.84519810960448); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 강서점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.559022805630455, 126.84519810960448);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up2").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down2").css("display","block");
	  $(".map-store2").slideUp();
	});
  });


  // 강남 클릭시 지도
	$(function(){
	$(".fa-angle-down3").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up3").css("display","block");
	  $(".map-store3").slideDown();
		  var mapContainer = document.getElementById('map-gangnam'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.506960305415355, 127.05730626530293), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.506960305415355, 127.05730626530293); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 강남점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.506960305415355, 127.05730626530293);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up3").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down3").css("display","block");
	  $(".map-store3").slideUp();
	});
  });


		// 강북 클릭시 지도
		$(function(){
	$(".fa-angle-down4").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up4").css("display","block");
	  $(".map-store4").slideDown();
		  var mapContainer = document.getElementById('map-gangbuk'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.63779119249177, 127.02310164029149), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.63779119249177, 127.02310164029149); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 강북점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.63779119249177, 127.02310164029149);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up4").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down4").css("display","block");
	  $(".map-store4").slideUp();
	});
  });


			// 김포 클릭시 지도
			$(function(){
	$(".fa-angle-down5").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up5").css("display","block");
	  $(".map-store5").slideDown();
		  var mapContainer = document.getElementById('map-kimpo'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.619053332389946, 126.71780029796221), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.619053332389946, 126.71780029796221); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 김포점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.619053332389946, 126.71780029796221);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up5").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down5").css("display","block");
	  $(".map-store5").slideUp();
	});
  });


  // 수원 클릭시 지도
  $(function(){
	$(".fa-angle-down6").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up6").css("display","block");
	  $(".map-store6").slideDown();
		  var mapContainer = document.getElementById('map-suwon'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.28884608168907, 127.01261051514533), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.28884608168907, 127.01261051514533); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 수원점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.28884608168907, 127.01261051514533);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up6").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down6").css("display","block");
	  $(".map-store6").slideUp();
	});
  });
  


  
  // 용인 클릭시 지도
  $(function(){
	$(".fa-angle-down7").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up7").css("display","block");
	  $(".map-store7").slideDown();
		  var mapContainer = document.getElementById('map-yongin'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.277814283332596, 127.15346622493965), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.277814283332596, 127.15346622493965); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 용인점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.277814283332596, 127.15346622493965);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up7").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down7").css("display","block");
	  $(".map-store7").slideUp();
	});
  });


		
  // 인천서구 클릭시 지도
  $(function(){
	$(".fa-angle-down8").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up8").css("display","block");
	  $(".map-store8").slideDown();
		  var mapContainer = document.getElementById('map-seogu'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.5971950904732, 126.66818010378347), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.5971950904732, 126.66818010378347); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 인천 서구점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.5971950904732, 126.66818010378347);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up8").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down8").css("display","block");
	  $(".map-store8").slideUp();
	});
  });



			
  // 인천남구 클릭시 지도
  $(function(){
	$(".fa-angle-down9").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up9").css("display","block");
	  $(".map-store9").slideDown();
		  var mapContainer = document.getElementById('map-namgu'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.45134409522661, 126.67772888446471), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.45134409522661, 126.67772888446471); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 인천 남구점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.45134409522661, 126.67772888446471);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up9").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down9").css("display","block");
	  $(".map-store9").slideUp();
	});
  });


  
			
  // 인천남구 클릭시 지도
  $(function(){
	$(".fa-angle-down10").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-up10").css("display","block");
	  $(".map-store10").slideDown();
		  var mapContainer = document.getElementById('map-gyeyang'), // 지도를 표시할 div 
	  mapOption = { 
			center: new kakao.maps.LatLng(37.53112664406538, 126.73420668261737), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
	
	var map = new kakao.maps.Map(mapContainer, mapOption);
	
	var imageSrc = 'images/marker.png', // 마커이미지의 주소입니다    
		imageSize = new kakao.maps.Size(52, 80), // 마커이미지의 크기입니다
		imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		markerPosition = new kakao.maps.LatLng(37.53112664406538, 126.73420668261737); // 마커가 표시될 위치입니다
	
	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
	  position: markerPosition,
	  image: markerImage // 마커이미지 설정 
	});
	
	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);  
	
	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	var content = '<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
		'    <span class="title text-left"><span class="map-tit">TIRE CODI 인천 계양점</span>' +
		'  </a>' +
		'</div>';
	
	// 커스텀 오버레이가 표시될 위치입니다 
	var position = new kakao.maps.LatLng(37.53112664406538, 126.73420668261737);  
	
	// 커스텀 오버레이를 생성합니다
	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1 
	});
	});
	$(".fa-angle-up10").click(function(){
	  $(this).css("display","none");
	  $(".fa-angle-down10").css("display","block");
	  $(".map-store10").slideUp();
	});
  });
