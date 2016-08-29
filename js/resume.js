(function () {
    var ability = {
        'JavaScript': '85%',
        'JQuery/Zepto': '82%',
        'SASS': '76%',
        'Bootstrap': '75%',
        'require.js': '80%',
        'sea.js': '70%',
        'Underscore.js': '45%',
        'Gulp': '82%',
        'WeUI':'45%',
        'JS-SDK':'40%',
        'Node.js':'66%',
        'mongodb':'50%'
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


