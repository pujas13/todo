import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';

/**
 * Generated class for the NotificationTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-todos',
  templateUrl: 'notification-todos.html',
})
export class NotificationTodosPage {

  public scheduledTodos=[];

  constructor(private todoProvider: TodoProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.scheduledTodos=this.todoProvider.getScheduledTodos(); 
  }

}
