import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  displayName = true;
  public color ="blue";
  public colors=["red","blue","green","yellow"];
  public person = {
    "firstName" : "Om",
    "lastName" : "Prakash"
  }
  public date = new Date();
  @Input('parentData') public uname: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Om');
  }

}
