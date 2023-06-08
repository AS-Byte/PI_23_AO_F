import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HeaderComponent } from './front-office/header/header.component';
import { ContactComponent } from './front-office-pages/contact/contact.component';
import { PropertyGridComponent } from './front-office-pages/property/property-grid/property-grid.component';
import { PropertySingleComponent } from './front-office-pages/property/property-single/property-single.component';
import { BlogGridComponent } from './front-office-pages/blog/blog-grid/blog-grid.component';
import { BlogSingleComponent } from './front-office-pages/blog/blog-single/blog-single.component';
import { AboutComponent } from './front-office-pages/about/about.component';
import { HomeComponent } from './front-office-pages/home/home.component';
import { OwnerComponent } from './front-office-pages/owner/owner/owner.component';
import { OwnerSingleComponent } from './front-office-pages/owner/owner-single/owner-single.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetAllContratsComponent } from './Contrat/get-all-contrats/get-all-contrats.component';
import { AddContratComponent } from './Contrat/add-contrat/add-contrat.component';
import { UpdateContratComponent } from './Contrat/update-contrat/update-contrat.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteContratComponent } from './Contrat/delete-contrat/delete-contrat.component';
import { GetOneContratComponent } from './Contrat/get-one-contrat/get-one-contrat.component';
import { GetAllTranchesComponent } from './Tranche/get-all-tranches/get-all-tranches.component';
import { GetOneTrancheComponent } from './Tranche/get-one-tranche/get-one-tranche.component';
import { UpdateTrancheComponent } from './Tranche/update-tranche/update-tranche.component';
import { AddTrancheComponent } from './Tranche/add-tranche/add-tranche.component';
import { AddRdvComponent } from './RDV/add-rdv/add-rdv.component';
import { GetAllRdvsComponent } from './RDV/get-all-rdvs/get-all-rdvs.component';
import { GetOneRdvComponent } from './RDV/get-one-rdv/get-one-rdv.component';
import { UpdateRdvComponent } from './RDV/update-rdv/update-rdv.component';
import { AddDisponibilityComponent } from './Disponibilites/add-disponibility/add-disponibility.component';
import { UpdateDisponibilityComponent } from './Disponibilites/update-disponibility/update-disponibility.component';
import { GetAllDisponibilityComponent } from './Disponibilites/get-all-disponibility/get-all-disponibility.component';
import { GetOneDisponibilityComponent } from './Disponibilites/get-one-disponibility/get-one-disponibility.component';
import { AlltemplateComponent } from './front-office/alltemplate/alltemplate.component';
import { HeaderBackComponent } from './back-office/header-back/header-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { SideBarBackComponent } from './back-office/side-bar-back/side-bar-back.component';
import { AlltemplateBackComponent } from './back-office/alltemplate-back/alltemplate-back.component';
import { CompteClientComponent } from './front-office-pages/compte-client/compte-client.component';


@NgModule({
  declarations: [
    AppComponent,
    GetAllContratsComponent,
    AddContratComponent,
    UpdateContratComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    PropertyGridComponent,
    PropertySingleComponent,
    BlogGridComponent,
    BlogSingleComponent,
    AboutComponent,
    HomeComponent,
    OwnerComponent,
    OwnerSingleComponent,
    LoginComponent,
    DashboardComponent,
    DeleteContratComponent,
    GetOneContratComponent,
    GetAllTranchesComponent,
    GetOneTrancheComponent,
    UpdateTrancheComponent,
    AddTrancheComponent,
    AddRdvComponent,
    GetAllRdvsComponent,
    GetOneRdvComponent,
    UpdateRdvComponent,
    AddDisponibilityComponent,
    UpdateDisponibilityComponent,
    GetAllDisponibilityComponent,
    GetOneDisponibilityComponent,
    AlltemplateComponent,
    HeaderBackComponent,
    FooterBackComponent,
    SideBarBackComponent,
    AlltemplateBackComponent,
    CompteClientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
