# JsLambda
js实现c#中Lambda表达式

使用示例：

  var mres = [20,33,40,89,55].where(x=>x%5==0);
  var seles = [{age:423},{age:120},{name:'leo',age:80}].select(a=>a.age);
  var distic = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].distinct(a=>a.age);
