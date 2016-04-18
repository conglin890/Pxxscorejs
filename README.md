Pxxscorejs
===

* 概述
* Datetime
    *   format

### 概述
pxxscorejs是一个Javascript扩展工具类，


### Datetime
日期时间扩展函数。

##### comparedDate(startDate, endDate)
计算日期差
> *__.datetime.comparedDate(startDate, endDate)*      
>     *startDate:*  必填,开始日期     
>     *endDate:*  可选, 结束日期， 不填为当前日期     

```javascript
    //当前日期 2016/04/18
    __.datetime.comparedDate('04/19/2016');   // ==>  1
    __.datetime.comparedDate('04/17/2016');   // ==> -1
    __.datetime.comparedDate('04/17/2016','04/15/2016');  // ==> 2
    __.datetime.comparedDate('04/17/2016','05/15/2016')； // ==> -28
```



##### format(dateFormat, dateStr)
格式化日期
> *__.datetime.format(dateFormat, dateStr)*    
>     *dateFormat:*  必填，输出日期格式   
>     *dateStr:*     可选, 不填为当前日期时间   

```javascript
    __.datetime.format('yyyy/MM/dd HH:mm:ss');    // ==>2016/04/16 14:21:23
    __.datetime.format('MM/dd/yyyy HH:mm:ss','2016/04/16 14:21:23');    // ==>2016/04/16 14:21:23

```

##### formatNumberByZero(num)
格式化数字为两位显示
> *__.datetime.formatNumberByZero(num)*    
>     *num:*  必填，需要格式化的数字  

```javascript
    __.datetime.formatNumberByZero(9) ;    // ==> 09
    __.datetime.formatNumberByZero(19) ;    // ==> 19

```

##### getCurrtDatetime()
获取当前日期时间
> *__.datetime.getCurrtDatetime()* 
```javascript
    __.datetime.getCurrtDatetime() ;    // ==> 04/16/2016 14:56:44
```

### location
Url 扩展函数

#### search(paramName)
获取get提交参数
> *__.location.search(paramName)*
> *paramName:*  可选，获取的参数名称

```javascript
    //参数列表 test=test1&test2=testParam
    __.location.search();      // ==>  {test: "test1", test2: "testParam"}
    __.location.search('test');      // ==>  test1
```

### string
String扩展函数

#### format
根据所给参数替换相应位置字符
> *__.string.format(str, list)*    
> *str:*  需替换的字符串  固定为 ? 
> *list*  替换的数组列表

```javascript
    __.string.format('My ? is ?',['name', 'Pxx'])      // ==>    My name is Pxx
```

#### formatByKey
根据所给参数替换相应位置字符
> *__.string.formatByKey(str, list)*    
> *str:*  需替换的字符串  固定为 {key}
> *list*  替换的数组列表(数组或对象)

```javascript
    __.string.formatByKey('My {0} is {1}',['name', 'Pxx'])      // ==>    My name is Pxx
    __.string.formatByKey('My {x1} is {x2}',{x1:'name', x2:'Pxx'})      // ==>    My name is Pxx
```

#### replaceAll
替换数组内全部字符串
> *__.string.replaceAll(str,dentifier,value)*    
> *str:*  需替换的字符串
> *dentifier*  需要被替换的字符
> *value*  需要替换的字符

```javascript
    __.string.replaceAll('My name is test','test', 'Pxx')      // ==>    My name is Pxx
```


