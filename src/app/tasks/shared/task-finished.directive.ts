import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskFinished]'
})
export class TaskFinishedDirective implements OnInit {

  @Input() taskFinished: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(){
  	if( this.taskFinished ){
  		this.el.nativeElement.style.textDecoration = "line-through";
  	}
  }

}
