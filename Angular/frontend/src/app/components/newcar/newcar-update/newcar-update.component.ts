import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewCar } from '../newcar.model';
import { NewCarService } from '../newcar.service';

@Component({
  selector: 'app-newcar-update',
  templateUrl: './newcar-update.component.html',
  styleUrls: ['./newcar-update.component.css']
})
export class NewcarUpdateComponent implements OnInit {
  newcar: NewCar

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

  updateNewCar(): void {
    this.newcarService.update(this.newcar).subscribe(() => {
      this.newcarService.showMessage("Carro atualizado!");
      this.router.navigate(["/newcars"]);
    });
  }

  cancel(): void {
    this.router.navigate(["newcars"]);
  }

}
