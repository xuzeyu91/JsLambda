# JsLambda
js实现c#中Lambda表达式

使用示例：

  var mres = [20,33,40,89,55].where(x=>x%5==0);<br>
  return：[20,40,55]<br><br>
  var seles = [{age:423},{age:120},{name:'leo',age:80}].select(a=>a.age);<br>
  return:[423,120,80]<br><br>
  var distic = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].distinct(a=>a.age);<br>
  return: [{age:423},{age:120},{name:'leo',age:80}]<br><br>
  var max = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].max(a=>a.age);<br>
  return:{age:423}<br><br>
  var min = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].min(a=>a.age);<br>
  return:{name:'leo',age:80}<br><br>

后期会增加其他lambda表达式
