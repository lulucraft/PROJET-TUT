import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarSettingsComponent } from './sidebar/sidebar-settings/sidebar-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarLeftComponent } from './sidebar/sidebar-left/sidebar-left.component';
import { HomeComponent } from './main/home/home.component';
import { CongesComponent } from './main/conges/conges.component';
import { AccountComponent } from './main/account/account.component';
import { CongeRequestComponent } from './main/conge-request/conge-request.component';
import { TokenHttpInterceptorInterceptor } from './interceptor/token-http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarSettingsComponent,
    SidebarLeftComponent,
    HomeComponent,
    CongesComponent,
    AccountComponent,
    CongeRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: "API_BASE_URL", useValue: environment.apiRoot },
    { provide: HTTP_INTERCEPTORS, useClass: TokenHttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }