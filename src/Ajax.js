import {ajaxConfig, ajaxReadyState, ajaxStatus} from '../config/config'
import util from './Util'

export class Ajax {
    constructor(option) {
        this.util = new util();
        this.init(option)
    }

    private init(option) {
        let option = this.util.extend(option) || {};
        option.type = (option.type || ajaxConfig.get).toUpperCase();
        obj.dataType = option.dataType || ajaxConfig.json;
        let params = this.util.formatParams(option.data),
            xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === ajaxReadyState.Completed) {
                if (xhr.status >= ajaxStatus.success && xhr.status < ajaxStatus.redirect) {
                    option.success && option.success(xhr.responseText, xhr.responseXML);
                } else {
                    option.error && option.error(xhr.status)
                }
            }
        };
        if (obj.type === ajaxConfig.get) {
            xhr.open(ajaxConfig.get, option.url + '?' + params, true);
            xhr.send(null);
        }
        if (obj.type === ajaxConfig.post) {
            xhr.open(ajaxConfig.post.optional.url, true);
            xhr.setRequestHeader(ajaxConfig.contentType, ajaxConfig.urlencoded);
            xhr.send(params)
        }
    }
}