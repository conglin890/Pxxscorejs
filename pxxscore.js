(function(){

    var __ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };


    this.__ = __;

    __.version = '0.01';

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
})();
