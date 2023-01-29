import { Injectable } from "@angular/core";
import {
    HttpClient
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpServices {
    /***************************************************************************
     * CONSTRUCTORS
     ***************************************************************************/
    constructor(private http: HttpClient) { }


    public getSourceCode(url: string): Promise<string> {

        return this.http.get(url,{responseType: 'text'}).toPromise()
        .then(response => {
            return response
        })
        .catch(err=> this.handleError(url,err))
    }


    /**************************************************************************
    * HANDLING ERRORS
    **************************************************************************/
    private handleError(url:string, error: any): Promise<any> {
        console.error(`error on calling ${url} : ${error}`)
        return Promise.reject(error);
    }
}