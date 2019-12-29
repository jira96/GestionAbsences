import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-professeur-liste',
  templateUrl: './professeur-liste.component.html',
  styleUrls: ['./professeur-liste.component.css']
})
export class ProfesseurListeComponent implements OnInit {
  professeur: any;
  package: any;
  id: any;
  private baseUrl = 'http://localhost:8080/professeurs/';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8080/professeurs")
      .subscribe(result => {
      this.package = result;
      }, error =>  {
    console.log(error)
      }
);
  }

  // deleteProf(id: number) {
  //   this.http.delete("http://localhost:8080/professeurs/delete"/${id})
  //       .subscribe(
  //       data => {
  //         this.ngOnInit();
  //       },
  //       error => console.log(error)
  //       );
  // };

  // deleteProf(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }


  // public delete(prof) {
  //
  //   this.http.delete("http://localhost:8080/professeurs/delete/"+id)
  //     .subscribe(result => {
  //         this.package = result;
  //       }, error =>  {
  //         console.log(error)
  //       }
  //     );
  // }

  public update(){}


}
