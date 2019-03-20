import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<p>
              Welcome User!!!
              test works!
            </p>`,
  styles: [`
    p{
      color:red;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
