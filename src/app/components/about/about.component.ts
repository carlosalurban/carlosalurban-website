import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [PostService]
})
export class AboutComponent implements OnInit {
  public pageDescript = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAbout().subscribe(
      response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.pageDescript.push(response[key]);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
