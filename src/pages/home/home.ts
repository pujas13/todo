import { Component } from '@angular/core';
import { NavController, AlertController, Platform, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from "../../providers/todo/todo";
import { ArchivedTodosPage } from "../archived-todos/archived-todos";
import { NotificationTodosPage } from "../notification-todos/notification-todos";
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public todos=[];
  public reorderIsEnabled= false;
  //public myDate: String;

  constructor(private localNotifications:LocalNotifications,  private plt:Platform, private toastController: ToastController, private todoProvider:TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
     

    this.todos=this.todoProvider.getTodos();
     // this.plt.ready().then((rdy)=>{
       // this.localNotifications.schedule({
         // at:this.myDate,
          //text:'Finish your task!',

        //});
      //});
  }


//  scheduleNotification(myDate){
  //  this.localNotifications.schedule({
    //  id:1,
      //title:'Attention',
      //text:'PLease do this!',
     // at: new Date(new Date().getTime() + 5*1000),
     // data:{mydata: 'My hidden message this is'}
   // });
 // }

archiveTodo(todoIndex){
this.todoProvider.archiveTodo(todoIndex);
}


  gotoNotificationsPage(){
    this.navCtrl.push(NotificationTodosPage);
  }

  gotoArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  toggleReorder(){
    this.reorderIsEnabled=!this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  openDateTime(todoIndex){
    var inputDate=new Date();
    let addDateAlert=this.alertController.create({
      title:"Schedule Notification",
      message:"Select Date and Time",
      inputs:[
        {
          type: "datetime-local",
          name: "addDateTime",
        }
      ],
      buttons:[
        {
          text: "Cancel"
        },
        {
          text:"Schedule",
          handler:(inputDate)=>{
            var todoDate=new Date();
          todoDate=inputDate.addDateTime;
        this.todoProvider.scheduleNotification(todoIndex,todoDate);
    
          }
        }


      ]
    });
    addDateAlert.present();
  }

  openTodoAlert(){
      let addTodoAlert=this.alertController.create({
        title:"Add a Todo",
        message:"Enter your todo",
        inputs:[
          {
          type: "text",
          name: "addTodoInput"
          }
        ],
        buttons:[
          {
            text: "Cancel"
          },
          {
            text: "Add Todo",
            handler: (inputData)=> {
              let todoText;
              todoText=inputData.addTodoInput;
              this.todoProvider.addTodo(todoText);

              addTodoAlert.onDidDismiss(()=>{
                let addTodoToast=this.toastController.create({
                  message:"Todo Added!",
                  duration:2000
                });
                addTodoToast.present();
              });

              
              
            }
          }
        ]
      });
      addTodoAlert.present();
  }

}
