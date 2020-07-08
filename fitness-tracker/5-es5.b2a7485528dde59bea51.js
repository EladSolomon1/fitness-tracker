function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CKRj:function(t,e,n){"use strict";n.r(e),n.d(e,"TrainingModule",(function(){return rt}));var a=n("PCNd"),c=n("tyNb"),i=n("vQgB"),r=n("fXoL"),s=n("vEl1"),o=n("kt0X"),l=n("ofXK"),b=n("wZkO"),u=n("a318"),m=n("XiUz"),f=n("3Pt+"),p=n("Wp6s"),d=n("kmnG"),g=n("d3UM"),h=n("FKr1"),v=n("Xa2L"),y=n("bTqV");function C(t,e){if(1&t&&(r.Vb(0,"mat-option",9),r.Ac(1),r.Ub()),2&t){var n=e.$implicit;r.mc("value",n.id),r.Db(1),r.Cc(" ",n.name," ")}}function D(t,e){if(1&t&&(r.Vb(0,"mat-form-field"),r.Vb(1,"mat-label"),r.Ac(2,"Choose Exercise"),r.Ub(),r.Vb(3,"mat-select",7),r.zc(4,C,2,2,"mat-option",8),r.ic(5,"async"),r.Ub(),r.Ub()),2&t){var n=r.hc();r.Db(4),r.mc("ngForOf",r.jc(5,1,n.exercises$))}}function U(t,e){1&t&&r.Qb(0,"mat-spinner")}function V(t,e){if(1&t&&(r.Vb(0,"button",12),r.Ac(1,"Start"),r.Ub()),2&t){r.hc(2);var n=r.rc(2);r.mc("disabled",n.invalid)}}function x(t,e){if(1&t){var n=r.Wb();r.Vb(0,"button",13),r.dc("click",(function(){return r.tc(n),r.hc(2).fetchExercises()})),r.Ac(1,"Fetch Again"),r.Ub()}}function w(t,e){if(1&t&&(r.Vb(0,"mat-card-actions",4),r.zc(1,V,2,1,"button",10),r.ic(2,"async"),r.zc(3,x,2,0,"button",11),r.ic(4,"async"),r.Ub()),2&t){var n=r.hc();r.Db(1),r.mc("ngIf",r.jc(2,2,n.exercises$)),r.Db(2),r.mc("ngIf",!r.jc(4,4,n.exercises$))}}var S,k=((S=function(){function t(e,n){_classCallCheck(this,t),this.trainingService=e,this.store=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.isLoading$=this.store.select(u.b),this.exercises$=this.store.select(i.b),this.fetchExercises()}},{key:"fetchExercises",value:function(){this.trainingService.fetchAvailableExercises()}},{key:"onStartTraining",value:function(t){this.trainingService.startExercise(t.value.exercise)}}]),t}()).\u0275fac=function(t){return new(t||S)(r.Pb(s.a),r.Pb(o.a))},S.\u0275cmp=r.Jb({type:S,selectors:[["app-new-training"]],decls:14,vars:11,consts:[["fxLayout","","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex.xs","100%","fxFlex","400px"],["fxLayoutAlign","center"],[4,"ngIf"],["fxLayoutAlign","center",4,"ngIf"],["ngModel","","name","exercise","required",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","submit","mat-button","",3,"disabled",4,"ngIf"],["type","button","mat-button","",3,"click",4,"ngIf"],["type","submit","mat-button","",3,"disabled"],["type","button","mat-button","",3,"click"]],template:function(t,e){if(1&t){var n=r.Wb();r.Vb(0,"section",0),r.Vb(1,"form",1,2),r.dc("ngSubmit",(function(){r.tc(n);var t=r.rc(2);return e.onStartTraining(t)})),r.Vb(3,"mat-card",3),r.Vb(4,"mat-card-title",4),r.Ac(5,"Time to start a workout!"),r.Ub(),r.Vb(6,"mat-card-content",4),r.zc(7,D,6,3,"mat-form-field",5),r.ic(8,"async"),r.ic(9,"async"),r.zc(10,U,1,0,"mat-spinner",5),r.ic(11,"async"),r.Ub(),r.zc(12,w,5,6,"mat-card-actions",6),r.ic(13,"async"),r.Ub(),r.Ub(),r.Ub()}2&t&&(r.Db(7),r.mc("ngIf",r.jc(8,3,!r.jc(9,5,e.isLoading$)&&e.exercises$)),r.Db(3),r.mc("ngIf",r.jc(11,7,e.isLoading$)),r.Db(2),r.mc("ngIf",!r.jc(13,9,e.isLoading$)))},directives:[m.c,m.b,f.t,f.n,f.o,p.a,m.a,p.e,p.c,l.m,d.c,d.g,g.a,f.m,f.p,f.r,l.l,h.n,v.c,p.b,y.a],pipes:[l.b],styles:[".new-training[_ngcontent-%COMP%]{padding:30px}"]}),S),A=n("+0xr"),z=n("Dh3D"),I=n("M9IT"),P=n("qFsG");function j(t,e){1&t&&(r.Vb(0,"mat-header-cell",14),r.Ac(1,"Date"),r.Ub())}function T(t,e){if(1&t&&(r.Vb(0,"mat-cell"),r.Ac(1),r.ic(2,"date"),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Bc(r.jc(2,1,n.date.toDate()))}}function $(t,e){1&t&&(r.Vb(0,"mat-header-cell",14),r.Ac(1,"Name"),r.Ub())}function _(t,e){if(1&t&&(r.Vb(0,"mat-cell"),r.Ac(1),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Bc(n.name)}}function O(t,e){1&t&&(r.Vb(0,"mat-header-cell",14),r.Ac(1,"Calories"),r.Ub())}function E(t,e){if(1&t&&(r.Vb(0,"mat-cell"),r.Ac(1),r.ic(2,"number"),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Bc(r.jc(2,1,n.calories))}}function F(t,e){1&t&&(r.Vb(0,"mat-header-cell",14),r.Ac(1,"Duration"),r.Ub())}function L(t,e){if(1&t&&(r.Vb(0,"mat-cell"),r.Ac(1),r.ic(2,"number"),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Bc(r.jc(2,1,n.duration))}}function Q(t,e){1&t&&(r.Vb(0,"mat-header-cell",14),r.Ac(1,"State"),r.Ub())}function R(t,e){if(1&t&&(r.Vb(0,"mat-cell"),r.Ac(1),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Bc(n.state)}}function M(t,e){1&t&&r.Qb(0,"mat-header-row")}function J(t,e){1&t&&r.Qb(0,"mat-row")}var N,B,q,X=function(){return[10,20,50,100]},K=((N=function(){function t(e,n){_classCallCheck(this,t),this.trainingService=e,this.store=n,this.displayedColumns=["date","name","duration","calories","state"],this.dataSource=new A.k}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.store.select(i.c).subscribe((function(e){t.dataSource.data=e})),this.trainingService.fetchCompletedOrCancelledExercises()}},{key:"ngAfterViewInit",value:function(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}},{key:"doFilter",value:function(t){this.dataSource.filter=t.trim().toLowerCase()}}]),t}()).\u0275fac=function(t){return new(t||N)(r.Pb(s.a),r.Pb(o.a))},N.\u0275cmp=r.Jb({type:N,selectors:[["app-past-trainings"]],viewQuery:function(t,e){var n;1&t&&(r.Ec(z.a,!0),r.Ec(I.a,!0)),2&t&&(r.qc(n=r.ec())&&(e.sort=n.first),r.qc(n=r.ec())&&(e.paginator=n.first))},decls:22,vars:6,consts:[["fxLayoutAlign","center center"],["fxFlex","40%"],["matInput","","type","text","placeholder","Filter",3,"keyup"],["matSort","",3,"dataSource"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["mat-sort-header",""]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Vb(1,"mat-form-field",1),r.Vb(2,"input",2),r.dc("keyup",(function(t){return e.doFilter(t.target.value)})),r.Ub(),r.Ub(),r.Ub(),r.Vb(3,"mat-table",3),r.Tb(4,4),r.zc(5,j,2,0,"mat-header-cell",5),r.zc(6,T,3,3,"mat-cell",6),r.Sb(),r.Tb(7,7),r.zc(8,$,2,0,"mat-header-cell",5),r.zc(9,_,2,1,"mat-cell",6),r.Sb(),r.Tb(10,8),r.zc(11,O,2,0,"mat-header-cell",5),r.zc(12,E,3,3,"mat-cell",6),r.Sb(),r.Tb(13,9),r.zc(14,F,2,0,"mat-header-cell",5),r.zc(15,L,3,3,"mat-cell",6),r.Sb(),r.Tb(16,10),r.zc(17,Q,2,0,"mat-header-cell",5),r.zc(18,R,2,1,"mat-cell",6),r.Sb(),r.zc(19,M,1,0,"mat-header-row",11),r.zc(20,J,1,0,"mat-row",12),r.Ub(),r.Qb(21,"mat-paginator",13)),2&t&&(r.Db(3),r.mc("dataSource",e.dataSource),r.Db(16),r.mc("matHeaderRowDef",e.displayedColumns),r.Db(1),r.mc("matRowDefColumns",e.displayedColumns),r.Db(1),r.mc("pageSize",5)("pageSizeOptions",r.nc(5,X)))},directives:[m.b,d.c,m.a,P.b,A.j,z.a,A.c,A.e,A.b,A.g,A.i,I.a,A.d,z.b,A.a,A.f,A.h],pipes:[l.e,l.f],styles:[""]}),N),G=n("0IaG"),H=((B=function t(e){_classCallCheck(this,t),this.passedData=e}).\u0275fac=function(t){return new(t||B)(r.Pb(G.a))},B.\u0275cmp=r.Jb({type:B,selectors:[["app-stop-training"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(r.Vb(0,"h1",0),r.Ac(1,"Are you sure?"),r.Ub(),r.Vb(2,"mat-dialog-content"),r.Vb(3,"p"),r.Ac(4),r.Ub(),r.Ub(),r.Vb(5,"mat-dialog-actions"),r.Vb(6,"button",1),r.Ac(7,"Yes"),r.Ub(),r.Vb(8,"button",1),r.Ac(9,"No"),r.Ub(),r.Ub()),2&t&&(r.Db(4),r.Cc("You already got ",e.passedData.progress,"%"),r.Db(2),r.mc("mat-dialog-close",!0),r.Db(2),r.mc("mat-dialog-close",!1))},directives:[G.g,G.e,G.c,y.a,G.d],encapsulation:2}),B),W=n("IzEk"),Y=((q=function(){function t(e,n,a){_classCallCheck(this,t),this.dialog=e,this.trainingService=n,this.store=a,this.progress=0}return _createClass(t,[{key:"ngOnInit",value:function(){this.startOrResumeTimer()}},{key:"startOrResumeTimer",value:function(){var t=this;this.store.select(i.a).pipe(Object(W.a)(1)).subscribe((function(e){t.timer=setInterval((function(){t.progress=t.progress+1,t.progress>=100&&(t.trainingService.completeExercise(),clearInterval(t.timer))}),e.duration/100*1e3)}))}},{key:"onStop",value:function(){var t=this;clearInterval(this.timer),this.dialog.open(H,{data:{progress:this.progress}}).afterClosed().subscribe((function(e){e?t.trainingService.cancelExercise(t.progress):t.startOrResumeTimer()}))}}]),t}()).\u0275fac=function(t){return new(t||q)(r.Pb(G.b),r.Pb(s.a),r.Pb(o.a))},q.\u0275cmp=r.Jb({type:q,selectors:[["app-current-training"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training"],["mode","determinate",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(r.Vb(0,"section",0),r.Qb(1,"mat-progress-spinner",1),r.Vb(2,"h1"),r.Ac(3),r.Ub(),r.Vb(4,"p"),r.Ac(5,"Keep on going, you can do it!"),r.Ub(),r.Vb(6,"button",2),r.dc("click",(function(){return e.onStop()})),r.Ac(7,"Stop"),r.Ub(),r.Ub()),2&t&&(r.Db(1),r.mc("value",e.progress),r.Db(2),r.Cc("",e.progress,"%"))},directives:[m.c,m.b,v.a,y.a],styles:[".current-training[_ngcontent-%COMP%]{padding:30px}"]}),q);function Z(t,e){1&t&&(r.Vb(0,"mat-tab-group"),r.Vb(1,"mat-tab",1),r.Qb(2,"app-new-training"),r.Ub(),r.Vb(3,"mat-tab",2),r.Qb(4,"app-past-trainings"),r.Ub(),r.Ub())}function tt(t,e){1&t&&r.Qb(0,"app-current-training")}var et,nt,at,ct=[{path:"",component:(et=function(){function t(e,n){_classCallCheck(this,t),this.trainingService=e,this.store=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.ongoingTraining$=this.store.select(i.d)}}]),t}(),et.\u0275fac=function(t){return new(t||et)(r.Pb(s.a),r.Pb(o.a))},et.\u0275cmp=r.Jb({type:et,selectors:[["app-training"]],decls:4,vars:6,consts:[[4,"ngIf"],["label","New Exercise"],["label","Past Exercise"]],template:function(t,e){1&t&&(r.zc(0,Z,5,0,"mat-tab-group",0),r.ic(1,"async"),r.zc(2,tt,1,0,"app-current-training",0),r.ic(3,"async")),2&t&&(r.mc("ngIf",!r.jc(1,2,e.ongoingTraining$)),r.Db(2),r.mc("ngIf",r.jc(3,4,e.ongoingTraining$)))},directives:[l.m,b.b,b.a,k,K,Y],pipes:[l.b],styles:[""]}),et)}],it=((at=function t(){_classCallCheck(this,t)}).\u0275mod=r.Nb({type:at}),at.\u0275inj=r.Mb({factory:function(t){return new(t||at)},imports:[[c.c.forChild(ct)],c.c]}),at),rt=((nt=function t(){_classCallCheck(this,t)}).\u0275mod=r.Nb({type:nt}),nt.\u0275inj=r.Mb({factory:function(t){return new(t||nt)},imports:[[a.a,it,o.b.forFeature("training",i.e)]]}),nt)}}]);