import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { NewCar } from "./newcar.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewCarService {
  baseUrl = "http://localhost:3001/carros";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(newcar: NewCar): Observable<NewCar> {
    return this.http.post<NewCar>(this.baseUrl, newcar);
  }

  read(): Observable<NewCar[]> {
    return this.http.get<NewCar[]>(this.baseUrl);
  }

  readById(id: number): Observable<NewCar> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<NewCar>(url);
  }

  update(newcar: NewCar): Observable<NewCar> {
    const url = `${this.baseUrl}/${newcar.id}`;
    return this.http.put<NewCar>(url, newcar);
  }

  delete(id: number): Observable<NewCar> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<NewCar>(url);
  }
}
