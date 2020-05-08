import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';



@Injectable()
export class ProductService {

  private productUrl: string  = 'http://admin.universallifescience.com/api/products'; 

  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }
  
 }
