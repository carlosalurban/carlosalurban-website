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
  public mediaDesign = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getMedia().subscribe(
      response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.mediaDesign.push(response[key]);
          }
        }
        console.log(this.mediaDesign);
      },
      error => {
        console.log(error);
      });
  }

}
