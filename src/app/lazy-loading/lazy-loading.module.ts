import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [LazyLoadingComponent],
    imports: [LazyLoadingRoutingModule, CommonModule, FormsModule, HttpClientModule],
})
export class LazyLoadingModule {}
