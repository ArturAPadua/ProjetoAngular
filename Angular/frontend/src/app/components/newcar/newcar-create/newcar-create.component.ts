import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewCarService } from "../newcar.service";
import { NewCar } from "../newcar.model";

@Component({
  selector: "app-newcar-create",
  templateUrl: "./newcar-create.component.html",
  styleUrls: ["./newcar-create.component.css"],
})
export class NewCarCreateComponent implements OnInit {
  newcar: NewCar = {
    modelo: "",
    cor: "",
    placa: "",
    concessionaria: "",
  };

  constructor(private newcarService: NewCarService, private router: Router) {}

  ngOnInit(): void {}

  createNewCar(): void {
    this.newcarService.create(this.newcar).subscribe(() => {
      this.newcarService.showMessage("Carro cadastrado!");
      this.router.navigate(["/newcars"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/newcars"]);
  }
}
