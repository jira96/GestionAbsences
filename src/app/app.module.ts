import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RestapiService} from './restapi.service';
import { EtudiantAjouterComponent } from './etudiant-ajouter/etudiant-ajouter.component';
import { EtudiantModifierComponent } from './etudiant-modifier/etudiant-modifier.component';
import { EtudiantSupprimerComponent } from './etudiant-supprimer/etudiant-supprimer.component';
import { ProfesseurAjouterComponent } from './professeur-ajouter/professeur-ajouter.component';
import { ProfesseurSupprimerComponent } from './professeur-supprimer/professeur-supprimer.component';
import { ProfesseurModifierComponent } from './professeur-modifier/professeur-modifier.component';
import { ProfesseurListeComponent } from './professeur-liste/professeur-liste.component';
import { EtudiantListeComponent } from './etudiant-liste/etudiant-liste.component';
import { ClasseComponent } from './classe/classe.component';
import { ModuleComponent } from './module/module.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ClasseAjouterComponent } from './classe-ajouter/classe-ajouter.component';
import { ClasseModifierComponent } from './classe-modifier/classe-modifier.component';
import { ClasseSupprimerComponent } from './classe-supprimer/classe-supprimer.component';
import { ClasseListeComponent } from './classe-liste/classe-liste.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { EspaceProfesseurComponent } from './espace-professeur/espace-professeur.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'etudiant', component: EtudiantComponent,
        children: [
          {path: 'ajouter', component: EtudiantAjouterComponent},
          {path: 'modifier', component: EtudiantModifierComponent},
          {path: 'supprimer', component: EtudiantSupprimerComponent},
          {path: 'listeEtudiants', component: EtudiantListeComponent}
        ]
      },
      {
        path: 'professeur', component: ProfesseurComponent,
        children: [
          {path: 'ajouter', component: ProfesseurAjouterComponent},
          {path: 'modifier', component: ProfesseurModifierComponent},
          {path: 'supprimer', component: ProfesseurSupprimerComponent},
          {path: 'listeProfesseurs', component: ProfesseurListeComponent}
        ]
      },
      {
        path: 'classe', component: ClasseComponent,
        children: [
          {path: 'ajouter', component: ClasseAjouterComponent},
          {path: 'modifier', component: ClasseModifierComponent},
          {path: 'supprimer', component: ClasseSupprimerComponent},
          {path: 'listeClasses', component: ClasseListeComponent}
        ]
      },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    LoginComponent,
    ProfesseurComponent,
    AdminComponent,
    EtudiantAjouterComponent,
    EtudiantModifierComponent,
    EtudiantSupprimerComponent,
    ProfesseurAjouterComponent,
    ProfesseurSupprimerComponent,
    ProfesseurModifierComponent,
    ProfesseurListeComponent,
    EtudiantListeComponent,
    ClasseComponent,
    ModuleComponent,
    FiliereComponent,
    ClasseAjouterComponent,
    ClasseModifierComponent,
    ClasseSupprimerComponent,
    ClasseListeComponent,
    EspaceEtudiantComponent,
    EspaceProfesseurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
