(function(){

    var __ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };


    this.__ = __;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = __;
        }
        exports.__ = __;
    }


    __.version = '0.01'; 

    __.datetime = { 
        comparedDate:function(startDate, endDate){
            var paramList = arguments;
            if(paramList.length == 1){
                endDate = __.datetime.format('yyyy/MM/dd');
            }

            return Math.floor((new Date(startDate).getTime() - new Date(endDate).getTime())/86400000)
        },
        format:function(dateFormat, dateStr){
            var paramList = arguments;
            var datetime = new Date( paramList.length > 1 ? dateStr : __.datetime.getCurrtDatetime());
            dateFormat = dateFormat.replace('yyyy', datetime.getFullYear());
            dateFormat = dateFormat.replace('MM', __.datetime.formatNumberByZero(datetime.getMonth() + 1));
            dateFormat = dateFormat.replace('dd', __.datetime.formatNumberByZero(datetime.getDate()));
            dateFormat = dateFormat.replace('HH', __.datetime.formatNumberByZero(datetime.getHours()));
            dateFormat = dateFormat.replace('mm', __.datetime.formatNumberByZero(datetime.getMinutes()));
            dateFormat = dateFormat.replace('ss', __.datetime.formatNumberByZero(datetime.getSeconds()));
            return dateFormat;
        },
        formatNumberByZero:function(num){
            return num > 9 ? num : '0' + num.toString();
        },
        getCurrtDatetime: function (){
            var datetime = new Date();
            var dateStr = datetime.toLocaleDateString('en-US',{year:'numeric', month:'2-digit', day:'2-digit'});
            var timeStr = datetime.toLocaleTimeString('en-GB', {hour12:false});
            return __.string.format('? ?',[dateStr, timeStr]);
        },
        getDateByDiff:function(diffDay, date){
            var date = (date == undefined ? new Date() : new Date(date));
            date = new Date(date.getTime() + diffDay * 86400000);
            return __.datetime.format('MM/dd/yyyy', date.getTime());
        }
    }


    __.location = {
        search:function(paramName){
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

}).call(this);
