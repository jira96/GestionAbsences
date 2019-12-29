import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant-liste',
  templateUrl: './etudiant-liste.component.html',
  styleUrls: ['./etudiant-liste.component.css']
})
export class EtudiantListeComponent implements OnInit {
  etudiants: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8080/etudiants")
      .subscribe(result => {
          this.etudiants = result;
        }, error => {
          console.log(error)
        }
      );

  }
}
