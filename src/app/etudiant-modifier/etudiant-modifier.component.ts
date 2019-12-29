import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant-modifier',
  templateUrl: './etudiant-modifier.component.html',
  styleUrls: ['./etudiant-modifier.component.css']
})

// @Component({
//   selector: 'ngbd-dropdown-basic',
//   templateUrl: './dropdown-basic.html'
// })
export class EtudiantModifierComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/etudiants';
  id: any;
  etu: any = {
    nom: '',
    password: '',
    username: '',
    cne: '',
    classe: '',
  }
  etuMod: any = {
    nom: '',
    password: '',
    username: '',
    cne: '',
    classe: '',
  }
  package: any;
  ngOnInit() {
  }
  getEtu(id: number){
    this.http.get(`${this.baseUrl}/${id}`)
      .subscribe(
        result =>{
          this.package = result;
        },
        error => console.log(error));

  }
  Update() {
    this.http.post("http://localhost:8080/professeurs/add",this.etuMod)
      .subscribe(result => {
          this.package = result;
        }, error => {
          console.log(error)
        }
      );
  }

}
