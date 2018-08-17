# JsLambda
js实现c#中Lambda表达式

使用示例：

  var mres = [20,33,40,89,55].where(x=>x%5==0);
  
  return：[20,40,55]
  
  
  var seles = [{age:423},{age:120},{name:'leo',age:80}].select(a=>a.age);
  
  return:[423,120,80]
  
  
  var distic = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].distinct(a=>a.age);
  
  return: [{age:423},{age:120},{name:'leo',age:80}]
  
  
  var max = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].max(a=>a.age);
  
  return:{age:423}
  
  
  var min = [{age:423},{age:120},{age:120},{name:'leo',age:80},{name:'leo',age:80}].min(a=>a.age);
  
  return:{name:'leo',age:80}

后期会增加其他lambda表达式
