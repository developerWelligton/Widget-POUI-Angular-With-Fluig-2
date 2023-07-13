"use strict";
(self["webpackChunkangular_app"] = self["webpackChunkangular_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppRoutingModule = void 0;

var router_1 = __webpack_require__(/*! @angular/router */ 2816);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var routes = [{
  path: 'menu',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./menu/menu.module */ 2825);
    }).then(function (m) {
      return m.MenuModule;
    });
  },
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./home/home.module */ 3467);
    }).then(function (m) {
      return m.HomeModule;
    });
  }
}, {
  path: 'purchase-order',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./purchase-order/purchase-order.module */ 2008);
    }).then(function (m) {
      return m.PurchaseOrderModule;
    });
  }
}, {
  path: 'supplier-quotation',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./supplier-quotation/supplier-quotation.module */ 9242);
    }).then(function (m) {
      return m.SupplierQuotationModule;
    });
  }
}, {
  path: 'refund-order',
  loadChildren: function loadChildren() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./refund-order/refund-order.module */ 2945);
    }).then(function (m) {
      return m.RefundOrderModule;
    });
  }
}, {
  path: '**',
  redirectTo: 'menu'
}];

var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
  _classCallCheck(this, AppRoutingModule);
});

exports.AppRoutingModule = AppRoutingModule;

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[router_1.RouterModule.forRoot(routes)], router_1.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppComponent = void 0;

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router) {
    _classCallCheck(this, AppComponent);

    this.router = router;
    this.menus = [{
      label: 'Dashboard',
      link: '/',
      icon: 'po-icon-home',
      shortLabel: 'Home'
    }, {
      label: 'Solicitação de Reembolso',
      link: '/',
      icon: 'po-icon-home',
      shortLabel: 'Solicitação de Reembolso'
    }, {
      label: 'Reembolsos Finalizados',
      link: '/',
      icon: 'po-icon-home',
      shortLabel: 'Rembolsos Finalizados'
    }];
    this.breadcrumb = {
      items: [{
        label: 'Home',
        link: '/'
      }]
    };
  }

  _createClass(AppComponent, [{
    key: "navigateToRefund",
    value: function navigateToRefund() {
      this.router.navigateByUrl('/refund-order');
    }
  }]);

  return AppComponent;
}();

exports.AppComponent = AppComponent;

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelement(0, "router-outlet");
    }
  },
  directives: [i1.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 9670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _a, _b;

var _c;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.APP_CONFIG = void 0;

var AppSettings = /*#__PURE__*/_createClass(function AppSettings() {
  _classCallCheck(this, AppSettings);
});

exports.APP_CONFIG = AppSettings;
_c = AppSettings;
AppSettings.tenantURI = (_a = window === null || window === void 0 ? void 0 : window.WCMAPI) === null || _a === void 0 ? void 0 : _a.tenantURI;
AppSettings.pageCode = (_b = window === null || window === void 0 ? void 0 : window.WCMAPI) === null || _b === void 0 ? void 0 : _b.pageCode;
AppSettings.APP_BASE = _c.tenantURI && _c.pageCode ? _c.tenantURI + '/' + _c.pageCode : '/';

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppModule = void 0;

var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 318);

var common_1 = __webpack_require__(/*! @angular/common */ 6362);

var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ 158);

var app_component_1 = __webpack_require__(/*! ./app.component */ 5041);

var app_config_1 = __webpack_require__(/*! ./app.config */ 9670);

var process_management_service_1 = __webpack_require__(/*! ./services/process-management.service */ 7091);

var fluig_oauth_service_1 = __webpack_require__(/*! ./services/fluig-oauth.service */ 8220);

var products_converter_service_1 = __webpack_require__(/*! ./services/products-converter.service */ 542);

var http_1 = __webpack_require__(/*! @angular/common/http */ 8784);

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var AppModule = /*#__PURE__*/_createClass(function AppModule() {
  _classCallCheck(this, AppModule);
});

exports.AppModule = AppModule;

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: AppModule,
  bootstrap: [app_component_1.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  providers: [{
    provide: common_1.APP_BASE_HREF,
    useValue: app_config_1.APP_CONFIG.APP_BASE || '/'
  }, process_management_service_1.ProcessManagementService, fluig_oauth_service_1.FluigOauthService, products_converter_service_1.ProductsConverterService],
  imports: [[platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule, ng_components_1.PoModule], ng_components_1.PoModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
    declarations: [app_component_1.AppComponent],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule, ng_components_1.PoModule],
    exports: [ng_components_1.PoModule]
  });
})();

/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HomeModule = void 0;

var common_1 = __webpack_require__(/*! @angular/common */ 6362);

var forms_1 = __webpack_require__(/*! @angular/forms */ 587);

var home_component_1 = __webpack_require__(/*! ./home/home.component */ 4988);

var home_routing_module_1 = __webpack_require__(/*! ./home.routing.module */ 599);

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var HomeModule = /*#__PURE__*/_createClass(function HomeModule() {
  _classCallCheck(this, HomeModule);
});

exports.HomeModule = HomeModule;

HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};

HomeModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[common_1.CommonModule, home_routing_module_1.HomeRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule, ng_components_1.PoStepperModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeModule, {
    declarations: [home_component_1.HomeComponent],
    imports: [common_1.CommonModule, home_routing_module_1.HomeRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule, ng_components_1.PoStepperModule],
    exports: [home_component_1.HomeComponent]
  });
})();

/***/ }),

/***/ 599:
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HomeRoutingModule = void 0;

var router_1 = __webpack_require__(/*! @angular/router */ 2816);

var home_component_1 = __webpack_require__(/*! ./home/home.component */ 4988);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var routes = [{
  path: '',
  component: home_component_1.HomeComponent
}];

var HomeRoutingModule = /*#__PURE__*/_createClass(function HomeRoutingModule() {
  _classCallCheck(this, HomeRoutingModule);
});

exports.HomeRoutingModule = HomeRoutingModule;

HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};

HomeRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 4988:
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HomeComponent = void 0;

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i2 = __webpack_require__(/*! @angular/router */ 2816);

function HomeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();

    i0.ɵɵelementStart(0, "div", 1)(1, "div", 7)(2, "po-button", 8);
    i0.ɵɵlistener("p-click", function HomeComponent_ng_template_8_Template_po_button_p_click_2_listener() {
      i0.ɵɵrestoreView(_r3);
      var ctx_r2 = i0.ɵɵnextContext();
      return ctx_r2.newRefundOrder();
    });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "po-button", 9);
    i0.ɵɵlistener("p-click", function HomeComponent_ng_template_8_Template_po_button_p_click_4_listener() {
      i0.ɵɵrestoreView(_r3);
      var ctx_r4 = i0.ɵɵnextContext();
      return ctx_r4.newRefundOrder();
    });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 10)(6, "po-stepper");
    i0.ɵɵelement(7, "po-step", 11)(8, "po-step", 12)(9, "po-step", 13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(10, "br")(11, "po-divider", 14);
    i0.ɵɵelementStart(12, "div", 1);
    i0.ɵɵelement(13, "po-info", 15)(14, "po-info", 16)(15, "po-info", 17)(16, "po-info", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "br")(18, "br")(19, "po-divider", 19);
    i0.ɵɵelementStart(20, "div", 1)(21, "div", 20);
    i0.ɵɵelement(22, "po-table", 21);
    i0.ɵɵelementEnd()();
  }

  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", "", " ");
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("p-value", item_r1.solicitation[0].number);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-value", item_r1.solicitante);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-value", item_r1.solicitation[0].responsible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("p-value", item_r1.solicitation[0].currentActivity);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("p-columns", ctx_r0.columns)("p-items", item_r1.solicitation);
  }
}

var _c0 = function _c0() {
  return {
    number: "001",
    responsible: "Jo\xE3o",
    currentActivity: "Inicio",
    transportValue: "R$100",
    foodAllowance: "R$150",
    receipt: "Link/Imagem do comprovante 1",
    date: "23/06/2023"
  };
};

var _c1 = function _c1() {
  return {
    number: "002",
    responsible: "Maria",
    currentActivity: "Aprovar Reembolso",
    transportValue: "R$100",
    foodAllowance: "R$150",
    receipt: "Link/Imagem do comprovante 2",
    date: "23/06/2023"
  };
};

var _c2 = function _c2(a0, a1) {
  return [a0, a1];
};

var _c3 = function _c3(a2) {
  return {
    name: "Solicita\xE7\xE3o Reembolso - 001",
    solicitante: "Jo\xE3o",
    solicitation: a2
  };
};

var _c4 = function _c4() {
  return {
    number: "003",
    responsible: "Pedro",
    currentActivity: "Realizar Pagamento",
    transportValue: "R$100",
    foodAllowance: "R$150",
    receipt: "Link/Imagem do comprovante 3",
    date: "23/06/2023"
  };
};

var _c5 = function _c5() {
  return {
    number: "004",
    responsible: "Ana",
    currentActivity: "Inicio",
    transportValue: "R$100",
    foodAllowance: "R$150",
    receipt: "Link/Imagem do comprovante 4",
    date: "23/06/2023"
  };
};

var _c6 = function _c6(a2) {
  return {
    name: "Solicita\xE7\xE3o Reembolso - 003",
    solicitante: "Pedro",
    solicitation: a2
  };
};

var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent(poAlert, router, poNotification) {
    _classCallCheck(this, HomeComponent);

    this.poAlert = poAlert;
    this.router = router;
    this.poNotification = poNotification;
    this.columns = [{
      property: 'transportValue',
      label: 'Valor do Transporte'
    }, {
      property: 'foodAllowance',
      label: 'Vale Alimentação'
    }, {
      property: 'receipt',
      label: 'Comprovante',
      type: 'link',
      action: this.openLink.bind(this)
    }, {
      property: 'date',
      label: 'Data',
      type: 'date'
    }, {
      property: 'actions',
      label: 'Editar',
      type: 'icon',
      icons: [{
        action: this.editItem.bind(this),
        color: 'color-11',
        icon: 'po-icon-edit',
        tooltip: 'Editar'
      }]
    }, {
      property: 'actions',
      label: 'Excluir',
      type: 'icon',
      icons: [{
        action: this.deleteItem.bind(this),
        color: 'color-07',
        icon: 'po-icon-delete',
        tooltip: 'Excluir'
      }]
    }];
    this.attendances = [{
      label: 'Appointment',
      icon: 'po-icon-calendar',
      action: this.getPassword.bind(this)
    }, {
      label: 'Emergency',
      icon: 'po-icon-injector',
      action: this.getPassword.bind(this)
    }, {
      label: 'Exams',
      icon: 'po-icon-exam',
      action: this.getPassword.bind(this)
    }];
    this.breadcrumb = {
      items: [{
        label: 'Menu Principal',
        link: '/'
      }, {
        label: 'Reembolso',
        link: '/'
      }]
    };
    /*
      breadcrumb: PoBreadcrumb = {
      items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
    };*/

    this.srcImage = './../../../assets/comprador.svg';
  }

  _createClass(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "newRefundOrder",
    value: function newRefundOrder() {
      this.router.navigateByUrl('/refund-order');
    }
  }, {
    key: "navigateToMenu",
    value: function navigateToMenu() {
      this.router.navigateByUrl('/menu');
    }
  }, {
    key: "editItem",
    value: function editItem(item) {
      this.newRefundOrder();
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {// Lógica para excluir item
    }
  }, {
    key: "openLink",
    value: function openLink(link) {// Lógica para abrir link
    }
  }, {
    key: "getPassword",
    value: function getPassword(attendance) {
      var password = this.randomPassword();
      var typeNotification = this.getTypeNotification(attendance.label);
      this.poNotification[typeNotification]("\n      Type of attendance: ".concat(attendance.label, " -\n      Your password: ").concat(password, "\n    "));
    }
  }, {
    key: "getTypeNotification",
    value: function getTypeNotification() {
      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      switch (label) {
        case 'Emergency':
          return 'error';

        case 'Appointment':
          return 'information';

        case 'Exams':
          return 'success';
      }
    }
  }, {
    key: "randomPassword",
    value: function randomPassword() {
      return Math.random().toString().slice(2, 5);
    }
  }]);

  return HomeComponent;
}();

exports.HomeComponent = HomeComponent;

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.PoDialogService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1.PoNotificationService));
};

HomeComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 16,
  vars: 19,
  consts: [["p-title", "Solicita\xE7\xE3o de Reembolso", 3, "p-breadcrumb"], [1, "po-row"], [1, "po-md-10"], ["p-label", "Solicitar Reembolso", 1, "button-spacing", 3, "p-click"], ["p-label", "Voltar", 1, "button-spacing", 3, "p-click"], ["p-property-title", "name", 3, "p-items"], ["p-list-view-content-template", ""], [1, "po-md-5"], ["p-label", "Adicionar Reembolso", 3, "p-click"], ["p-label", "Movimentar Solicita\xE7\xE3o", 3, "p-click"], [1, "po-md-7"], ["p-label", "In\xEDcio"], ["p-label", "Aprovar Reembolso"], ["p-label", "Anexar Notar"], ["p-label", "Dados da Solicita\xE7\xE3o", 1, "po-md-12"], ["p-label", "N\xFAmero da Solicita\xE7\xE3o", 1, "po-md-3", 3, "p-value"], ["p-label", "Solicitante", 1, "po-md-3", 3, "p-value"], ["p-label", "Respons\xE1vel", 1, "po-md-3", 3, "p-value"], ["p-label", "Atividade Atual", 1, "po-md-3", 3, "p-value"], ["p-label", "Lista de Reembolsos", 1, "po-md-12"], [1, "po-md-12"], [3, "p-columns", "p-items"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "po-page-default", 0)(1, "div", 1)(2, "h1", 2);
      i0.ɵɵtext(3, "Reembolso");
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(4, "po-button", 3);
      i0.ɵɵlistener("p-click", function HomeComponent_Template_po_button_p_click_4_listener() {
        return ctx.newRefundOrder();
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(5, "po-button", 4);
      i0.ɵɵlistener("p-click", function HomeComponent_Template_po_button_p_click_5_listener() {
        return ctx.navigateToMenu();
      });
      i0.ɵɵelementEnd()();
      i0.ɵɵelement(6, "br");
      i0.ɵɵelementStart(7, "po-list-view", 5);
      i0.ɵɵtemplate(8, HomeComponent_ng_template_8_Template, 23, 7, "ng-template", 6);
      i0.ɵɵelementEnd()();
      i0.ɵɵelement(9, "br")(10, "br")(11, "br")(12, "br")(13, "br")(14, "br")(15, "po-divider");
    }

    if (rf & 2) {
      i0.ɵɵproperty("p-breadcrumb", ctx.breadcrumb);
      i0.ɵɵadvance(7);
      i0.ɵɵproperty("p-items", i0.ɵɵpureFunction2(16, _c2, i0.ɵɵpureFunction1(7, _c3, i0.ɵɵpureFunction2(4, _c2, i0.ɵɵpureFunction0(2, _c0), i0.ɵɵpureFunction0(3, _c1))), i0.ɵɵpureFunction1(14, _c6, i0.ɵɵpureFunction2(11, _c2, i0.ɵɵpureFunction0(9, _c4), i0.ɵɵpureFunction0(10, _c5)))));
    }
  },
  directives: [i1.PoPageDefaultComponent, i1.PoButtonComponent, i1.PoListViewComponent, i1.PoListViewContentTemplateDirective, i1.PoStepperComponent, i1.PoStepComponent, i1.PoDividerComponent, i1.PoInfoComponent, i1.PoTableComponent],
  styles: ["[_nghost-%COMP%]   .new-purchase-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.button-spacing[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQUFKOztBQUdBO0VBQ0Usa0JBQUE7QUFBRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5uZXctcHVyY2hhc2UtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5idXR0b24tc3BhY2luZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4gIl19 */"]
});

/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuComponent = void 0;

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var i2 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var MenuComponent = /*#__PURE__*/function () {
  function MenuComponent(router) {
    _classCallCheck(this, MenuComponent);

    this.router = router;
    this.breadcrumb = {
      items: [{
        label: 'Menu Principal',
        link: '/'
      }]
    };
  }

  _createClass(MenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "navigateToRefund",
    value: function navigateToRefund() {
      this.router.navigateByUrl('/refund-order');
    }
  }, {
    key: "navigateToListRefund",
    value: function navigateToListRefund() {
      this.router.navigateByUrl('/home');
    }
  }]);

  return MenuComponent;
}();

exports.MenuComponent = MenuComponent;

MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(i0.ɵɵdirectiveInject(i1.Router));
};

MenuComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 4,
  vars: 1,
  consts: [["p-title", "Menu Principal", 3, "p-breadcrumb"], ["p-title", "Reembolso", "p-primary-label", "Solicitar de Reembolso", "p-secondary-label", "Reembolsos", 1, "po-md-6", "po-lg-4", "po-mb-2", 3, "p-primary-action", "p-secondary-action"], [1, "po-row", "po-justify-content-center", "po-align-items-center"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "po-page-default", 0)(1, "po-widget", 1);
      i0.ɵɵlistener("p-primary-action", function MenuComponent_Template_po_widget_p_primary_action_1_listener() {
        return ctx.navigateToRefund();
      })("p-secondary-action", function MenuComponent_Template_po_widget_p_secondary_action_1_listener() {
        return ctx.navigateToListRefund();
      });
      i0.ɵɵelement(2, "div", 2)(3, "br");
      i0.ɵɵelementEnd()();
    }

    if (rf & 2) {
      i0.ɵɵproperty("p-breadcrumb", ctx.breadcrumb);
    }
  },
  directives: [i2.PoPageDefaultComponent, i2.PoWidgetComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 2825:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuModule = void 0;

var common_1 = __webpack_require__(/*! @angular/common */ 6362);

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var menu_routing_module_1 = __webpack_require__(/*! ./menu.routing.module */ 2394);

var menu_component_1 = __webpack_require__(/*! ./menu.component */ 1105);

var forms_1 = __webpack_require__(/*! @angular/forms */ 587);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var MenuModule = /*#__PURE__*/_createClass(function MenuModule() {
  _classCallCheck(this, MenuModule);
});

exports.MenuModule = MenuModule;

MenuModule.ɵfac = function MenuModule_Factory(t) {
  return new (t || MenuModule)();
};

MenuModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: MenuModule
});
MenuModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[common_1.CommonModule, menu_routing_module_1.MenuRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule, ng_components_1.PoStepperModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuModule, {
    declarations: [menu_component_1.MenuComponent],
    imports: [common_1.CommonModule, menu_routing_module_1.MenuRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule, ng_components_1.PoStepperModule],
    exports: [menu_component_1.MenuComponent]
  });
})();

/***/ }),

/***/ 2394:
/*!*********************************************!*\
  !*** ./src/app/menu/menu.routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuRoutingModule = void 0;

var router_1 = __webpack_require__(/*! @angular/router */ 2816);

var menu_component_1 = __webpack_require__(/*! ./menu.component */ 1105);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var routes = [{
  path: '',
  component: menu_component_1.MenuComponent
}];

var MenuRoutingModule = /*#__PURE__*/_createClass(function MenuRoutingModule() {
  _classCallCheck(this, MenuRoutingModule);
});

exports.MenuRoutingModule = MenuRoutingModule;

MenuRoutingModule.ɵfac = function MenuRoutingModule_Factory(t) {
  return new (t || MenuRoutingModule)();
};

MenuRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: MenuRoutingModule
});
MenuRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MenuRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 2008:
/*!*********************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PurchaseOrderModule = void 0;

var common_1 = __webpack_require__(/*! @angular/common */ 6362);

var forms_1 = __webpack_require__(/*! @angular/forms */ 587);

var purchase_order_component_1 = __webpack_require__(/*! ./purchase-order/purchase-order.component */ 895);

var purchase_order_routing_module_1 = __webpack_require__(/*! ./purchase-order.routing.module */ 5167);

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var PurchaseOrderModule = /*#__PURE__*/_createClass(function PurchaseOrderModule() {
  _classCallCheck(this, PurchaseOrderModule);
});

exports.PurchaseOrderModule = PurchaseOrderModule;

PurchaseOrderModule.ɵfac = function PurchaseOrderModule_Factory(t) {
  return new (t || PurchaseOrderModule)();
};

PurchaseOrderModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: PurchaseOrderModule
});
PurchaseOrderModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[common_1.CommonModule, purchase_order_routing_module_1.PurchaseOrderRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PurchaseOrderModule, {
    declarations: [purchase_order_component_1.PurchaseOrderComponent],
    imports: [common_1.CommonModule, purchase_order_routing_module_1.PurchaseOrderRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule],
    exports: [purchase_order_component_1.PurchaseOrderComponent]
  });
})();

/***/ }),

/***/ 5167:
/*!*****************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PurchaseOrderRoutingModule = void 0;

var router_1 = __webpack_require__(/*! @angular/router */ 2816);

var purchase_order_component_1 = __webpack_require__(/*! ./purchase-order/purchase-order.component */ 895);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var routes = [{
  path: '',
  component: purchase_order_component_1.PurchaseOrderComponent
}];

var PurchaseOrderRoutingModule = /*#__PURE__*/_createClass(function PurchaseOrderRoutingModule() {
  _classCallCheck(this, PurchaseOrderRoutingModule);
});

exports.PurchaseOrderRoutingModule = PurchaseOrderRoutingModule;

PurchaseOrderRoutingModule.ɵfac = function PurchaseOrderRoutingModule_Factory(t) {
  return new (t || PurchaseOrderRoutingModule)();
};

PurchaseOrderRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: PurchaseOrderRoutingModule
});
PurchaseOrderRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PurchaseOrderRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 895:
/*!***************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order/purchase-order.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PurchaseOrderComponent = void 0;

var forms_1 = __webpack_require__(/*! @angular/forms */ 587);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/forms */ 587);

var i2 = __webpack_require__(/*! @angular/router */ 2816);

var i3 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var _c0 = ["reactiveFormData"];

var _c1 = function _c1() {
  return {
    label: "Option 1",
    value: "1"
  };
};

var _c2 = function _c2() {
  return {
    label: "Option 2",
    value: "2"
  };
};

var _c3 = function _c3(a0, a1) {
  return [a0, a1];
};

var _c4 = function _c4() {
  return {
    Codigo: "Totvs Table",
    Descricao: "Totvs Table",
    UM: "Totvs Table",
    Fabricante: "Totvs Table",
    Quantidade: "Totvs Table"
  };
};

var _c5 = function _c5(a0, a1, a2) {
  return [a0, a1, a2];
};

var PurchaseOrderComponent = /*#__PURE__*/function () {
  function PurchaseOrderComponent(fb, router) {
    var _this = this;

    _classCallCheck(this, PurchaseOrderComponent);

    this.fb = fb;
    this.router = router;
    this.options = [{
      value: 'fornecedor1',
      label: 'Paper And Crafts & Arts'
    }, {
      value: 'fornecedor2',
      label: 'Sorveio e Sives S.A.'
    }, {
      value: 'fornecedor3',
      label: 'Kormex Comércio e Indústria Gráfica Ltda.'
    }, {
      value: 'fornecedor4',
      label: 'Contabilista'
    }];
    this.modalPrimaryAction = {
      action: function action() {
        return _this.reactiveFormModal.close();
      },
      label: 'Close'
    };
  }

  _createClass(PurchaseOrderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.createReactiveForm();
    }
  }, {
    key: "createReactiveForm",
    value: function createReactiveForm() {
      this.reactiveForm = this.fb.group({
        name: ['Bruno Quadrotti de Freitas', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(30)])],
        category: ['', forms_1.Validators.compose([forms_1.Validators.required])],
        justify: ['', forms_1.Validators.compose([forms_1.Validators.required])],
        providers: ['', forms_1.Validators.compose([forms_1.Validators.required])]
      });
    }
  }, {
    key: "saveForm",
    value: function saveForm() {
      this.reactiveFormModal.open();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.router.navigateByUrl('/dashboard');
    }
  }]);

  return PurchaseOrderComponent;
}();

exports.PurchaseOrderComponent = PurchaseOrderComponent;

PurchaseOrderComponent.ɵfac = function PurchaseOrderComponent_Factory(t) {
  return new (t || PurchaseOrderComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.Router));
};

PurchaseOrderComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: PurchaseOrderComponent,
  selectors: [["app-purchase-order"]],
  viewQuery: function PurchaseOrderComponent_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c0, 5);
    }

    if (rf & 2) {
      var _t;

      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.reactiveFormModal = _t.first);
    }
  },
  decls: 25,
  vars: 19,
  consts: [[1, "po-row"], [1, "po-md-12"], [3, "formGroup"], ["formControlName", "name", "p-clean", "", "p-label", "Usu\xE1rio", "p-readonly", "true", 1, "po-md-12"], ["formControlName", "category", "p-clean", "", "p-label", "Categoria", 1, "po-md-12", 3, "p-options"], ["formControlName", "justify", "p-clean", "", "p-label", "Justificativa", 1, "po-md-12"], ["formControlName", "providers", "p-clean", "", "p-label", "Fornecedores", 1, "po-md-12", 3, "p-options"], [1, "po-md-12", 3, "p-items"], [1, "po-row", "button-area"], ["p-type", "primary", "p-label", "Solicitar cota\xE7\xE3o", 1, "po-md-2", 3, "p-disabled", "p-click"], ["p-label", "Cancelar", 1, "po-md-2", 3, "p-click"], ["p-title", "Save successful", 3, "p-primary-action"], ["reactiveFormData", ""], ["p-label", "Name", 1, "po-md-12", 3, "p-value"]],
  template: function PurchaseOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
      i0.ɵɵtext(2, "Cadastro de pedido de compra");
      i0.ɵɵelementEnd()();
      i0.ɵɵelementStart(3, "div", 0)(4, "p", 1);
      i0.ɵɵtext(5, "Preencha abaixo os detalhes do seu pedido de compra. N\xE3o esque\xE7a de selecionar os fornecedores. ");
      i0.ɵɵelementEnd()();
      i0.ɵɵelement(6, "br");
      i0.ɵɵelementStart(7, "form", 2)(8, "div", 0);
      i0.ɵɵelement(9, "po-input", 3);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(10, "div", 0);
      i0.ɵɵelement(11, "po-select", 4);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(12, "div", 0);
      i0.ɵɵelement(13, "po-textarea", 5);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(14, "div", 0);
      i0.ɵɵelement(15, "po-multiselect", 6);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(16, "div", 0);
      i0.ɵɵelement(17, "po-table", 7);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(18, "div", 8)(19, "po-button", 9);
      i0.ɵɵlistener("p-click", function PurchaseOrderComponent_Template_po_button_p_click_19_listener() {
        return ctx.saveForm();
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(20, "po-button", 10);
      i0.ɵɵlistener("p-click", function PurchaseOrderComponent_Template_po_button_p_click_20_listener() {
        return ctx.cancel();
      });
      i0.ɵɵelementEnd()()();
      i0.ɵɵelementStart(21, "po-modal", 11, 12)(23, "div", 0);
      i0.ɵɵelement(24, "po-info", 13);
      i0.ɵɵelementEnd()();
    }

    if (rf & 2) {
      i0.ɵɵadvance(7);
      i0.ɵɵproperty("formGroup", ctx.reactiveForm);
      i0.ɵɵadvance(4);
      i0.ɵɵproperty("p-options", i0.ɵɵpureFunction2(9, _c3, i0.ɵɵpureFunction0(7, _c1), i0.ɵɵpureFunction0(8, _c2)));
      i0.ɵɵadvance(4);
      i0.ɵɵproperty("p-options", ctx.options);
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("p-items", i0.ɵɵpureFunction3(15, _c5, i0.ɵɵpureFunction0(12, _c4), i0.ɵɵpureFunction0(13, _c4), i0.ɵɵpureFunction0(14, _c4)));
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("p-disabled", !ctx.reactiveForm.valid);
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("p-primary-action", ctx.modalPrimaryAction);
      i0.ɵɵadvance(3);
      i0.ɵɵproperty("p-value", ctx.reactiveForm.controls.name.value);
    }
  },
  directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.PoInputComponent, i1.NgControlStatus, i1.FormControlName, i3.PoSelectComponent, i3.PoTextareaComponent, i3.PoMultiselectComponent, i3.PoTableComponent, i3.PoButtonComponent, i3.PoModalComponent, i3.PoInfoComponent],
  styles: ["[_nghost-%COMP%]   .button-area[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtBQUFKIiwiZmlsZSI6InB1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5idXR0b24tYXJlYSB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 2945:
/*!*****************************************************!*\
  !*** ./src/app/refund-order/refund-order.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RefundOrderModule = void 0;

var common_1 = __webpack_require__(/*! @angular/common */ 6362);

var refund_order_routing_module_1 = __webpack_require__(/*! ./refund-order.routing.module */ 4410);

var refund_order_component_1 = __webpack_require__(/*! ./refund-order/refund-order.component */ 8465);

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var RefundOrderModule = /*#__PURE__*/_createClass(function RefundOrderModule() {
  _classCallCheck(this, RefundOrderModule);
});

exports.RefundOrderModule = RefundOrderModule;

RefundOrderModule.ɵfac = function RefundOrderModule_Factory(t) {
  return new (t || RefundOrderModule)();
};

RefundOrderModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: RefundOrderModule
});
RefundOrderModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[common_1.CommonModule, refund_order_routing_module_1.RefundOrderRoutingModule, ng_components_1.PoModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RefundOrderModule, {
    declarations: [refund_order_component_1.RefundOrderComponent],
    imports: [common_1.CommonModule, refund_order_routing_module_1.RefundOrderRoutingModule, ng_components_1.PoModule],
    exports: [refund_order_component_1.RefundOrderComponent]
  });
})();

/***/ }),

/***/ 4410:
/*!*************************************************************!*\
  !*** ./src/app/refund-order/refund-order.routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RefundOrderRoutingModule = void 0;

var router_1 = __webpack_require__(/*! @angular/router */ 2816);

var refund_order_component_1 = __webpack_require__(/*! ./refund-order/refund-order.component */ 8465);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var routes = [{
  path: '',
  component: refund_order_component_1.RefundOrderComponent
}];

var RefundOrderRoutingModule = /*#__PURE__*/_createClass(function RefundOrderRoutingModule() {
  _classCallCheck(this, RefundOrderRoutingModule);
});

exports.RefundOrderRoutingModule = RefundOrderRoutingModule;

RefundOrderRoutingModule.ɵfac = function RefundOrderRoutingModule_Factory(t) {
  return new (t || RefundOrderRoutingModule)();
};

RefundOrderRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: RefundOrderRoutingModule
});
RefundOrderRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RefundOrderRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 8465:
/*!*********************************************************************!*\
  !*** ./src/app/refund-order/refund-order/refund-order.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RefundOrderComponent = void 0;

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var i2 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var RefundOrderComponent = /*#__PURE__*/function () {
  function RefundOrderComponent(router) {
    _classCallCheck(this, RefundOrderComponent);

    this.router = router;
    this.breadcrumb = {
      items: [{
        label: 'Menu Principal',
        link: '/'
      }, {
        label: 'Solicitar Reembolso',
        link: '/'
      }]
    };
  }

  _createClass(RefundOrderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      throw new Error('Method not implemented.');
    }
  }, {
    key: "onClick",
    value: function onClick() {}
  }, {
    key: "navigateToMenu",
    value: function navigateToMenu() {
      this.router.navigateByUrl('/menu');
    }
  }]);

  return RefundOrderComponent;
}();

exports.RefundOrderComponent = RefundOrderComponent;

RefundOrderComponent.ɵfac = function RefundOrderComponent_Factory(t) {
  return new (t || RefundOrderComponent)(i0.ɵɵdirectiveInject(i1.Router));
};

RefundOrderComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: RefundOrderComponent,
  selectors: [["app-refund-order"]],
  decls: 14,
  vars: 1,
  consts: [["p-title", "Solicitar Reembolso", 3, "p-breadcrumb"], [1, "po-row"], ["name", "Data", "p-clean", "", "p-label", "Data"], ["name", "input", "p-label", "Transporte"], ["name", "input", "p-label", "Refei\xE7\xE3o"], ["name", "upload", "p-label", "Comprovante", "p-url", "https://po-sample-api.fly.dev/v1/uploads/addFile"], ["p-label", "Salvar", 1, "button-spacing", 3, "p-click"], ["p-label", "Voltar", 1, "button-spacing", 3, "p-click"]],
  template: function RefundOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "po-page-default", 0)(1, "po-container")(2, "div", 1);
      i0.ɵɵelement(3, "po-datepicker", 2);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(4, "div", 1);
      i0.ɵɵelement(5, "po-input", 3);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(6, "div", 1);
      i0.ɵɵelement(7, "po-input", 4);
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(8, "div", 1);
      i0.ɵɵelement(9, "po-upload", 5);
      i0.ɵɵelementEnd();
      i0.ɵɵelement(10, "br");
      i0.ɵɵelementStart(11, "div", 1)(12, "po-button", 6);
      i0.ɵɵlistener("p-click", function RefundOrderComponent_Template_po_button_p_click_12_listener() {
        return ctx.onClick();
      });
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(13, "po-button", 7);
      i0.ɵɵlistener("p-click", function RefundOrderComponent_Template_po_button_p_click_13_listener() {
        return ctx.navigateToMenu();
      });
      i0.ɵɵelementEnd()()()();
    }

    if (rf & 2) {
      i0.ɵɵproperty("p-breadcrumb", ctx.breadcrumb);
    }
  },
  directives: [i2.PoPageDefaultComponent, i2.PoContainerComponent, i2.PoDatepickerComponent, i2.PoInputComponent, i2.PoUploadComponent, i2.PoButtonComponent],
  styles: ["@charset \"UTF-8\";\n.button-spacing[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnVuZC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxrQkFBQTtFQUFvQiwrQ0FBQTtBQUd4QiIsImZpbGUiOiJyZWZ1bmQtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXNwYWNpbmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBZGljaW9uZSBvIGVzcGHDp2FtZW50byBob3Jpem9udGFsIGRlc2VqYWRvICovXHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 8220:
/*!*************************************************!*\
  !*** ./src/app/services/fluig-oauth.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FluigOauthService = void 0;

var environment_1 = __webpack_require__(/*! src/environments/environment */ 2340);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var FluigOauthService = /*#__PURE__*/function () {
  function FluigOauthService() {
    _classCallCheck(this, FluigOauthService);
  }

  _createClass(FluigOauthService, [{
    key: "getOauthHeaders",
    value: function getOauthHeaders(requestData) {
      var oauth = OAuth({
        consumer: {
          public: environment_1.environment.OAUTH_CONSUMER_PUBLIC,
          secret: environment_1.environment.OAUTH_CONSUMER_SECRET
        },
        signature_method: environment_1.environment.OAUTH_SIGNATURE_METHOD
      });
      var token = {
        public: environment_1.environment.TOKEN_PUBLIC,
        secret: environment_1.environment.TOKEN_SECRET
      };
      return oauth.toHeader(oauth.authorize(requestData, token));
    }
  }]);

  return FluigOauthService;
}();

exports.FluigOauthService = FluigOauthService;

FluigOauthService.ɵfac = function FluigOauthService_Factory(t) {
  return new (t || FluigOauthService)();
};

FluigOauthService.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: FluigOauthService,
  factory: FluigOauthService.ɵfac
});

/***/ }),

/***/ 7091:
/*!********************************************************!*\
  !*** ./src/app/services/process-management.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ProcessManagementService = void 0;

var http_1 = __webpack_require__(/*! @angular/common/http */ 8784);

var operators_1 = __webpack_require__(/*! rxjs/operators */ 9768);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/common/http */ 8784);

var i2 = __webpack_require__(/*! ./fluig-oauth.service */ 8220);

var i3 = __webpack_require__(/*! ./products-converter.service */ 542);

var ProcessManagementService = /*#__PURE__*/function () {
  function ProcessManagementService(http, fluigOauthService, productsConverter) {
    _classCallCheck(this, ProcessManagementService);

    this.http = http;
    this.fluigOauthService = fluigOauthService;
    this.productsConverter = productsConverter;
    this.BASE_URL = "".concat(window['WCMAPI'] ? WCMAPI.getServerURL() : '');
  }

  _createClass(ProcessManagementService, [{
    key: "getProcessManagement",
    value: function getProcessManagement(WKNumProcess) {
      var _this = this;

      // tslint:disable-next-line:max-line-length
      var url = "".concat(this.BASE_URL, "/process-management/api/v2/requests?processInstanceId=").concat(WKNumProcess, "&page=1&pageSize=1000&expand=formFields");
      var headers = this.getHeaders(url);
      var httpOptions = {
        headers: new http_1.HttpHeaders(Object.assign({}, headers))
      };
      return this.http.get(url, httpOptions).pipe((0, operators_1.map)(function (res) {
        return _this.productsConverter.convertToObject(res['items'][0]);
      }));
    }
  }, {
    key: "moveProcessManagement",
    value: function moveProcessManagement(WKNumProcess, data) {
      var url = "".concat(this.BASE_URL, "/process-management/api/v2/requests/").concat(WKNumProcess, "/move");
      var headers = this.getHeaders(url, 'POST');
      var httpOptions = {
        headers: new http_1.HttpHeaders(Object.assign({}, headers))
      };
      return this.http.post(url, data, httpOptions);
    }
  }, {
    key: "getHeaders",
    value: function getHeaders(url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      return this.fluigOauthService.getOauthHeaders({
        url: url,
        method: method
      });
    }
  }]);

  return ProcessManagementService;
}();

exports.ProcessManagementService = ProcessManagementService;

ProcessManagementService.ɵfac = function ProcessManagementService_Factory(t) {
  return new (t || ProcessManagementService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.FluigOauthService), i0.ɵɵinject(i3.ProductsConverterService));
};

ProcessManagementService.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: ProcessManagementService,
  factory: ProcessManagementService.ɵfac
});

/***/ }),

/***/ 542:
/*!********************************************************!*\
  !*** ./src/app/services/products-converter.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ProductsConverterService = void 0;

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var ProductsConverterService = /*#__PURE__*/function () {
  function ProductsConverterService() {
    _classCallCheck(this, ProductsConverterService);
  }

  _createClass(ProductsConverterService, [{
    key: "convertToObject",
    value: function convertToObject(response) {
      var purchaseRequest = {};
      var productsMap = {};
      var products = [];

      if (response && response.formFields) {
        response.formFields.forEach(function (item) {
          if (item.field.indexOf('___') !== -1) {
            var productSplit = item.field.split('___');

            if (!productsMap[productSplit[1]]) {
              productsMap[productSplit[1]] = {};
            }

            productsMap[productSplit[1]][productSplit[0]] = item.value;
          } else {
            purchaseRequest[item.field] = item.value;
          }
        });
        Object.keys(productsMap).forEach(function (item) {
          products.push(productsMap[item]);
        });
      }

      purchaseRequest.products = products;
      return purchaseRequest;
    }
  }]);

  return ProductsConverterService;
}();

exports.ProductsConverterService = ProductsConverterService;

ProductsConverterService.ɵfac = function ProductsConverterService_Factory(t) {
  return new (t || ProductsConverterService)();
};

ProductsConverterService.ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
  token: ProductsConverterService,
  factory: ProductsConverterService.ɵfac
});

/***/ }),

/***/ 9242:
/*!*****************************************************************!*\
  !*** ./src/app/supplier-quotation/supplier-quotation.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SupplierQuotationModule = void 0;

var common_1 = __webpack_require__(/*! @angular/common */ 6362);

var supplier_quotation_component_1 = __webpack_require__(/*! ./supplier-quotation/supplier-quotation.component */ 229);

var supplier_quotation_routing_module_1 = __webpack_require__(/*! ./supplier-quotation.routing.module */ 1733);

var process_management_service_1 = __webpack_require__(/*! ../services/process-management.service */ 7091);

var forms_1 = __webpack_require__(/*! @angular/forms */ 587);

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var SupplierQuotationModule = /*#__PURE__*/_createClass(function SupplierQuotationModule() {
  _classCallCheck(this, SupplierQuotationModule);
});

exports.SupplierQuotationModule = SupplierQuotationModule;

SupplierQuotationModule.ɵfac = function SupplierQuotationModule_Factory(t) {
  return new (t || SupplierQuotationModule)();
};

SupplierQuotationModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: SupplierQuotationModule
});
SupplierQuotationModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  providers: [process_management_service_1.ProcessManagementService],
  imports: [[common_1.CommonModule, supplier_quotation_routing_module_1.SupplierQuotationRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SupplierQuotationModule, {
    declarations: [supplier_quotation_component_1.SupplierQuotationComponent],
    imports: [common_1.CommonModule, supplier_quotation_routing_module_1.SupplierQuotationRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng_components_1.PoModule],
    exports: [supplier_quotation_component_1.SupplierQuotationComponent]
  });
})();

/***/ }),

/***/ 1733:
/*!*************************************************************************!*\
  !*** ./src/app/supplier-quotation/supplier-quotation.routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SupplierQuotationRoutingModule = void 0;

var router_1 = __webpack_require__(/*! @angular/router */ 2816);

var supplier_quotation_component_1 = __webpack_require__(/*! ./supplier-quotation/supplier-quotation.component */ 229);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var routes = [{
  path: '',
  component: supplier_quotation_component_1.SupplierQuotationComponent
}];

var SupplierQuotationRoutingModule = /*#__PURE__*/_createClass(function SupplierQuotationRoutingModule() {
  _classCallCheck(this, SupplierQuotationRoutingModule);
});

exports.SupplierQuotationRoutingModule = SupplierQuotationRoutingModule;

SupplierQuotationRoutingModule.ɵfac = function SupplierQuotationRoutingModule_Factory(t) {
  return new (t || SupplierQuotationRoutingModule)();
};

SupplierQuotationRoutingModule.ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
  type: SupplierQuotationRoutingModule
});
SupplierQuotationRoutingModule.ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
  imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SupplierQuotationRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 229:
/*!***************************************************************************************!*\
  !*** ./src/app/supplier-quotation/supplier-quotation/supplier-quotation.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _classCallCheck = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ 2677)["default"]);

var _createClass = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ 9010)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SupplierQuotationComponent = void 0;

var ng_components_1 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i0 = __webpack_require__(/*! @angular/core */ 3184);

var i1 = __webpack_require__(/*! @angular/router */ 2816);

var i2 = __webpack_require__(/*! @po-ui/ng-components */ 9306);

var i3 = __webpack_require__(/*! src/app/services/process-management.service */ 7091);

var i4 = __webpack_require__(/*! @angular/common */ 6362);

var i5 = __webpack_require__(/*! @angular/forms */ 587);

function SupplierQuotationComponent_ng_container_2_ng_container_2_dl_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "dl")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
  }

  if (rf & 2) {
    var item_r7 = i0.ɵɵnextContext().$implicit;
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.literals[item_r7.key]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7.value);
  }
}

function SupplierQuotationComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SupplierQuotationComponent_ng_container_2_ng_container_2_dl_1_Template, 5, 2, "dl", 6);
    i0.ɵɵelementContainerEnd();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r7.key !== "price");
  }
}

function SupplierQuotationComponent_ng_container_2_ng_container_3_po_decimal_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();

    i0.ɵɵelementStart(0, "po-decimal", 8);
    i0.ɵɵlistener("ngModelChange", function SupplierQuotationComponent_ng_container_2_ng_container_3_po_decimal_1_Template_po_decimal_ngModelChange_0_listener($event) {
      i0.ɵɵrestoreView(_r14);
      var item_r10 = i0.ɵɵnextContext().$implicit;
      return item_r10.value = $event;
    });
    i0.ɵɵelementEnd();
  }

  if (rf & 2) {
    var item_r10 = i0.ɵɵnextContext().$implicit;
    var i_r4 = i0.ɵɵnextContext().index;
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("name", "", item_r10.key, "-", i_r4, "");
    i0.ɵɵproperty("ngModel", item_r10.value)("p-label", ctx_r11.literals[item_r10.key])("p-disabled", ctx_r11.isSended || !!ctx_r11.status);
  }
}

function SupplierQuotationComponent_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SupplierQuotationComponent_ng_container_2_ng_container_3_po_decimal_1_Template, 1, 5, "po-decimal", 7);
    i0.ɵɵelementContainerEnd();
  }

  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r10.key === "price");
  }
}

function SupplierQuotationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "po-widget", 5);
    i0.ɵɵtemplate(2, SupplierQuotationComponent_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, SupplierQuotationComponent_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
  }

  if (rf & 2) {
    var product_r3 = ctx.$implicit;
    var i_r4 = ctx.index;
    i0.ɵɵattribute("data-index", i_r4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", product_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", product_r3);
  }
}

function SupplierQuotationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r18 = i0.ɵɵgetCurrentView();

    i0.ɵɵelementStart(0, "div", 1)(1, "po-datepicker", 9);
    i0.ɵɵlistener("ngModelChange", function SupplierQuotationComponent_div_3_Template_po_datepicker_ngModelChange_1_listener($event) {
      i0.ɵɵrestoreView(_r18);
      var ctx_r17 = i0.ɵɵnextContext();
      return ctx_r17.sendDate = $event;
    });
    i0.ɵɵelementEnd()();
  }

  if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.sendDate)("p-disabled", ctx_r1.isSended);
  }
}

function SupplierQuotationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();

    i0.ɵɵelementStart(0, "div", 1)(1, "po-textarea", 10);
    i0.ɵɵlistener("ngModelChange", function SupplierQuotationComponent_div_4_Template_po_textarea_ngModelChange_1_listener($event) {
      i0.ɵɵrestoreView(_r20);
      var ctx_r19 = i0.ɵɵnextContext();
      return ctx_r19.trackingCode = $event;
    });
    i0.ɵɵelementEnd()();
  }

  if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.trackingCode)("p-disabled", ctx_r2.isSended);
  }
}

var SupplierQuotationComponent = /*#__PURE__*/function () {
  function SupplierQuotationComponent(route, poNotification, poDialog, processManagementService) {
    _classCallCheck(this, SupplierQuotationComponent);

    this.route = route;
    this.poNotification = poNotification;
    this.poDialog = poDialog;
    this.processManagementService = processManagementService;
    this.isSended = false;
    this.objectKeys = Object.keys;
    this.literals = {
      description: 'Descrição',
      unitMeasurement: 'Unidade de medida',
      manufacturer: 'Fabricante',
      quantity: 'Quantidade',
      product_code: 'Código do produto',
      price: 'Valor do produto',
      warning: 'Atenção',
      error_get_process: 'Não foi possível carregar essa solicitação.',
      error_empty_fields: 'Preencha todos os valores dos produtos.',
      success_send_process: 'Cotação enviada com sucesso.',
      error_send_process: 'Não foi possível enviar a cotação.',
      error_empty_send_options: 'Preencha os dados de envio dos produtos.'
    };
    this.productsList = [];
    this.whiteListItems = ['description', 'unitMeasurement', 'manufacturer', 'quantity', 'product_code', 'price'];
  }

  _createClass(SupplierQuotationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.queryParams.subscribe(function (params) {
        _this.WKNumProcess = params.WKNumProcess;
        _this.status = params.status;

        if (_this.WKNumProcess) {
          _this.getProcessManagement();
        }
      });
    }
  }, {
    key: "getProcessManagement",
    value: function getProcessManagement() {
      var _this2 = this;

      this.processManagementService.getProcessManagement(this.WKNumProcess).subscribe(function (res) {
        _this2.products = res.products;

        if (!_this2.products.length) {
          _this2.showToasterMessage(_this2.literals.error_get_process, 'error');

          return false;
        }

        _this2.products.forEach(function (product) {
          product = Object.keys(product).filter(function (item) {
            if (!_this2.isWhiteListItem(item)) {
              return false;
            }

            return item;
          }).map(function (item) {
            return {
              key: item,
              value: product[item]
            };
          });

          _this2.productsList.push(product);
        });
      }, function (error) {
        console.error('error', error);

        _this2.showToasterMessage(_this2.literals.error_get_process, 'error');
      });
    }
  }, {
    key: "showToasterMessage",
    value: function showToasterMessage(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      this.poNotification[type]({
        message: message,
        orientation: ng_components_1.PoToasterOrientation.Top
      });
    }
  }, {
    key: "isWhiteListItem",
    value: function isWhiteListItem(item) {
      return this.whiteListItems.includes(item);
    }
  }, {
    key: "saveForm",
    value: function saveForm() {
      var _this3 = this;

      if (this.hasFieldEmpty()) {
        this.poDialog.alert({
          title: this.literals.warning,
          message: this.literals.error_empty_fields
        });
        return false;
      }

      if (this.status && this.hasSendOptionsEmpty()) {
        this.poDialog.alert({
          title: this.literals.warning,
          message: this.literals.error_empty_send_options
        });
        return false;
      }

      this.processManagementService.moveProcessManagement(this.WKNumProcess, this.getProcessData()).subscribe(function (res) {
        _this3.showToasterMessage(_this3.literals.success_send_process);

        _this3.isSended = true;
      }, function (error) {
        console.error('error', error);

        _this3.showToasterMessage(_this3.literals.error_send_process, 'error');
      });
    }
  }, {
    key: "hasSendOptionsEmpty",
    value: function hasSendOptionsEmpty() {
      return !this.sendDate || !this.trackingCode;
    }
  }, {
    key: "getProcessData",
    value: function getProcessData() {
      var data = {};
      data.formFields = {};
      this.productsList.map(function (product, idx) {
        return product.map(function (item) {
          data.formFields["".concat(item.key, "___").concat(idx + 1)] = "".concat(item.value);
        });
      });
      return data;
    }
  }, {
    key: "hasFieldEmpty",
    value: function hasFieldEmpty() {
      var hasEmpty = false;
      this.productsList.map(function (product) {
        return product.map(function (item) {
          if (item.key === 'price' && !item.value) {
            hasEmpty = true;
          }
        });
      });
      return hasEmpty;
    }
  }]);

  return SupplierQuotationComponent;
}();

exports.SupplierQuotationComponent = SupplierQuotationComponent;

SupplierQuotationComponent.ɵfac = function SupplierQuotationComponent_Factory(t) {
  return new (t || SupplierQuotationComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PoNotificationService), i0.ɵɵdirectiveInject(i2.PoDialogService), i0.ɵɵdirectiveInject(i3.ProcessManagementService));
};

SupplierQuotationComponent.ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
  type: SupplierQuotationComponent,
  selectors: [["app-supplier-quotation"]],
  decls: 7,
  vars: 4,
  consts: [["p-title", "Incluir cota\xE7\xE3o dos produtos"], [1, "po-row", "po-mb-2"], [4, "ngFor", "ngForOf"], ["class", "po-row po-mb-2", 4, "ngIf"], ["p-type", "primary", "p-label", "Enviar", 1, "po-md-2", 3, "p-disabled", "p-click"], [1, "po-lg-12", "po-mb-1"], [4, "ngIf"], ["class", "po-md-3 no-padding po-mt-1", "p-decimals-length", "2", "p-icon", "po-icon-finance", "p-required", "", "p-thousand-maxlength", "13", 3, "name", "ngModel", "p-label", "p-disabled", "ngModelChange", 4, "ngIf"], ["p-decimals-length", "2", "p-icon", "po-icon-finance", "p-required", "", "p-thousand-maxlength", "13", 1, "po-md-3", "no-padding", "po-mt-1", 3, "name", "ngModel", "p-label", "p-disabled", "ngModelChange"], ["name", "datepicker", "p-label", "Data de envio", 1, "po-md-3", 3, "ngModel", "p-disabled", "ngModelChange"], ["name", "textarea", "p-label", "C\xF3digo de rastreio", 1, "po-md-3", 3, "ngModel", "p-disabled", "ngModelChange"]],
  template: function SupplierQuotationComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, "po-page-default", 0)(1, "div", 1);
      i0.ɵɵtemplate(2, SupplierQuotationComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
      i0.ɵɵelementEnd();
      i0.ɵɵtemplate(3, SupplierQuotationComponent_div_3_Template, 2, 2, "div", 3);
      i0.ɵɵtemplate(4, SupplierQuotationComponent_div_4_Template, 2, 2, "div", 3);
      i0.ɵɵelementStart(5, "div", 1)(6, "po-button", 4);
      i0.ɵɵlistener("p-click", function SupplierQuotationComponent_Template_po_button_p_click_6_listener() {
        return ctx.saveForm();
      });
      i0.ɵɵelementEnd()()();
    }

    if (rf & 2) {
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("ngForOf", ctx.productsList);
      i0.ɵɵadvance(1);
      i0.ɵɵproperty("ngIf", ctx.status);
      i0.ɵɵadvance(1);
      i0.ɵɵproperty("ngIf", ctx.status);
      i0.ɵɵadvance(2);
      i0.ɵɵproperty("p-disabled", ctx.isSended);
    }
  },
  directives: [i2.PoPageDefaultComponent, i4.NgForOf, i2.PoWidgetComponent, i4.NgIf, i2.PoDecimalComponent, i5.NgControlStatus, i5.NgModel, i2.PoDatepickerComponent, i2.PoTextareaComponent, i2.PoButtonComponent],
  styles: ["[_nghost-%COMP%]   dl[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  width: 20%;\n}\n[_nghost-%COMP%]   dt[_ngcontent-%COMP%], [_nghost-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 6px;\n}\n[_nghost-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   h5[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4a5c60;\n}\n[_nghost-%COMP%]   .button-area[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyLXF1b3RhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxjQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFFRTtFQUNFLFVBQUE7QUFBSiIsImZpbGUiOiJzdXBwbGllci1xdW90YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGwge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIGR0LCBkZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIGR0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBoNCwgaDUsIHAge1xyXG4gICAgY29sb3I6ICM0YTVjNjBcclxuICB9XHJcbiAgLmJ1dHRvbi1hcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5uby1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

 // This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.environment = void 0;
exports.environment = {
  production: false,
  OAUTH_CONSUMER_PUBLIC: '<YOUR_OAUTH_CONSUMER_PUBLIC>',
  OAUTH_CONSUMER_SECRET: '<YOUR_OAUTH_CONSUMER_SECRET>',
  OAUTH_SIGNATURE_METHOD: '<YOUR_OAUTH_SIGNATURE_METHOD>',
  TOKEN_PUBLIC: '<YOUR_TOKEN_PUBLIC>',
  TOKEN_SECRET: '<YOUR_TOKEN_SECRET>'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var __NgCli_bootstrap_1 = __webpack_require__(/*! @angular/platform-browser */ 318);

var core_1 = __webpack_require__(/*! @angular/core */ 3184);

var app_module_1 = __webpack_require__(/*! ./app/app.module */ 6747);

var environment_1 = __webpack_require__(/*! ./environments/environment */ 2340);

if (environment_1.environment.production) {
  (0, core_1.enableProdMode)();
}

__NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map