Array.prototype.where = function () {
    if (!this) return [];
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式');
        return;
    }
    var name = matches[1];
    var expression = matches[3];
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
    if (!this) return [];
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
    if (!this) return [];
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

Array.prototype.max = function () {
    if (!this) return {};
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式');
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
    var result = {};
    this.forEach(function (value, index, array) {
        if (value[property]) {
            if (!result[property]) {
                result = value;
            }
            if (value[property] > result[property]) {
                result = value;
            }
        }
    });
    return result;
}

Array.prototype.min = function () {
    if (!this) return {};
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式');
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
    var result = {};
    this.forEach(function (value, index, array) {
        if (value[property]) {
            if (!result[property]) {
                result = value;
            }
            if (value[property] <

                result[property]) {
                result = value;
            }
        }
    });
    return result;
}

Array.prototype.orderBy = function () {
    if (!this) return [];
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式');
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
    var result = this.sort(xzyCompare(property));
    return result;
}

Array.prototype.orderByDesc = function () {
    if (!this) return [];
    var args = arguments[0].toString();
    var matches = args.match(/(\w)(\s+)?=>(.*)+/);
    if (!matches) {
        console.error('错误的表达式');
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
    var result = this.sort(xzyCompareDesc(property));
    return result;
}

Array.prototype.contains = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) {
            return true;
        }
    }
    return false;
}

var xzyCompare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop]; if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var xzyCompareDesc = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop]; if (val1 > val2) {
            return -1;
        } else if (val1 < val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

