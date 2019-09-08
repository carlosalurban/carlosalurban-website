import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://www.carlosalurban.es.mialias.net/wp-json';
  }
  getMedia(): Observable<any> {
    return this.http.get(this.url + '/wp/v2/posts');
  }
}
