import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [PostService]
})
export class PortfolioComponent implements OnInit {
  public postList = [];
  public mediaList = [];


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.postList.push(response[key]);
          }
        }
        console.log(this.postList);
      },
      error => {
        console.log(error);
      });
    /*
  this.postService.getMedia().subscribe(
    response => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.mediaList.push(response[key]);
        }
      }
      console.log(this.mediaList);
    },
    error => {
      console.log(error);
    });*/

  }

}
