const rp = require('request-promise');
const fs_ = require('fs');
//const config = require('../../assets/js/config');
//const TronWeb = require('tronWeb');

export async function get(url){
    
    let options = {
        uri: url,
        
        headers: {
            /*'Access-Control-Allow-Origin':'*',*/
            /*'Access-Control-Allow-Headers':'Content-Type', */
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            /*"cache-control": "no-cache",*/
            /*'User-Agent': 'Request-Promise'*/
        },
        json: true // Automatically parses the JSON string in the response
    };
    
    try {
        return await rp(options);
    }catch (e) {
        console.log('err',e.message);
    }
    
}

export async function post(url,body){
    let options = {
        method: 'POST',
        uri: url,
        body:body,
        headers: {'content-type': 'application/json'},
        json: true // Automatically parses the JSON string in the response
    };
    
    try {
        
        return await rp(options);
    }catch (e) {
        console.log('err',e.message);
    }
    
}
