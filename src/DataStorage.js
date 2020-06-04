
export default class DataStorage {
    SECRET_KEY = "5eca9a974a532801892ed709";


    readData(key, onRead, onError) {
        let req = new XMLHttpRequest();

        req.onerror = () => {
            onError(req);
        };

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                console.log("\n**********************\nGET:"+req.responseText);
                onRead(JSON.parse(req.responseText)[key]);
            } else {
                onError(req);
            }
        };

        // req.open("GET", "https://hochusobachku-388b.restdb.io/media/"+key+"?key=" + this.SECRET_KEY, true);
        req.open("GET", "https://sophiakravchuk-3dc3.restdb.io/rest/hochusobachku/5eca982700aa167900029882");
        req.setRequestHeader("x-apikey", this.SECRET_KEY);
        req.send();
    }


    writeData(dataKey, data, onSuccess, onError) {
        let req = new XMLHttpRequest();

        req.onerror = () => {
            onError(req);
        };


        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                onSuccess();
            } else {
                onError(req);
            }
        };

        req.open("PUT", "https://sophiakravchuk-3dc3.restdb.io/rest/hochusobachku/5eca982700aa167900029882");
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("x-apikey", this.SECRET_KEY);
        req.setRequestHeader("cache-control", "no-cache");
        const toPut = {};
        toPut[dataKey] = data;
        const json = JSON.stringify(toPut);
        console.log("key:"+dataKey+" PUT:" + json);
        req.send(json);
    }
}