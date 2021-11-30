import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NewCarService } from "../newcar.service";
import { NewCar } from "../newcar.model";

@Component({
  selector: "app-newcar-delete",
  templateUrl: "./newcar-delete.component.html",
  styleUrls: ["./newcar-delete.component.css"],
})
export class NewCarDeleteComponent implements OnInit {
  newcar: NewCar;

  constructor(
    private newcarService: NewCarService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newcar = { modelo: "", cor: "", placa: "", concessionaria: "" };
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.newcarService.readById(id).subscribe((newcar) => {
      this.newcar = newcar;
    });
  }

  deleteNewCar(): void {
    this.newcarService.delete(this.newcar.id || 0).subscribe(() => {
      this.newcarService.showMessage("Carro excluido!");
      this.router.navigate(["/newcars"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/newcars"]);
  }
}
