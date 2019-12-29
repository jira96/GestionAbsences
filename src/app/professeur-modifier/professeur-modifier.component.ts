import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-professeur-modifier',
  templateUrl: './professeur-modifier.component.html',
  styleUrls: ['./professeur-modifier.component.css']
})
export class ProfesseurModifierComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/professeurs';
  id: any;
  prof: any = {
    nom: '',
    password: '',
    username: '',
  }
  profMod: any = {
    nom: '',
    password: '',
    username: '',
  }
  package: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getProf(id: number){
    this.http.get(`${this.baseUrl}/${id}`)
      .subscribe(
        result =>{
          this.package = result;
        },
        error => console.log(error));

  }
  Update() {
    this.http.post("http://localhost:8080/professeurs/add",this.profMod)
      .subscribe(result => {
          this.package = result;
        }, error => {
          console.log(error)
        }
      );
  }
}
