(function () {
    var ability = {
        'HTML': '80%',
        'CSS': '73%',
        'JavaScript': '65%',
        'SASS': '50%',
        'JQuery': '52%',
        'Bootstrap': '45%',
        'require.js': '40%',
        'Underscore.js': '35%',
        'Node.js':'16%'
    };

    function addSkillValue() {
        var skill = document.querySelector('.skill');
        var frag = document.createDocumentFragment();
        for (var i in ability) {
            var item = document.createElement('div');
            item.innerHTML = i + '<div class="progress"><div class="progress-bar" style="width:' + ability[i] + '"></div></div> ';
            frag.appendChild(item);
        }
        skill.appendChild(frag);

    }

    addSkillValue();

}())


