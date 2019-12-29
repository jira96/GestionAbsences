import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant-ajouter',
  templateUrl: './etudiant-ajouter.component.html',
  styleUrls: ['./etudiant-ajouter.component.css']
})
export class EtudiantAjouterComponent implements OnInit {

  constructor(private http: HttpClient) { }
 package: any;
  etu: any = {
    username: '',
    password: '',
    cne: '',
    nom: '',
    class: ''
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
    this.http.post("http://localhost:8080/etudiants/add",this.etu)
      .subscribe(result => {
          this.package = result;
        }, error => {
          console.log(error)
        }
      );
  }

}
