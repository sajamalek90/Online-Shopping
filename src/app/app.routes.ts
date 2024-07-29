import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { ShopComponent } from './shop/shop.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsSectionsComponent } from './blogs-sections/blogs-sections.component';
import { BlogSection2Component } from './blog-section2/blog-section2.component';
import { BlogSection3Component } from './blog-section3/blog-section3.component';
import { BlogSection4Component } from './blog-section4/blog-section4.component';
import { BlogSection5Component } from './blog-section5/blog-section5.component';
import { BlogSection6Component } from './blog-section6/blog-section6.component';
import { CackeComponent } from './cacke/cacke.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'blogs', component: BlogsComponent},
    {path:'collection',component: CollectionComponent},
    {path:'shop',component: ShopComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'signup',component: SignUpComponent},
    {path:'blogsection1',component:BlogsSectionsComponent},
    {path:'blogsection2',component:BlogSection2Component},
    {path:'blogsection3',component:BlogSection3Component},
    {path:'blogsection4',component:BlogSection4Component},
    {path:'blogsection5',component:BlogSection5Component},
    {path:'blogsection6',component:BlogSection6Component},
    {path:'cake' , component:CackeComponent},
    {path:'product',component:ProductComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'privacy',component:PrivacyPolicyComponent},
    {path:'shipping',component:ShippingPolicyComponent},
    {path:'terms',component:TermsOfServicesComponent}
];
