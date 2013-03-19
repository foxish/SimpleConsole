/*
 *  Project: cli
 *  Author: DarkCthulhu
 *  License: MIT
 */

/*
 * Class to handle all interaction with cli 
 * Functions handle an input command, and return output to cli.plugin
 */
 
var classContext;
function cliHandler(){
    this.history = new Array();
    classContext = this;
}

cliHandler.prototype.execute = function(command, resultElem){
    if(command.trim().length == 0){
        return;
    }
    else if (/clear/i.test(command)){
        $(resultElem).remove();
        return;
    }
    else if (/cat/i.test(command)) return {status: 0, response: "Meow!"};
    else if (/ls/i.test(command)) return {status: 0, response: "Ain't nobody got time fo dat!"};
    else if (/intro/i.test(command)) return {status: 1, response: "<img src='http://1.bp.blogspot.com/-dw9g-zmr8oc/T7Eq80cJ7AI/AAAAAAAAB-E/kYY2dcl2SkI/s1600/0113fox1.jpeg'/>"};
    else return {status: 0, response: "Yea... no! it ain't ready."}
};
