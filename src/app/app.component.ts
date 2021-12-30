import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'CRUD';
  name = 'Diogo';
  clique(){
    this.configService.requestTest().subscribe(response => {
      alert(response);
    })
  }

  submeter() {
    this.configService.postTest().subscribe(response => {
    })
  }
 
  constructor(private configService:ConfigService, private http: HttpClient) {
  console.log('Olá')
  }

}

