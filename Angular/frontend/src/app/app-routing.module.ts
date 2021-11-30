import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Importação do componet para o conteudo
import { HomeComponent } from "./views/home/home.component";
import { NewCarComponent } from "./views/newcar/newcar.component";
import { NewCarCreateComponent } from "./components/newcar/newcar-create/newcar-create.component";
import { NewcarUpdateComponent } from "./components/newcar/newcar-update/newcar-update.component";
import { NewCarDeleteComponent } from "./components/newcar/newcar-delete/newcar-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "newcars",
    component: NewCarComponent,
  },
  {
    path: "newcars/create",
    component: NewCarCreateComponent,
  },
  {
    path: "newcars/update/:id",
    component: NewcarUpdateComponent,
  },
  {
    path: "newcars/delete/:id",
    component: NewCarDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
