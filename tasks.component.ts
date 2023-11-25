import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itask } from '../../interface/itask';
import { TaskComponent } from '../task/task.component';
import { TasksService } from '../../services/tasks.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  //property
    tasks!: Itask[];

    constructor(private tasksService: TasksService){
      tasksService.getTasks().subscribe((results) => {
        this.tasks = results;
      });
      }
}
