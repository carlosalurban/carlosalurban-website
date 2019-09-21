import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public data: any[] = [
    { name: 'email', url: 'carlosalvarezurbano@gmail.com' },
    { name: 'teléfono', url: '680595689' }

  ];
  public links: any = [
    { name: 'GitHub', url: 'https://github.com/carlosalurban' },
    { name: 'Behance', url: 'https://www.behance.net/carlosalvarezurbano' },
    { name: 'Carlosalurban', url: 'http://carlos814:6vE5Fuu7@www.carlosalurban.es.mialias.net' }

  ];

  constructor() { }

  ngOnInit() {
  }

}
