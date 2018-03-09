webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedTodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArchivedTodosPage = (function () {
    function ArchivedTodosPage(todoProvider, navCtrl, navParams) {
        this.todoProvider = todoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.archivedTodos = [];
    }
    ArchivedTodosPage.prototype.ionViewDidLoad = function () {
        this.archivedTodos = this.todoProvider.getArchivedTodos();
    };
    ArchivedTodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-archived-todos',template:/*ion-inline-start:"C:\Users\UC230235\Desktop\todo1\src\pages\archived-todos\archived-todos.html"*/'<!--\n  Generated template for the ArchivedTodosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ArchivedTodos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item *ngFor="let todo of archivedTodos">{{todo}}</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\UC230235\Desktop\todo1\src\pages\archived-todos\archived-todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ArchivedTodosPage);
    return ArchivedTodosPage;
}());

//# sourceMappingURL=archived-todos.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationTodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationTodosPage = (function () {
    function NotificationTodosPage(todoProvider, navCtrl, navParams) {
        this.todoProvider = todoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scheduledTodos = [];
    }
    NotificationTodosPage.prototype.ionViewDidLoad = function () {
        this.scheduledTodos = this.todoProvider.getScheduledTodos();
    };
    NotificationTodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-todos',template:/*ion-inline-start:"C:\Users\UC230235\Desktop\todo1\src\pages\notification-todos\notification-todos.html"*/'<!--\n  Generated template for the NotificationTodosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>NotificationTodos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let todo of scheduledTodos">{{todo}}</ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\UC230235\Desktop\todo1\src\pages\notification-todos\notification-todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotificationTodosPage);
    return NotificationTodosPage;
}());

//# sourceMappingURL=notification-todos.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/archived-todos/archived-todos.module": [
		281,
		1
	],
	"../pages/notification-todos/notification-todos.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_todos_notification_todos__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    //public myDate: String;
    function HomePage(localNotifications, plt, toastController, todoProvider, navCtrl, alertController) {
        this.localNotifications = localNotifications;
        this.plt = plt;
        this.toastController = toastController;
        this.todoProvider = todoProvider;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.todos = [];
        this.reorderIsEnabled = false;
        this.todos = this.todoProvider.getTodos();
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
    HomePage.prototype.archiveTodo = function (todoIndex) {
        this.todoProvider.archiveTodo(todoIndex);
    };
    HomePage.prototype.gotoNotificationsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_todos_notification_todos__["a" /* NotificationTodosPage */]);
    };
    HomePage.prototype.gotoArchivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__["a" /* ArchivedTodosPage */]);
    };
    HomePage.prototype.toggleReorder = function () {
        this.reorderIsEnabled = !this.reorderIsEnabled;
    };
    HomePage.prototype.itemReordered = function ($event) {
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* reorderArray */])(this.todos, $event);
    };
    HomePage.prototype.openDateTime = function (todoIndex) {
        var _this = this;
        var inputDate = new Date();
        var addDateAlert = this.alertController.create({
            title: "Schedule Notification",
            message: "Select Date and Time",
            inputs: [
                {
                    type: "datetime-local",
                    name: "addDateTime",
                }
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Schedule",
                    handler: function (inputDate) {
                        var todoDate = new Date();
                        todoDate = inputDate.addDateTime;
                        _this.todoProvider.scheduleNotification(todoIndex, todoDate);
                    }
                }
            ]
        });
        addDateAlert.present();
    };
    HomePage.prototype.openTodoAlert = function () {
        var _this = this;
        var addTodoAlert = this.alertController.create({
            title: "Add a Todo",
            message: "Enter your todo",
            inputs: [
                {
                    type: "text",
                    name: "addTodoInput"
                }
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Add Todo",
                    handler: function (inputData) {
                        var todoText;
                        todoText = inputData.addTodoInput;
                        _this.todoProvider.addTodo(todoText);
                        addTodoAlert.onDidDismiss(function () {
                            var addTodoToast = _this.toastController.create({
                                message: "Todo Added!",
                                duration: 2000
                            });
                            addTodoToast.present();
                        });
                    }
                }
            ]
        });
        addTodoAlert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\UC230235\Desktop\todo1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Todo\n    </ion-title>\n    <ion-buttons end>\n      <button (click)="toggleReorder()" ion-button *ngIf="!reorderIsEnabled">\n        Edit\n      </button>\n      <button (click)="toggleReorder()" ion-button *ngIf="reorderIsEnabled"> \n          Done\n        </button>\n\n      <button ion-button (click)="openTodoAlert()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list [reorder]="reorderIsEnabled" (ionItemReorder)="itemReordered($event)">\n    <ion-item-sliding *ngFor="let todo of todos; let todoIndex = index">\n    <ion-item>{{todo}}</ion-item>\n    cordova <ion-item-options side="left">\n      <button color="secondary" ion-button (click)="openDateTime(todoIndex)">\n        <ion-icon name="notifications"></ion-icon></button>\n         </ion-item-options>\n    <ion-item-options side="right">\n      <button color="danger" ion-button (click)="archiveTodo(todoIndex)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item-options>\n    </ion-item-sliding>\n\n    </ion-list>\n\n\n    <ion-fab left bottom>\n      <button ion-fab (click)="gotoNotificationsPage()">\n<ion-icon name="alarm"></ion-icon>\n      </button>\n      </ion-fab>\n\n    <ion-fab right bottom>\n      <button ion-fab (click)="gotoArchivePage()">\n        <ion-icon name="archive"></ion-icon>\n      </button>\n      </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\UC230235\Desktop\todo1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_todo_todo__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notification_todos_notification_todos__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__["a" /* ArchivedTodosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notification_todos_notification_todos__["a" /* NotificationTodosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/archived-todos/archived-todos.module#ArchivedTodosPageModule', name: 'ArchivedTodosPage', segment: 'archived-todos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-todos/notification-todos.module#NotificationTodosPageModule', name: 'NotificationTodosPage', segment: 'notification-todos', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__["a" /* ArchivedTodosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notification_todos_notification_todos__["a" /* NotificationTodosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_todo_todo__["a" /* TodoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\UC230235\Desktop\todo1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\UC230235\Desktop\todo1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoProvider = (function () {
    function TodoProvider(localNotifications, http) {
        this.localNotifications = localNotifications;
        this.http = http;
        this.todos = [];
        this.archivedTodos = [];
        this.scheduledTodos = [];
        console.log('Hello TodoProvider Provider');
    }
    TodoProvider.prototype.scheduleNotification = function (todoIndex, todoDate) {
        var todoToBeScheduled = this.todos[todoIndex];
        this.scheduledTodos.push(todoToBeScheduled);
        this.localNotifications.schedule([{
                id: todoIndex,
                title: 'Notification',
                text: 'You need to do this!!',
                at: new Date(todoDate),
                data: { mydata: 'My hidden message this is' }
            }
        ]);
    };
    TodoProvider.prototype.archiveTodo = function (todoIndex) {
        var todoToBeArchived = this.todos[todoIndex];
        this.todos.splice(todoIndex, 1);
        this.archivedTodos.push(todoToBeArchived);
    };
    TodoProvider.prototype.getTodos = function () {
        return this.todos;
    };
    TodoProvider.prototype.getArchivedTodos = function () {
        return this.archivedTodos;
    };
    TodoProvider.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoProvider.prototype.getScheduledTodos = function () {
        return this.scheduledTodos;
    };
    TodoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoProvider);
    return TodoProvider;
}());

//# sourceMappingURL=todo.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map