import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://calroskadabra.esy.es/wp/wp-json/wp/v2';
  }
  getPosts(): Observable<any> {
    return this.http.get(this.url + '/posts');
  }
  getMedia() {
    return this.http.get(this.url + '/media');
  }
}
