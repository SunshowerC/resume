
(function(){
	var ability = {
	'HTML':'80%',
	'CSS':'82%',
	'JavaScript':'60%',
	'JQuery':'23%',
	'PhotoShop':'30%',
	'智力值':'72%',
	'武力值':'60%',
	'耐力值':'71%',
	'潜力值':'90%'		
	};

	function addSkillValue() {
		var skill = document.querySelector('.skill');		
		for(var i in ability) {
			var item = document.createElement('div');
			item.innerHTML = i + '<div><div style="width:'+ ability[i] +  '"></div></div> '
			skill.appendChild(item);
		}

	}

	addSkillValue();

}())


