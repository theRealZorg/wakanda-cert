exports.getPosts = function getPosts() {
    try {
        var xhr = new XMLHttpRequest();
        var response;
        var Uri = "http://jsonplaceholder.typicode.com/posts"
        xhr.open("get", Uri, false);
        xhr.send();
        if (xhr.readyState == 4) {
            response = JSON.parse(xhr.responseText);

        }
        return response;
    }
    catch (e) {
        return e;
    }


}