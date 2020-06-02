import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressModel } from '../address/address-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://localhost:8080/address';
  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<AddressModel[]> {
    return this.http.get<AddressModel[]>(this.BASE_URL + '/all');
  }

  postAddress(address: AddressModel): Observable<AddressModel> {
    return this.http.post<AddressModel>(this.BASE_URL, address);
  }

  deleteAddress(id: string): Observable<any> {
    return this.http.delete(this.BASE_URL + id);
  }

}
