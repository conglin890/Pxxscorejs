var __ = require('../pxxscore.js');

var assert = require('chai').assert;

function log(message){
    var spance = '      '
    console.log(spance + message)
}

describe('__.datetime', function() {
    describe('__.datatime.format()', function() {
        it('Test', function() {
            log(__.datetime.format('yyyy/MM/dd HH:mm:ss'));
            log( __.datetime.format('MM/dd/yyyy HH:mm:ss','2016/04/16 14:21:23'));
        });
    });

    describe('__.datetime.formatNumberByZero()', function(){
        it('Test', function() {
            assert.equal('09', __.datetime.formatNumberByZero(9));
            assert.equal('19', __.datetime.formatNumberByZero(19));
        })
    });

    describe('__.datetime.getCurrtDatetime()', function(){
        it('test', function(){
            log(__.datetime.getCurrtDatetime());
        })

    });

    describe('__.datetime.getDateByDiff()', function(){
        it('test', function(){
            log(__.datetime.getDateByDiff(1));
            log(__.datetime.getDateByDiff(-1));
            log(__.datetime.getDateByDiff(-1, '2015/07/01'));
            log(__.datetime.getDateByDiff(1, '2015/07/01'));
        
        })
    
    })
})



describe('__.String', function() {
    describe('__.String.formatByIndex', function() {
        it('test', function () {
            log(__.string.format('My ? is ?',['name', 'Pxx']) );
            assert.equal('My name is Pxx', __.string.format('My ? is ?',['name', 'Pxx']) )
        });
    });  

    describe('__.String.formatByIndex', function() {
        it('test', function () {
            log(__.string.formatByKey('My {0} is {1}',['name', 'Pxx']) )
                assert.equal('My name is Pxx', __.string.formatByKey('My {0} is {1}',['name', 'Pxx']) )
        });
    }); 
    describe('__.String.formatByKey', function() {
        it('test', function () {
            log(__.string.formatByKey('My {x1} is {x2}',{x1:'name', x2:'Pxx'}) )
                assert.equal('My name is Pxx', __.string.formatByKey('My {x1} is {x2}',{x1:'name', x2:'Pxx'}) )
        });
    }) 
    describe('__.String.replaceAll', function() {
        it('test', function () {
            log(__.string.replaceAll('My name is test','test', 'Pxx') )
                assert.equal('My name is Pxx', __.string.replaceAll('My name is test','test', 'Pxx') )
        });
    })

});
