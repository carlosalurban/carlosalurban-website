import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  providers: [PostService]
})
export class DesignComponent implements OnInit {
  public postDesign = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.postDesign.push(response[key]);
          }
        }
        console.log(this.postDesign);
      },
      error => {
        console.log(error);
      });
  }

}
