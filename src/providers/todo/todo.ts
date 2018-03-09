import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { DateTime } from 'ionic-angular';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos=[];
  private archivedTodos=[];
  private scheduledTodos=[];
  

  constructor(private localNotifications:LocalNotifications,public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  scheduleNotification(todoIndex, todoDate){
    let todoToBeScheduled=this.todos[todoIndex];
    this.scheduledTodos.push(todoToBeScheduled);
    this.localNotifications.schedule([{
       id:todoIndex,
        title:'Notification',
        text:'You need to do this!!',
        at: new Date(todoDate) ,
        data:{mydata: 'My hidden message this is'}
      }
    ]);
  }

  archiveTodo(todoIndex){
      let todoToBeArchived=this.todos[todoIndex];
      this.todos.splice(todoIndex,1);
      this.archivedTodos.push(todoToBeArchived);
  }
getTodos(){
  return this.todos;
}

getArchivedTodos(){
  return this.archivedTodos;
}

addTodo(todo){
this.todos.push(todo);
}

getScheduledTodos(){
  return this.scheduledTodos;
}

}
