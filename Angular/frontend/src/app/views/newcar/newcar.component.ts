import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-newcar",
  templateUrl: "./newcar.component.html",
  styleUrls: ["./newcar.component.css"],
})
export class NewCarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCarCreate(): void {
    this.router.navigate(["/newcars/create"]);
  }
}
