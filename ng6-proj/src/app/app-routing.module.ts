import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

// add for Angular 6 Routing Tutorial
const routes: Routes = [
  {// specifies that the UsersComponent will be the default component that loads on the root path. 
    path: '',
    component: UsersComponent
  },
  {//route is for a user details section. We've specified a wildcard named id. We'll use this to fetch that value from the router in order to retrieve the correct user details.
    path: 'details/:id',
    component: DetailsComponent
  },
  { // same for posts 
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
