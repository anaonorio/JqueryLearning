import { Component, OnInit, Input } from "@angular/core";
import { Task } from 'src/app/models/task';


@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  public tasks: Task[]= [];
  public name: string = '';
  constructor() {}

  ngOnInit() {
  }

  public Add(){
    this.tasks.push(new Task(this.name));
    this.name = '';
  }
}
