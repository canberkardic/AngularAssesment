import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailComponent } from '../components/candidate-detail/candidate-detail.component';
import { CandidatesComponent } from '../components/candidates/candidates.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CandidatesComponent
      },
      {
        path: 'details',
        component: CandidateDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
