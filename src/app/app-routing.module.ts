import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent },
  { path: "addProvider", component: AddProviderComponent },
  { path: "updateProvider/:id", component: UpdateProviderComponent },
  { path: "addArticle", component:AddArticleComponent },
  { path: "listArticle", component: ListArticleComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
