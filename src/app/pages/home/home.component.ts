import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
title = 'CRUD';
  name = 'Diogo';
  clique(){
    this.configService.requestTest().subscribe(response => {
      console.log(response);
    })
  }
  constructor(private configService:ConfigService) {
    console.log('Olá')
    }

  ngOnInit(): void {
  }

}
