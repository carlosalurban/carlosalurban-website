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
  public loading = false;


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.postList.push(response[key]);
            this.loading = true;
          }
        }
      },
      error => {
        console.log(error);
      });

  }

}
