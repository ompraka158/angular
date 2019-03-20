import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  template: `
  <p>
    Welcome {{name}}
  </p>
  <h2>{{2+2}}</h2>
  <h2 class="text-success">{{"Welcome "+name}}</h2>
  <h2 [class]="successClass">{{name.length}}</h2>
  <h2 [class.text-danger] = "hasError">{{name.toUpperCase()}}</h2>
  <h2 [ngClass]="messageClasses">{{greetUser()}}</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">{{siteUrl}}</h2>
  <h2 [style.color]="highlightColor">Style Binding 2</h2>
  <h2 [ngStyle]="titleStyle">Style Binding 3</h2>
  <input id="{{myId}}" bind-disabled="isDisabled" type="text" value="Vishwas"/>
  <input id="{{myId}}" [disabled]="isDisabled" type="text" value="Vishwas"/>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome'">Greet</button>
  {{greeting}}

  <input #myInput type="text"/>
  <button (click)="logMessage(myInput.value)">Log</button><br/>
  <input [(ngModel)]="myName" type="text"/>
  {{myName}}
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {
  
  public name = "Om";
  public myId = "testId";
  public siteUrl = window.location.href;
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }
  
  public greeting="";
  onClick(event){
    console.log(event);
    this.greeting=event.type;
  }

  logMessage(value){
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
