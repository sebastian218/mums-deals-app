import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  private readonly reqPath = environment.apiConfig.path;
  private readonly key = environment.apiConfig.secretKey;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.reqPath, { headers: new HttpHeaders({ 'secretKey': this.key }) });
  }

}
