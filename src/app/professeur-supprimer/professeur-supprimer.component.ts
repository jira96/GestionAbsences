import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-professeur-supprimer',
  templateUrl: './professeur-supprimer.component.html',
  styleUrls: ['./professeur-supprimer.component.css']
})
export class ProfesseurSupprimerComponent implements OnInit {

  id: any;
  private baseUrl = 'http://localhost:8080/professeurs/delete';
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
