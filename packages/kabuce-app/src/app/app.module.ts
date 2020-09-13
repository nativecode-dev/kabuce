import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { FormsSharedModule } from '../api/store/forms-shared.module'
import { OrganizationAccountsService } from '../api/controllers/OrganizationAccounts'
import { OrganizationLocationsService } from '../api/controllers/OrganizationLocations'
import { OrganizationTemplatesService } from '../api/controllers/OrganizationTemplates'
import { OrganizationsService } from '../api/controllers/Organizations'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [
    FormsSharedModule,
    OrganizationAccountsService,
    OrganizationLocationsService,
    OrganizationTemplatesService,
    OrganizationsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
