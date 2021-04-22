import { Injectable } from '@angular/core';

import { Task } from './';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

	static readonly ARRAY_TASKS: string = 'tasks';

  constructor() { }

  listAll(): Task[] {
  	const tasks = localStorage[ TaskService.ARRAY_TASKS ];
  	return tasks ? JSON.parse(tasks) : [];
  }

  add(task: Task): void {
  	const tasks = this.listAll();
  	task.id = new Date().getTime();
  	tasks.push(task);
  	localStorage[ TaskService.ARRAY_TASKS ] = JSON.stringify(tasks);
  }

  findById(id: number): Task {
    const tasks: Task[] = this.listAll();
    return tasks.find(t => t.id === id) as Task;
    //return tasks.find(t => t.id === id)!;
    //return tasks.find(t => t.id === id); // Error.
  }

  update(task: Task): void {
  	const tasks: Task[] = this.listAll();
  	tasks.forEach((obj,index,objs) => {
  		if(task.id === obj.id) {
  			objs[index] = task;
  		}
  	});
  	localStorage[ TaskService.ARRAY_TASKS ] = JSON.stringify(tasks);
  }

  remove(id: number): void {
  	let tasks: Task[] = this.listAll();
  	tasks = tasks.filter(t => t.id !== id);
  	localStorage[ TaskService.ARRAY_TASKS ] = JSON.stringify(tasks);
  }

  updateStatus(id: number): void {
  	const tasks: Task[] = this.listAll();
  	tasks.forEach((obj, index, objs) => {
  		if(id === obj.id){
  			objs[index].finished = !obj.finished;
  		}
  	});
  	localStorage[ TaskService.ARRAY_TASKS ] = JSON.stringify(tasks);
  }

}
