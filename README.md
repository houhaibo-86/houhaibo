houhaibo
========
//显示图片说明

$('#in_y_anl ul li').hover(function(){
		$('p', this).stop().animate({bottom:'0px'},{queue:false,duration:115});
	}, function() {
		$('p', this).stop().animate({bottom:'-360px'},{queue:false,duration:115});
	});
	
	//图片无缝滚动
	<div class="scrollleft gun3">
    <ul class="gd_show">
        <li"><img src="./assets/images/rwfu_01.jpg" width="165" height="115" /></li>
        <li><img src="./assets/images/rwfu_02.jpg" width="165" height="115" /></li>
        <li><img src="./assets/images/rwfu_03.jpg" width="165" height="115" /></li>
        <li><img src="./assets/images/rwfu_04.jpg" width="165" height="115" /></li>              	
    </ul>
</div>
<script type="text/javascript">
$(function(){
	var $gun=$('.gun3 ul');
	var $li=$gun.find('li').eq(0).outerWidth(true);
	var len=$gun.find('li').length;
	var kuan=$li*len;
	var ting=null;
	$gun.html($gun.html()+$gun.html());
	
	function zy(){
		if($gun.css('left')=='-'+kuan+'px')
		{
			$gun.css({'left':'0px'});
		}
		else
		{
			$gun.css({'left':'-=1'});
		}
		
	}
	ting=setInterval(zy,40);
    $('.gun3').hover(function(){
		clearInterval(ting);
	},function(){
		ting=setInterval(zy,40);
	})
	
})
</script>
