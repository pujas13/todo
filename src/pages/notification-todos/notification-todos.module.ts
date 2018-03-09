import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationTodosPage } from './notification-todos';

@NgModule({
  declarations: [
    NotificationTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationTodosPage),
  ],
})
export class NotificationTodosPageModule {}
