(function(){
	//イマココ
	var current = 0;
	//短歌の各文字数（判定用）
	var tanka = [5,7,5,7,7];
	//今打ってる文字数（デバッグ用？）
	var out = document.getElementById('out');

	var text = new Array();
	text[0] = document.getElementById('text0');
	text[1] = document.getElementById('text1');
	text[2] = document.getElementById('text2');
	text[3] = document.getElementById('text3');
	text[4] = document.getElementById('text4');

	var bt = new Array();
	bt[0] = document.getElementById('submit0');
	bt[1] = document.getElementById('submit1');
	bt[2] = document.getElementById('submit2');
	bt[3] = document.getElementById('submit3');
	bt[4] = document.getElementById('submit4');

	var finish = document.getElementById('finish');

	for(var n = 0; n <= 4; n++){
		text[n].disabled = true;
	}
	for(var n = 0; n <= 4; n++){
		bt[n].disabled = true;
	}
	finish.disabled = true;

	text[current].disabled = false;
	bt[current].disabled = false;

	//ここがスタート
	setCurrent(current);

	function setCurrent(current){
		if(current > 4){
			setFinished();
			return;
		}
console.log(current);
		text[current].disabled = false;
		bt[current].disabled = false;

		text[current].onkeyup = function(event){
			var txt = text[current].value;
			var count = txt.length;
			out.value = count;
		}

		bt[current].onclick = function(event){
			// デフォルトの動作が実行されないようにする
			event.preventDefault();

			var txt = new String(text[current].value);
			var count = txt.length;
			out.value = count;
			if(count == tanka[current]){
				text[current].disabled = true;
				bt[current].disabled = true;
				current++;
				setCurrent(current);
			}
			else{
				;
			}
		}
	}
	function setFinished(){
		finish.disabled = false;
	}
})();
