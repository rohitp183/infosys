import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  http = inject(HttpClient);
  api = 'http://localhost:8181/api/cases';

  getSearchData(obj : any) {
    return this.http.post(this.api + '/search', obj)
  }

  getRoles() {
    return this.http.post(this.api + '/roles', {})
  }

  getAccessControlTpye() {
    return this.http.post(this.api + '/accessControlType', {})
  } 

  getCaseCategory() {
    return this.http.post(this.api + '/caseCategory', {})
  }

  getCaseSubCategory() {
    return this.http.post(this.api + '/caseSubCategory', {})
  }

}
