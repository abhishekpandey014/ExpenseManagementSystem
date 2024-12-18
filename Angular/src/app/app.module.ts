import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { FooterComponent } from './footer/footer.component';
import { ServicesIpmComponent } from './services-ipm/services-ipm.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UregComponent } from './ureg/ureg.component';
import { UserSucessLoginComponent } from './user-sucess-login/user-sucess-login.component';

import { DashboardComponent } from './user-sucess-login/dashboard/dashboard.component';
import { HistoryComponent } from './user-sucess-login/history/history.component';
import { NavloginComponent } from './user-sucess-login/navlogin/navlogin.component';
import { PoliciesComponent } from './user-sucess-login/policies/policies.component';
import { ProfileComponent } from './user-sucess-login/profile/profile.component';
import { QuestionsComponent } from './user-sucess-login/questions/questions.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminPolicysComponent } from './adminsuccesslogin/admin-policys/admin-policys.component';
import { AdminQueryComponent } from './adminsuccesslogin/admin-query/admin-query.component';
import { AdminUnknownCustomerComponent } from './adminsuccesslogin/admin-unknown-customer/admin-unknown-customer.component';
import { AdmincustomersComponent } from './adminsuccesslogin/admincustomers/admincustomers.component';
import { AdmindashboardComponent } from './adminsuccesslogin/admindashboard/admindashboard.component';
import { AdminnavbarComponent } from './adminsuccesslogin/adminnavbar/adminnavbar.component';

import { AddAdminByAdminComponent } from './adminsuccesslogin/add-admin-by-admin/add-admin-by-admin.component';
import { AddnewadminComponent } from './adminsuccesslogin/addAdminByAdmin/addnewadmin/addnewadmin.component';
import { ViewadmisComponent } from './adminsuccesslogin/addAdminByAdmin/viewadmis/viewadmis.component';
import { ReplyComponent } from './adminsuccesslogin/admin-query/reply/reply.component';

import { UpdateLowerAdminComponent } from './adminsuccesslogin/addAdminByAdmin/update-lower-admin/update-lower-admin.component';
import { AddPolicyComponent } from './adminsuccesslogin/admin-policys/add-policy/add-policy.component';
import { AppliedPolicyHolderComponent } from './adminsuccesslogin/admin-policys/applied-policy-holder/applied-policy-holder.component';
import { ApproveddPolicyHolderComponent } from './adminsuccesslogin/admin-policys/approvedd-policy-holder/approvedd-policy-holder.component';
import { DeletePolicyComponent } from './adminsuccesslogin/admin-policys/delete-policy/delete-policy.component';
import { PolicysViewByAdminComponent } from './adminsuccesslogin/admin-policys/policys-view-by-admin/policys-view-by-admin.component';
import { RejectedPolicyHolderComponent } from './adminsuccesslogin/admin-policys/rejected-policy-holder/rejected-policy-holder.component';
import { ApplyUpdateComponent } from './adminsuccesslogin/admin-policys/update-policy/apply-update/apply-update.component';
import { UpdatePolicyComponent } from './adminsuccesslogin/admin-policys/update-policy/update-policy.component';
import { WaitingpPolicyHolderComponent } from './adminsuccesslogin/admin-policys/waitingp-policy-holder/waitingp-policy-holder.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ChangePasswordComponent } from './user-sucess-login/change-password/change-password.component';

import { PolicysService } from 'src/app/services/Policy/policys.service'; // Correct import path

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactusComponent,
    AboutComponent,
    ServicesIpmComponent,
    FooterComponent,
    UserloginComponent,

    UregComponent,
    UserSucessLoginComponent,
    AdminloginComponent,
    DashboardComponent,
    NavloginComponent,
    ProfileComponent,
    QuestionsComponent,
    PoliciesComponent,
    HistoryComponent,

    AdmindashboardComponent,
    AdminnavbarComponent,
    AdmincustomersComponent,
    AdminUnknownCustomerComponent,
    AdminPolicysComponent,
    AdminQueryComponent,
    AddAdminByAdminComponent,
    ViewadmisComponent,
    AddnewadminComponent,
    ReplyComponent,

    AddPolicyComponent,
    UpdatePolicyComponent,
    DeletePolicyComponent,
    AppliedPolicyHolderComponent,
    ApproveddPolicyHolderComponent,
    RejectedPolicyHolderComponent,
    WaitingpPolicyHolderComponent,
    PolicysViewByAdminComponent,
    ApplyUpdateComponent,
    UpdateLowerAdminComponent,
    PageErrorComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PolicysService],  // Add PolicysService here if you want to explicitly list it in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
