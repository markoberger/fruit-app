import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './core/core/in-memory-data.service';
import { AppComponent } from './app.component';


@NgModule({
  
  imports: [
    AppModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 250,
      passThruUnknownUrl: true
    })
  ],
  providers: [{provide: InMemoryDataService, useExisting: InMemoryDbService}],
  bootstrap: [AppComponent]
})
export class AppDevModule { }
