</script>
<script type="text/javascript">
	//运行要求：配置服务器
	//第三种方法   面向对象
	var obj = {};
	var  switchTab = {
		init : function(){
			this.requestAjax();
			this.bindEvent();
			this.changeHash();
		},
		bindEvent : function(){
			var me = this;
			$("ul").on("click","li",function(){
				var num = $(this).text();
				window.location.hash = num;
				me.render();
			});
		},
		changeHash : function(){
			var me = this;
			window.onhashchange = function(){
				me.render();
			};
		},
		requestAjax : function(){
			var me = this;
			$.get("js/data.json",function(res){
				obj = JSON.parse(res);
				me.render();
			});
		},
		render : function(){
			$(".content").html(obj[window.location.hash.substring(1)]);
			if(window.location.hash === ""){
				$(".content").html("");
			}
		}
	}
	switchTab.init();
