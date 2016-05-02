import {Http, Response, RequestOptions, Headers} from 'angular2/http';

export const CommonRequest = {
    delete: (http: Http, url: string, id) => {
        let options = new RequestOptions({
            body: JSON.stringify(id)
        });
        return http.delete(url, options)
            .map(CommonRequest.extractData)
            .toPromise();
    },
    extractData: (res: Response) => {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Erro na requisição: ' + res.status);
        }
        let body = res.json();
        return body || {};
    },
    get: (http: Http, url: string) => {
        return http.get(url)
            .map(CommonRequest.extractData)
            .toPromise();
    },
    post: (http: Http, url: string, data: any) => {
        let dataString = JSON.stringify(data),
            headers = new Headers({
                'Content-Type': 'application/json'
            }),
            options = new RequestOptions({
                headers: headers
            });
        return http.post(url, dataString, options)
            .map(CommonRequest.extractData)
            .toPromise();
    },
    postFormData: (url: string, data: FormData) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    let json = JSON.parse(xhr.response);
                    (xhr.status < 200 || xhr.status >= 300) ? reject(json) : resolve(json);
                }
            };
            xhr.open('post', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.send(data);
        });
    }
};