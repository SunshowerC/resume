(function () {
    var ability = {
        'JavaScript': '85%',
        'jQuery': '82%',
        'Zepto':'75%',
        'SASS': '75%',
        'Bootstrap': '70%',
        'RequireJS': '80%',
        'SeaJS': '76%',
        'Underscore': '55%',
        'Gulp': '73%',
        'WeUI':'45%',
        'JS-SDK':'40%',
        'Node.js':'66%',
        'MongoDB':'50%'
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

}());


