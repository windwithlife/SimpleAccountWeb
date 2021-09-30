const isServer = typeof window == 'undefined';
import axios from "axios";

// const SOA_GATEWAY = config.servers.soaServer;
// const baseUrl     = config.application.contextPath;


export function doHref(path=''){
    location.href = `${location.origin}${baseUrl}/${path}` //首页登录成功处理
}

function setToken(token){
    if (!isServer) {
        localStorage.setItem('token', token);
    }
}
function getToken() {
    let token ='empty'
    if (!isServer) {
        token = localStorage.getItem('token');
    }
   
    return token;
}


const checkStatus = response => {
    console.log("check status");
    if (response.status >= 200 && response.status < 300) {
        return response
    } else if (response.status == 401 || response.status == 403) {
        if (!isServer) doHref();
        return response
    } else {
        var error = new Error((response && response.statusText) || 'text')
        error.response = response
        throw error
    }
}


function dealTokenV2(response) {
    const result       = response.data;
    const token  = response.headers.token;
    const statusCode = result.status.code;

    switch (statusCode) {
        case 401: {
            if (!isServer) doHref();
        }
        case 403: {
            if (!isServer) doHref();
        }
        default: {
            setToken(token);
        }
    }
    return result;
}

/*********************network version 1 */









/*********** V2***********************/


export class Network {
    constructor(applicationName){
        if(applicationName){this.applicationName = applicationName;}
        this.host = SOA_GATEWAY;
    }

    composeBaseUrl(path, useApplicationName){
        let finalUrl = this.host + '/';
        if((useApplicationName) && this.applicationName){
            finalUrl = finalUrl +  '/' + this.applicationName + path;  
        }else{
            finalUrl = finalUrl + path;
        }
        return  finalUrl;
        
    }
    switchDevServerHost(newHost){
       if(config.ENV_NAME === "DEV"){
            this.host = newHost;
       }
    }
    async fetch_post(url, params = {}) {
        try {
            //Loading.show();
            const fullUrl = this.composeBaseUrl(url, true);
            //axios.defaults.withCredentials = true;
            axios.defaults.crossDomain = true;
            let token = getToken();
            let result = await axios({
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                method: 'post',
                url: fullUrl,
                data: { head: { version: 1, systemCode: "1", deviceType: "1" }, params: params }
            }).then(checkStatus).then(dealTokenV2)
            
            return result;
        } catch (error) {
            console.error('---invoke_post_error---: ', error);
            throw error;
        }
    }
    async fetch_get(url, params = {}) {
        try {
            const fullUrl = this.composeBaseUrl(url, true);
            //axios.defaults.withCredentials = true;
            axios.defaults.crossDomain = true;
            let token = getToken();
            params.version = 1;
            params.systemCode = "1";
            params.deviceType = "1";
            let result = await axios({
                headers: {
                    'token': token
                },
                method: 'get',
                url: fullUrl,
                params: params,
            }).then(checkStatus).then(dealTokenV2)
         
            return result;
        } catch (error) {
            console.error('---invoke_post_error---: ', error);
            throw error;
        }
    }

    async uploadFile(file) {
        try {
           
            let formData = new FormData();
            let token = getToken();
            let json = { token, platType: 4, category: 1, version: 1, platForm: "web" };
            formData.append('json', JSON.stringify(json))
            formData.append('file', file);
            let urlPrefix = config.servers.resourceServer;
            let result = await axios.post(urlPrefix, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(checkStatus).then(dealTokenV2)
            
            return result;
        } catch (error) {
            Loading.hide();
            console.error('---invoke_uploadFile_error---: ', error);
            throw error;
        }
    }

}


