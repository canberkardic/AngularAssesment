import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from '../../components/candidates/candidates.component';
import { CandidateDetailComponent } from '../../components/candidate-detail/candidate-detail.component';
import { CandidatesRoutingModule } from '../../routing/candidates-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    CandidatesComponent,
    CandidateDetailComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    AngularMaterialModule
  ]
})
export class CandidatesModule { }
