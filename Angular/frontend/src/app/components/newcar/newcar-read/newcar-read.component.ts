import { Component, OnInit } from '@angular/core';
import { NewCar } from '../newcar.model';
import { NewCarService } from '../newcar.service';

@Component({
  selector: 'app-newcar-read',
  templateUrl: './newcar-read.component.html',
  styleUrls: ['./newcar-read.component.css']
})
export class NewCarReadComponent implements OnInit {
  newcars: NewCar[];
  displayedColumns = ["id", "modelo", "cor", "placa", "concessionaria", "acao"];

  constructor(private newcarService: NewCarService) {
    this.newcars = [];
   }

  ngOnInit(): void {
    this.newcarService.read().subscribe((newcars) => {
      this.newcars = newcars;
      console.log(newcars);
    });
  }

}
