Array.prototype.where = function () {
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式');
        return;
    }
    var name = matches[1];
    var expression = matches[3];

    if (!this) return [];
    var result = [];
    this.forEach(function (value, index, array) {
        eval('var rpr=/' + name + '/g');
        var newexp = expression.replace(rpr, value);
        var res = eval(newexp);
        if (res) {
            result.push(value);
        }
    });
    return result;
};

Array.prototype.select = function () {
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式 .');
        return;
    }
    var name = matches[1];
    var expression = matches[3];
    matches = expression.match(/\.(\w+)/);
    if (!matches) {
        console.error('invalid expression .');
        return;
    }
    var property = matches[1];
    var result = [];
    this.forEach(function (value, index, array) {
        if (value[property]) {
            result.push(value[property]);
        }
    });
    return result;
};

Array.prototype.distinct = function () {
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式 .');
        return;
    }
    var name = matches[1];
    var expression = matches[3];
    matches = expression.match(/\.(\w+)/);
    if (!matches) {
        console.error('错误的表达式 .');
        return;
    }
    var property = matches[1];
    var result = [];
    this.forEach(function (value, index, array) {
        if (value[property]) {
            var add = true;
            for (var i = 0; i < result.length; i++) {
                if (value[property] == result[i][property]) {
                    add = false;
                    break;
                }
            }
            if (add) result.push(value);
        }
    });
    return result;
};
