import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etudiant-supprimer',
  templateUrl: './etudiant-supprimer.component.html',
  styleUrls: ['./etudiant-supprimer.component.css']
})
export class EtudiantSupprimerComponent implements OnInit {

  id: any;
  private baseUrl = 'http://localhost:8080/etudiants/delete';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  delete(id: number) {
    this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
      .subscribe(
        data => {
        },
        error => console.log(error));

  }

}
