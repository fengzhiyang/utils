export class Url {
    constructor() {
    }

    public parseQueryString(url) {
        if (!url && typeof url === 'string' && url.length <= 0) return false;
        let href = url || window.location.href;
        let search = href.substring(href.indexOf('?') + 1);
        if (!search) return false;
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }

}