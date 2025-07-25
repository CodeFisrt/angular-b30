import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { User } from './components/user/user';
import { Variables } from './components/variables/variables';
import { ControFlow } from './components/contro-flow/contro-flow';
import { AttDir } from './components/att-dir/att-dir';
import { GetAPI } from './components/get-api/get-api';
import { PostAPI } from './components/post-api/post-api';
import { CarMaster } from './components/car-master/car-master';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Lifecycle } from './components/lifecycle/lifecycle';
import { NotFound } from './components/not-found/not-found';
import { Rxjs } from './components/rxjs/rxjs';
import { DyaamiFromReactuive } from './components/dyaami-from-reactuive/dyaami-from-reactuive';
import { InlineEditing } from './components/inline-editing/inline-editing';
import { FileUpload } from 'primeng/fileupload';
import { Signal } from './components/signal/signal';
import { Form } from './components/form/form';

export const routes: Routes = [
 
    {
        path:'',
        redirectTo:'dataBinding',
        pathMatch:'full'
    },
   
    {
        path:'admin',
        component: Admin
    },
     {
        path:'fileUpload',
        component: FileUpload
    },
     {
        path:'signal',
        component: Signal
    },
    {
        path:'inline-editing',
        component: InlineEditing
    },
    {
        path:'dataBinding',
        component: DataBinding
    },
    {
        path:'user-page',
        component: User
    },
     {
        path:'dynamicform',
        component: DyaamiFromReactuive
    },
    {
        path:'rxjs',
        component: Rxjs
    },
    {
        path:'car-master',
        component: CarMaster
    },
    {
        path:'variable-ex',
        component:Variables
    },
    {
        path:'control-flow',
        component:ControFlow
    },
    {
        path:'att-dir',
        component:AttDir
    },
    {
        path:'get-api',
        component:GetAPI
    },
    {
        path:'post-api',
        component:PostAPI
    },
    {
        path:'reactive',
        component:ReactiveForm
    },
    {
        path:'lifecycle',
        component:Lifecycle
    },
      {
        path:'form',
        component:Form
    },
    {
        path:'**',
        component:NotFound
    }

    //wildcard route
   
    
];
