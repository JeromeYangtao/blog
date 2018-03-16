var path = 'www.u.com/home?id=2&type=0&dtype=-1';

function parseUrl(url){
    var result = [];
    var query = url.split("?")[1];
    var queryArr = query.split("&");
    queryArr.forEach(function(item){
        var obj = {};
        var value = item.split("=")[1];
        var key = item.split("=")[0];
        obj[key] = value;
        result.push(obj);
    });
    return result;
}

console.log(parseUrl(path)); 
//[{id: '2'},{type: '0'},{dtype: '-1'}]