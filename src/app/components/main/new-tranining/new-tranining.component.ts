import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-tranining',
  templateUrl: './new-tranining.component.html',
  styleUrls: ['./new-tranining.component.scss']
})
export class NewTraniningComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  @Output() xxx = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStartTraining(){
    this.trainingStart.emit();
  }

  test(){
    this.xxx.emit();
  }

}
