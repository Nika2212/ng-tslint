import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isRendered!: boolean;
  protected isEdited!: boolean;
  private isRemoved!: boolean;

  constructor(private readonly http: HttpClient) {

  }

  public toggleRendered(): void {
  }

  protected toggleEdited(): void {
  }

  private toggleRemoved(): void {
  }


}
