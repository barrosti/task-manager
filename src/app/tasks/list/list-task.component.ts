import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  	this.tasks = this.listAll();
  	/*
  	this.tasks = [
  		new Task(1,"Task 1", false),
  		new Task(2,"Task 2", true)
  	];
  	*/
  }

  listAll(): Task[] {
  	return this.taskService.listAll();
  }

  remove($event: any, task: Task): void{
    $event.preventDefault();
    if( confirm('Do you want to remove task "' + task.name + '" ?') ){
      this.taskService.remove(task.id!);
      this.tasks = this.listAll();
    }
  }

  updateStatus(task: Task): void {
    if( confirm('Do you want to update status of "' + task.name + '" ?') ){
      this.taskService.updateStatus( task.id! );
      this.tasks = this.listAll();
    }
  }

}
