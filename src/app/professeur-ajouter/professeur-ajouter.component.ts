import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-professeur-ajouter',
  templateUrl: './professeur-ajouter.component.html',
  styleUrls: ['./professeur-ajouter.component.css']
})
export class ProfesseurAjouterComponent implements OnInit {
  package: any;
  prof: any = {
    nom: '',
    password: '',
    username: '',
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8080/professeur/add")
      .subscribe(result => {
          this.package = result;
        }, error => {
          console.log(error)
        }
      );

  }

  save() {
    this.http.post("http://localhost:8080/professeurs/add",this.prof)
      .subscribe(result => {
          this.package = result;
        }, error => {
          console.log(error)
        }
      );
  }
}
