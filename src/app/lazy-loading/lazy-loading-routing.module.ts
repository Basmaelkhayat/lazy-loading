import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';

const routes: Routes = [
    { path: '', component: LazyLoadingComponent },
    {
        path: 'child',
        loadChildren: () => import('./child/child.module').then((m) => m.ChildModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LazyLoadingRoutingModule {}
