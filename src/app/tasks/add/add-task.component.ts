import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  //@ViewChild('formTask') formTask: NgForm;
  //@ViewChild('formTarefa', { static: true }) formTarefa: NgForm;

  task: Task;
  
  constructor(
  	private taskService: TaskService,
  	private router: Router) {
  		this.task = new Task(0, "", false);
  	}

  ngOnInit(): void {
  }

  add(): void{
  	
    if (this.formTask.form.valid) {
  	  this.taskService.add(this.task);
  	  this.router.navigate(["/tasks"]);
    }
    
  }

}
