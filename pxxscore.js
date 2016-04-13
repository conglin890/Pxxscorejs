(function(){

    var __ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };


    this.__ = __;

    __.version = '0.01'; 
    
    
    __.datetime = {
        format:function(dateFormat, dateStr){
            var paramList = arguments;
            var datetime = new Date( paramList.length > 1 ? dateStr : __.datetime.getCurrtDatetime());
            
            dateFormat = dateFormat.replace('yyyy', datetime.getFullYear());
            dateFormat = dateFormat.replace('MM', datetime.getMonth() > 8 ? datetime.getMonth() + 1 : '0' + (datetime.getMonth() + 1).toString())
            dateFormat = dateFormat.replace('dd', datetime.getDate() > 9 ? datetime.getDate() : '0' + datetime.getDate().toString())
            dateFormat = dateFormat.replace('HH', datetime.getHours() > 9 ? datetime.getHours() : '0' + datetime.getHours().toString())
            dateFormat = dateFormat.replace('mm', datetime.getMinutes() > 9 ? datetime.getMinutes() : '0' + datetime.getMinutes().toString())
            dateFormat = dateFormat.replace('ss', datetime.getSeconds() > 9 ? datetime.getSeconds() : '0' + datetime.getSeconds().toString())
            
            return dateFormat;
        },
        getCurrtDatetime: function (){
            var paramList = arguments;
            var datetime = new Date();
            var dateStr = datetime.toLocaleDateString('en-US',{year:'numeric', month:'2-digit', day:'2-digit'});
            var timeStr = datetime.toLocaleTimeString('en-GB');
            return __.string.format('? ?',[dateStr, timeStr]);
        },
    }


    __.location = {
        search:function(){
            if(!(window.location.href.split('?').length > 1)){
                return null;
            }

            var paramList = arguments;
            var currtUrl = window.location.href.split('?')[1];
            var paramArr = currtUrl.split('&');
            
            if(paramList.length == 1 && paramArr.length > 0){
                for(var i = 0 ; i < paramArr.length ; i++){
                    if(paramArr[i].split('=')[0] == paramList[0]){
                        return paramArr[i].split('=')[1];
                    }
                }   
            }
            if(paramList.length == 0){
                var result = {};
                for(var i = 0 ; i < paramArr.length ; i++){
                    result[paramArr[i].split('=')[0]] = paramArr[i].split('=')[1];;
                }  
                return result;
            }
            return null;
        }

    }


    __.string = {
        format:function(str,list){
            for(var i = 0; i < list.length ; i++){
                str = str.replace('?', list[i]);
            }
            return  str;
        },
        formatByIndex:function (str, list){
            for(var i = 0; i < list.length ; i++){
                str = this.replaceAll(str, "\\{" + i +"\\}", list[i])
            }
            return str;
        },
        formatByKey:function (str, obj){
            for(var key in obj){
                str = this.replaceAll(str, "\\{" + key +"\\}", obj[key])
            }
            return str;
        },
        replaceAll:function (str,dentifier,value){
            var reg = new RegExp(dentifier,'g');
            return str.replace(reg, value);
        }
    }

  })();
