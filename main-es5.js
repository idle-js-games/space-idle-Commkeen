function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" class=\"layout-container\">\n  <div fxFlex=\"4\" class=\"layout-top\">\n    Space Idle 0.2 --- Work in progress --- SAVING IS NOT YET IMPLEMENTED!\n  </div>\n  <div fxFlex=\"96\" fxLayout=\"row\" class=\"layout-center\">\n    <div fxFlex=\"15\" fxLayout=\"column\" class=\"layout-column-left\">\n      <div fxFlex=\"60\" class=\"layout-column-left-top\">\n        <app-resource-overview></app-resource-overview>\n      </div>\n      <div fxFlex=\"40\" class=\"layout-column-left-bottom\">\n        <app-actions></app-actions>\n      </div>\n    </div>\n    <div fxFlex=\"85\" fxLayout=\"column\" class=\"layout-column-center\">\n        <app-planet-interaction fxFlex=\"100\" [hidden]=\"showShipPanel\"></app-planet-interaction>\n        <app-ship-interaction fxFlex=\"100\" [hidden]=\"!showShipPanel\"></app-ship-interaction>\n    </div>\n    <!-- <div fxFlex=\"10\" fxLayout=\"column\" class=\"layout-column-right\">\n        <app-system-overview fxFlex=\"100\" (shipSelected)=\"onShipSelected($event)\"></app-system-overview>\n        <app-ship-overview fxFlex=\"40\" (researchButtonClicked)=\"onResearchButtonClicked()\"></app-ship-overview>\n    </div> -->\n  </div>\n</div>\n\n<!--\n<div>{{currentTime}}</div>\n<button mat-button (click)=\"onResetButtonClicked()\">Reset</button>\n-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actions/actions.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/actions/actions.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsActionsActionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spaceidle-section\" fxLayout=\"column\">\n  <div class=\"current-task\" *ngIf=\"getCurrentTask() != null\">\n    <div class=\"current-task-name\">{{ getCurrentTask().name }}</div>\n    <app-progress-bar\n      [value]=\"getCurrentTask().progress\"\n      [max]=\"getCurrentTask().needed\"\n    ></app-progress-bar>\n  </div>\n  <app-resource-bar\n    [resource]=\"resourceService.globalResources.get('energy')\"\n  ></app-resource-bar>\n  <div class=\"list-panel\" fxFlex=\"grow\">\n    <div *ngIf=\"showWin()\">\n      Congratulations, you have completed the space idle prototype!\n    </div>\n    <div class=\"action-list\" *ngFor=\"let ability of getAbilities()\">\n      <ability-button [ability]=\"ability\"></ability-button>\n    </div>\n    <div class=\"upgrade-list\" *ngFor=\"let upgrade of getUpgrades()\">\n      <game-button\n        [name]=\"upgrade.name\"\n        [appGameTooltip]=\"getUpgradeTooltip(upgrade)\"\n        [disabled]=\"!canAffordUpgrade(upgrade)\"\n        (click)=\"onClickUpgrade(upgrade)\"\n      ></game-button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/ability-button/ability-button.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/ability-button/ability-button.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonAbilityButtonAbilityButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<game-button [appGameTooltip]=\"tooltip\"\n             [name]=\"ability.name\"\n             [disabled]=\"!canDo()\"\n             [cooldown]=\"getCooldownPercent()\"\n             (click)=\"onClick()\"></game-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/game-button/game-button.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/game-button/game-button.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonGameButtonGameButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"game-btn\" [ngClass]=\"{ 'disabled': disabled || cooldown > 0, 'small': small }\"\n      (click)=\"onClick($event)\">\n  <div class=\"cooldown\" [ngStyle]=\"{'width': cooldown + '%', 'transition': smoothCooldown ? '' : 'none'}\"></div>\n  <div class=\"running\" *ngIf=\"running\"><div class=\"running-top\"></div><div class=\"running-bottom\"></div></div>\n  <span class=\"text\" [ngClass]=\"{ 'text-small': small }\">{{name}}</span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/progress-bar/progress-bar.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/progress-bar/progress-bar.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonProgressBarProgressBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bar-text\">{{value | displayNumber}} / {{max | displayNumber}}</div>\n<div class=\"bar-outer\">\n  <div class=\"bar-inner\" [style.width]=\"getWidth() + '%'\">\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/resource-bar/resource-bar.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/resource-bar/resource-bar.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonResourceBarResourceBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-progress-bar [value]=\"resource.amount\" [max]=\"resource.max\"></app-progress-bar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/task-button/task-button.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/task-button/task-button.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonTaskButtonTaskButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<game-button [appGameTooltip]=\"getTooltip()\"\n            [name]=\"taskDef.name\"\n            [disabled]=\"\"\n            [running]=\"isRunning()\"\n            (click)=\"onClick()\"></game-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-tooltip/game-tooltip.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-tooltip/game-tooltip.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGameTooltipGameTooltipComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"header-section\">\n    <div class=\"name\">{{tooltipModel.name}}</div>\n    <div class=\"description\">{{tooltipModel.desc}}</div>\n  </div>\n  <div class=\"cost-section\" *ngIf=\"tooltipModel.costs != null\">\n    <div class=\"cost\" *ngFor=\"let costItem of tooltipModel.costs.resources\">\n      <span class=\"resource-name\">{{costItem.resource}}</span>\n      <span class=\"resource-amount\">{{costItem.amount | displayNumber}}</span>\n    </div>\n  </div>\n  <div class=\"consumption-section\" *ngIf=\"tooltipModel.consumption != null\">\n    Consumes\n    <div class=\"consumption\" *ngFor=\"let costItem of tooltipModel.consumption.resources\">\n      <span class=\"resource-name\">{{costItem.resource}}</span>\n      <span class=\"resource-amount\">{{costItem.amount | displayNumber}}</span>\n    </div>\n  </div>\n  <div class=\"production-section\" *ngIf=\"tooltipModel.production != null\">\n    Produces\n    <div class=\"production\" *ngFor=\"let costItem of tooltipModel.production.resources\">\n      <span class=\"resource-name\">{{costItem.resource}}</span>\n      <span class=\"resource-amount\">{{costItem.amount | displayNumber}}</span>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-command/pi-command.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-command/pi-command.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlanetInteractionPiCommandPiCommandComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\">\n  <div fxLayout=\"column\" fxFlex=\"50\" class=\"command-column-left\">\n    <br />\n    <div fxFlex=\"50\" *ngIf=\"showOutpostPanel\" class=\"outpost-panel\">\n      <div>{{outpostName}}</div>\n      <button mat-button *ngIf=\"outpostUpgradeVisible\" [disabled]=\"!canAffordOutpostUpgrade()\" (click)=\"onUpgradeOutpost()\">{{outpostUpgradeText}}</button>\n      <div *ngFor=\"let cost of outpostUpgradeCosts.resources\">{{cost.resource}}: {{cost.amount}}</div>\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"50\" class=\"starship-panel\" *ngIf=\"outpostLevel === 3\">\n      <div *ngFor=\"let part of shipParts\">\n          <button mat-button\n            *ngIf=\"!part.built\"\n            (click)=\"onBuildShipComponent(part)\"\n            [disabled]=\"!canAffordShipPart(part)\">{{part.name}}: {{part.cost.resources[0].amount}} {{part.cost.resources[0].resource}}</button>\n      </div>\n      <button mat-button *ngIf=\"showLaunchBtn\" (click)=\"onLaunchShip()\">Launch Starship</button>\n      <div *ngIf=\"shipLaunched\">Congratulations, you have reached the end of the Space Idle prototype!</div>\n    </div>\n  </div>\n  <div fxLayout=\"column\" fxFlex=\"50\" class=\"command-column-right\">\n    <div fxFlex=\"100\" class=\"drone-panel\">\n      <div>Drones: {{currentDrones}}/{{maxDrones}} (Idle: {{idleDrones}})</div>\n      <button mat-button *ngIf=\"showBuildDrone\" [disabled]=\"!canAffordDrone()\" (click)=\"onBuildDrone()\">Build Drone</button>\n      <div *ngIf=\"showBuildDrone\">\n        <div *ngFor=\"let resource of droneCost.resources\">\n          {{resource.resource}}: {{resource.amount}}\n        </div>\n      </div>\n      <br />\n      <div class=\"drone-assignment\">\n        <div fxLayout=\"row\" *ngFor=\"let task of droneTasks\">\n          <ng-container *ngIf=\"task.visible\">\n            <div fxFlex=\"50\">{{task.name}}</div>\n            <div fxFlex=\"50\">\n              <button (click)=\"onUnassignDrone(task.name)\">-</button>\n              {{task.assigned}}\n              <button (click)=\"onAssignDrone(task.name)\">+</button>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-structures/pi-structures.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-structures/pi-structures.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlanetInteractionPiStructuresPiStructuresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"showBuildList\">\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" value=\"all\">\n      <mat-button-toggle value=\"all\">All</mat-button-toggle>\n      <mat-button-toggle value=\"gather\">Gather</mat-button-toggle>\n      <mat-button-toggle value=\"refine\">Refine</mat-button-toggle>\n      <mat-button-toggle value=\"power\">Power</mat-button-toggle>\n      <mat-button-toggle value=\"misc\">Misc</mat-button-toggle>\n    </mat-button-toggle-group>\n    <div class=\"structure-list\">\n      <div class=\"structure-item\" *ngFor=\"let buildItem of getFilteredBuildingList(group.value)\">\n        <game-button class=\"item-build-btn\" [appGameTooltip]=\"buildItem.tooltip\"\n                      [name]=\"getButtonName(buildItem)\"\n                      [disabled]=\"!canBuild(buildItem)\"\n                      (click)=\"onBuildItemClicked(buildItem.name)\"></game-button>\n        <game-button class=\"item-deactivate-btn\" [name]=\"'-'\"\n                    *ngIf=\"buildItem.showActivateControls\"\n                    (click)=\"onDeactivateItemClicked(buildItem.name)\"\n                    [disabled]=\"buildItem.activeNumber <= 0\"></game-button>\n        <game-button class=\"item-activate-btn\" [name]=\"'+'\"\n                      *ngIf=\"buildItem.showActivateControls\"\n                      (click)=\"onActivateItemClicked(buildItem.name)\"\n                      [disabled]=\"!buildItem.canActivate\"></game-button>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlanetInteractionPiTerrainPiTerrainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" class=\"layout-container\">\n  <div fxFlex=\"100\" class=\"layout-column-left\">\n    <div class=\"region-list\">\n      <div class=\"region\" *ngFor=\"let region of regionList\">\n        <div fxLayout=\"row\" class=\"region-header\">\n          <div class=\"region-left-col\" fxFlex=\"nogrow\">\n            <div class=\"region-title\" [appGameTooltip]=\"region.tooltip\">{{region.name}}</div>\n            <div class=\"region-drone-count\" *ngIf=\"showDroneCounts(region)\">Drones: {{region.dronesAssigned}}/{{region.droneSlots}}</div>\n            <div [ngStyle]=\"{'width': '80%'}\">\n              <game-button [appGameTooltip]=\"droneHubTooltip(region)\"\n              *ngIf=\"showDroneHubButton(region)\"\n              [disabled]=\"!canAffordDroneHub(region)\"\n              name=\"Drone Hub\" small=\"true\" (click)=\"buyDroneHub(region)\"></game-button>\n            </div>\n          </div>\n          <div class=\"region-survey-progress\" fxFlex=\"40\">\n            <div fxLayout=\"column\">\n              <div fxLayout=\"row\">\n                <span fxFlex=\"40\">{{getSurveyLevelText(region)}}</span>\n                <span fxFlex=\"40\" class=\"region-survey-btn\">\n                  <game-button small=\"true\" [appGameTooltip]=\"surveyTooltip(region)\"\n                  [disabled]=\"!canAffordSurvey(region) || upgradeRequiredForSurvey(region)\"\n                  [name]=\"getSurveyButtonName(region)\"\n                  [running]=\"isSurveyRunning(region)\"\n                  (click)=\"survey(region)\"></game-button>\n                </span>\n              </div>\n              <app-progress-bar fxFlex=\"50\" [value]=\"getSurveyProgress(region.id)\" [max]=\"getSurveyProgressNeeded(region.id)\"></app-progress-bar>\n            </div>\n          </div>\n        </div>\n        <div class=\"region-content\" *ngIf=\"region.surveyLevel > 0\" fxLayout=\"row\">\n          <div class=\"feature-list\">\n            <div class=\"feature\" fxLayout=\"row\" *ngFor=\"let feature of region.features\">\n              <div class=\"feature-active\" fxLayout=\"row\" *ngIf=\"feature.active\">\n                <div class=\"feature-left-col\" fxFlex=\"nogrow\">\n                  <div class=\"feature-name\" [appGameTooltip]=\"feature.tooltip\">{{feature.name}}</div>\n                  <div class=\"feature-drone-control\" *ngIf=\"showDroneControl(feature)\">\n                    <span class=\"feature-drone-decrement\"\n                          [ngClass]=\"{'hidden' : !canUnassignDrone(region, feature)}\"\n                          (click)=\"unassignDrone(feature)\">&lt;</span>\n                    <span class=\"feature-drone-count\">Drones: {{feature.dronesAssigned}}/{{feature.droneSlots}}</span>\n                    <span class=\"feature-drone-increment\"\n                          [ngClass]=\"{'hidden' : !canAssignDrone(region, feature)}\"\n                          (click)=\"assignDrone(feature)\">&gt;</span>\n                  </div>\n                </div>\n                <div class=\"feature-buttons\" fxLayout=\"row\" fxFlex=\"70\">\n                  <div *ngFor=\"let ability of feature.abilities\">\n                    <ability-button class=\"ability\" [ability]=\"ability.def\" [feature]=\"feature.featureInstance\"></ability-button>\n                  </div>\n                  <div *ngFor=\"let task of feature.tasks\">\n                    <task-button class=\"task\" [task]=\"task.instance\" [taskDef]=\"task.def\" [feature]=\"feature.featureInstance\"></task-button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"feature-hidden\" *ngIf=\"feature.hintActive\" [appGameTooltip]=\"feature.tooltip\">\n                ---{{feature.surveyNeeded}}---\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/planet-interaction.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/planet-interaction.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlanetInteractionPlanetInteractionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" class=\"spaceidle-section\">\n  <div fxFlex=\"5\" class=\"planet-header\" fxLayout=\"row\">\n    <div class=\"planet-name\" fxFlex=\"20\">\n      Forest Planet\n    </div>\n    <div class=\"planet-drones\" fxFlex=\"20\">\n      Drones: {{droneCount()}}/{{droneCap()}}\n      <span *ngIf=\"dronesIdle() > 0\">({{dronesIdle()}} idle)</span>\n    </div>\n    <div class=\"planet-power\" fxFlex=\"20\">\n      Power: {{powerUsed()}}/{{powerAvailable()}}\n    </div>\n  </div>\n  <mat-tab-group fxFlex=\"95\">\n    <mat-tab label=\"Explore\">\n      <app-pi-terrain></app-pi-terrain>\n    </mat-tab>\n    <mat-tab label=\"Structures\" *ngIf=\"showStructures\">\n      <app-pi-structures></app-pi-structures>\n    </mat-tab>\n    <mat-tab label=\"Research\" *ngIf=\"showResearch\">\n      <app-si-research></app-si-research>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resource-overview/resource-overview.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resource-overview/resource-overview.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResourceOverviewResourceOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spaceidle-section\">\n  <mat-button-toggle-group\n    #localRateToggleGroup=\"matButtonToggleGroup\"\n    value=\"localRates\"\n    style=\"display: none\"\n  >\n    <mat-button-toggle value=\"localRates\">Local Rates</mat-button-toggle>\n    <mat-button-toggle value=\"globalRates\">Global Rates</mat-button-toggle>\n  </mat-button-toggle-group>\n  <ul>\n    <li *ngFor=\"let resource of getResourceList(localRateToggleGroup.value)\">\n      {{ resource.name }} {{ resource.amount | displayNumber }}\n      <span *ngIf=\"resource.maxAmount > 0\">/{{ resource.maxAmount | displayNumber }}</span> ({{\n        resource.rate | displayNumber\n      }}/sec)\n    </li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/ship-interaction.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/ship-interaction.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShipInteractionShipInteractionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" class=\"spaceidle-section\">\n  <div fxFlex=\"5\" class=\"ship-header\">\n    Information about the ship goes here!\n  </div>\n  <mat-tab-group fxFlex=\"95\">\n    <mat-tab label=\"Research\">\n      <app-si-research></app-si-research>\n    </mat-tab>\n    <mat-tab label=\"Upgrades\">\n      <app-si-upgrades></app-si-upgrades>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-research/si-research.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-research/si-research.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShipInteractionSiResearchSiResearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"research-item\" *ngFor=\"let item of researchList\">\n    <div class=\"research-item-top\">\n      <span [appGameTooltip]=\"item.knowledgeTooltip\" class=\"title\">{{item.name}} {{item.progress.knowledgeLevel}}</span>\n      <game-button small=\"true\" name=\"Research\" class=\"research-btn\" (click)=\"research(item)\"></game-button>\n    </div>\n    <div class=\"research-item-middle\">\n      <app-progress-bar [value]=\"item.progress.knowledgeProgress\" [max]=\"getKnowledgeNeeded(item)\"></app-progress-bar>\n    </div>\n    <div class=\"research-item-bottom\">\n      <span [appGameTooltip]=\"item.theoryTooltip\">Theory Lv {{item.progress.theoryLevel}}</span>\n      <app-progress-bar [value]=\"item.progress.theoryProgress\" [max]=\"getTheoryNeeded(item)\"></app-progress-bar>\n    </div>\n    <div class=\"research-item-footer\">\n      <span *ngIf=\"item.nextAdvanceLevel > 0\">Next advance at Level {{item.nextAdvanceLevel}}</span>\n      <span *ngIf=\"item.nextAdvanceLevel <= 0\">No more advances</span>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-systems/si-systems.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-systems/si-systems.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShipInteractionSiSystemsSiSystemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  si-systems works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShipInteractionSiUpgradesSiUpgradesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\">\n  <div fxFlex=\"50\" class=\"upgrades-available\">\n    <h2>Available</h2>\n    <div class=\"upgrade-list-item\" *ngFor=\"let item of upgradesAvailable\">\n      <div fxFlex=\"50\">\n        <button mat-raised-button [disabled]=\"!canAffordUpgrade(item)\" (click)=\"onClickUpgradeItem(item)\">\n          {{ item.name }}\n        </button>\n        <div>{{ item.description }}</div>\n      </div>\n      <div fxFlex=\"50\">\n        <div class=\"upgrade-cost\" *ngFor=\"let resource of item.cost.resources\">\n          {{ resource.resource }}: {{ resource.amount }}\n        </div>\n      </div>\n      <br />\n    </div>\n  </div>\n  <div fxFlex=\"50\" class=\"upgrades-complete\">\n    <h2>Complete</h2>\n    <div\n      class=\"upgrade-complete-list-item\"\n      *ngFor=\"let item of upgradesComplete\"\n    >\n      {{ item.name }}\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-overview/ship-overview.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-overview/ship-overview.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShipOverviewShipOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spaceidle-section\">\n  <h1>Ship Overview</h1>\n  <div>Location: Orbiting Ice Planet</div>\n  <div>Activity: Scanning</div>\n  <div>Science: 130 (0.03/sec)</div>\n  <ul>\n    <li>Biology 1 (530/1.6k)</li>\n    <li>Physics 3 (530/1.6k)</li>\n    <li>Engineering 2 (530/1.6k)</li>\n  </ul>\n  <button mat-raised-button (click)=\"onResearchButtonClicked()\">\n    Research and Upgrades\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/system-overview/system-overview.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/system-overview/system-overview.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSystemOverviewSystemOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spaceidle-section\">\n  <mat-radio-group\n    class=\"planet-list\"\n    [(ngModel)]=\"selectedPlanet\"\n    (ngModelChange)=\"onSelectionChange($event)\"\n  >\n    <mat-radio-button\n      class=\"planet-list-item\"\n      *ngFor=\"let planet of planets\"\n      [value]=\"planet\"\n    >\n      {{ planet.name }}\n    </mat-radio-button>\n  </mat-radio-group>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".layout-container {\n  height: 100%;\n}\n\n.layout-top {\n  background-color: white;\n  color: darkgray;\n  font-style: italic;\n  border-bottom: 1px solid darkgray;\n  padding: 2px;\n}\n\n.layout-column-left-top {\n  border-bottom: 1px solid darkgray;\n}\n\n.layout-column-center {\n  border-left: 1px solid darkgray;\n  border-right: 1px solid darkgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRE1BO0VBRUUsaUNBQUE7QUNKRjs7QURXQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxheW91dC10b3B7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogZGFya2dyYXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmF5O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5sYXlvdXQtY29sdW1uLWxlZnR7XG5cbn1cblxuLmxheW91dC1jb2x1bW4tbGVmdC10b3B7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzU1RkY1NTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmF5O1xufVxuXG4ubGF5b3V0LWNvbHVtbi1sZWZ0LWJvdHRvbXtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTksIDg1KTtcbn1cblxuLmxheW91dC1jb2x1bW4tY2VudGVye1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2dyYXk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2dyYXk7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjNTVDQzU1O1xufVxuXG4ubGF5b3V0LWNvbHVtbi1yaWdodHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XG59XG4iLCIubGF5b3V0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxheW91dC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGRhcmtncmF5O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4ubGF5b3V0LWNvbHVtbi1sZWZ0LXRvcCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcbn1cblxuLmxheW91dC1jb2x1bW4tY2VudGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZGFya2dyYXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var _services_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/time.service */
    "./src/app/services/time.service.ts");
    /* harmony import */


    var _services_simulation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/simulation.service */
    "./src/app/services/simulation.service.ts");
    /* harmony import */


    var _services_flags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/flags.service */
    "./src/app/services/flags.service.ts");
    /* harmony import */


    var _services_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/task.service */
    "./src/app/services/task.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(planetService, timeService, simulationService, flagsService, resourceService, taskService) {
        _classCallCheck(this, AppComponent);

        this.planetService = planetService;
        this.timeService = timeService;
        this.simulationService = simulationService;
        this.flagsService = flagsService;
        this.resourceService = resourceService;
        this.taskService = taskService;
        this.currentTime = 0;
        this.showShipPanel = false;
        this.title = 'space-idle';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.timeService.startGame();
          this.flagsService.init();
          this.planetService.initializeSystem();
          this.timeService.tick.subscribe(function (x) {
            return _this.currentTime = x;
          });
          this.resourceService.init();
          this.simulationService.init();
          this.simulationService.reset();
          this.taskService.init();
        }
      }, {
        key: "onShipSelected",
        value: function onShipSelected(value) {
          this.showShipPanel = value;
        }
      }, {
        key: "onResetButtonClicked",
        value: function onResetButtonClicked() {
          this.timeService.startGame();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]
      }, {
        type: _services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]
      }, {
        type: _services_simulation_service__WEBPACK_IMPORTED_MODULE_4__["SimulationService"]
      }, {
        type: _services_flags_service__WEBPACK_IMPORTED_MODULE_5__["FlagsService"]
      }, {
        type: _services_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]
      }, {
        type: _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"], _services_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"], _services_simulation_service__WEBPACK_IMPORTED_MODULE_4__["SimulationService"], _services_flags_service__WEBPACK_IMPORTED_MODULE_5__["FlagsService"], _services_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"], _services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/material.module */
    "./src/app/shared/material.module.ts");
    /* harmony import */


    var _components_system_overview_system_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/system-overview/system-overview.component */
    "./src/app/components/system-overview/system-overview.component.ts");
    /* harmony import */


    var _components_planet_interaction_planet_interaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/planet-interaction/planet-interaction.component */
    "./src/app/components/planet-interaction/planet-interaction.component.ts");
    /* harmony import */


    var _components_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/resource-overview/resource-overview.component */
    "./src/app/components/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _components_ship_overview_ship_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/ship-overview/ship-overview.component */
    "./src/app/components/ship-overview/ship-overview.component.ts");
    /* harmony import */


    var _components_ship_interaction_ship_interaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/ship-interaction/ship-interaction.component */
    "./src/app/components/ship-interaction/ship-interaction.component.ts");
    /* harmony import */


    var _components_planet_interaction_pi_structures_pi_structures_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/planet-interaction/pi-structures/pi-structures.component */
    "./src/app/components/planet-interaction/pi-structures/pi-structures.component.ts");
    /* harmony import */


    var _components_planet_interaction_pi_terrain_pi_terrain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/planet-interaction/pi-terrain/pi-terrain.component */
    "./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.ts");
    /* harmony import */


    var _components_ship_interaction_si_research_si_research_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/ship-interaction/si-research/si-research.component */
    "./src/app/components/ship-interaction/si-research/si-research.component.ts");
    /* harmony import */


    var _components_ship_interaction_si_upgrades_si_upgrades_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/ship-interaction/si-upgrades/si-upgrades.component */
    "./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.ts");
    /* harmony import */


    var _components_ship_interaction_si_systems_si_systems_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/ship-interaction/si-systems/si-systems.component */
    "./src/app/components/ship-interaction/si-systems/si-systems.component.ts");
    /* harmony import */


    var _components_planet_interaction_pi_command_pi_command_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/planet-interaction/pi-command/pi-command.component */
    "./src/app/components/planet-interaction/pi-command/pi-command.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @fortawesome/fontawesome-svg-core */
    "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/display-number.pipe */
    "./src/app/pipes/display-number.pipe.ts");
    /* harmony import */


    var _components_actions_actions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/actions/actions.component */
    "./src/app/components/actions/actions.component.ts");
    /* harmony import */


    var _directives_game_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./directives/game-tooltip.directive */
    "./src/app/directives/game-tooltip.directive.ts");
    /* harmony import */


    var _components_game_tooltip_game_tooltip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/game-tooltip/game-tooltip.component */
    "./src/app/components/game-tooltip/game-tooltip.component.ts");
    /* harmony import */


    var _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/common/progress-bar/progress-bar.component */
    "./src/app/components/common/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _components_common_resource_bar_resource_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/common/resource-bar/resource-bar.component */
    "./src/app/components/common/resource-bar/resource-bar.component.ts");
    /* harmony import */


    var _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/common/game-button/game-button.component */
    "./src/app/components/common/game-button/game-button.component.ts");
    /* harmony import */


    var _components_common_ability_button_ability_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/common/ability-button/ability-button.component */
    "./src/app/components/common/ability-button/ability-button.component.ts");
    /* harmony import */


    var _components_common_task_button_task_button_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/common/task-button/task-button.component */
    "./src/app/components/common/task-button/task-button.component.ts");

    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faCog"]);

    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faCompass"]);

    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_20__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faCheck"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_system_overview_system_overview_component__WEBPACK_IMPORTED_MODULE_8__["SystemOverviewComponent"], _components_planet_interaction_planet_interaction_component__WEBPACK_IMPORTED_MODULE_9__["PlanetInteractionComponent"], _components_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_10__["ResourceOverviewComponent"], _components_ship_overview_ship_overview_component__WEBPACK_IMPORTED_MODULE_11__["ShipOverviewComponent"], _components_ship_interaction_ship_interaction_component__WEBPACK_IMPORTED_MODULE_12__["ShipInteractionComponent"], _components_planet_interaction_pi_structures_pi_structures_component__WEBPACK_IMPORTED_MODULE_13__["PiStructuresComponent"], _components_planet_interaction_pi_terrain_pi_terrain_component__WEBPACK_IMPORTED_MODULE_14__["PiTerrainComponent"], _components_ship_interaction_si_research_si_research_component__WEBPACK_IMPORTED_MODULE_15__["SiResearchComponent"], _components_ship_interaction_si_upgrades_si_upgrades_component__WEBPACK_IMPORTED_MODULE_16__["SiUpgradesComponent"], _components_ship_interaction_si_systems_si_systems_component__WEBPACK_IMPORTED_MODULE_17__["SiSystemsComponent"], _components_planet_interaction_pi_command_pi_command_component__WEBPACK_IMPORTED_MODULE_18__["PiCommandComponent"], _pipes_display_number_pipe__WEBPACK_IMPORTED_MODULE_22__["DisplayNumberPipe"], _components_actions_actions_component__WEBPACK_IMPORTED_MODULE_23__["ActionsComponent"], _directives_game_tooltip_directive__WEBPACK_IMPORTED_MODULE_24__["GameTooltipDirective"], _components_game_tooltip_game_tooltip_component__WEBPACK_IMPORTED_MODULE_25__["GameTooltipComponent"], _components_common_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_26__["ProgressBarComponent"], _components_common_resource_bar_resource_bar_component__WEBPACK_IMPORTED_MODULE_27__["ResourceBarComponent"], _components_common_game_button_game_button_component__WEBPACK_IMPORTED_MODULE_28__["GameButtonComponent"], _components_common_ability_button_ability_button_component__WEBPACK_IMPORTED_MODULE_29__["AbilityButtonComponent"], _components_common_task_button_task_button_component__WEBPACK_IMPORTED_MODULE_30__["TaskButtonComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [_components_game_tooltip_game_tooltip_component__WEBPACK_IMPORTED_MODULE_25__["GameTooltipComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/actions/actions.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/actions/actions.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsActionsActionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-panel {\n  display: block;\n  overflow-y: auto;\n  padding: 2px;\n}\n\n.current-task {\n  padding: 5px 2px 5px 2px;\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1wYW5lbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5jdXJyZW50LXRhc2sge1xuICBwYWRkaW5nOiA1cHggMnB4IDVweCAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbiIsIi5saXN0LXBhbmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmN1cnJlbnQtdGFzayB7XG4gIHBhZGRpbmc6IDVweCAycHggNXB4IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/actions/actions.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/actions/actions.component.ts ***!
    \*********************************************************/

  /*! exports provided: ActionsComponent */

  /***/
  function srcAppComponentsActionsActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionsComponent", function () {
      return ActionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var src_app_staticData_abilityDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/staticData/abilityDefinitions */
    "./src/app/staticData/abilityDefinitions.ts");
    /* harmony import */


    var src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/flags.service */
    "./src/app/services/flags.service.ts");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");
    /* harmony import */


    var src_app_services_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/action.service */
    "./src/app/services/action.service.ts");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var src_app_services_research_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/research.service */
    "./src/app/services/research.service.ts");

    var ActionsComponent = /*#__PURE__*/function () {
      function ActionsComponent(actionService, resourceService, flagsService, taskService, researchService) {
        _classCallCheck(this, ActionsComponent);

        this.actionService = actionService;
        this.resourceService = resourceService;
        this.flagsService = flagsService;
        this.taskService = taskService;
        this.researchService = researchService;
      }

      _createClass(ActionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCurrentTask",
        value: function getCurrentTask() {
          return this.taskService.getCurrentTask();
        }
      }, {
        key: "getAbilities",
        value: function getAbilities() {
          var _this2 = this;

          var abilities = src_app_staticData_abilityDefinitions__WEBPACK_IMPORTED_MODULE_3__["SHIP_ABILITY_LIBRARY"].filter(function (x) {
            return _this2.isAbilityVisible(x);
          });
          return abilities;
        }
      }, {
        key: "isAbilityVisible",
        value: function isAbilityVisible(ability) {
          var _this3 = this;

          if (this.flagsService.check(ability.hiddenFlag)) {
            return false;
          }

          if (ability.visibleNeededResearchName != '') {
            if (this.researchService.getProgress(ability.visibleNeededResearchName).knowledgeLevel < ability.visibleNeededResearchLevel) {
              return false;
            }
          }

          return !ability.visibleFlags.some(function (x) {
            return !_this3.flagsService.check(x);
          });
        }
      }, {
        key: "getUpgrades",
        value: function getUpgrades() {
          var _this4 = this;

          var upgrades = this.researchService.getAvailableUpgrades().map(function (x) {
            return _this4.researchService.getUpgradeDefinition(x);
          });
          return upgrades;
        }
      }, {
        key: "getUpgradeTooltip",
        value: function getUpgradeTooltip(upg) {
          var tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_5__["TooltipViewModel"]();
          tooltip.name = upg.name;
          tooltip.desc = upg.description;
          tooltip.costs = upg.cost;
          return tooltip;
        }
      }, {
        key: "canAffordUpgrade",
        value: function canAffordUpgrade(upg) {
          return this.resourceService.canAfford(upg.cost);
        }
      }, {
        key: "onClickUpgrade",
        value: function onClickUpgrade(upg) {
          var _this5 = this;

          if (!this.canAffordUpgrade(upg)) {
            return;
          }

          var result = this.researchService.buyUpgrade(upg.name);

          if (result) {
            upg.actions.forEach(function (act) {
              act.doAction(_this5.actionService);
            });
          }
        }
      }, {
        key: "showWin",
        value: function showWin() {
          return this.flagsService.check('shuttleLaunched');
        }
      }]);

      return ActionsComponent;
    }();

    ActionsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]
      }, {
        type: src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_4__["FlagsService"]
      }, {
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]
      }, {
        type: src_app_services_research_service__WEBPACK_IMPORTED_MODULE_8__["ResearchService"]
      }];
    };

    ActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-actions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./actions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actions/actions.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./actions.component.scss */
      "./src/app/components/actions/actions.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_4__["FlagsService"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"], src_app_services_research_service__WEBPACK_IMPORTED_MODULE_8__["ResearchService"]])], ActionsComponent);
    /***/
  },

  /***/
  "./src/app/components/common/ability-button/ability-button.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/common/ability-button/ability-button.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonAbilityButtonAbilityButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  margin: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vYWJpbGl0eS1idXR0b24vYWJpbGl0eS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2FiaWxpdHktYnV0dG9uL2FiaWxpdHktYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2FiaWxpdHktYnV0dG9uL2FiaWxpdHktYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuM2VtO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjNlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/common/ability-button/ability-button.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/common/ability-button/ability-button.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AbilityButtonComponent */

  /***/
  function srcAppComponentsCommonAbilityButtonAbilityButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbilityButtonComponent", function () {
      return AbilityButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_staticData_abilityDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/staticData/abilityDefinitions */
    "./src/app/staticData/abilityDefinitions.ts");
    /* harmony import */


    var src_app_models_planet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/planet */
    "./src/app/models/planet.ts");
    /* harmony import */


    var src_app_staticData_actionDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/staticData/actionDefinitions */
    "./src/app/staticData/actionDefinitions.ts");
    /* harmony import */


    var src_app_services_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/action.service */
    "./src/app/services/action.service.ts");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var src_app_services_time_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/time.service */
    "./src/app/services/time.service.ts");
    /* harmony import */


    var src_app_models_resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var src_app_services_research_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/research.service */
    "./src/app/services/research.service.ts");

    var AbilityButtonComponent = /*#__PURE__*/function () {
      function AbilityButtonComponent(_actionService, _researchService, _resourceService, _timeService) {
        _classCallCheck(this, AbilityButtonComponent);

        this._actionService = _actionService;
        this._researchService = _researchService;
        this._resourceService = _resourceService;
        this._timeService = _timeService;
        this.cooldown = 0;
        this.costs = new src_app_models_resource__WEBPACK_IMPORTED_MODULE_9__["ResourceCollection"]();
        this.tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_6__["TooltipViewModel"]();
      }

      _createClass(AbilityButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this._timeService.tick.subscribe(function (x) {
            return _this6.update(x);
          });

          this.initTooltip();
          this.updateCosts();
        }
      }, {
        key: "initTooltip",
        value: function initTooltip() {
          this.tooltip.name = this.ability.name;
          this.tooltip.desc = this.ability.desc;
          this.tooltip.costs = this.costs;
        }
      }, {
        key: "update",
        value: function update(dT) {
          this.tickCooldown(dT);
          this.updateCosts();
          this.updateRequirementTip();
        }
      }, {
        key: "tickCooldown",
        value: function tickCooldown(dT) {
          if (this.cooldown > 0) {
            this.cooldown -= dT / 1000;

            if (this.cooldown < 0) {
              this.cooldown = 0;
            }
          }
        }
      }, {
        key: "updateCosts",
        value: function updateCosts() {
          this.costs.clear();
          this.costs.addCollection(this.ability.costs);
          var scalar = 0;

          if (this.ability.costScalesWithTheory != '') {
            scalar = this._researchService.getProgress(this.ability.costScalesWithTheory).theoryLevel;
          } else if (this.ability.costScalesWithResource != '') {
            scalar = this._resourceService.get(this.ability.costScalesWithResource);
          }

          for (var i = 0; i < scalar; i++) {
            this.costs.applyMultiplier(this.ability.costMultiplier);
          }
        }
      }, {
        key: "updateRequirementTip",
        value: function updateRequirementTip() {
          if (this.upgradeRequired()) {
            this.tooltip.desc = 'You do not have the technology to do this yet.';
          } else {
            this.tooltip.desc = this.ability.desc;
          }
        }
      }, {
        key: "getCooldownPercent",
        value: function getCooldownPercent() {
          if (this.ability.cooldown == 0) {
            return 0;
          }

          return this.cooldown * 100 / this.ability.cooldown;
        }
      }, {
        key: "canDo",
        value: function canDo() {
          if (!this.canAfford()) {
            return false;
          }

          if (this.upgradeRequired()) {
            return false;
          }

          return true;
        }
      }, {
        key: "canAfford",
        value: function canAfford() {
          if (!this._resourceService.canAfford(this.costs)) {
            return false;
          }

          if (this.costs.has('drones')) {
            return this._actionService.canAffordDroneCost(this.costs.get('drones').amount);
          }

          return true;
        }
      }, {
        key: "upgradeRequired",
        value: function upgradeRequired() {
          if (this.ability.upgradeNeeded == '') {
            return false;
          }

          if (this._researchService.isUpgradeCompleted(this.ability.upgradeNeeded)) {
            return false;
          }

          return true;
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var _this7 = this;

          if (this.ability == null) {
            return;
          }

          if (!this.canDo()) {
            return;
          }

          this._resourceService.spend(this.costs);

          this.cooldown = this.ability.cooldown;
          this.ability.actions.forEach(function (a) {
            if (a instanceof src_app_staticData_actionDefinitions__WEBPACK_IMPORTED_MODULE_4__["FeatureAction"]) {
              a.doFeatureAction(_this7._actionService, _this7.feature);
            } else {
              a.doAction(_this7._actionService);
            }
          });
        }
      }]);

      return AbilityButtonComponent;
    }();

    AbilityButtonComponent.ctorParameters = function () {
      return [{
        type: src_app_services_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"]
      }, {
        type: src_app_services_research_service__WEBPACK_IMPORTED_MODULE_10__["ResearchService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"]
      }, {
        type: src_app_services_time_service__WEBPACK_IMPORTED_MODULE_8__["TimeService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_staticData_abilityDefinitions__WEBPACK_IMPORTED_MODULE_2__["AbilityDefinition"])], AbilityButtonComponent.prototype, "ability", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_models_planet__WEBPACK_IMPORTED_MODULE_3__["Feature"])], AbilityButtonComponent.prototype, "feature", void 0);
    AbilityButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ability-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ability-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/ability-button/ability-button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ability-button.component.scss */
      "./src/app/components/common/ability-button/ability-button.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_action_service__WEBPACK_IMPORTED_MODULE_5__["ActionService"], src_app_services_research_service__WEBPACK_IMPORTED_MODULE_10__["ResearchService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"], src_app_services_time_service__WEBPACK_IMPORTED_MODULE_8__["TimeService"]])], AbilityButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/common/game-button/game-button.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/common/game-button/game-button.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonGameButtonGameButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.game-btn {\n  display: flex;\n  position: relative;\n  flex: 1;\n  min-height: 2em;\n  background-color: white;\n  border: 2px solid darkslategray;\n  border-radius: 6px;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.game-btn:hover {\n  background-color: lightgray;\n}\n\n.game-btn:active {\n  background-color: darkgray;\n}\n\n.small {\n  min-height: 1.2em;\n  font-size: 9pt;\n}\n\n.disabled, .disabled:hover, .disabled:active {\n  background-color: lightgray;\n  border: 2px solid darkslategray;\n  color: #686868;\n  cursor: default;\n}\n\n.cooldown {\n  display: flex;\n  align-self: stretch;\n  overflow: hidden;\n  background-color: #a0fcff;\n  border-radius: 4px 0px 0px 4px;\n  width: 0%;\n  pointer-events: none;\n  transition: width 0.1s;\n}\n\n.running {\n  display: block;\n  align-self: stretch;\n  overflow: hidden;\n  background: #ffffbe;\n  border-radius: 4px;\n  width: 100%;\n  pointer-events: none;\n  transition: width 0.1s;\n}\n\n.running-top {\n  display: block;\n  background: repeating-linear-gradient(60deg, #fff175, #fff175 40px, transparent 40px, transparent 60px);\n  background-size: 693px 1em;\n  height: 50%;\n  width: 100%;\n  -webkit-animation: Run 3s linear infinite;\n          animation: Run 3s linear infinite;\n}\n\n.running-bottom {\n  display: block;\n  background: repeating-linear-gradient(120deg, #fff175, #fff175 40px, transparent 40px, transparent 60px);\n  background-size: 693px 1em;\n  height: 50%;\n  width: 100%;\n  -webkit-animation: Run 3s linear infinite;\n          animation: Run 3s linear infinite;\n}\n\n.text {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  margin-top: 0.5em;\n  line-height: 100%;\n  text-align: center;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.text-small {\n  margin-top: 0.1em;\n}\n\n@-webkit-keyframes Run {\n  from {\n    background-position-x: -60px;\n  }\n  to {\n    background-position-x: 80px;\n  }\n}\n\n@keyframes Run {\n  from {\n    background-position-x: -60px;\n  }\n  to {\n    background-position-x: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZ2FtZS1idXR0b24vZ2FtZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2dhbWUtYnV0dG9uL2dhbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsdUdBQUE7RUFPQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLHdHQUFBO0VBT0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0U7SUFBTSw0QkFBQTtFQ1ROO0VEVUE7SUFBSSwyQkFBQTtFQ1BKO0FBQ0Y7O0FESUE7RUFDRTtJQUFNLDRCQUFBO0VDVE47RURVQTtJQUFJLDJCQUFBO0VDUEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2dhbWUtYnV0dG9uL2dhbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdhbWUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVncmF5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ2FtZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5nYW1lLWJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLnNtYWxsIHtcbiAgbWluLWhlaWdodDogMS4yZW07XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uZGlzYWJsZWQsIC5kaXNhYmxlZDpob3ZlciwgLmRpc2FibGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya3NsYXRlZ3JheTtcbiAgY29sb3I6IHJnYigxMDQsIDEwNCwgMTA0KTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmNvb2xkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMjUyLCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG4gIHdpZHRoOiAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXM7XG59XG5cbi5ydW5uaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMTkwKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXM7XG59XG5cbi5ydW5uaW5nLXRvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgIDYwZGVnLFxuICAgIHJnYigyNTUsIDI0MSwgMTE3KSxcbiAgICByZ2IoMjU1LCAyNDEsIDExNykgNDBweCxcbiAgICB0cmFuc3BhcmVudCA0MHB4LFxuICAgIHRyYW5zcGFyZW50IDYwcHhcbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2OTNweCAxZW07XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgYW5pbWF0aW9uOiBSdW4gM3MgbGluZWFyIGluZmluaXRlO1xufVxuXG4ucnVubmluZy1ib3R0b20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAxMjBkZWcsXG4gICAgcmdiKDI1NSwgMjQxLCAxMTcpLFxuICAgIHJnYigyNTUsIDI0MSwgMTE3KSA0MHB4LFxuICAgIHRyYW5zcGFyZW50IDQwcHgsXG4gICAgdHJhbnNwYXJlbnQgNjBweFxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDY5M3B4IDFlbTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IFJ1biAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50ZXh0LXNtYWxsIHtcbiAgbWFyZ2luLXRvcDogMC4xZW07XG59XG5cbkBrZXlmcmFtZXMgUnVuIHtcbiAgZnJvbSB7YmFja2dyb3VuZC1wb3NpdGlvbi14Oi02MHB4O31cbiAgdG8ge2JhY2tncm91bmQtcG9zaXRpb24teDo4MHB4O31cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5nYW1lLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya3NsYXRlZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ2FtZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5nYW1lLWJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLnNtYWxsIHtcbiAgbWluLWhlaWdodDogMS4yZW07XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uZGlzYWJsZWQsIC5kaXNhYmxlZDpob3ZlciwgLmRpc2FibGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya3NsYXRlZ3JheTtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmNvb2xkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwZmNmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xuICB3aWR0aDogMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjFzO1xufVxuXG4ucnVubmluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmJlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcztcbn1cblxuLnJ1bm5pbmctdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNjBkZWcsICNmZmYxNzUsICNmZmYxNzUgNDBweCwgdHJhbnNwYXJlbnQgNDBweCwgdHJhbnNwYXJlbnQgNjBweCk7XG4gIGJhY2tncm91bmQtc2l6ZTogNjkzcHggMWVtO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogUnVuIDNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnJ1bm5pbmctYm90dG9tIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZmZmMTc1LCAjZmZmMTc1IDQwcHgsIHRyYW5zcGFyZW50IDQwcHgsIHRyYW5zcGFyZW50IDYwcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDY5M3B4IDFlbTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IFJ1biAzcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50ZXh0LXNtYWxsIHtcbiAgbWFyZ2luLXRvcDogMC4xZW07XG59XG5cbkBrZXlmcmFtZXMgUnVuIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNjBweDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA4MHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/common/game-button/game-button.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/common/game-button/game-button.component.ts ***!
    \************************************************************************/

  /*! exports provided: GameButtonComponent */

  /***/
  function srcAppComponentsCommonGameButtonGameButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameButtonComponent", function () {
      return GameButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GameButtonComponent = /*#__PURE__*/function () {
      function GameButtonComponent() {
        _classCallCheck(this, GameButtonComponent);

        this.disabled = false;
        this.running = false;
        this.small = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.smoothCooldown = false;
      }

      _createClass(GameButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(event) {
          event.stopPropagation();

          if (this.disabled) {
            return false;
          }

          if (this.cooldown > 0) {
            return false;
          }

          this.click.emit();
        }
      }, {
        key: "cooldown",
        get: function get() {
          return this._cooldown;
        },
        set: function set(val) {
          if (val > this._cooldown || val == 0) {
            this.smoothCooldown = false;
          } else {
            this.smoothCooldown = true;
          }

          this._cooldown = val;
        }
      }]);

      return GameButtonComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], GameButtonComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GameButtonComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GameButtonComponent.prototype, "running", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], GameButtonComponent.prototype, "small", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], GameButtonComponent.prototype, "click", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], GameButtonComponent.prototype, "cooldown", null);
    GameButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'game-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./game-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/game-button/game-button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./game-button.component.scss */
      "./src/app/components/common/game-button/game-button.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GameButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/common/progress-bar/progress-bar.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/common/progress-bar/progress-bar.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonProgressBarProgressBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bar-outer {\n  background-color: #c9d7eb;\n  border-radius: 3px;\n  padding: 0px;\n}\n\n.bar-inner {\n  background-color: blue;\n  height: 0.3em;\n  border-radius: 3px;\n}\n\n.bar-text {\n  margin: 0px 0px 2px 10px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItb3V0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMTUsIDIzNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYmFyLWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgaGVpZ2h0OiAwLjNlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uYmFyLXRleHQge1xuICBtYXJnaW46IDBweCAwcHggMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbiIsIi5iYXItb3V0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlkN2ViO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJhci1pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGhlaWdodDogMC4zZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmJhci10ZXh0IHtcbiAgbWFyZ2luOiAwcHggMHB4IDJweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/common/progress-bar/progress-bar.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/common/progress-bar/progress-bar.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppComponentsCommonProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressBarComponent = /*#__PURE__*/function () {
      function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);

        this.value = 15;
        this.max = 100;
      }

      _createClass(ProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getWidth",
        value: function getWidth() {
          var result = this.value / this.max;
          result = result * 100;
          result = Math.min(result, 100);
          result = Math.max(0, result);
          return result;
        }
      }]);

      return ProgressBarComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ProgressBarComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ProgressBarComponent.prototype, "max", void 0);
    ProgressBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progress-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/progress-bar/progress-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-bar.component.scss */
      "./src/app/components/common/progress-bar/progress-bar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressBarComponent);
    /***/
  },

  /***/
  "./src/app/components/common/resource-bar/resource-bar.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/common/resource-bar/resource-bar.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonResourceBarResourceBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3Jlc291cmNlLWJhci9yZXNvdXJjZS1iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/common/resource-bar/resource-bar.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/common/resource-bar/resource-bar.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ResourceBarComponent */

  /***/
  function srcAppComponentsCommonResourceBarResourceBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceBarComponent", function () {
      return ResourceBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/resource */
    "./src/app/models/resource.ts");

    var ResourceBarComponent = /*#__PURE__*/function () {
      function ResourceBarComponent() {
        _classCallCheck(this, ResourceBarComponent);

        this.resource = new src_app_models_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]('test', 5, 100);
      }

      _createClass(ResourceBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourceBarComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_models_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"])], ResourceBarComponent.prototype, "resource", void 0);
    ResourceBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resource-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/resource-bar/resource-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resource-bar.component.scss */
      "./src/app/components/common/resource-bar/resource-bar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ResourceBarComponent);
    /***/
  },

  /***/
  "./src/app/components/common/task-button/task-button.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/common/task-button/task-button.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonTaskButtonTaskButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  margin: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdGFzay1idXR0b24vdGFzay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3Rhc2stYnV0dG9uL3Rhc2stYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdGFzay1idXR0b24vdGFzay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hcmdpbjogMC4zZW07XG59XG4iLCI6aG9zdCB7XG4gIG1hcmdpbjogMC4zZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/common/task-button/task-button.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/common/task-button/task-button.component.ts ***!
    \************************************************************************/

  /*! exports provided: TaskButtonComponent */

  /***/
  function srcAppComponentsCommonTaskButtonTaskButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskButtonComponent", function () {
      return TaskButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/task */
    "./src/app/models/task.ts");
    /* harmony import */


    var src_app_staticData_taskDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/staticData/taskDefinitions */
    "./src/app/staticData/taskDefinitions.ts");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var src_app_models_planet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/planet */
    "./src/app/models/planet.ts");

    var TaskButtonComponent = /*#__PURE__*/function () {
      function TaskButtonComponent(_resourceService, _taskService) {
        _classCallCheck(this, TaskButtonComponent);

        this._resourceService = _resourceService;
        this._taskService = _taskService;
      }

      _createClass(TaskButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isRunning",
        value: function isRunning() {
          return this.task != null && this._taskService.getCurrentTask() === this.task;
        }
      }, {
        key: "getTooltip",
        value: function getTooltip() {
          var tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_5__["TooltipViewModel"]();
          tooltip.name = this.taskDef.name;
          tooltip.desc = this.taskDef.desc;
          tooltip.costs = this.taskDef.startCost;
          return tooltip;
        }
      }, {
        key: "canAfford",
        value: function canAfford() {
          return this._resourceService.canAfford(this.taskDef.startCost);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.taskDef == null) {
            return;
          }

          if (!this.canAfford()) {
            return;
          }

          if (this.isRunning()) {
            return;
          }

          this._resourceService.spend(this.taskDef.startCost);

          if (this.feature != null) {
            this._taskService.beginFeatureTask(this.feature, this.taskDef.name);
          }

          ;
        }
      }]);

      return TaskButtonComponent;
    }();

    TaskButtonComponent.ctorParameters = function () {
      return [{
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]
      }, {
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_models_task__WEBPACK_IMPORTED_MODULE_2__["Task"])], TaskButtonComponent.prototype, "task", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_staticData_taskDefinitions__WEBPACK_IMPORTED_MODULE_3__["TaskDefinition"])], TaskButtonComponent.prototype, "taskDef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_models_planet__WEBPACK_IMPORTED_MODULE_7__["Feature"])], TaskButtonComponent.prototype, "feature", void 0);
    TaskButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'task-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/task-button/task-button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-button.component.scss */
      "./src/app/components/common/task-button/task-button.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])], TaskButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/game-tooltip/game-tooltip.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/game-tooltip/game-tooltip.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGameTooltipGameTooltipComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 5px;\n  background: white;\n  border: 1px solid black;\n  margin: 0px;\n  width: 150px;\n}\n\n.name {\n  font-weight: bold;\n}\n\n.description {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 8pt;\n  font-style: italic;\n}\n\n.cost-section, .consumption-section, .production-section {\n  border-top: 1px solid black;\n  padding-top: 5px;\n}\n\n.cost, .consumption, .production {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9nYW1lLXRvb2x0aXAvZ2FtZS10b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtdG9vbHRpcC9nYW1lLXRvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXRvb2x0aXAvZ2FtZS10b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNvc3Qtc2VjdGlvbiwgLmNvbnN1bXB0aW9uLXNlY3Rpb24sIC5wcm9kdWN0aW9uLXNlY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jb3N0LCAuY29uc3VtcHRpb24sIC5wcm9kdWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDhwdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY29zdC1zZWN0aW9uLCAuY29uc3VtcHRpb24tc2VjdGlvbiwgLnByb2R1Y3Rpb24tc2VjdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNvc3QsIC5jb25zdW1wdGlvbiwgLnByb2R1Y3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/game-tooltip/game-tooltip.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/game-tooltip/game-tooltip.component.ts ***!
    \*******************************************************************/

  /*! exports provided: GameTooltipComponent */

  /***/
  function srcAppComponentsGameTooltipGameTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameTooltipComponent", function () {
      return GameTooltipComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");
    /* harmony import */


    var src_app_models_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/resource */
    "./src/app/models/resource.ts");

    var GameTooltipComponent = function GameTooltipComponent() {
      _classCallCheck(this, GameTooltipComponent);

      this.tooltipModel = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_2__["TooltipViewModel"]();
      this.tooltipModel.name = 'Default Name';
      this.tooltipModel.desc = 'Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.';
      this.tooltipModel.costs = new src_app_models_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceCollection"]();
      this.tooltipModel.costs.add('metal', 21);
      this.tooltipModel.costs.add('silicates', 52);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_2__["TooltipViewModel"])], GameTooltipComponent.prototype, "tooltipModel", void 0);
    GameTooltipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-tooltip',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./game-tooltip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-tooltip/game-tooltip.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./game-tooltip.component.scss */
      "./src/app/components/game-tooltip/game-tooltip.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GameTooltipComponent);
    /***/
  },

  /***/
  "./src/app/components/planet-interaction/pi-command/pi-command.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/planet-interaction/pi-command/pi-command.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPlanetInteractionPiCommandPiCommandComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  flex-grow: 5;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9wbGFuZXQtaW50ZXJhY3Rpb24vcGktY29tbWFuZC9waS1jb21tYW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYW5ldC1pbnRlcmFjdGlvbi9waS1jb21tYW5kL3BpLWNvbW1hbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbmV0LWludGVyYWN0aW9uL3BpLWNvbW1hbmQvcGktY29tbWFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZ3JvdzogNTtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZ3JvdzogNTtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/planet-interaction/pi-command/pi-command.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/planet-interaction/pi-command/pi-command.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PiCommandComponent */

  /***/
  function srcAppComponentsPlanetInteractionPiCommandPiCommandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PiCommandComponent", function () {
      return PiCommandComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/flags.service */
    "./src/app/services/flags.service.ts");
    /* harmony import */


    var src_app_models_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");

    var PiCommandComponent = /*#__PURE__*/function () {
      function PiCommandComponent(planetService, resourceService, flagsService) {
        _classCallCheck(this, PiCommandComponent);

        this.planetService = planetService;
        this.resourceService = resourceService;
        this.flagsService = flagsService;
        this.droneTasks = [];
        this.shipParts = [];
        this.initShip();
      }

      _createClass(PiCommandComponent, [{
        key: "initShip",
        value: function initShip() {
          this.shipParts.push(new ShipPart('Superstructure', 'silksteel', 75));
          this.shipParts.push(new ShipPart('Stardrive Module', 'hyperlattice', 50));
          this.shipParts.push(new ShipPart('Navigation Computer', 'cogitex', 50));
          this.shipParts.push(new ShipPart('Gravity Plating', 'gravalloy', 50));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.flagsService.onFlagsUpdated.subscribe(function () {
            return _this8.onFlagsUpdated();
          });
        }
      }, {
        key: "getSelectedPlanet",
        value: function getSelectedPlanet() {
          return this.planetService.getSelectedPlanet();
        }
      }, {
        key: "getSelectedPlanetInteractionModel",
        value: function getSelectedPlanetInteractionModel() {
          return this.planetService.getSelectedPlanetInteractionModel();
        }
      }, {
        key: "canAffordShipPart",
        value: function canAffordShipPart(part) {
          return this.resourceService.canAfford(part.cost);
        }
      }, {
        key: "canAffordDrone",
        value: function canAffordDrone() {
          return this.resourceService.canAfford(this.droneCost);
        }
      }, {
        key: "canAffordOutpostUpgrade",
        value: function canAffordOutpostUpgrade() {
          return this.resourceService.canAfford(this.outpostUpgradeCosts);
        }
      }, {
        key: "onFlagsUpdated",
        value: function onFlagsUpdated() {
          if (this.flagsService.showOutpostPanel) {
            this.showOutpostPanel = true;
          }
        }
      }, {
        key: "onBuildShipComponent",
        value: function onBuildShipComponent(part) {
          part.built = this.resourceService.spend(part.cost);

          if (this.shipParts.every(function (x) {
            return x.built;
          })) {
            this.showLaunchBtn = true;
          }
        }
      }, {
        key: "onLaunchShip",
        value: function onLaunchShip() {
          this.shipLaunched = true;
          this.showLaunchBtn = false;
        }
      }]);

      return PiCommandComponent;
    }();

    PiCommandComponent.ctorParameters = function () {
      return [{
        type: src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]
      }, {
        type: src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_3__["FlagsService"]
      }];
    };

    PiCommandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pi-command',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pi-command.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-command/pi-command.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pi-command.component.scss */
      "./src/app/components/planet-interaction/pi-command/pi-command.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_3__["FlagsService"]])], PiCommandComponent);

    var DroneTaskItem = function DroneTaskItem(name) {
      _classCallCheck(this, DroneTaskItem);

      this.name = name;
      this.assigned = 0;
      this.visible = false;
    };

    var ShipPart = function ShipPart(name, resource, amount) {
      _classCallCheck(this, ShipPart);

      this.name = name;
      this.cost = new src_app_models_resource__WEBPACK_IMPORTED_MODULE_4__["ResourceCollection"]();
      this.cost.add(resource, amount);
      this.built = false;
    };
    /***/

  },

  /***/
  "./src/app/components/planet-interaction/pi-structures/pi-structures.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/planet-interaction/pi-structures/pi-structures.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPlanetInteractionPiStructuresPiStructuresComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".structure-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.structure-item {\n  display: flex;\n  min-width: 275px;\n  flex-wrap: nowrap;\n  margin: 0.3em;\n}\n\n.item-build-btn {\n  display: inline-block;\n  width: 80%;\n  line-height: 30px;\n}\n\n.item-deactivate-btn, .item-activate-btn {\n  display: inline-block;\n  min-width: 40px;\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9wbGFuZXQtaW50ZXJhY3Rpb24vcGktc3RydWN0dXJlcy9waS1zdHJ1Y3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYW5ldC1pbnRlcmFjdGlvbi9waS1zdHJ1Y3R1cmVzL3BpLXN0cnVjdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGFuZXQtaW50ZXJhY3Rpb24vcGktc3RydWN0dXJlcy9waS1zdHJ1Y3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3RydWN0dXJlLWxpc3R7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnN0cnVjdHVyZS1pdGVte1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDI3NXB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luOiAwLjNlbTtcbn1cblxuLml0ZW0tYnVpbGQtYnRue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbS1kZWFjdGl2YXRlLWJ0biwgLml0ZW0tYWN0aXZhdGUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIHdpZHRoOiA1JTtcbn1cblxuXG4iLCIuc3RydWN0dXJlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zdHJ1Y3R1cmUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMjc1cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW46IDAuM2VtO1xufVxuXG4uaXRlbS1idWlsZC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbS1kZWFjdGl2YXRlLWJ0biwgLml0ZW0tYWN0aXZhdGUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIHdpZHRoOiA1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/planet-interaction/pi-structures/pi-structures.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/planet-interaction/pi-structures/pi-structures.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PiStructuresComponent */

  /***/
  function srcAppComponentsPlanetInteractionPiStructuresPiStructuresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PiStructuresComponent", function () {
      return PiStructuresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../staticData/structureDefinitions */
    "./src/app/staticData/structureDefinitions.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_research_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/research.service */
    "./src/app/services/research.service.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");

    var PiStructuresComponent = /*#__PURE__*/function () {
      function PiStructuresComponent(planetService, researchService, resourceService) {
        var _this9 = this;

        _classCallCheck(this, PiStructuresComponent);

        this.planetService = planetService;
        this.researchService = researchService;
        this.resourceService = resourceService;
        this.showBuildList = true;
        this.outpostBuildItem = new BuildingListItem();
        this.buildingList = [];
        this.planetService.selectedPlanetChanged.subscribe(function (x) {
          return _this9.updateBuildingList();
        });
      }

      _createClass(PiStructuresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateBuildingList();
        }
      }, {
        key: "canBuild",
        value: function canBuild(building) {
          return this.resourceService.canAfford(building.costs);
        }
      }, {
        key: "getSelectedPlanet",
        value: function getSelectedPlanet() {
          return this.planetService.getSelectedPlanet();
        }
      }, {
        key: "getSelectedPlanetInteractionModel",
        value: function getSelectedPlanetInteractionModel() {
          return this.planetService.getSelectedPlanetInteractionModel();
        }
      }, {
        key: "getFilteredBuildingList",
        value: function getFilteredBuildingList(filter) {
          this.updateBuildingList();
          var results = this.buildingList.filter(function (value) {
            return filter === 'all' || value.sortCategory === filter;
          });
          return results;
        }
      }, {
        key: "updateBuildingList",
        value: function updateBuildingList() {
          var _this10 = this;

          var newBuildingList = [];
          var interactionModel = this.getSelectedPlanetInteractionModel();

          if (interactionModel == null) {
            this.buildingList = newBuildingList;
            return;
          }

          var dirtyList = false;
          interactionModel.structures.forEach(function (element) {
            var structureDef = _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_3__["STRUCTURE_LIBRARY"].find(function (x) {
              return x.name === element.name;
            });

            var visible = _this10.researchService.areUpgradesCompleted(structureDef.prereqs);

            var listItem = _this10.buildingList.find(function (x) {
              return x.name === element.name;
            });

            var cost = _this10.planetService.getNextStructureCost(element.name);

            var canActivate = _this10.planetService.canActivateStructure(element.name);

            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(listItem)) {
              listItem.canActivate = canActivate;
              listItem.builtNumber = element.amount;
              listItem.activeNumber = element.active;
              listItem.visible = visible;
              listItem.costs = cost;

              _this10.updateTooltip(listItem);
            } else if (visible) {
              dirtyList = true;
            }

            if (true) {
              listItem = {
                name: element.name,
                sortCategory: structureDef.sortCategory,
                costs: cost,
                production: structureDef.getProductionRates(),
                consumption: structureDef.getConsumptionRates(),
                builtNumber: element.amount,
                activeNumber: element.active,
                showActivateControls: structureDef.hasConsumption(),
                canActivate: canActivate,
                visible: visible,
                tooltip: null
              };

              _this10.updateTooltip(listItem);

              if (listItem.visible) {
                newBuildingList.push(listItem);
              }
            }
          });

          if (dirtyList) {
            this.buildingList = newBuildingList;
          }
        }
      }, {
        key: "getButtonName",
        value: function getButtonName(building) {
          var buttonName = building.name;

          if (building.activeNumber > 0) {
            buttonName = building.name + ' (' + building.activeNumber + ')';
          }

          if (building.builtNumber > building.activeNumber) {
            buttonName = building.name + ' (' + building.activeNumber + '/' + building.builtNumber + ')';
          }

          return buttonName;
        }
      }, {
        key: "updateTooltip",
        value: function updateTooltip(building) {
          if (building.tooltip == null) {
            building.tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_7__["TooltipViewModel"]();
          }

          building.tooltip.name = building.name;
          building.tooltip.desc = '';
          building.tooltip.costs = building.costs;
          building.tooltip.consumption = building.consumption;
          building.tooltip.production = building.production;
        }
      }, {
        key: "onBuildItemClicked",
        value: function onBuildItemClicked(buildItemName) {
          this.planetService.buildStructure(this.planetService.getSelectedPlanet().instanceId, buildItemName);
          this.updateBuildingList();
        }
      }, {
        key: "onActivateItemClicked",
        value: function onActivateItemClicked(buildItemName) {
          var building = this.buildingList.find(function (x) {
            return x.name === buildItemName;
          });
          this.planetService.setStructureActiveAmount(this.planetService.getSelectedPlanet().instanceId, buildItemName, building.activeNumber + 1);
          this.updateBuildingList();
        }
      }, {
        key: "onDeactivateItemClicked",
        value: function onDeactivateItemClicked(buildItemName) {
          var building = this.buildingList.find(function (x) {
            return x.name === buildItemName;
          });
          this.planetService.setStructureActiveAmount(this.planetService.getSelectedPlanet().instanceId, buildItemName, building.activeNumber - 1);
          this.updateBuildingList();
        }
      }, {
        key: "hasOutpost",
        value: function hasOutpost(interactionModel) {
          var _this11 = this;

          // TODO: Could this work just by seeing if any structures are present?
          return interactionModel.structures.some(function (structure) {
            return structure.amount > 0 && _this11.planetService.getStructureDefinition(structure.name).sortCategory === 'outpost';
          });
        }
      }]);

      return PiStructuresComponent;
    }();

    PiStructuresComponent.ctorParameters = function () {
      return [{
        type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]
      }, {
        type: src_app_services_research_service__WEBPACK_IMPORTED_MODULE_5__["ResearchService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]
      }];
    };

    PiStructuresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pi-structures',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pi-structures.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-structures/pi-structures.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pi-structures.component.scss */
      "./src/app/components/planet-interaction/pi-structures/pi-structures.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"], src_app_services_research_service__WEBPACK_IMPORTED_MODULE_5__["ResearchService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]])], PiStructuresComponent);

    var BuildingListItem = function BuildingListItem() {
      _classCallCheck(this, BuildingListItem);
    };
    /***/

  },

  /***/
  "./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPlanetInteractionPiTerrainPiTerrainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".region {\n  margin-top: 12px;\n  margin-bottom: 1.5em;\n}\n\n.region-left-col {\n  padding-left: 5px;\n  padding-bottom: 5px;\n  min-width: 100px;\n}\n\n.region-title {\n  width: 140px;\n  font-weight: bold;\n}\n\n.region-drone-count {\n  font-size: 14px;\n  margin: 2pt;\n}\n\n.region-survey-btn {\n  min-width: 100px;\n  margin-top: 0.5em;\n}\n\n.region-survey-progress {\n  margin-top: 0.2em;\n  margin-left: 0.5em;\n}\n\n.feature-list {\n  flex: 1;\n  margin-left: 1.5em;\n}\n\n.feature-active {\n  flex: 1;\n}\n\n.feature-left-col {\n  padding-left: 5px;\n}\n\n.feature-name {\n  width: 125px;\n  padding-top: 0.8em;\n  font-weight: bold;\n}\n\n.feature-drone-count {\n  font-size: 14px;\n  margin: 2pt;\n}\n\n.feature-drone-decrement, .feature-drone-increment {\n  font-weight: bold;\n  font-size: 16pt;\n  text-decoration: underline;\n  line-height: 0.8em;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.feature-buttons {\n  width: 100%;\n}\n\n.ability {\n  display: inline-block;\n  width: 175px;\n}\n\n.task {\n  display: inline-block;\n  width: 175px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9wbGFuZXQtaW50ZXJhY3Rpb24vcGktdGVycmFpbi9waS10ZXJyYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYW5ldC1pbnRlcmFjdGlvbi9waS10ZXJyYWluL3BpLXRlcnJhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYW5ldC1pbnRlcmFjdGlvbi9waS10ZXJyYWluL3BpLXRlcnJhaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaW9ue1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuLnJlZ2lvbi1sZWZ0LWNvbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ucmVnaW9uLXRpdGxlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlZ2lvbi1kcm9uZS1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAycHQ7XG59XG5cbi5yZWdpb24tc3VydmV5LWJ0biB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4ucmVnaW9uLXN1cnZleS1wcm9ncmVzcyB7XG4gIG1hcmdpbi10b3A6IDAuMmVtO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5mZWF0dXJlLWxpc3R7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbn1cblxuLmZlYXR1cmUtYWN0aXZlIHtcbiAgZmxleDogMTtcbn1cblxuLmZlYXR1cmUtbGVmdC1jb2wge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmZlYXR1cmUtbmFtZSB7XG4gIHdpZHRoOiAxMjVweDtcbiAgcGFkZGluZy10b3A6IDAuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZlYXR1cmUtZHJvbmUtY291bnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMnB0O1xufVxuXG4uZmVhdHVyZS1kcm9uZS1kZWNyZW1lbnQsIC5mZWF0dXJlLWRyb25lLWluY3JlbWVudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBsaW5lLWhlaWdodDogMC44ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5mZWF0dXJlLWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFiaWxpdHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNzVweDtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNzVweDtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiIsIi5yZWdpb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuLnJlZ2lvbi1sZWZ0LWNvbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ucmVnaW9uLXRpdGxlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlZ2lvbi1kcm9uZS1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAycHQ7XG59XG5cbi5yZWdpb24tc3VydmV5LWJ0biB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4ucmVnaW9uLXN1cnZleS1wcm9ncmVzcyB7XG4gIG1hcmdpbi10b3A6IDAuMmVtO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi5mZWF0dXJlLWxpc3Qge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogMS41ZW07XG59XG5cbi5mZWF0dXJlLWFjdGl2ZSB7XG4gIGZsZXg6IDE7XG59XG5cbi5mZWF0dXJlLWxlZnQtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5mZWF0dXJlLW5hbWUge1xuICB3aWR0aDogMTI1cHg7XG4gIHBhZGRpbmctdG9wOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mZWF0dXJlLWRyb25lLWNvdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDJwdDtcbn1cblxuLmZlYXR1cmUtZHJvbmUtZGVjcmVtZW50LCAuZmVhdHVyZS1kcm9uZS1pbmNyZW1lbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbGluZS1oZWlnaHQ6IDAuOGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmVhdHVyZS1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hYmlsaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTc1cHg7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PiTerrainComponent, RegionListItem, FeatureListItem, AbilityItem, TaskItem, RegionDetailsViewModel */

  /***/
  function srcAppComponentsPlanetInteractionPiTerrainPiTerrainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PiTerrainComponent", function () {
      return PiTerrainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionListItem", function () {
      return RegionListItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureListItem", function () {
      return FeatureListItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbilityItem", function () {
      return AbilityItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskItem", function () {
      return TaskItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionDetailsViewModel", function () {
      return RegionDetailsViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var src_app_services_research_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/research.service */
    "./src/app/services/research.service.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var src_app_services_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/action.service */
    "./src/app/services/action.service.ts");
    /* harmony import */


    var src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/flags.service */
    "./src/app/services/flags.service.ts");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");

    var PiTerrainComponent = /*#__PURE__*/function () {
      function PiTerrainComponent(actionService, planetService, researchService, resourceService, flagService, taskService) {
        var _this12 = this;

        _classCallCheck(this, PiTerrainComponent);

        this.actionService = actionService;
        this.planetService = planetService;
        this.researchService = researchService;
        this.resourceService = resourceService;
        this.flagService = flagService;
        this.taskService = taskService;
        this.regionList = [];
        this.planetService.selectedPlanetChanged.subscribe(function (x) {
          return _this12.updateRegionList();
        });
        this.planetService.regionChanged.subscribe(function (x) {
          return _this12.updateRegionList();
        });
        this.researchService.onResearchUpdated.subscribe(function (x) {
          return _this12.updateRegionList();
        });
      }

      _createClass(PiTerrainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateRegionList();
        }
      }, {
        key: "getSelectedPlanet",
        value: function getSelectedPlanet() {
          return this.planetService.getSelectedPlanet();
        }
      }, {
        key: "getSurveyProgress",
        value: function getSurveyProgress(regionId) {
          return this.planetService.getSurveyProgress(regionId);
        }
      }, {
        key: "getSurveyProgressNeeded",
        value: function getSurveyProgressNeeded(regionId) {
          return this.planetService.getSurveyProgressNeeded(regionId);
        }
      }, {
        key: "taskIsVisible",
        value: function taskIsVisible(taskItem) {
          if (!taskItem.def.repeatable && taskItem.instance != null && taskItem.instance.progress >= taskItem.instance.needed) {
            return false;
          }

          return true;
        }
      }, {
        key: "getSurveyLevelText",
        value: function getSurveyLevelText(region) {
          if (region.surveyLevel > 0) {
            return 'Survey Lv ' + region.surveyLevel;
          }

          ;

          if (this.upgradeRequiredForSurvey(region)) {
            return 'Upgrade Required';
          }

          return 'Unsurveyed';
        }
      }, {
        key: "getSurveyButtonName",
        value: function getSurveyButtonName(region) {
          if (!this.flagService.check('surveyRepaired')) {
            return 'Drone Survey';
          }

          if (this.isSurveyRunning(region)) {
            return 'Surveying';
          }

          return 'Survey Scan';
        }
      }, {
        key: "survey",
        value: function survey(region) {
          if (this.isSurveyRunning(region)) {
            return;
          }

          if (!this.canAffordSurvey(region)) {
            return;
          }

          var useSurveyTask = this.flagService.check('surveyRepaired');

          if (useSurveyTask) {
            this.taskService.beginSurvey(this.getSelectedPlanet().instanceId, region.id);
          } else {
            this.resourceService.spend(new _models_resource__WEBPACK_IMPORTED_MODULE_3__["Resource"]('drones', 1));
            this.planetService.surveyRegion(10, region.id);
          }

          this.updateRegionList();
        }
      }, {
        key: "isSurveyRunning",
        value: function isSurveyRunning(region) {
          return this.taskService.isSurveyRunning(this.getSelectedPlanet().instanceId, region.id);
        }
      }, {
        key: "canAffordSurvey",
        value: function canAffordSurvey(region) {
          if (this.flagService.check('surveyRepaired')) {
            return true;
          }

          var drones = this.resourceService.get('drones');
          var assigned = this.planetService.getPlanetInteractionModel().regions.getTotalAssignedDrones();
          return assigned < drones;
        }
      }, {
        key: "upgradeRequiredForSurvey",
        value: function upgradeRequiredForSurvey(region) {
          var def = this.planetService.getRegionDefinition(region.name);

          if (def.surveyUpgradeNeeded === '') {
            return false;
          }

          if (this.researchService.isUpgradeCompleted(def.surveyUpgradeNeeded)) {
            return false;
          }

          return true;
        }
      }, {
        key: "surveyTooltip",
        value: function surveyTooltip(region) {
          var tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_9__["TooltipViewModel"]();

          if (!this.flagService.check('surveyRepaired')) {
            tooltip.name = "Drone Survey";
            tooltip.desc = "Send a drone to survey the region. The drone will not survive.";
            tooltip.costs = new _models_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceCollection"]();
            tooltip.costs.add('drones', 1);
          } else {
            tooltip.name = "Survey Scan";
          }

          return tooltip;
        }
      }, {
        key: "buyDroneHub",
        value: function buyDroneHub(region) {
          this.planetService.buildDroneHub(region.id);
          this.updateRegionList();
        }
      }, {
        key: "canAffordDroneHub",
        value: function canAffordDroneHub(region) {
          return this.resourceService.canAfford(region.droneHubCost); // TODO
        }
      }, {
        key: "droneHubTooltip",
        value: function droneHubTooltip(region) {
          var tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_9__["TooltipViewModel"]();
          tooltip.name = "Drone Hub"; //tooltip.desc = upg.description;

          tooltip.costs = region.droneHubCost;
          return tooltip;
        }
      }, {
        key: "showDroneHubButton",
        value: function showDroneHubButton(region) {
          if (region.surveyLevel <= 0) {
            return false;
          }

          return this.flagService.check('droneRelayRepaired');
        }
      }, {
        key: "showDroneCounts",
        value: function showDroneCounts(region) {
          if (region.dronesAssigned > 0) {
            return true;
          }

          if (region.droneSlots > 1) {
            return true;
          }

          return false;
        }
      }, {
        key: "showDroneControl",
        value: function showDroneControl(feature) {
          return feature.region.droneSlots > 0 && feature.droneSlots > 0;
        }
      }, {
        key: "assignDrone",
        value: function assignDrone(feature) {
          this.planetService.assignDrone(feature.featureInstance);
        }
      }, {
        key: "unassignDrone",
        value: function unassignDrone(feature) {
          this.planetService.unassignDrone(feature.featureInstance);
        }
      }, {
        key: "canAssignDrone",
        value: function canAssignDrone(region, feature) {
          return feature.dronesAssigned < feature.droneSlots && region.dronesAssigned < region.droneSlots && this.planetService.getIdleDrones() > 0;
        }
      }, {
        key: "canUnassignDrone",
        value: function canUnassignDrone(region, feature) {
          return feature.dronesAssigned > 0;
        }
      }, {
        key: "updateRegionList",
        value: function updateRegionList() {
          var _this13 = this;

          this.regionList = [];
          var regions = this.getSelectedPlanet().regions;
          var regionInteractions = this.planetService.getPlanetInteractionModel().regions;
          regions.forEach(function (regionModel) {
            if (_this13.planetService.isRegionVisible(regionModel.instanceId)) {
              var regionInteraction = regionInteractions.getRegion(regionModel.instanceId);

              _this13.regionList.push(_this13.createRegionListItem(regionModel, regionInteraction));
            }
          });
        }
      }, {
        key: "createRegionListItem",
        value: function createRegionListItem(region, regionInteraction) {
          var _this14 = this;

          var def = this.planetService.getRegionDefinition(region.name);
          var item = new RegionListItem();
          item.name = region.name;
          item.id = region.instanceId;
          item.outpostLevel = regionInteraction.outpostLevel;
          item.surveyLevel = regionInteraction.surveyLevel;
          item.surveyProgress = regionInteraction.surveyProgress;
          item.droneSlots = regionInteraction.droneSlots;
          item.dronesAssigned = regionInteraction.assignedDrones;
          item.canGather = item.outpostLevel > 0;
          item.droneHubCost = this.planetService.getDroneHubCost(region.instanceId);
          item.tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_9__["TooltipViewModel"]();
          item.tooltip.name = region.name;
          item.tooltip.desc = def.description; // Get all hidden features, and find the lowest survey required one,
          // So we know which level to cut off hints at

          var hintLevel = 0;
          var hiddenFeatures = region.features.filter(function (x) {
            return x.hiddenBehindSurvey > item.surveyLevel;
          });

          if (hiddenFeatures.length > 0) {
            hintLevel = Math.min.apply(Math, _toConsumableArray(hiddenFeatures.map(function (x) {
              return x.hiddenBehindSurvey;
            })));
          }

          region.features.forEach(function (f) {
            var featureInteraction = regionInteraction.getFeature(f.instanceId);
            item.features.push(_this14.createFeatureListItem(item, f, featureInteraction, item.outpostLevel, item.surveyLevel, hintLevel));
          });
          return item;
        }
      }, {
        key: "createFeatureListItem",
        value: function createFeatureListItem(regionItem, feature, featureInteraction, outpostLevel, surveyLevel, hintLevel) {
          var _this15 = this;

          var featureDef = this.planetService.getFeatureDefinition(feature.name);
          var item = new FeatureListItem();
          item.region = regionItem;
          item.featureInstance = feature;
          item.name = feature.name;
          item.id = feature.instanceId;
          item.surveyNeeded = feature.hiddenBehindSurvey;
          item.canGather = outpostLevel === 0;
          item.active = item.surveyNeeded <= surveyLevel;
          item.droneSlots = featureDef.droneSlots;
          item.dronesAssigned = featureInteraction.assignedDrones;
          item.hintActive = item.surveyNeeded > surveyLevel && item.surveyNeeded <= hintLevel;
          item.tooltip = new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_9__["TooltipViewModel"]();

          if (item.active) {
            item.tooltip.name = item.name;
            item.tooltip.desc = featureDef.description;
          } else {
            item.tooltip.desc = 'Survey the region to discover this feature.';
          }

          featureDef.abilities.forEach(function (a, i) {
            if (a.visibleUpgrade != '' && !_this15.researchService.isUpgradeCompleted(a.visibleUpgrade)) {
              return;
            }

            var ability = new AbilityItem();
            ability.def = a;
            ability.name = a.name;
            ability.index = i;
            ability.canActivate = true;
            item.abilities.push(ability);
          });
          this.populateFeatureTasks(regionItem.id, item);
          return item;
        }
      }, {
        key: "updateFeatureListItem",
        value: function updateFeatureListItem(planetId, regionId, featureId) {
          if (planetId != this.getSelectedPlanet().instanceId) {
            return;
          }

          var regionItem = this.regionList.find(function (x) {
            return x.id === regionId;
          });

          if (regionItem == null) {
            return;
          }

          var featureItem = regionItem.features.find(function (x) {
            return x.id === featureId;
          });

          if (featureItem == null) {
            return; //TODO: Create feature list item
          }

          this.populateFeatureTasks(regionId, featureItem);
        }
      }, {
        key: "populateFeatureTasks",
        value: function populateFeatureTasks(regionId, featureItem) {
          featureItem.tasks = [];
          var featureDef = this.planetService.getFeatureDefinition(featureItem.name);
          var featureInstance = this.planetService.getFeature(regionId, featureItem.id);
          var featureInteraction = this.planetService.getPlanetInteractionModel().regions.getFeature(regionId, featureItem.id);
          featureDef.tasks.forEach(function (tDef) {
            var instance = featureInteraction.tasks.find(function (x) {
              return x.definition === tDef;
            });

            if (instance != null && instance.progress >= instance.needed && !tDef.repeatable) {
              return;
            }

            var taskItem = new TaskItem();
            taskItem.regionId = regionId;
            taskItem.featureId = featureItem.id;
            taskItem.def = tDef;
            taskItem.instance = instance;
            taskItem.index = featureItem.tasks.length;
            featureItem.tasks.push(taskItem);
          });
        }
      }]);

      return PiTerrainComponent;
    }();

    PiTerrainComponent.ctorParameters = function () {
      return [{
        type: src_app_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"]
      }, {
        type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"]
      }, {
        type: src_app_services_research_service__WEBPACK_IMPORTED_MODULE_4__["ResearchService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]
      }, {
        type: src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_7__["FlagsService"]
      }, {
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]
      }];
    };

    PiTerrainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pi-terrain',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pi-terrain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pi-terrain.component.scss */
      "./src/app/components/planet-interaction/pi-terrain/pi-terrain.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"], _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"], src_app_services_research_service__WEBPACK_IMPORTED_MODULE_4__["ResearchService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], src_app_services_flags_service__WEBPACK_IMPORTED_MODULE_7__["FlagsService"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]])], PiTerrainComponent);

    var RegionListItem = function RegionListItem() {
      _classCallCheck(this, RegionListItem);

      this.features = [];
      this.canGather = false;
    };

    var FeatureListItem = function FeatureListItem() {
      _classCallCheck(this, FeatureListItem);

      this.abilities = [];
      this.tasks = [];
    };

    var AbilityItem = function AbilityItem() {
      _classCallCheck(this, AbilityItem);
    };

    var TaskItem = /*#__PURE__*/function () {
      function TaskItem() {
        _classCallCheck(this, TaskItem);
      }

      _createClass(TaskItem, [{
        key: "progress",
        value: function progress() {
          if (this.instance != null) {
            return this.instance.progress;
          }

          return 0;
        }
      }]);

      return TaskItem;
    }();

    var RegionDetailsViewModel = function RegionDetailsViewModel() {
      _classCallCheck(this, RegionDetailsViewModel);

      this.name = '';
      this.description = '';
      this.currentProduction = new _models_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceCollection"]();
    };
    /***/

  },

  /***/
  "./src/app/components/planet-interaction/planet-interaction.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/planet-interaction/planet-interaction.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPlanetInteractionPlanetInteractionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".planet-header {\n  padding-top: 0.5em;\n  padding-left: 1em;\n  min-height: 2em;\n  border-bottom: 1px solid gray;\n  font-weight: bold;\n}\n\n.mat-tab-body-wrapper {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9wbGFuZXQtaW50ZXJhY3Rpb24vcGxhbmV0LWludGVyYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYW5ldC1pbnRlcmFjdGlvbi9wbGFuZXQtaW50ZXJhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbmV0LWludGVyYWN0aW9uL3BsYW5ldC1pbnRlcmFjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFuZXQtaGVhZGVye1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBtaW4taGVpZ2h0OiAyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC10YWItYm9keS13cmFwcGVye1xuICBmbGV4LWdyb3c6IDE7XG59XG4iLCIucGxhbmV0LWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIG1pbi1oZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/planet-interaction/planet-interaction.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/planet-interaction/planet-interaction.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PlanetInteractionComponent */

  /***/
  function srcAppComponentsPlanetInteractionPlanetInteractionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetInteractionComponent", function () {
      return PlanetInteractionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_flags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/flags.service */
    "./src/app/services/flags.service.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/planet.service */
    "./src/app/services/planet.service.ts");

    var PlanetInteractionComponent = /*#__PURE__*/function () {
      function PlanetInteractionComponent(planetService, resourceService, flagsService) {
        _classCallCheck(this, PlanetInteractionComponent);

        this.planetService = planetService;
        this.resourceService = resourceService;
        this.flagsService = flagsService;
        this.showStructures = false;
        this.showResearch = false;
      }

      _createClass(PlanetInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.flagsService.onFlagsUpdated.subscribe(function () {
            return _this16.updateTabVisibility();
          });
          this.updateTabVisibility();
        }
      }, {
        key: "updateTabVisibility",
        value: function updateTabVisibility() {
          this.showStructures = this.flagsService.check('showStructureTab');
          this.showResearch = this.flagsService.check('showResearchTab');
        }
      }, {
        key: "droneCount",
        value: function droneCount() {
          return this.resourceService.get('drones');
        }
      }, {
        key: "droneCap",
        value: function droneCap() {
          return this.resourceService.getMax('drones');
        }
      }, {
        key: "dronesIdle",
        value: function dronesIdle() {
          var interaction = this.planetService.getPlanetInteractionModel();
          return this.droneCount() - interaction.regions.getTotalAssignedDrones();
        }
      }, {
        key: "powerUsed",
        value: function powerUsed() {
          var interaction = this.planetService.getPlanetInteractionModel();
          return interaction.localResources.getConsumption('power');
        }
      }, {
        key: "powerAvailable",
        value: function powerAvailable() {
          var interaction = this.planetService.getPlanetInteractionModel();
          return interaction.localResources.getProduction('power');
        }
      }]);

      return PlanetInteractionComponent;
    }();

    PlanetInteractionComponent.ctorParameters = function () {
      return [{
        type: src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_4__["PlanetService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]
      }, {
        type: _services_flags_service__WEBPACK_IMPORTED_MODULE_2__["FlagsService"]
      }];
    };

    PlanetInteractionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-planet-interaction',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./planet-interaction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet-interaction/planet-interaction.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./planet-interaction.component.scss */
      "./src/app/components/planet-interaction/planet-interaction.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_planet_service__WEBPACK_IMPORTED_MODULE_4__["PlanetService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"], _services_flags_service__WEBPACK_IMPORTED_MODULE_2__["FlagsService"]])], PlanetInteractionComponent);
    /***/
  },

  /***/
  "./src/app/components/resource-overview/resource-overview.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/resource-overview/resource-overview.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResourceOverviewResourceOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1vdmVydmlldy9yZXNvdXJjZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1vdmVydmlldy9yZXNvdXJjZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2Utb3ZlcnZpZXcvcmVzb3VyY2Utb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcblxufVxuXG51bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiIsInVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/resource-overview/resource-overview.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/resource-overview/resource-overview.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ResourceOverviewComponent, ResourceListItem */

  /***/
  function srcAppComponentsResourceOverviewResourceOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceOverviewComponent", function () {
      return ResourceOverviewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceListItem", function () {
      return ResourceListItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _services_planet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);

    var ResourceOverviewComponent = /*#__PURE__*/function () {
      function ResourceOverviewComponent(resourceService, planetService) {
        _classCallCheck(this, ResourceOverviewComponent);

        this.resourceService = resourceService;
        this.planetService = planetService;
        this.resourceList = [];
      }

      _createClass(ResourceOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPower",
        value: function getPower() {
          var rateSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'localRates';
          var globalResources = this.resourceService.globalResources;
          var localResources = null;
          var localInteractionModel = this.planetService.getSelectedPlanetInteractionModel();

          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(localInteractionModel)) {
            localResources = localInteractionModel.localResources;
          }

          var resource = globalResources.resources.find(function (x) {
            return x.resource === 'power';
          });

          if (rateSource === 'localRates' && !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(localResources)) {
            resource = localResources.resources.find(function (x) {
              return x.resource === 'power';
            });
          }

          var item = new ResourceListItem();

          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(resource)) {
            item.production = resource.productionRate;
            item.consumption = resource.consumptionRate;
          }

          return item;
        }
      }, {
        key: "getResourceList",
        value: function getResourceList(rateSource) {
          var _this17 = this;

          var globalResources = this.resourceService.globalResources;
          var localResources = null;
          var localInteractionModel = this.planetService.getSelectedPlanetInteractionModel();

          if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(localInteractionModel)) {
            localResources = localInteractionModel.localResources;
          }

          globalResources.resources.forEach(function (element) {
            if (element.resource === 'power') {
              return;
            }

            if (element.resource === 'drones') {
              return;
            }

            if (element.resource === 'energy') {
              return;
            }

            if (!_this17.resourceService.isDiscovered(element.resource)) {
              return;
            }

            var rate = element.getNetProductionRate();

            if (rateSource === 'localRates' && !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(localResources)) {
              rate = 0;
              var localResource = localResources.resources.find(function (x) {
                return x.resource === element.resource;
              });

              if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(localResource)) {
                rate = localResource.getNetProductionRate();
              }
            }

            var item = _this17.resourceList.find(function (x) {
              return x.name === element.resource;
            });

            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(item)) {
              item = new ResourceListItem();

              _this17.resourceList.push(item);
            }

            item.name = element.resource;
            item.amount = element.amount;
            item.maxAmount = element.max;
            item.rate = rate;
          });
          return this.resourceList;
        }
      }]);

      return ResourceOverviewComponent;
    }();

    ResourceOverviewComponent.ctorParameters = function () {
      return [{
        type: _services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]
      }, {
        type: _services_planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]
      }];
    };

    ResourceOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-overview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resource-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resource-overview/resource-overview.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resource-overview.component.scss */
      "./src/app/components/resource-overview/resource-overview.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _services_planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]])], ResourceOverviewComponent);

    var ResourceListItem = function ResourceListItem() {
      _classCallCheck(this, ResourceListItem);
    };
    /***/

  },

  /***/
  "./src/app/components/ship-interaction/ship-interaction.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/ship-interaction/ship-interaction.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShipInteractionShipInteractionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hpcC1pbnRlcmFjdGlvbi9zaGlwLWludGVyYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/ship-interaction/ship-interaction.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/ship-interaction/ship-interaction.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ShipInteractionComponent */

  /***/
  function srcAppComponentsShipInteractionShipInteractionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipInteractionComponent", function () {
      return ShipInteractionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShipInteractionComponent = /*#__PURE__*/function () {
      function ShipInteractionComponent() {
        _classCallCheck(this, ShipInteractionComponent);
      }

      _createClass(ShipInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShipInteractionComponent;
    }();

    ShipInteractionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ship-interaction',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ship-interaction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/ship-interaction.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ship-interaction.component.scss */
      "./src/app/components/ship-interaction/ship-interaction.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ShipInteractionComponent);
    /***/
  },

  /***/
  "./src/app/components/ship-interaction/si-research/si-research.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/ship-interaction/si-research/si-research.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShipInteractionSiResearchSiResearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".research-item {\n  display: inline-block;\n  width: 15em;\n  margin: 10px;\n  padding: 5px;\n  border: 2px solid black;\n}\n\n.research-btn {\n  width: 75px;\n}\n\n.research-item-top {\n  display: flex;\n  justify-content: space-between;\n}\n\n.research-item-middle {\n  padding: 3px;\n}\n\n.research-item-bottom {\n  padding: 3px;\n}\n\n.research-item-footer {\n  padding: 3px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9zaGlwLWludGVyYWN0aW9uL3NpLXJlc2VhcmNoL3NpLXJlc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoaXAtaW50ZXJhY3Rpb24vc2ktcmVzZWFyY2gvc2ktcmVzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGlwLWludGVyYWN0aW9uL3NpLXJlc2VhcmNoL3NpLXJlc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2VhcmNoLWl0ZW17XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1ZW07XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnJlc2VhcmNoLWJ0bntcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5yZXNlYXJjaC1pdGVtLXRvcHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmVzZWFyY2gtaXRlbS1taWRkbGV7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnJlc2VhcmNoLWl0ZW0tYm90dG9te1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5yZXNlYXJjaC1pdGVtLWZvb3RlcntcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iLCIucmVzZWFyY2gtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1ZW07XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLnJlc2VhcmNoLWJ0biB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4ucmVzZWFyY2gtaXRlbS10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZXNlYXJjaC1pdGVtLW1pZGRsZSB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnJlc2VhcmNoLWl0ZW0tYm90dG9tIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucmVzZWFyY2gtaXRlbS1mb290ZXIge1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/ship-interaction/si-research/si-research.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/ship-interaction/si-research/si-research.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: SiResearchComponent, ResearchListItem */

  /***/
  function srcAppComponentsShipInteractionSiResearchSiResearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiResearchComponent", function () {
      return SiResearchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResearchListItem", function () {
      return ResearchListItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_research_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/research.service */
    "./src/app/services/research.service.ts");
    /* harmony import */


    var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");

    var SiResearchComponent = /*#__PURE__*/function () {
      function SiResearchComponent(_researchService, _taskService) {
        _classCallCheck(this, SiResearchComponent);

        this._researchService = _researchService;
        this._taskService = _taskService;
        this.researchList = [];
      }

      _createClass(SiResearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this._researchService.onResearchUpdated.subscribe(function () {
            _this18.updateResearchList();
          });

          this.updateResearchList();
        }
      }, {
        key: "research",
        value: function research(item) {
          this._taskService.beginResearch(item.name);
        }
      }, {
        key: "updateResearchList",
        value: function updateResearchList() {
          var _this19 = this;

          while (this.researchList.length > 0) {
            this.researchList.pop();
          }

          this._researchService.getDisciplines().forEach(function (discipline) {
            if (!discipline.revealAtStart && !_this19._researchService.hasProgress(discipline.name)) {
              return;
            }

            var progress = _this19._researchService.getProgress(discipline.name);

            if (!discipline.revealAtStart && progress.theoryLevel < 1) {
              return;
            }

            var item = {
              name: discipline.name,
              knowledgeTooltip: new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_4__["TooltipViewModel"](),
              theoryTooltip: new src_app_models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_4__["TooltipViewModel"](),
              progress: progress,
              nextAdvanceLevel: _this19._researchService.getNextLevelWithAdvancement(discipline.name)
            };
            item.knowledgeTooltip.desc = discipline.desc;
            item.theoryTooltip.desc = 'Theory improves your research speed.  ' + discipline.theoryDesc;

            _this19.researchList.push(item);
          });
        }
      }, {
        key: "getKnowledgeNeeded",
        value: function getKnowledgeNeeded(research) {
          return this._researchService.knowledgeNeeded(research.name);
        }
      }, {
        key: "getTheoryNeeded",
        value: function getTheoryNeeded(research) {
          return this._researchService.theoryNeeded(research.name);
        }
      }]);

      return SiResearchComponent;
    }();

    SiResearchComponent.ctorParameters = function () {
      return [{
        type: _services_research_service__WEBPACK_IMPORTED_MODULE_2__["ResearchService"]
      }, {
        type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
      }];
    };

    SiResearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-si-research',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./si-research.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-research/si-research.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./si-research.component.scss */
      "./src/app/components/ship-interaction/si-research/si-research.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_research_service__WEBPACK_IMPORTED_MODULE_2__["ResearchService"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])], SiResearchComponent);

    var ResearchListItem = function ResearchListItem() {
      _classCallCheck(this, ResearchListItem);
    };
    /***/

  },

  /***/
  "./src/app/components/ship-interaction/si-systems/si-systems.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/ship-interaction/si-systems/si-systems.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShipInteractionSiSystemsSiSystemsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hpcC1pbnRlcmFjdGlvbi9zaS1zeXN0ZW1zL3NpLXN5c3RlbXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/ship-interaction/si-systems/si-systems.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/ship-interaction/si-systems/si-systems.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SiSystemsComponent */

  /***/
  function srcAppComponentsShipInteractionSiSystemsSiSystemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiSystemsComponent", function () {
      return SiSystemsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SiSystemsComponent = /*#__PURE__*/function () {
      function SiSystemsComponent() {
        _classCallCheck(this, SiSystemsComponent);
      }

      _createClass(SiSystemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SiSystemsComponent;
    }();

    SiSystemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-si-systems',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./si-systems.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-systems/si-systems.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./si-systems.component.scss */
      "./src/app/components/ship-interaction/si-systems/si-systems.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SiSystemsComponent);
    /***/
  },

  /***/
  "./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShipInteractionSiUpgradesSiUpgradesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".upgrade-list-item {\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 15px;\n}\n\n.upgrade-complete-list-item {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9zaGlwLWludGVyYWN0aW9uL3NpLXVwZ3JhZGVzL3NpLXVwZ3JhZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoaXAtaW50ZXJhY3Rpb24vc2ktdXBncmFkZXMvc2ktdXBncmFkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGlwLWludGVyYWN0aW9uL3NpLXVwZ3JhZGVzL3NpLXVwZ3JhZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZ3JhZGUtbGlzdC1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udXBncmFkZS1jb21wbGV0ZS1saXN0LWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi51cGdyYWRlLWNvc3Qge1xuXG59XG4iLCIudXBncmFkZS1saXN0LWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnVwZ3JhZGUtY29tcGxldGUtbGlzdC1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: SiUpgradesComponent */

  /***/
  function srcAppComponentsShipInteractionSiUpgradesSiUpgradesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiUpgradesComponent", function () {
      return SiUpgradesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_research_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/research.service */
    "./src/app/services/research.service.ts");
    /* harmony import */


    var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/resource.service */
    "./src/app/services/resource.service.ts");

    var SiUpgradesComponent = /*#__PURE__*/function () {
      function SiUpgradesComponent(_researchService, _resourceService) {
        _classCallCheck(this, SiUpgradesComponent);

        this._researchService = _researchService;
        this._resourceService = _resourceService;
        this.upgradesAvailable = [];
        this.upgradesComplete = [];
      }

      _createClass(SiUpgradesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateUpgradeList();
        }
      }, {
        key: "updateUpgradeList",
        value: function updateUpgradeList() {
          var _this20 = this;

          while (this.upgradesAvailable.length > 0) {
            this.upgradesAvailable.pop();
          }

          while (this.upgradesComplete.length > 0) {
            this.upgradesComplete.pop();
          }

          this._researchService.getCompletedUpgrades().forEach(function (x) {
            var upgradeDef = _this20._researchService.getUpgradeDefinition(x);

            var item = {
              name: x,
              description: upgradeDef.description,
              researched: true,
              cost: upgradeDef.cost
            };

            _this20.upgradesComplete.push(item);
          });

          this._researchService.getAvailableUpgrades().forEach(function (x) {
            var upgradeDef = _this20._researchService.getUpgradeDefinition(x);

            var item = {
              name: x,
              description: upgradeDef.description,
              researched: false,
              cost: upgradeDef.cost
            };

            _this20.upgradesAvailable.push(item);
          });
        }
      }, {
        key: "canAffordUpgrade",
        value: function canAffordUpgrade(item) {
          var canAfford = this._resourceService.canAfford(item.cost);

          return canAfford;
        }
      }, {
        key: "onClickUpgradeItem",
        value: function onClickUpgradeItem(item) {
          if (item.researched) {
            return;
          }

          this._researchService.buyUpgrade(item.name);

          this.updateUpgradeList();
        }
      }]);

      return SiUpgradesComponent;
    }();

    SiUpgradesComponent.ctorParameters = function () {
      return [{
        type: _services_research_service__WEBPACK_IMPORTED_MODULE_2__["ResearchService"]
      }, {
        type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]
      }];
    };

    SiUpgradesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-si-upgrades',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./si-upgrades.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./si-upgrades.component.scss */
      "./src/app/components/ship-interaction/si-upgrades/si-upgrades.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_research_service__WEBPACK_IMPORTED_MODULE_2__["ResearchService"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])], SiUpgradesComponent);

    var UpgradeListItem = function UpgradeListItem() {
      _classCallCheck(this, UpgradeListItem);
    };
    /***/

  },

  /***/
  "./src/app/components/ship-overview/ship-overview.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/ship-overview/ship-overview.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShipOverviewShipOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hpcC1vdmVydmlldy9zaGlwLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/ship-overview/ship-overview.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/ship-overview/ship-overview.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ShipOverviewComponent */

  /***/
  function srcAppComponentsShipOverviewShipOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipOverviewComponent", function () {
      return ShipOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShipOverviewComponent = /*#__PURE__*/function () {
      function ShipOverviewComponent() {
        _classCallCheck(this, ShipOverviewComponent);

        this.researchButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ShipOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onResearchButtonClicked",
        value: function onResearchButtonClicked() {
          this.researchButtonClicked.emit();
        }
      }]);

      return ShipOverviewComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ShipOverviewComponent.prototype, "researchButtonClicked", void 0);
    ShipOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ship-overview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ship-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ship-overview/ship-overview.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ship-overview.component.scss */
      "./src/app/components/ship-overview/ship-overview.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ShipOverviewComponent);
    /***/
  },

  /***/
  "./src/app/components/system-overview/system-overview.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/system-overview/system-overview.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSystemOverviewSystemOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".selected {\n  color: red;\n}\n\n.planet-list {\n  display: inline-flex;\n  flex-direction: column;\n  padding: 5px;\n  padding-top: 10px;\n}\n\n.planet-list-item {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvbGFtcHAvaHRkb2NzL2ltZy9zcGFjZS1pZGxlL3NyYy9hcHAvY29tcG9uZW50cy9zeXN0ZW0tb3ZlcnZpZXcvc3lzdGVtLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N5c3RlbS1vdmVydmlldy9zeXN0ZW0tb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zeXN0ZW0tb3ZlcnZpZXcvc3lzdGVtLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVke1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5wbGFuZXQtbGlzdHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wbGFuZXQtbGlzdC1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuIiwiLnNlbGVjdGVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBsYW5ldC1saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wbGFuZXQtbGlzdC1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/system-overview/system-overview.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/system-overview/system-overview.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SystemOverviewComponent */

  /***/
  function srcAppComponentsSystemOverviewSystemOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemOverviewComponent", function () {
      return SystemOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/planet */
    "./src/app/models/planet.ts");
    /* harmony import */


    var _services_planet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/planet.service */
    "./src/app/services/planet.service.ts");

    var SystemOverviewComponent = /*#__PURE__*/function () {
      function SystemOverviewComponent(planetService) {
        var _this21 = this;

        _classCallCheck(this, SystemOverviewComponent);

        this.planetService = planetService;
        this.planets = [];
        this.shipSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.planetService.selectedPlanetChanged.subscribe(function (x) {
          return _this21.updateSelectedPlanet();
        });
      }

      _createClass(SystemOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSystem();
          this.selectedPlanet = this.getSelectedPlanet();
        }
      }, {
        key: "updateSelectedPlanet",
        value: function updateSelectedPlanet() {
          this.selectedPlanet = this.getSelectedPlanet();
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange(event) {
          if (event.name === "Ship") {
            this.shipSelected.next(true);
          } else {
            this.planetService.selectPlanet(this.selectedPlanet.instanceId);
            this.shipSelected.next(false);
          }
        }
      }, {
        key: "getSystem",
        value: function getSystem() {
          this.planets = [];
          var ship = new _models_planet__WEBPACK_IMPORTED_MODULE_2__["Planet"]();
          ship.name = "Ship";
          this.planets.push(ship);
          this.planets = this.planets.concat(this.planetService.getCurrentSystem());
        }
      }, {
        key: "getSelectedPlanet",
        value: function getSelectedPlanet() {
          return this.planetService.getSelectedPlanet();
        }
      }]);

      return SystemOverviewComponent;
    }();

    SystemOverviewComponent.ctorParameters = function () {
      return [{
        type: _services_planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SystemOverviewComponent.prototype, "shipSelected", void 0);
    SystemOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-system-overview',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./system-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/system-overview/system-overview.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./system-overview.component.scss */
      "./src/app/components/system-overview/system-overview.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]])], SystemOverviewComponent);
    /***/
  },

  /***/
  "./src/app/directives/game-tooltip.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/directives/game-tooltip.directive.ts ***!
    \******************************************************/

  /*! exports provided: GameTooltipDirective */

  /***/
  function srcAppDirectivesGameTooltipDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameTooltipDirective", function () {
      return GameTooltipDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _components_game_tooltip_game_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/game-tooltip/game-tooltip.component */
    "./src/app/components/game-tooltip/game-tooltip.component.ts");
    /* harmony import */


    var _models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/tooltipViewModel */
    "./src/app/models/tooltipViewModel.ts");

    var GameTooltipDirective_1;

    var GameTooltipDirective = GameTooltipDirective_1 = /*#__PURE__*/function () {
      function GameTooltipDirective(overlayPositionBuilder, elementRef, overlay) {
        _classCallCheck(this, GameTooltipDirective);

        this.overlayPositionBuilder = overlayPositionBuilder;
        this.elementRef = elementRef;
        this.overlay = overlay;
      }

      _createClass(GameTooltipDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show() {
          var positionStrategy = this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([{
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center'
          }]);

          if (GameTooltipDirective_1.currentTooltip != null) {
            GameTooltipDirective_1.currentTooltip.hide();
          }

          GameTooltipDirective_1.currentTooltip = this;

          if (GameTooltipDirective_1.overlayRef == null) {
            GameTooltipDirective_1.overlayRef = this.overlay.create();
          }

          GameTooltipDirective_1.overlayRef.updatePositionStrategy(positionStrategy);
          var tooltipPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_components_game_tooltip_game_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["GameTooltipComponent"]);
          var tooltipRef = GameTooltipDirective_1.overlayRef.attach(tooltipPortal);
          tooltipRef.instance.tooltipModel = this.model;
        }
      }, {
        key: "hide",
        value: function hide() {
          GameTooltipDirective_1.overlayRef.detach();
          GameTooltipDirective_1.currentTooltip = null;
        }
      }]);

      return GameTooltipDirective;
    }();

    GameTooltipDirective.currentTooltip = null;
    GameTooltipDirective.overlayRef = null;

    GameTooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appGameTooltip'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _models_tooltipViewModel__WEBPACK_IMPORTED_MODULE_5__["TooltipViewModel"])], GameTooltipDirective.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], GameTooltipDirective.prototype, "show", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], GameTooltipDirective.prototype, "hide", null);
    GameTooltipDirective = GameTooltipDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appGameTooltip]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayPositionBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]])], GameTooltipDirective);
    /***/
  },

  /***/
  "./src/app/models/planet.ts":
  /*!**********************************!*\
    !*** ./src/app/models/planet.ts ***!
    \**********************************/

  /*! exports provided: Planet, Region, Feature, MOCK_SYSTEM */

  /***/
  function srcAppModelsPlanetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Planet", function () {
      return Planet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Region", function () {
      return Region;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Feature", function () {
      return Feature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOCK_SYSTEM", function () {
      return MOCK_SYSTEM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Planet = function Planet() {
      _classCallCheck(this, Planet);
    };

    var Region = /*#__PURE__*/function () {
      function Region(planetId, instanceId, name) {
        _classCallCheck(this, Region);

        this.planetId = planetId;
        this.instanceId = instanceId;
        this.name = name;
        this.hiddenBehindRegion = 0;
        this.hiddenBehindSurvey = 0;
        this.features = [];
      }

      _createClass(Region, [{
        key: "hideBehindSurvey",
        value: function hideBehindSurvey(regionId, level) {
          this.hiddenBehindRegion = regionId;
          this.hiddenBehindSurvey = level;
          return this;
        }
      }, {
        key: "addFeature",
        value: function addFeature(name) {
          var infrastructureLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var feature = new Feature(this.planetId, this.instanceId, this.features.length, name);
          feature.hiddenBehindSurvey = infrastructureLevel;
          this.features.push(feature);
          return this;
        }
      }, {
        key: "removeFeature",
        value: function removeFeature(feature) {
          this.features.splice(this.features.indexOf(feature), 1);
          return this;
        }
      }, {
        key: "replaceFeature",
        value: function replaceFeature(oldFeatureId, newFeatureName) {
          this.features.find(function (x) {
            return x.instanceId === oldFeatureId;
          }).name = newFeatureName;
          return this;
        }
      }]);

      return Region;
    }();

    var Feature = function Feature(planetId, regionId, instanceId, name) {
      _classCallCheck(this, Feature);

      this.planetId = planetId;
      this.regionId = regionId;
      this.instanceId = instanceId;
      this.name = name;
      this.hiddenBehindSurvey = 1;
    };

    var MOCK_SYSTEM = [{
      instanceId: 1,
      name: 'forest planet',
      temperature: 'temperate',
      atmosphere: 'oxygen',
      regions: [new Region(1, 1, 'Plains').addFeature('copper deposit', 1).addFeature('silver vein', 2).addFeature('wrecked hull plating', 2).addFeature('crater', 3).addFeature('copper deposit', 4).addFeature('wrecked hull plating', 4).addFeature('lignite deposit', 5).addFeature('resonance field', 5).addFeature('corrupted databank', 5).addFeature('energy cell', 6).addFeature('oil field', 6), new Region(1, 2, 'Hills').hideBehindSurvey(1, 3).addFeature('corundum deposit', 1).addFeature('corrupted databank', 1).addFeature('copper deposit', 2).addFeature('hematite deposit', 2).addFeature('energy cell', 2).addFeature('lignite deposit', 3).addFeature('silver vein', 3).addFeature('corrupted databank', 3).addFeature('gold vein', 4).addFeature('copper deposit', 4).addFeature('tectonic activity', 4).addFeature('wrecked hull plating', 5).addFeature('copper deposit', 5).addFeature('bitumen deposit', 5), new Region(1, 3, 'Forest').hideBehindSurvey(1, 4).addFeature('lignite deposit', 1).addFeature('corrupted databank', 2).addFeature('lignite deposit', 3).addFeature('resonance field', 3).addFeature('copper deposit', 3).addFeature('lignite deposit', 4).addFeature('electric storm', 4).addFeature('oil field', 5), new Region(1, 4, 'Coast').hideBehindSurvey(2, 2).addFeature('waterlogged processing unit', 1).addFeature('corundum deposit', 1).addFeature('lignite deposit', 2).addFeature('methane vent', 3).addFeature('methane vent', 4).addFeature('oil field', 5), new Region(1, 5, 'Ocean').hideBehindSurvey(4, 2).addFeature('methane vent', 2).addFeature('electric storm', 2).addFeature('waterlogged processing unit', 3).addFeature('undersea oil field', 4), new Region(1, 6, 'Ocean Floor').hideBehindSurvey(5, 7).addFeature('magnetite deposit', 1).addFeature('tectonic activity', 1).addFeature('undersea oil field', 2).addFeature('spatial distortion', 2).addFeature('magnetite deposit', 3).addFeature('charybdin crystals', 4), new Region(1, 7, 'Mountain').hideBehindSurvey(2, 3).addFeature('bitumen deposit', 1).addFeature('hematite deposit', 2).addFeature('bitumen deposit', 2).addFeature('magnetite deposit', 3).addFeature('magnetite deposit', 4).addFeature('porphyritic synaptite', 5), new Region(1, 8, 'Desert').hideBehindSurvey(7, 5).addFeature('corundum deposit', 1).addFeature('energy signature', 1).addFeature('oil field', 2).addFeature('tectonic activity', 2).addFeature('magnetite deposit', 3).addFeature('oil field', 4).addFeature('glittersand spout', 5), new Region(1, 9, 'Arctic').hideBehindSurvey(5, 5).addFeature('helium clathrates', 1).addFeature('electric storm', 1).addFeature('argon clathrates', 2).addFeature('graviton emissions', 2).addFeature('helium clathrates', 3).addFeature('oil field', 4).addFeature('dyene cluster', 5)]
    }, {
      instanceId: 2,
      name: 'ice planet',
      temperature: 'frozen',
      atmosphere: 'oxygen',
      regions: [new Region(1, 1, 'Plains').addFeature('methane vent').addFeature('dyene cluster', 1)]
    }];
    /***/
  },

  /***/
  "./src/app/models/planetInteractionModel.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/planetInteractionModel.ts ***!
    \**************************************************/

  /*! exports provided: PlanetInteractionModel, Structure, FeatureInteraction, RegionInteraction, RegionInteractionCollection */

  /***/
  function srcAppModelsPlanetInteractionModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetInteractionModel", function () {
      return PlanetInteractionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Structure", function () {
      return Structure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureInteraction", function () {
      return FeatureInteraction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionInteraction", function () {
      return RegionInteraction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionInteractionCollection", function () {
      return RegionInteractionCollection;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);

    var PlanetInteractionModel = function PlanetInteractionModel() {
      _classCallCheck(this, PlanetInteractionModel);

      this.regions = new RegionInteractionCollection();
    };

    var Structure = function Structure() {
      _classCallCheck(this, Structure);
    };

    var FeatureInteraction = function FeatureInteraction() {
      _classCallCheck(this, FeatureInteraction);

      this.assignedDrones = 0;
      this.tasks = [];
    };

    var RegionInteraction = /*#__PURE__*/function () {
      function RegionInteraction() {
        _classCallCheck(this, RegionInteraction);

        this.outpostLevel = 0;
        this.surveyLevel = 0;
        this.surveyProgress = 0;
        this.assignedDrones = 0;
        this.droneSlots = 1;
        this.nextSurveyLevelCost = 0;
        this.nextOutpostLevelCost = null;
        this.features = [];
      }

      _createClass(RegionInteraction, [{
        key: "isFeatureExploited",
        value: function isFeatureExploited(feature) {
          return this.getFeature(feature).exploited;
        }
      }, {
        key: "getFeature",
        value: function getFeature(featureId) {
          var feature = this.features.find(function (x) {
            return x.featureInstanceId === featureId;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(feature)) {
            feature = new FeatureInteraction();
            feature.featureInstanceId = featureId;
            this.features.push(feature);
          }

          return feature;
        }
      }, {
        key: "removeFeature",
        value: function removeFeature(featureId) {
          this.features.splice(this.features.findIndex(function (x) {
            return x.featureInstanceId === featureId;
          }), 1);
        }
      }]);

      return RegionInteraction;
    }();

    var RegionInteractionCollection = /*#__PURE__*/function () {
      function RegionInteractionCollection() {
        _classCallCheck(this, RegionInteractionCollection);

        this.regions = [];
      }

      _createClass(RegionInteractionCollection, [{
        key: "getOutpostLevel",
        value: function getOutpostLevel(regionId) {
          return this.getRegion(regionId).outpostLevel;
        }
      }, {
        key: "getSurveyLevel",
        value: function getSurveyLevel(regionId) {
          return this.getRegion(regionId).surveyLevel;
        }
      }, {
        key: "getRegion",
        value: function getRegion(regionId) {
          var region = this.regions.find(function (x) {
            return x.regionInstanceId === regionId;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(region)) {
            region = new RegionInteraction();
            region.regionInstanceId = regionId;
            this.regions.push(region);
          }

          return region;
        }
      }, {
        key: "getFeature",
        value: function getFeature(regionId, featureId) {
          var region = this.getRegion(regionId);
          return region.getFeature(featureId);
        }
      }, {
        key: "removeFeature",
        value: function removeFeature(regionId, featureId) {
          var region = this.getRegion(regionId);
          return region.removeFeature(featureId);
        }
      }, {
        key: "getRegionDroneSlots",
        value: function getRegionDroneSlots(regionId) {
          return this.getRegion(regionId).droneSlots;
        }
      }, {
        key: "getRegionAssignedDrones",
        value: function getRegionAssignedDrones(regionId) {
          return this.getRegion(regionId).assignedDrones;
        }
      }, {
        key: "getTotalAssignedDrones",
        value: function getTotalAssignedDrones() {
          return this.regions.map(function (x) {
            return x.assignedDrones;
          }).reduce(function (a, b) {
            return a + b;
          });
        }
      }, {
        key: "getFeatureAssignedDrones",
        value: function getFeatureAssignedDrones(regionId, featureId) {
          return this.getFeature(regionId, featureId).assignedDrones;
        }
      }, {
        key: "assignDrone",
        value: function assignDrone(regionId, featureId) {
          this.getRegion(regionId).assignedDrones++;
          this.getFeature(regionId, featureId).assignedDrones++;
        }
      }, {
        key: "unassignDrone",
        value: function unassignDrone(regionId, featureId) {
          this.getRegion(regionId).assignedDrones--;
          this.getFeature(regionId, featureId).assignedDrones--;
        }
      }]);

      return RegionInteractionCollection;
    }();
    /***/

  },

  /***/
  "./src/app/models/research.ts":
  /*!************************************!*\
    !*** ./src/app/models/research.ts ***!
    \************************************/

  /*! exports provided: ResearchProgress */

  /***/
  function srcAppModelsResearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResearchProgress", function () {
      return ResearchProgress;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ResearchProgress = function ResearchProgress() {
      _classCallCheck(this, ResearchProgress);

      this.knowledgeLevel = 0;
      this.theoryLevel = 0;
      this.knowledgeProgress = 0;
      this.theoryProgress = 0;
    };
    /***/

  },

  /***/
  "./src/app/models/resource.ts":
  /*!************************************!*\
    !*** ./src/app/models/resource.ts ***!
    \************************************/

  /*! exports provided: Resource, ResourceCollection */

  /***/
  function srcAppModelsResourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Resource", function () {
      return Resource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceCollection", function () {
      return ResourceCollection;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);

    var Resource = /*#__PURE__*/function () {
      function Resource(resource, amount) {
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var productionRate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var consumptionRate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, Resource);

        this.resource = resource;
        this.amount = amount;
        this.max = max;
        this.productionRate = productionRate;
        this.consumptionRate = consumptionRate;
      }

      _createClass(Resource, [{
        key: "getNetProductionRate",
        value: function getNetProductionRate() {
          return this.productionRate - this.consumptionRate;
        }
      }, {
        key: "getEfficiency",
        value: function getEfficiency() {
          if (this.productionRate === 0) {
            return 0;
          }

          if (this.getNetProductionRate() >= 0) {
            return 1;
          }

          return this.productionRate / this.consumptionRate;
        }
      }, {
        key: "isPower",
        value: function isPower() {
          return this.resource === 'power';
        }
      }]);

      return Resource;
    }();

    var ResourceCollection = /*#__PURE__*/function () {
      function ResourceCollection() {
        _classCallCheck(this, ResourceCollection);

        this.resources = [];
      }

      _createClass(ResourceCollection, [{
        key: "get",
        value: function get(resource) {
          return this.resources.find(function (x) {
            return x.resource === resource;
          });
        }
      }, {
        key: "add",
        value: function add(resource, amount) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            resourceItem = new Resource(resource, 0);
            this.resources.push(resourceItem);
          }

          resourceItem.amount += amount;

          if (resourceItem.amount > resourceItem.max && resourceItem.max !== 0) {
            resourceItem.amount = resourceItem.max;
          }
        }
      }, {
        key: "addCollection",
        value: function addCollection(other) {
          var _this22 = this;

          other.resources.forEach(function (element) {
            _this22.add(element.resource, element.amount);
          }, this);
        }
      }, {
        key: "remove",
        value: function remove(resource, amount) {
          var couldAfford = true;
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return false;
          }

          resourceItem.amount -= amount;

          if (resourceItem.amount < 0) {
            resourceItem.amount = 0;
            couldAfford = false;
          }

          return couldAfford;
        }
      }, {
        key: "removeCollection",
        value: function removeCollection(other) {
          var _this23 = this;

          var couldAfford = true;
          other.resources.forEach(function (element) {
            var removeResult = _this23.remove(element.resource, element.amount);

            if (!removeResult) {
              couldAfford = false;
            }
          });
          return couldAfford;
        }
      }, {
        key: "setMax",
        value: function setMax(resource, max) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            resourceItem = new Resource(resource, 0);
            this.resources.push(resourceItem);
          }

          resourceItem.max = max;

          if (resourceItem.amount > resourceItem.max) {
            resourceItem.amount = resourceItem.max;
          }
        }
      }, {
        key: "addProductionRate",
        value: function addProductionRate(resource, rate) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            resourceItem = new Resource(resource, 0);
            this.resources.push(resourceItem);
          }

          resourceItem.productionRate += rate;
        }
      }, {
        key: "setProductionRate",
        value: function setProductionRate(resource, rate) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            resourceItem = new Resource(resource, 0);
            this.resources.push(resourceItem);
          }

          resourceItem.productionRate = rate;
        }
      }, {
        key: "addConsumptionRate",
        value: function addConsumptionRate(resource, rate) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            resourceItem = new Resource(resource, 0);
            this.resources.push(resourceItem);
          }

          resourceItem.consumptionRate += rate;
        }
      }, {
        key: "setConsumptionRate",
        value: function setConsumptionRate(resource, rate) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            resourceItem = new Resource(resource, 0);
            this.resources.push(resourceItem);
          }

          resourceItem.consumptionRate = rate;
        }
      }, {
        key: "resetRates",
        value: function resetRates() {
          this.resources.forEach(function (resource) {
            resource.productionRate = 0;
            resource.consumptionRate = 0;
          });
        }
      }, {
        key: "has",
        value: function has(resource, amount) {
          if (!amount) {
            amount = 0.01;
          }

          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return false;
          }

          return resourceItem.amount >= amount;
        }
      }, {
        key: "getAmount",
        value: function getAmount(resource) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return 0;
          }

          return resourceItem.amount;
        }
      }, {
        key: "getProduction",
        value: function getProduction(resource) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return 0;
          }

          return resourceItem.productionRate;
        }
      }, {
        key: "getConsumption",
        value: function getConsumption(resource) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return 0;
          }

          return resourceItem.consumptionRate;
        }
      }, {
        key: "getNetProduction",
        value: function getNetProduction(resource) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return 0;
          }

          return resourceItem.productionRate - resourceItem.consumptionRate;
        }
      }, {
        key: "getMax",
        value: function getMax(resource) {
          var resourceItem = this.resources.find(function (x) {
            return x.resource === resource;
          });

          if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(resourceItem)) {
            return 0;
          }

          return resourceItem.max;
        }
      }, {
        key: "applyMultiplier",
        value: function applyMultiplier(multiplier) {
          var includeEnergy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.resources.forEach(function (x) {
            if (x.resource === 'energy' && !includeEnergy) {
              return;
            }

            x.amount = x.amount * multiplier;
          });
        }
      }, {
        key: "withMultiplier",
        value: function withMultiplier(multiplier) {
          var includeEnergy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var newCollection = new ResourceCollection();
          newCollection.addCollection(this);
          newCollection.applyMultiplier(multiplier, includeEnergy);
          return newCollection;
        }
      }, {
        key: "clear",
        value: function clear() {
          while (this.resources.length > 0) {
            this.resources.pop();
          }
        }
      }]);

      return ResourceCollection;
    }();
    /***/

  },

  /***/
  "./src/app/models/task.ts":
  /*!********************************!*\
    !*** ./src/app/models/task.ts ***!
    \********************************/

  /*! exports provided: Task, SurveyTask, ResearchTask, FeatureTask */

  /***/
  function srcAppModelsTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyTask", function () {
      return SurveyTask;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResearchTask", function () {
      return ResearchTask;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureTask", function () {
      return FeatureTask;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Task = function Task() {
      _classCallCheck(this, Task);
    };

    var SurveyTask = /*#__PURE__*/function (_Task) {
      _inherits(SurveyTask, _Task);

      var _super = _createSuper(SurveyTask);

      function SurveyTask() {
        _classCallCheck(this, SurveyTask);

        return _super.apply(this, arguments);
      }

      return SurveyTask;
    }(Task);

    var ResearchTask = /*#__PURE__*/function (_Task2) {
      _inherits(ResearchTask, _Task2);

      var _super2 = _createSuper(ResearchTask);

      function ResearchTask() {
        _classCallCheck(this, ResearchTask);

        return _super2.apply(this, arguments);
      }

      return ResearchTask;
    }(Task);

    var FeatureTask = /*#__PURE__*/function (_Task3) {
      _inherits(FeatureTask, _Task3);

      var _super3 = _createSuper(FeatureTask);

      function FeatureTask() {
        _classCallCheck(this, FeatureTask);

        return _super3.apply(this, arguments);
      }

      return FeatureTask;
    }(Task);
    /***/

  },

  /***/
  "./src/app/models/tooltipViewModel.ts":
  /*!********************************************!*\
    !*** ./src/app/models/tooltipViewModel.ts ***!
    \********************************************/

  /*! exports provided: TooltipViewModel */

  /***/
  function srcAppModelsTooltipViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipViewModel", function () {
      return TooltipViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TooltipViewModel = function TooltipViewModel() {
      _classCallCheck(this, TooltipViewModel);
    };
    /***/

  },

  /***/
  "./src/app/pipes/display-number.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/display-number.pipe.ts ***!
    \**********************************************/

  /*! exports provided: DisplayNumberPipe */

  /***/
  function srcAppPipesDisplayNumberPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayNumberPipe", function () {
      return DisplayNumberPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisplayNumberPipe = /*#__PURE__*/function () {
      function DisplayNumberPipe() {
        _classCallCheck(this, DisplayNumberPipe);
      }

      _createClass(DisplayNumberPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var prefix = '';
          var suffix = '';

          if (value < 0) {
            prefix = '-';
          }

          value = Math.abs(value);

          if (value < 1000) {
            return prefix + this.getSuffixedValue(value, suffix);
          }

          var decimalPlaces = Math.floor(Math.log10(value));

          if (decimalPlaces < 6) {
            value = value / 1000;
            suffix = 'K';
          } else {
            value = value / 1000000;
            suffix = 'M';
          }

          return prefix + this.getSuffixedValue(value, suffix);
        }
      }, {
        key: "getSuffixedValue",
        value: function getSuffixedValue(value, suffix) {
          if (value - Math.floor(value) > 0.01) {
            return value.toFixed(2) + suffix;
          }

          return value.toFixed(0) + suffix;
        }
      }]);

      return DisplayNumberPipe;
    }();

    DisplayNumberPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'displayNumber'
    })], DisplayNumberPipe);
    /***/
  },

  /***/
  "./src/app/services/action.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/action.service.ts ***!
    \********************************************/

  /*! exports provided: ActionService */

  /***/
  function srcAppServicesActionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionService", function () {
      return ActionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _flags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./flags.service */
    "./src/app/services/flags.service.ts");
    /* harmony import */


    var _planet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _research_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./research.service */
    "./src/app/services/research.service.ts");

    var ActionService = /*#__PURE__*/function () {
      function ActionService(_flagService, _planetService, _resourceService, _researchService) {
        _classCallCheck(this, ActionService);

        this._flagService = _flagService;
        this._planetService = _planetService;
        this._resourceService = _resourceService;
        this._researchService = _researchService;
      }

      _createClass(ActionService, [{
        key: "canAffordDroneCost",
        value: function canAffordDroneCost(drones, planetInstanceId) {
          return this._planetService.canAffordDroneCost(drones, planetInstanceId);
        }
      }, {
        key: "setFlag",
        value: function setFlag(flag) {
          this._flagService.set(flag);
        }
      }, {
        key: "addTheory",
        value: function addTheory(discipline, amount) {
          this._researchService.addTheory(discipline, amount);
        }
      }, {
        key: "addResource",
        value: function addResource(resource) {
          this._resourceService.globalResources.add(resource.resource, resource.amount);
        }
      }, {
        key: "addMaxResource",
        value: function addMaxResource(resource) {
          this._resourceService.addMax(resource.resource, resource.amount);
        }
      }, {
        key: "addEnergyRate",
        value: function addEnergyRate(amount) {
          this._resourceService.addEnergyRate(amount);
        }
      }, {
        key: "gatherFeature",
        value: function gatherFeature(feature) {
          this._planetService.gatherFeature(feature.regionId, feature.instanceId);
        }
      }, {
        key: "replaceFeature",
        value: function replaceFeature(regionId, featureInstanceId, newFeatureName) {
          this._planetService.replaceFeature(regionId, featureInstanceId, newFeatureName);
        }
      }, {
        key: "removeFeature",
        value: function removeFeature(feature) {
          this._planetService.removeFeature(feature);
        }
      }]);

      return ActionService;
    }();

    ActionService.ctorParameters = function () {
      return [{
        type: _flags_service__WEBPACK_IMPORTED_MODULE_2__["FlagsService"]
      }, {
        type: _planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"]
      }, {
        type: _resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]
      }, {
        type: _research_service__WEBPACK_IMPORTED_MODULE_5__["ResearchService"]
      }];
    };

    ActionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_flags_service__WEBPACK_IMPORTED_MODULE_2__["FlagsService"], _planet_service__WEBPACK_IMPORTED_MODULE_3__["PlanetService"], _resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _research_service__WEBPACK_IMPORTED_MODULE_5__["ResearchService"]])], ActionService);
    /***/
  },

  /***/
  "./src/app/services/flags.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/flags.service.ts ***!
    \*******************************************/

  /*! exports provided: FlagsService */

  /***/
  function srcAppServicesFlagsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagsService", function () {
      return FlagsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FlagsService = /*#__PURE__*/function () {
      function FlagsService() {
        _classCallCheck(this, FlagsService);

        this.showOutpostPanel = false;
        this.flags = new Set();
        this.onFlagsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(FlagsService, [{
        key: "init",
        value: function init() {
          this.onFlagsUpdated.next();
        }
      }, {
        key: "check",
        value: function check(flag) {
          if (flag === '') {
            return false;
          }

          return this.flags.has(flag);
        }
      }, {
        key: "set",
        value: function set(flag) {
          if (flag === '') {
            return;
          }

          this.flags.add(flag);
          this.onFlagsUpdated.next();
        }
      }, {
        key: "clear",
        value: function clear(flag) {
          this.flags["delete"](flag);
          this.onFlagsUpdated.next();
        }
      }]);

      return FlagsService;
    }();

    FlagsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FlagsService);
    /***/
  },

  /***/
  "./src/app/services/planet.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/planet.service.ts ***!
    \********************************************/

  /*! exports provided: PlanetService */

  /***/
  function srcAppServicesPlanetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanetService", function () {
      return PlanetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_planetInteractionModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/planetInteractionModel */
    "./src/app/models/planetInteractionModel.ts");
    /* harmony import */


    var _models_planet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/planet */
    "./src/app/models/planet.ts");
    /* harmony import */


    var _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../staticData/structureDefinitions */
    "./src/app/staticData/structureDefinitions.ts");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _staticData_featureDefinitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../staticData/featureDefinitions */
    "./src/app/staticData/featureDefinitions.ts");
    /* harmony import */


    var _staticData_exploitDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../staticData/exploitDefinitions */
    "./src/app/staticData/exploitDefinitions.ts");
    /* harmony import */


    var _staticData_regionDefinitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../staticData/regionDefinitions */
    "./src/app/staticData/regionDefinitions.ts");
    /* harmony import */


    var _staticData_outpostDefinitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../staticData/outpostDefinitions */
    "./src/app/staticData/outpostDefinitions.ts");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _research_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./research.service */
    "./src/app/services/research.service.ts");

    var PlanetService = /*#__PURE__*/function () {
      function PlanetService(_resourceService, _researchService) {
        _classCallCheck(this, PlanetService);

        this._resourceService = _resourceService;
        this._researchService = _researchService;
        this.selectedPlanetChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.regionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.onFeatureSurveyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.onOutpostUpgraded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._currentSystem = null;
        this._currentSystemInteractionModels = null;
        this._selectedPlanet = null;
        this._selectedPlanetInteractionModel = null;
      }

      _createClass(PlanetService, [{
        key: "initializeSystem",
        value: function initializeSystem() {
          var _this24 = this;

          this._currentSystem = _models_planet__WEBPACK_IMPORTED_MODULE_3__["MOCK_SYSTEM"];
          this._currentSystemInteractionModels = []; // Init interaction models in the system

          this._currentSystem.forEach(function (element) {
            var interactionModel = new _models_planetInteractionModel__WEBPACK_IMPORTED_MODULE_2__["PlanetInteractionModel"]();
            interactionModel.planetInstanceId = element.instanceId;
            interactionModel.structures = [];
            interactionModel.localResources = new _models_resource__WEBPACK_IMPORTED_MODULE_5__["ResourceCollection"]();

            _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_4__["STRUCTURE_LIBRARY"].forEach(function (structureDef) {
              var structure = {
                name: structureDef.name,
                amount: 0,
                active: 0,
                canBuild: false
              };
              interactionModel.structures.push(structure);
            });

            _this24.updateInteractionModel(interactionModel);

            _this24._currentSystemInteractionModels.push(interactionModel);
          });

          this.selectPlanet(1);
        }
      }, {
        key: "getCurrentSystem",
        value: function getCurrentSystem() {
          return this._currentSystem;
        }
      }, {
        key: "getSelectedPlanet",
        value: function getSelectedPlanet() {
          return this._selectedPlanet;
        }
      }, {
        key: "getSelectedPlanetInteractionModel",
        value: function getSelectedPlanetInteractionModel() {
          return this._selectedPlanetInteractionModel;
        }
      }, {
        key: "getPlanet",
        value: function getPlanet(planetInstanceId) {
          return this._currentSystem.find(function (x) {
            return x.instanceId === planetInstanceId;
          });
        }
      }, {
        key: "getPlanetInteractionModel",
        value: function getPlanetInteractionModel(planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var model = this._currentSystemInteractionModels.find(function (x) {
            return x.planetInstanceId === planetInstanceId;
          }); // this.updateInteractionModel(model);


          return model;
        }
      }, {
        key: "getRegion",
        value: function getRegion(regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          return this.getPlanet(planetInstanceId).regions.find(function (x) {
            return x.instanceId === regionId;
          });
        }
      }, {
        key: "getFeature",
        value: function getFeature(regionId, featureId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var region = this.getPlanet(planetInstanceId).regions.find(function (x) {
            return x.instanceId === regionId;
          });
          return region.features.find(function (x) {
            return x.instanceId === featureId;
          });
        }
      }, {
        key: "getRegionDefinition",
        value: function getRegionDefinition(name) {
          return _staticData_regionDefinitions__WEBPACK_IMPORTED_MODULE_9__["REGION_LIBRARY"].find(function (def) {
            return def.name === name;
          });
        }
      }, {
        key: "getFeatureDefinition",
        value: function getFeatureDefinition(name) {
          return _staticData_featureDefinitions__WEBPACK_IMPORTED_MODULE_7__["FEATURE_LIBRARY"].find(function (def) {
            return def.name === name;
          });
        }
      }, {
        key: "getExploitDefinitionForFeature",
        value: function getExploitDefinitionForFeature(feature) {
          var featureDef = this.getFeatureDefinition(feature);
          return _staticData_exploitDefinitions__WEBPACK_IMPORTED_MODULE_8__["EXPLOIT_LIBRARY"].find(function (def) {
            return def.name === featureDef.exploitName;
          });
        }
      }, {
        key: "getStructureDefinition",
        value: function getStructureDefinition(name) {
          return _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_4__["STRUCTURE_LIBRARY"].find(function (def) {
            return def.name === name;
          });
        }
      }, {
        key: "getOutpostTypeForPlanet",
        value: function getOutpostTypeForPlanet(planetInstanceId) {
          return _staticData_outpostDefinitions__WEBPACK_IMPORTED_MODULE_10__["OUTPOST_LIBRARY"].find(function (def) {
            return def.planetType === 'temperate';
          });
        }
      }, {
        key: "isRegionVisible",
        value: function isRegionVisible(regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var region = this.getRegion(regionId, planetInstanceId);

          if (region.hiddenBehindRegion != 0) {
            var otherRegionSurvey = this.getPlanetInteractionModel(planetInstanceId).regions.getSurveyLevel(region.hiddenBehindRegion);
            return otherRegionSurvey >= region.hiddenBehindSurvey;
          }

          return true;
        }
      }, {
        key: "getNextStructureCost",
        value: function getNextStructureCost(structureName, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var interactionModel = this.getPlanetInteractionModel(planetInstanceId);
          var structure = interactionModel.structures.find(function (x) {
            return x.name === structureName;
          });
          var def = this.getStructureDefinition(structureName);
          var multiplier = Math.pow(def.costMultiplier, structure.amount);
          var multipliedCost = def.baseBuildCost.withMultiplier(multiplier);
          var reduction = Math.pow(0.95, this._researchService.getProgress('Material Science').knowledgeLevel);
          multipliedCost.applyMultiplier(reduction);
          return multipliedCost;
        }
      }, {
        key: "canBuildStructure",
        value: function canBuildStructure(structureName, planetInstanceId) {
          return this._resourceService.canAfford(this.getNextStructureCost(structureName, planetInstanceId));
        }
      }, {
        key: "canActivateStructure",
        value: function canActivateStructure(structureName, planetInstanceId) {
          var _this25 = this;

          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var interactionModel = this.getPlanetInteractionModel(planetInstanceId);
          var structure = interactionModel.structures.find(function (x) {
            return x.name === structureName;
          });

          if (structure.active >= structure.amount) {
            return false;
          }

          var def = this.getStructureDefinition(structureName);
          return def.getConsumptionRates().resources.every(function (element) {
            var newConsumption = element.amount;
            var netProduction = interactionModel.localResources.getNetProduction(element.resource);
            netProduction += _this25._resourceService.globalResources.getAmount(element.resource);
            return newConsumption <= netProduction;
          });
        }
      }, {
        key: "selectPlanet",
        value: function selectPlanet(instanceId) {
          this._selectedPlanet = this.getPlanet(instanceId);
          this._selectedPlanetInteractionModel = this.getPlanetInteractionModel(instanceId);
          this.selectedPlanetChanged.next(instanceId);
        }
      }, {
        key: "buildStructure",
        value: function buildStructure(planetId, structureName) {
          var interactionModel = this.getPlanetInteractionModel(planetId);
          var structure = interactionModel.structures.find(function (x) {
            return x.name === structureName;
          });
          var cost = this.getNextStructureCost(structureName, planetId);

          if (!this._resourceService.spend(cost)) {
            return;
          }

          structure.amount += 1;

          if (this.canActivateStructure(structureName)) {
            structure.active += 1;
          }

          this.updateInteractionModel(interactionModel);
        }
      }, {
        key: "setStructureActiveAmount",
        value: function setStructureActiveAmount(planetId, structureName, amount) {
          var interactionModel = this.getPlanetInteractionModel(planetId);
          var structure = interactionModel.structures.find(function (x) {
            return x.name === structureName;
          });
          structure.active = Math.min(amount, structure.amount);
          this.updateInteractionModel(interactionModel);
        }
      }, {
        key: "surveyRegion",
        value: function surveyRegion(amount, regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var region = this.getRegion(regionId, planetInstanceId);
          var regionDef = this.getRegionDefinition(region.name);
          var regionInteraction = this.getPlanetInteractionModel(planetInstanceId).regions.getRegion(regionId);
          var surveyProgressNeeded = this.getSurveyProgressNeeded(regionId, planetInstanceId);

          var surveyResearch = this._researchService.getProgress('Planetary Survey');

          regionInteraction.surveyProgress += amount + amount * surveyResearch.knowledgeLevel * 0.2; //TODO: calc survey speed

          if (regionInteraction.surveyProgress >= surveyProgressNeeded) {
            regionInteraction.surveyProgress -= surveyProgressNeeded;
            regionInteraction.surveyLevel++;
            regionInteraction.nextSurveyLevelCost = regionInteraction.nextSurveyLevelCost * regionDef.surveyCostMultiplier;

            this._researchService.addTheory('Planetary Survey', regionInteraction.surveyLevel * 2);

            this.regionChanged.next(this.getRegion(regionId, planetInstanceId));
          }
        }
      }, {
        key: "getSurveyProgress",
        value: function getSurveyProgress(regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          return this.getPlanetInteractionModel(planetInstanceId).regions.getRegion(regionId).surveyProgress;
        }
      }, {
        key: "getSurveyProgressNeeded",
        value: function getSurveyProgressNeeded(regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var region = this.getRegion(regionId, planetInstanceId);
          var regionInteraction = this.getPlanetInteractionModel(planetInstanceId).regions.getRegion(regionId);
          var regionDef = this.getRegionDefinition(region.name);

          if (regionInteraction.nextSurveyLevelCost == 0) {
            regionInteraction.nextSurveyLevelCost = regionDef.surveyBaseCost;
          }

          return regionInteraction.nextSurveyLevelCost;
        }
      }, {
        key: "getIdleDrones",
        value: function getIdleDrones(planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var droneCount = this._resourceService.get('drones');

          var assigned = this.getPlanetInteractionModel(planetInstanceId).regions.getTotalAssignedDrones();
          return droneCount - assigned;
        }
      }, {
        key: "canAffordDroneCost",
        value: function canAffordDroneCost(drones, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          return this.getIdleDrones(planetInstanceId) >= drones;
        }
      }, {
        key: "replaceFeature",
        value: function replaceFeature(regionId, featureId, newFeatureName, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var planet = this.getPlanet(planetInstanceId);
          var region = planet.regions.find(function (x) {
            return x.instanceId === regionId;
          });
          region.replaceFeature(featureId, newFeatureName);
          this.regionChanged.next(region);
        }
      }, {
        key: "removeFeature",
        value: function removeFeature(feature) {
          var planet = this.getPlanet(feature.planetId);
          var region = planet.regions.find(function (x) {
            return x.instanceId === feature.regionId;
          });
          var planetInteraction = this.getPlanetInteractionModel(feature.planetId);
          region.removeFeature(feature);
          planetInteraction.regions.removeFeature(region.instanceId, feature.instanceId);
          this.regionChanged.next(region);
        }
      }, {
        key: "gatherRegion",
        value: function gatherRegion(regionId, planetInstanceId) {
          var _this26 = this;

          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var planet = this.getPlanet(planetInstanceId);
          var region = planet.regions.find(function (x) {
            return x.instanceId === regionId;
          });
          var regionSurvey = this.getPlanetInteractionModel(planetInstanceId).regions.getSurveyLevel(regionId);
          region.features.forEach(function (feature) {
            var featureDefinition = _this26.getFeatureDefinition(feature.name);

            if (feature.hiddenBehindSurvey <= regionSurvey) {
              _this26._resourceService.globalResources.addCollection(featureDefinition.gatherRates);
            }
          });
        }
      }, {
        key: "gatherFeature",
        value: function gatherFeature(regionId, featureId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var planet = this.getPlanet(planetInstanceId);
          var region = planet.regions.find(function (x) {
            return x.instanceId === regionId;
          });
          var feature = region.features.find(function (x) {
            return x.instanceId === featureId;
          });
          var featureDefinition = this.getFeatureDefinition(feature.name);

          this._resourceService.globalResources.addCollection(featureDefinition.gatherRates);
        }
      }, {
        key: "buildDroneHub",
        value: function buildDroneHub(regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var region = this.getRegion(regionId, planetInstanceId);
          var regionDef = this.getRegionDefinition(region.name);
          var regionInteraction = this.getPlanetInteractionModel(planetInstanceId).regions.getRegion(regionId);
          var cost = this.getDroneHubCost(regionId, planetInstanceId);

          if (!this._resourceService.canAfford(cost)) {
            return;
          }

          if (!this._resourceService.spend(cost)) {
            return;
          }

          regionInteraction.outpostLevel++;
          regionInteraction.droneSlots++;
          regionInteraction.nextOutpostLevelCost = regionInteraction.nextOutpostLevelCost.withMultiplier(regionDef.droneHubCostMultiplier);

          this._researchService.addTheory('Drone Control', regionInteraction.outpostLevel * 2);
        }
      }, {
        key: "getDroneHubCost",
        value: function getDroneHubCost(regionId, planetInstanceId) {
          if (!planetInstanceId) {
            planetInstanceId = this.getSelectedPlanet().instanceId;
          }

          var region = this.getRegion(regionId, planetInstanceId);
          var regionDef = this.getRegionDefinition(region.name);
          var regionInteraction = this.getPlanetInteractionModel(planetInstanceId).regions.getRegion(regionId);
          var cost = regionInteraction.nextOutpostLevelCost;

          if (cost == null) {
            cost = regionDef.droneHubBaseCost;
            regionInteraction.nextOutpostLevelCost = cost;
          }

          var costReduction = Math.pow(0.95, this._researchService.getProgress('Drone Control').knowledgeLevel);
          return regionInteraction.nextOutpostLevelCost.withMultiplier(costReduction);
        }
      }, {
        key: "getFeatureDroneSlots",
        value: function getFeatureDroneSlots(feature) {
          var featureDef = this.getFeatureDefinition(feature.name);
          return featureDef.droneSlots;
        }
      }, {
        key: "assignDrone",
        value: function assignDrone(feature) {
          var regionId = feature.regionId;
          var featureId = feature.instanceId;
          var regions = this.getPlanetInteractionModel(feature.planetId).regions;

          if (regions.getRegionAssignedDrones(regionId) >= regions.getRegionDroneSlots(regionId)) {
            return;
          }

          if (regions.getFeatureAssignedDrones(regionId, featureId) >= this.getFeatureDroneSlots(feature)) {
            return;
          }

          if (regions.getTotalAssignedDrones() >= this._resourceService.get('drones')) {
            return;
          }

          regions.assignDrone(regionId, featureId);
          this.regionChanged.next(this.getRegion(regionId));
        }
      }, {
        key: "unassignDrone",
        value: function unassignDrone(feature) {
          var regionId = feature.regionId;
          var featureId = feature.instanceId;
          var regions = this.getPlanetInteractionModel(feature.planetId).regions;

          if (regions.getRegionAssignedDrones(regionId) <= 0) {
            return;
          }

          if (regions.getFeatureAssignedDrones(regionId, featureId) <= 0) {
            return;
          }

          regions.unassignDrone(regionId, featureId);
          this.regionChanged.next(this.getRegion(regionId));
        }
      }, {
        key: "updateInteractionModel",
        value: function updateInteractionModel(interactionModel) {
          interactionModel.structures.forEach(function (element) {
            element.canBuild = true;
          });
        }
      }]);

      return PlanetService;
    }();

    PlanetService.ctorParameters = function () {
      return [{
        type: _resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"]
      }, {
        type: _research_service__WEBPACK_IMPORTED_MODULE_12__["ResearchService"]
      }];
    };

    PlanetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_11__["ResourceService"], _research_service__WEBPACK_IMPORTED_MODULE_12__["ResearchService"]])], PlanetService);
    /***/
  },

  /***/
  "./src/app/services/research.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/research.service.ts ***!
    \**********************************************/

  /*! exports provided: ResearchService */

  /***/
  function srcAppServicesResearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResearchService", function () {
      return ResearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../staticData/researchDefinitions */
    "./src/app/staticData/researchDefinitions.ts");
    /* harmony import */


    var _staticData_upgradeDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../staticData/upgradeDefinitions */
    "./src/app/staticData/upgradeDefinitions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _models_research__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/research */
    "./src/app/models/research.ts");
    /* harmony import */


    var _flags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./flags.service */
    "./src/app/services/flags.service.ts");

    var ResearchService = /*#__PURE__*/function () {
      function ResearchService(_flagService, _resourceService) {
        _classCallCheck(this, ResearchService);

        this._flagService = _flagService;
        this._resourceService = _resourceService;
        this.researchProgress = [];
        this.unlockedUpgrades = [];
        this.completedUpgrades = [];
        this.onResearchUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ResearchService, [{
        key: "getDiscipline",
        value: function getDiscipline(discipline) {
          return _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__["RESEARCH_LIBRARY"].find(function (x) {
            return x.name === discipline;
          });
        }
      }, {
        key: "getDisciplines",
        value: function getDisciplines() {
          return _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__["RESEARCH_LIBRARY"];
        }
      }, {
        key: "hasProgress",
        value: function hasProgress(discipline) {
          return this.researchProgress.find(function (x) {
            return x.discipline === discipline;
          }) != null;
        }
      }, {
        key: "getProgress",
        value: function getProgress(discipline) {
          var progress = this.researchProgress.find(function (x) {
            return x.discipline === discipline;
          });

          if (progress != null) {
            return progress;
          }

          progress = new _models_research__WEBPACK_IMPORTED_MODULE_6__["ResearchProgress"]();
          progress.discipline = discipline;
          this.researchProgress.push(progress);
          return progress;
        }
      }, {
        key: "addKnowledge",
        value: function addKnowledge(discipline, amount) {
          var def = this.getDiscipline(discipline);
          var progress = this.getProgress(discipline);
          var needed = this.knowledgeNeeded(discipline);
          progress.knowledgeProgress += amount;

          while (progress.knowledgeProgress >= needed) {
            progress.knowledgeProgress -= needed;
            progress.knowledgeLevel++;

            if (def.upgradeUnlocks.has(progress.knowledgeLevel)) {
              this.unlockedUpgrades.push(def.upgradeUnlocks.get(progress.knowledgeLevel));
            }

            if (def.flagUnlocks.has(progress.knowledgeLevel)) {
              this._flagService.set(def.upgradeUnlocks.get(progress.knowledgeLevel));
            }

            this.onResearchUpdated.next();
          }
        }
      }, {
        key: "addTheory",
        value: function addTheory(discipline, amount) {
          var progress = this.getProgress(discipline);
          var needed = this.theoryNeeded(discipline);
          progress.theoryProgress += amount;

          while (progress.theoryProgress >= needed) {
            progress.theoryProgress -= needed;
            progress.theoryLevel++;
            this.onResearchUpdated.next();
          }
        }
      }, {
        key: "knowledgeNeeded",
        value: function knowledgeNeeded(disciplineName) {
          var discipline = _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__["RESEARCH_LIBRARY"].find(function (x) {
            return x.name === disciplineName;
          });

          if (discipline == null) {
            return 0;
          }

          var progress = this.getProgress(disciplineName);
          var baseCost = _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__["ResearchDiscipline"].baseKnowledgeCost * discipline.baseCostMultiplier;
          var costExponent = _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__["ResearchDiscipline"].knowledgeExpCost * discipline.compoundingCostMultiplier;
          return baseCost * Math.pow(costExponent, progress.knowledgeLevel);
        }
      }, {
        key: "theoryNeeded",
        value: function theoryNeeded(disciplineName) {
          return _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_2__["ResearchDiscipline"].baseTheoryCost;
        }
      }, {
        key: "theoryBonus",
        value: function theoryBonus(discipline) {
          var progress = this.getProgress(discipline);
          return Math.pow(2, progress.theoryLevel);
        }
      }, {
        key: "isUpgradeCompleted",
        value: function isUpgradeCompleted(upgrade) {
          return this.completedUpgrades.some(function (x) {
            return x === upgrade;
          });
        }
      }, {
        key: "areUpgradesCompleted",
        value: function areUpgradesCompleted(upgrades) {
          var _this27 = this;

          var completed = true;
          upgrades.forEach(function (upgrade) {
            completed = completed && _this27.isUpgradeCompleted(upgrade);
          });
          return completed;
        }
      }, {
        key: "getAvailableUpgrades",
        value: function getAvailableUpgrades() {
          return this.unlockedUpgrades;
        }
      }, {
        key: "getCompletedUpgrades",
        value: function getCompletedUpgrades() {
          return this.completedUpgrades;
        }
      }, {
        key: "getUpgradeDefinition",
        value: function getUpgradeDefinition(upgrade) {
          var def = _staticData_upgradeDefinitions__WEBPACK_IMPORTED_MODULE_3__["UPGRADE_LIBRARY"].find(function (x) {
            return x.name === upgrade;
          });

          if (def == null) {
            def = new _staticData_upgradeDefinitions__WEBPACK_IMPORTED_MODULE_3__["UpgradeDefinition"](upgrade, 'MISSING');

            _staticData_upgradeDefinitions__WEBPACK_IMPORTED_MODULE_3__["UPGRADE_LIBRARY"].push(def);
          }

          return def;
        }
      }, {
        key: "getNextLevelWithAdvancement",
        value: function getNextLevelWithAdvancement(discipline) {
          var disc = this.getDiscipline(discipline);
          var currLevel = this.getProgress(discipline).knowledgeLevel;
          var nextLv = 0;
          disc.upgradeUnlocks.forEach(function (name, lv) {
            if (lv <= currLevel) {
              return;
            }

            if (nextLv == 0 || lv < nextLv) {
              nextLv = lv;
            }
          });
          disc.flagUnlocks.forEach(function (name, lv) {
            if (lv <= currLevel) {
              return;
            }

            if (nextLv == 0 || lv < nextLv) {
              nextLv = lv;
            }
          });
          return nextLv;
        }
      }, {
        key: "buyUpgrade",
        value: function buyUpgrade(upgrade) {
          var def = this.getUpgradeDefinition(upgrade);
          var upgradeCost = def.cost;
          var result = false;

          if (!this.completedUpgrades.some(function (x) {
            return x === upgrade;
          })) {
            var spentResourcesSuccessfully = this._resourceService.spend(upgradeCost);

            if (spentResourcesSuccessfully) {
              result = true;
              var unlockIndex = this.unlockedUpgrades.indexOf(upgrade);

              if (unlockIndex > -1) {
                this.unlockedUpgrades.splice(unlockIndex, 1);
              }

              this.completedUpgrades.push(upgrade);
            }
          }

          this.onResearchUpdated.next();
          return result;
        }
      }]);

      return ResearchService;
    }();

    ResearchService.ctorParameters = function () {
      return [{
        type: _flags_service__WEBPACK_IMPORTED_MODULE_7__["FlagsService"]
      }, {
        type: _resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]
      }];
    };

    ResearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_flags_service__WEBPACK_IMPORTED_MODULE_7__["FlagsService"], _resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]])], ResearchService);
    /***/
  },

  /***/
  "./src/app/services/resource.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/resource.service.ts ***!
    \**********************************************/

  /*! exports provided: ResourceService */

  /***/
  function srcAppServicesResourceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceService", function () {
      return ResourceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./time.service */
    "./src/app/services/time.service.ts");

    var ResourceService = /*#__PURE__*/function () {
      function ResourceService(_timeService) {
        _classCallCheck(this, ResourceService);

        this._timeService = _timeService;
        this.globalResources = new _models_resource__WEBPACK_IMPORTED_MODULE_2__["ResourceCollection"]();
        this.discoveredResources = [];
        this.energyRate = 0.45;
      }

      _createClass(ResourceService, [{
        key: "init",
        value: function init() {
          var _this28 = this;

          this._timeService.tick.subscribe(function (x) {
            return _this28.update(x);
          });
        }
      }, {
        key: "update",
        value: function update(dt) {
          var _this29 = this;

          this.globalResources.resources.forEach(function (element) {
            if (!_this29.discoveredResources.includes(element.resource) && _this29.globalResources.has(element.resource)) {
              _this29.discoveredResources.push(element.resource);
            }
          });
        }
      }, {
        key: "get",
        value: function get(resource) {
          return this.globalResources.getAmount(resource);
        }
      }, {
        key: "getMax",
        value: function getMax(resource) {
          return this.globalResources.getMax(resource);
        }
      }, {
        key: "getProduction",
        value: function getProduction(resource) {
          return this.globalResources.getProduction(resource);
        }
      }, {
        key: "getConsumption",
        value: function getConsumption(resource) {
          return this.globalResources.getConsumption(resource);
        }
      }, {
        key: "canAfford",
        value: function canAfford(resources) {
          var _this30 = this;

          var result = true;

          if (resources instanceof _models_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]) {
            return this.globalResources.has(resources.resource, resources.amount);
          }

          resources.resources.forEach(function (element) {
            if (!_this30.globalResources.has(element.resource, element.amount)) {
              result = false;
            }
          });
          return result;
        }
      }, {
        key: "spend",
        value: function spend(resources) {
          var couldAfford = true;

          if (resources instanceof _models_resource__WEBPACK_IMPORTED_MODULE_2__["Resource"]) {
            return this.globalResources.remove(resources.resource, resources.amount);
          }

          if (!this.canAfford(resources)) {
            return false;
          }

          couldAfford = this.globalResources.removeCollection(resources);
          return couldAfford;
        }
      }, {
        key: "addMax",
        value: function addMax(resource, amount) {
          var currentMax = this.globalResources.getMax(resource);
          this.globalResources.setMax(resource, currentMax + amount);
        }
      }, {
        key: "addEnergyRate",
        value: function addEnergyRate(amount) {
          this.energyRate += amount;
        }
      }, {
        key: "isDiscovered",
        value: function isDiscovered(resource) {
          return this.discoveredResources.includes(resource);
        }
      }]);

      return ResourceService;
    }();

    ResourceService.ctorParameters = function () {
      return [{
        type: _time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]
      }];
    };

    ResourceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]])], ResourceService);
    /***/
  },

  /***/
  "./src/app/services/simulation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/simulation.service.ts ***!
    \************************************************/

  /*! exports provided: SimulationService */

  /***/
  function srcAppServicesSimulationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimulationService", function () {
      return SimulationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resource.service */
    "./src/app/services/resource.service.ts");
    /* harmony import */


    var _time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./time.service */
    "./src/app/services/time.service.ts");
    /* harmony import */


    var _planet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../staticData/structureDefinitions */
    "./src/app/staticData/structureDefinitions.ts");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _staticData_featureDefinitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../staticData/featureDefinitions */
    "./src/app/staticData/featureDefinitions.ts");
    /* harmony import */


    var _staticData_effectDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../staticData/effectDefinitions */
    "./src/app/staticData/effectDefinitions.ts");
    /* harmony import */


    var _research_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./research.service */
    "./src/app/services/research.service.ts");

    var SimulationService = /*#__PURE__*/function () {
      function SimulationService(_researchService, _resourceService, _timeService, _planetService) {
        _classCallCheck(this, SimulationService);

        this._researchService = _researchService;
        this._resourceService = _resourceService;
        this._timeService = _timeService;
        this._planetService = _planetService;
      }

      _createClass(SimulationService, [{
        key: "init",
        value: function init() {
          var _this31 = this;

          this._timeService.tick.subscribe(function (x) {
            return _this31.update(x);
          });

          this._resourceService.globalResources.setMax('drones', 50); //this._resourceService.globalResources.setMax('metal', 500);
          //this._resourceService.globalResources.setMax('rareMetal', 500);
          //this._resourceService.globalResources.setMax('silicate', 500);
          //this._resourceService.globalResources.setMax('hydrocarbon', 500);
          //this._resourceService.globalResources.setMax('duranium', 500);


          this._resourceService.globalResources.setMax('energy', 10);

          this._resourceService.globalResources.add('energy', 10);

          this._resourceService.globalResources.add('metal', 5); //this._resourceService.globalResources.add('drones', 50);
          //this._resourceService.globalResources.add('metal', 5000);
          //this._resourceService.globalResources.add('silicate', 5000);
          //this._resourceService.globalResources.add('rareMetal', 5000);
          //this._resourceService.globalResources.add('hydrocarbon', 5000);
          //this._resourceService.globalResources.add('nanochips', 5000);

        }
      }, {
        key: "reset",
        value: function reset() {}
      }, {
        key: "update",
        value: function update(dT) {
          var _this32 = this;

          var globalResources = this._resourceService.globalResources;
          globalResources.resetRates();

          var system = this._planetService.getCurrentSystem();

          system.forEach(function (planet) {
            _this32.updatePlanet(dT, planet.instanceId);
          });
          this.updateEnergy(dT);
        }
      }, {
        key: "updateEnergy",
        value: function updateEnergy(dT) {
          var rate = this._resourceService.energyRate;
          rate += rate * this._researchService.getProgress('Power Systems').knowledgeLevel * 0.2;

          this._resourceService.globalResources.add('energy', rate * (dT / 1000));
        }
      }, {
        key: "updatePlanet",
        value: function updatePlanet(dT, instanceId) {
          this.updateLocalPlanetProductionRates(instanceId);
          this.addNetLocalProductionRatesToGlobalProductionRates(instanceId);
          this.runPlanetProduction(dT, instanceId);
        }
      }, {
        key: "updateLocalPlanetProductionRates",
        value: function updateLocalPlanetProductionRates(instanceId) {
          var _this33 = this;

          var regions = this._planetService.getPlanet(instanceId).regions;

          var interactionModel = this._planetService.getPlanetInteractionModel(instanceId);

          interactionModel.localResources.resetRates();
          var regionInteractions = interactionModel.regions;
          regionInteractions.regions.forEach(function (regionInteraction) {
            var region = regions.find(function (x) {
              return x.instanceId === regionInteraction.regionInstanceId;
            });

            if (regionInteraction.surveyLevel == 0) {
              return;
            }

            regionInteraction.features.forEach(function (featureInteraction) {
              var feature = region.features.find(function (x) {
                return x.instanceId === featureInteraction.featureInstanceId;
              });

              if (feature.hiddenBehindSurvey > regionInteraction.surveyLevel) {
                return;
              }

              var assignedDrones = featureInteraction.assignedDrones;

              _this33.updateFeatureProductionRate(feature, featureInteraction, assignedDrones, interactionModel.localResources);
            });
          });
          interactionModel.structures.forEach(function (structure) {
            _this33.updateStructureProductionRate(structure, interactionModel.localResources);
          });
          interactionModel.structures.forEach(function (structure) {
            _this33.updateStructureConsumptionRate(structure, interactionModel.localResources);
          });
        }
      }, {
        key: "updateFeatureProductionRate",
        value: function updateFeatureProductionRate(feature, featureInteraction, assignedDrones, resources) {
          var def = _staticData_featureDefinitions__WEBPACK_IMPORTED_MODULE_7__["FEATURE_LIBRARY"].find(function (x) {
            return feature.name === x.name;
          });

          var droneRate = 0.05;

          if (this._researchService.isUpgradeCompleted('Bandwidth Multiplexing')) {
            droneRate += 0.10;
          }

          if (this._researchService.isUpgradeCompleted('Adaptive Tooling')) {
            droneRate += 0.15;
          }

          if (this._researchService.isUpgradeCompleted('Heuristic Processors')) {
            droneRate += 0.30;
          }

          var researchMultiplier = 1 + this._researchService.getProgress('Resource Exploitation').knowledgeLevel * 0.1;

          if (def.hasGather && assignedDrones > 0) {
            def.gatherRates.resources.forEach(function (x) {
              resources.addProductionRate(x.resource, x.amount * assignedDrones * droneRate * researchMultiplier);
            });
          }

          def.effects.forEach(function (e) {
            if (e instanceof _staticData_effectDefinitions__WEBPACK_IMPORTED_MODULE_8__["BaseProductionEffect"]) {
              resources.addProductionRate(e.resource, e.amount);
            }

            if (e instanceof _staticData_effectDefinitions__WEBPACK_IMPORTED_MODULE_8__["BaseConsumptionEffect"]) {
              resources.addConsumptionRate(e.resource, e.amount);
            }
          });
        }
      }, {
        key: "getActiveEffectsForRegion",
        value: function getActiveEffectsForRegion(region, regionInteraction) {
          var result = [];
          region.features.forEach(function (feature) {
            var featureDef = _staticData_featureDefinitions__WEBPACK_IMPORTED_MODULE_7__["FEATURE_LIBRARY"].find(function (x) {
              return feature.name === x.name;
            });

            result = result.concat(featureDef.effects);
          });
          return result;
        }
      }, {
        key: "updateStructureProductionRate",
        value: function updateStructureProductionRate(structure, resources) {
          var structureDef = _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_5__["STRUCTURE_LIBRARY"].find(function (x) {
            return x.name === structure.name;
          });

          structureDef.effects.forEach(function (element) {
            if (element instanceof _staticData_effectDefinitions__WEBPACK_IMPORTED_MODULE_8__["BaseProductionEffect"]) {
              var resourceGen = element;
              resources.addProductionRate(resourceGen.resource, resourceGen.amount * structure.active);
            }
          });
        } // Adds resource consumption to local resources.
        // If consumption ends up higher than production, spend from global stockpile to make it up.
        // If we can't, power down to a sustainable number of buildings.

      }, {
        key: "updateStructureConsumptionRate",
        value: function updateStructureConsumptionRate(structure, resources) {
          var _this34 = this;

          var structureDef = _staticData_structureDefinitions__WEBPACK_IMPORTED_MODULE_5__["STRUCTURE_LIBRARY"].find(function (x) {
            return x.name === structure.name;
          });

          var currentActive = structure.active;
          var finalActive = structure.active;
          var consumption = new _models_resource__WEBPACK_IMPORTED_MODULE_6__["ResourceCollection"](); // Add all possible consumption, but move finalActive down to the max sustainable amount of active structures

          structureDef.effects.forEach(function (element) {
            if (element instanceof _staticData_effectDefinitions__WEBPACK_IMPORTED_MODULE_8__["BaseConsumptionEffect"]) {
              var resource = element.resource;
              var amountPerActive = element.amount;
              var consumeRate = amountPerActive * currentActive;
              consumption.add(resource, consumeRate);
              var prodRate = resources.getNetProduction(resource);

              var stock = _this34._resourceService.globalResources.getAmount(resource);

              if (prodRate + stock < consumeRate) {
                var deficit = consumeRate - (prodRate + stock);
                var deficitBldgs = Math.ceil(deficit / amountPerActive);
                finalActive = Math.min(finalActive, currentActive - deficitBldgs);
              }
            }
          }); // If we ended up needing to power down structures, power them down and reduce consumption accordingly

          if (finalActive < currentActive) {
            structure.active = finalActive;
            structureDef.effects.forEach(function (element) {
              var resource = element.resource;
              var amountPerActive = element.amount;
              consumption.remove(resource, amountPerActive * (currentActive - finalActive));
            });
          }

          consumption.resources.forEach(function (resource) {
            resources.addConsumptionRate(resource.resource, resource.amount);
          });
        }
      }, {
        key: "addNetLocalProductionRatesToGlobalProductionRates",
        value: function addNetLocalProductionRatesToGlobalProductionRates(instanceId) {
          var _this35 = this;

          var interactionModel = this._planetService.getPlanetInteractionModel(instanceId);

          interactionModel.localResources.resources.forEach(function (resource) {
            _this35._resourceService.globalResources.addProductionRate(resource.resource, resource.productionRate);
          });
        }
      }, {
        key: "runPlanetProduction",
        value: function runPlanetProduction(dT, instanceId) {
          var _this36 = this;

          var interactionModel = this._planetService.getPlanetInteractionModel(instanceId);

          interactionModel.localResources.resources.forEach(function (resource) {
            if (resource.isPower()) {
              return;
            }

            var production = resource.getNetProductionRate();

            if (production > 0) {
              _this36._resourceService.globalResources.add(resource.resource, production * (dT / 1000));
            } else {
              _this36._resourceService.globalResources.remove(resource.resource, Math.abs(production * (dT / 1000)));
            }
          });
        }
      }]);

      return SimulationService;
    }();

    SimulationService.ctorParameters = function () {
      return [{
        type: _research_service__WEBPACK_IMPORTED_MODULE_9__["ResearchService"]
      }, {
        type: _resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]
      }, {
        type: _time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]
      }, {
        type: _planet_service__WEBPACK_IMPORTED_MODULE_4__["PlanetService"]
      }];
    };

    SimulationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_research_service__WEBPACK_IMPORTED_MODULE_9__["ResearchService"], _resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"], _planet_service__WEBPACK_IMPORTED_MODULE_4__["PlanetService"]])], SimulationService);
    /***/
  },

  /***/
  "./src/app/services/task.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/task.service.ts ***!
    \******************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppServicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _research_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./research.service */
    "./src/app/services/research.service.ts");
    /* harmony import */


    var _models_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/task */
    "./src/app/models/task.ts");
    /* harmony import */


    var _time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./time.service */
    "./src/app/services/time.service.ts");
    /* harmony import */


    var _planet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./planet.service */
    "./src/app/services/planet.service.ts");
    /* harmony import */


    var _staticData_actionDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../staticData/actionDefinitions */
    "./src/app/staticData/actionDefinitions.ts");
    /* harmony import */


    var _action_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./action.service */
    "./src/app/services/action.service.ts");
    /* harmony import */


    var _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../staticData/researchDefinitions */
    "./src/app/staticData/researchDefinitions.ts");

    var TaskService = /*#__PURE__*/function () {
      function TaskService(_actionService, _planetService, _researchService, _timeService) {
        _classCallCheck(this, TaskService);

        this._actionService = _actionService;
        this._planetService = _planetService;
        this._researchService = _researchService;
        this._timeService = _timeService;
        this._currentTask = null;
      }

      _createClass(TaskService, [{
        key: "init",
        value: function init() {
          var _this37 = this;

          this._timeService.tick.subscribe(function (x) {
            return _this37.update(x);
          });
        }
      }, {
        key: "getCurrentTask",
        value: function getCurrentTask() {
          return this._currentTask;
        }
      }, {
        key: "clearTask",
        value: function clearTask() {
          this._currentTask = null;
        }
      }, {
        key: "beginTask",
        value: function beginTask(task) {
          this._currentTask = task;
        }
      }, {
        key: "beginFeatureTask",
        value: function beginFeatureTask(feature, taskName) {
          var featureDef = this._planetService.getFeatureDefinition(feature.name);

          var featureInteraction = this._planetService.getPlanetInteractionModel(feature.planetId).regions.getFeature(feature.regionId, feature.instanceId);

          var taskDef = featureDef.tasks.find(function (x) {
            return x.name === taskName;
          });
          var taskInstance = featureInteraction.tasks.find(function (x) {
            return x.name === taskName;
          });

          if (taskInstance == null) {
            taskInstance = new _models_task__WEBPACK_IMPORTED_MODULE_3__["FeatureTask"]();
            taskInstance.name = taskDef.name;
            taskInstance.needed = taskDef.needed;
            taskInstance.definition = taskDef;
            taskInstance.planetId = feature.planetId;
            taskInstance.regionId = feature.regionId;
            taskInstance.featureId = feature.instanceId;
            taskInstance.progress = 0;
            featureInteraction.tasks.push(taskInstance);
          }

          this.beginTask(taskInstance);

          this._planetService.regionChanged.next(this._planetService.getRegion(feature.regionId, feature.planetId));
        }
      }, {
        key: "beginSurvey",
        value: function beginSurvey(planetId, regionId) {
          var region = this._planetService.getRegion(regionId, planetId);

          var surveyTask = new _models_task__WEBPACK_IMPORTED_MODULE_3__["SurveyTask"]();
          surveyTask.name = "Surveying " + region.name;
          surveyTask.planetId = planetId;
          surveyTask.regionId = regionId;
          surveyTask.progress = 0;
          surveyTask.needed = 100;
          this._currentTask = surveyTask;
        }
      }, {
        key: "isSurveyRunning",
        value: function isSurveyRunning(planetId, regionId) {
          if (this._currentTask == null || !(this._currentTask instanceof _models_task__WEBPACK_IMPORTED_MODULE_3__["SurveyTask"])) {
            return false;
          }

          return this._currentTask.planetId == planetId && this._currentTask.regionId == regionId;
        }
      }, {
        key: "beginResearch",
        value: function beginResearch(discipline) {
          var researchTask = new _models_task__WEBPACK_IMPORTED_MODULE_3__["ResearchTask"]();
          researchTask.name = "Researching " + discipline;
          researchTask.discipline = discipline;
          researchTask.progress = 0;
          researchTask.needed = 100;
          this._currentTask = researchTask;
        }
      }, {
        key: "update",
        value: function update(dT) {
          if (this._currentTask == null) {
            return;
          }

          if (this._currentTask instanceof _models_task__WEBPACK_IMPORTED_MODULE_3__["SurveyTask"]) {
            var surveyTask = this._currentTask;
            this.tickSurveyTask(surveyTask, dT);
          }

          if (this._currentTask instanceof _models_task__WEBPACK_IMPORTED_MODULE_3__["ResearchTask"]) {
            var researchTask = this._currentTask;
            this.tickResearchTask(researchTask, dT);
          }

          if (this._currentTask instanceof _models_task__WEBPACK_IMPORTED_MODULE_3__["FeatureTask"]) {
            var featureTask = this._currentTask;
            this.tickFeatureTask(featureTask, dT);
          }
        }
      }, {
        key: "tickSurveyTask",
        value: function tickSurveyTask(task, dT) {
          var planetId = task.planetId;
          var regionId = task.regionId;

          this._planetService.surveyRegion(0.001 * dT * 1.32, regionId, planetId);

          task.needed = this._planetService.getSurveyProgressNeeded(regionId, planetId);
          task.progress = this._planetService.getPlanetInteractionModel(planetId).regions.getRegion(regionId).surveyProgress;
        }
      }, {
        key: "tickResearchTask",
        value: function tickResearchTask(task, dT) {
          var discipline = task.discipline;

          var theoryBonus = this._researchService.theoryBonus(discipline);

          this._researchService.addKnowledge(discipline, _staticData_researchDefinitions__WEBPACK_IMPORTED_MODULE_8__["ResearchDiscipline"].baseResearchPerSec * theoryBonus * dT * 0.001);

          task.needed = this._researchService.knowledgeNeeded(discipline);
          task.progress = this._researchService.getProgress(discipline).knowledgeProgress;
        }
      }, {
        key: "tickFeatureTask",
        value: function tickFeatureTask(task, dT) {
          var planetId = task.planetId;
          var regionId = task.regionId;
          var featureId = task.featureId;
          task.progress += task.definition.baseRate * dT;

          if (task.progress >= task.needed) {
            this.completeFeatureTask(task);
          }
        }
      }, {
        key: "completeFeatureTask",
        value: function completeFeatureTask(task) {
          var _this38 = this;

          task.definition.resultsOnComplete.forEach(function (action) {
            if (action instanceof _staticData_actionDefinitions__WEBPACK_IMPORTED_MODULE_6__["FeatureAction"]) {
              action.doFeatureAction(_this38._actionService, _this38._planetService.getFeature(task.regionId, task.featureId, task.planetId));
            } else {
              action.doAction(_this38._actionService);
            }
          });

          if (task.definition.repeatable) {
            task.progress = 0;
          } else {
            this.clearTask();
          }

          this._planetService.regionChanged.next(this._planetService.getRegion(task.regionId, task.planetId));
        }
      }]);

      return TaskService;
    }();

    TaskService.ctorParameters = function () {
      return [{
        type: _action_service__WEBPACK_IMPORTED_MODULE_7__["ActionService"]
      }, {
        type: _planet_service__WEBPACK_IMPORTED_MODULE_5__["PlanetService"]
      }, {
        type: _research_service__WEBPACK_IMPORTED_MODULE_2__["ResearchService"]
      }, {
        type: _time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"]
      }];
    };

    TaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_action_service__WEBPACK_IMPORTED_MODULE_7__["ActionService"], _planet_service__WEBPACK_IMPORTED_MODULE_5__["PlanetService"], _research_service__WEBPACK_IMPORTED_MODULE_2__["ResearchService"], _time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"]])], TaskService);
    /***/
  },

  /***/
  "./src/app/services/time.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/time.service.ts ***!
    \******************************************/

  /*! exports provided: TimeService */

  /***/
  function srcAppServicesTimeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeService", function () {
      return TimeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);

    var tickRate = 100;

    var TimeService = /*#__PURE__*/function () {
      function TimeService() {
        _classCallCheck(this, TimeService);

        this.tick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(TimeService, [{
        key: "startGame",
        value: function startGame() {
          var _this39 = this;

          if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this._timerSubscription)) {
            this._timerSubscription.unsubscribe();
          }

          this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(tickRate).subscribe(function (x) {
            return _this39.tick.next(tickRate);
          });
        }
      }]);

      return TimeService;
    }();

    TimeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TimeService);
    /***/
  },

  /***/
  "./src/app/shared/material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/material.module.ts ***!
    \*******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]],
      exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/staticData/abilityDefinitions.ts":
  /*!**************************************************!*\
    !*** ./src/app/staticData/abilityDefinitions.ts ***!
    \**************************************************/

  /*! exports provided: AbilityDefinition, FeatureAbilityDefinition, ShipAbilityDefinition, SHIP_ABILITY_LIBRARY */

  /***/
  function srcAppStaticDataAbilityDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbilityDefinition", function () {
      return AbilityDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureAbilityDefinition", function () {
      return FeatureAbilityDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipAbilityDefinition", function () {
      return ShipAbilityDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIP_ABILITY_LIBRARY", function () {
      return SHIP_ABILITY_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./actionDefinitions */
    "./src/app/staticData/actionDefinitions.ts"); // Defines ship abilities and feature abilities


    var AbilityDefinition = /*#__PURE__*/function () {
      function AbilityDefinition() {
        _classCallCheck(this, AbilityDefinition);

        this.costs = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
        this.actions = [];
        this.visibleFlags = [];
        this.hiddenFlag = '';
        this.visibleUpgrade = '';
        this.visibleNeededResearchName = '';
        this.visibleNeededResearchLevel = 0;
        this.researchNeeded = '';
        this.researchLevelNeeded = 0;
        this.upgradeNeeded = '';
        this.costScalesWithResource = '';
        this.costScalesWithTheory = '';
        this.costMultiplier = 2.0;
      }

      _createClass(AbilityDefinition, [{
        key: "setDescription",
        value: function setDescription(desc) {
          this.desc = desc;
          return this;
        }
      }, {
        key: "addVisibleFlag",
        value: function addVisibleFlag(flag) {
          this.visibleFlags.push(flag);
          return this;
        }
      }, {
        key: "setHiddenFlag",
        value: function setHiddenFlag(flag) {
          this.hiddenFlag = flag;
          return this;
        }
      }, {
        key: "setVisibleUpgrade",
        value: function setVisibleUpgrade(upgrade) {
          this.visibleUpgrade = upgrade;
          return this;
        }
      }, {
        key: "setVisibleNeededResearch",
        value: function setVisibleNeededResearch(discipline, level) {
          this.visibleNeededResearchName = discipline;
          this.visibleNeededResearchLevel = level;
          return this;
        }
      }, {
        key: "setUpgradeNeeded",
        value: function setUpgradeNeeded(upgrade) {
          this.upgradeNeeded = upgrade;
          return this;
        }
      }, {
        key: "addCost",
        value: function addCost(resource, amount) {
          this.costs.add(resource, amount);
          return this;
        }
      }, {
        key: "addCooldown",
        value: function addCooldown(cooldown) {
          this.cooldown = cooldown;
          return this;
        }
      }, {
        key: "addAction",
        value: function addAction(action) {
          this.actions.push(action);
          return this;
        }
      }, {
        key: "addsMaxResource",
        value: function addsMaxResource(resource, amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__["AddMaxResourceAction"](resource, amount);
          this.addAction(action);
          return this;
        }
      }, {
        key: "addsEnergyRate",
        value: function addsEnergyRate(amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__["AddEnergyRateAction"](amount);
          this.addAction(action);
          return this;
        }
      }, {
        key: "grantsResource",
        value: function grantsResource(resource, amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__["AddResourceAction"](resource, amount);
          this.addAction(action);
          return this;
        }
      }, {
        key: "grantsTheory",
        value: function grantsTheory(discipline, amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__["AddTheoryAction"](discipline, amount);
          this.addAction(action);
          return this;
        }
      }, {
        key: "setsFlag",
        value: function setsFlag(flag) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__["FlagAction"](flag);
          this.addAction(action);
          return this;
        }
      }, {
        key: "scalesWithTheory",
        value: function scalesWithTheory(discipline, multiplier) {
          this.costScalesWithTheory = discipline;
          this.costMultiplier = multiplier;
          return this;
        }
      }, {
        key: "scalesWithResourceCount",
        value: function scalesWithResourceCount(resource, multiplier) {
          this.costScalesWithResource = resource;
          this.costMultiplier = multiplier;
          return this;
        }
      }]);

      return AbilityDefinition;
    }();

    var FeatureAbilityDefinition = /*#__PURE__*/function (_AbilityDefinition) {
      _inherits(FeatureAbilityDefinition, _AbilityDefinition);

      var _super4 = _createSuper(FeatureAbilityDefinition);

      function FeatureAbilityDefinition() {
        var _this40;

        _classCallCheck(this, FeatureAbilityDefinition);

        _this40 = _super4.apply(this, arguments);
        _this40.droneHubLevelNeeded = 0;
        return _this40;
      }

      return FeatureAbilityDefinition;
    }(AbilityDefinition);

    var ShipAbilityDefinition = /*#__PURE__*/function (_AbilityDefinition2) {
      _inherits(ShipAbilityDefinition, _AbilityDefinition2);

      var _super5 = _createSuper(ShipAbilityDefinition);

      function ShipAbilityDefinition(name) {
        var _this41;

        _classCallCheck(this, ShipAbilityDefinition);

        _this41 = _super5.call(this);
        _this41.name = name;
        return _this41;
      }

      return ShipAbilityDefinition;
    }(AbilityDefinition);

    var SHIP_ABILITY_LIBRARY = [new ShipAbilityDefinition('Build Drone').addCost('metal', 5).addCost('energy', 1).addCooldown(1).grantsResource('drones', 1).scalesWithResourceCount('drones', 1.2), new ShipAbilityDefinition('Fabricate Nanochip').addVisibleFlag('fabricatorRepaired').addCost('energy', 3).addCost('rareMetal', 0.1).addCost('silicate', 8).addCooldown(8).grantsResource('nanochips', 1), new ShipAbilityDefinition('Repair Fabricator').addCost('metal', 20).addVisibleFlag('shuttleFound').setsFlag('fabricatorRepaired').setHiddenFlag('fabricatorRepaired'), new ShipAbilityDefinition('Repair Survey Scanner').addCost('nanochips', 55).addVisibleFlag('computerRepaired').setsFlag('surveyRepaired').setHiddenFlag('surveyRepaired'), new ShipAbilityDefinition('Repair Drone Relay').addCost('nanochips', 2).addVisibleFlag('shuttleFound').setsFlag('droneRelayRepaired').setHiddenFlag('droneRelayRepaired'), new ShipAbilityDefinition('Repair Hull').addCost('silksteel', 50).setVisibleNeededResearch('Material Science', 5).setsFlag('hullRepaired').setHiddenFlag('hullRepaired'), new ShipAbilityDefinition('Repair Navigation Systems').addCost('cogitex', 50).setVisibleNeededResearch('Electronics', 5).setsFlag('navRepaired').setHiddenFlag('navRepaired'), new ShipAbilityDefinition('Refit Drive Core').addCost('hyperlattice', 50).setVisibleNeededResearch('Hypertopology', 1).setsFlag('driveRepaired').setHiddenFlag('driveRepaired'), new ShipAbilityDefinition('Refit Inertial Dampeners').addCost('gravalloy', 50).setVisibleNeededResearch('Gravitics', 1).setsFlag('gravRepaired').setHiddenFlag('gravRepaired'), new ShipAbilityDefinition('Launch Ship').addVisibleFlag('hullRepaired').addVisibleFlag('navRepaired').addVisibleFlag('driveRepaired').addVisibleFlag('gravRepaired').setsFlag('shuttleLaunched').setHiddenFlag('shuttleLaunched')];
    /***/
  },

  /***/
  "./src/app/staticData/actionDefinitions.ts":
  /*!*************************************************!*\
    !*** ./src/app/staticData/actionDefinitions.ts ***!
    \*************************************************/

  /*! exports provided: Action, AddResourceAction, AddMaxResourceAction, AddEnergyRateAction, AddTheoryAction, FlagAction, FeatureAction, GatherFeatureAction, TransformFeatureAction, RemoveFeatureAction */

  /***/
  function srcAppStaticDataActionDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Action", function () {
      return Action;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddResourceAction", function () {
      return AddResourceAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMaxResourceAction", function () {
      return AddMaxResourceAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEnergyRateAction", function () {
      return AddEnergyRateAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTheoryAction", function () {
      return AddTheoryAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlagAction", function () {
      return FlagAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureAction", function () {
      return FeatureAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GatherFeatureAction", function () {
      return GatherFeatureAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransformFeatureAction", function () {
      return TransformFeatureAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveFeatureAction", function () {
      return RemoveFeatureAction;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");

    var Action = function Action() {
      _classCallCheck(this, Action);
    };

    var AddResourceAction = /*#__PURE__*/function (_Action) {
      _inherits(AddResourceAction, _Action);

      var _super6 = _createSuper(AddResourceAction);

      function AddResourceAction(resource, amount) {
        var _this42;

        _classCallCheck(this, AddResourceAction);

        _this42 = _super6.call(this);
        _this42.resource = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["Resource"](resource, amount);
        return _this42;
      }

      _createClass(AddResourceAction, [{
        key: "doAction",
        value: function doAction(actionService) {
          actionService.addResource(this.resource);
        }
      }]);

      return AddResourceAction;
    }(Action);

    var AddMaxResourceAction = /*#__PURE__*/function (_Action2) {
      _inherits(AddMaxResourceAction, _Action2);

      var _super7 = _createSuper(AddMaxResourceAction);

      function AddMaxResourceAction(resource, amount) {
        var _this43;

        _classCallCheck(this, AddMaxResourceAction);

        _this43 = _super7.call(this);
        _this43.resource = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["Resource"](resource, amount);
        return _this43;
      }

      _createClass(AddMaxResourceAction, [{
        key: "doAction",
        value: function doAction(actionService) {
          actionService.addMaxResource(this.resource);
        }
      }]);

      return AddMaxResourceAction;
    }(Action);

    var AddEnergyRateAction = /*#__PURE__*/function (_Action3) {
      _inherits(AddEnergyRateAction, _Action3);

      var _super8 = _createSuper(AddEnergyRateAction);

      function AddEnergyRateAction(amount) {
        var _this44;

        _classCallCheck(this, AddEnergyRateAction);

        _this44 = _super8.call(this);
        _this44.amount = amount;
        return _this44;
      }

      _createClass(AddEnergyRateAction, [{
        key: "doAction",
        value: function doAction(actionService) {
          actionService.addEnergyRate(this.amount);
        }
      }]);

      return AddEnergyRateAction;
    }(Action);

    var AddTheoryAction = /*#__PURE__*/function (_Action4) {
      _inherits(AddTheoryAction, _Action4);

      var _super9 = _createSuper(AddTheoryAction);

      function AddTheoryAction(discipline, amount) {
        var _this45;

        _classCallCheck(this, AddTheoryAction);

        _this45 = _super9.call(this);
        _this45.discipline = discipline;
        _this45.amount = amount;
        return _this45;
      }

      _createClass(AddTheoryAction, [{
        key: "doAction",
        value: function doAction(actionService) {
          actionService.addTheory(this.discipline, this.amount);
        }
      }]);

      return AddTheoryAction;
    }(Action);

    var FlagAction = /*#__PURE__*/function (_Action5) {
      _inherits(FlagAction, _Action5);

      var _super10 = _createSuper(FlagAction);

      function FlagAction(flag) {
        var _this46;

        _classCallCheck(this, FlagAction);

        _this46 = _super10.call(this);
        _this46.flag = flag;
        return _this46;
      }

      _createClass(FlagAction, [{
        key: "doAction",
        value: function doAction(actionService) {
          actionService.setFlag(this.flag);
        }
      }]);

      return FlagAction;
    }(Action);

    var FeatureAction = /*#__PURE__*/function (_Action6) {
      _inherits(FeatureAction, _Action6);

      var _super11 = _createSuper(FeatureAction);

      function FeatureAction() {
        _classCallCheck(this, FeatureAction);

        return _super11.apply(this, arguments);
      }

      _createClass(FeatureAction, [{
        key: "doAction",
        value: function doAction(actionService) {}
      }]);

      return FeatureAction;
    }(Action);

    var GatherFeatureAction = /*#__PURE__*/function (_FeatureAction) {
      _inherits(GatherFeatureAction, _FeatureAction);

      var _super12 = _createSuper(GatherFeatureAction);

      function GatherFeatureAction() {
        _classCallCheck(this, GatherFeatureAction);

        return _super12.apply(this, arguments);
      }

      _createClass(GatherFeatureAction, [{
        key: "doFeatureAction",
        value: function doFeatureAction(actionService, targetFeature) {
          actionService.gatherFeature(targetFeature);
        }
      }]);

      return GatherFeatureAction;
    }(FeatureAction);

    var TransformFeatureAction = /*#__PURE__*/function (_FeatureAction2) {
      _inherits(TransformFeatureAction, _FeatureAction2);

      var _super13 = _createSuper(TransformFeatureAction);

      function TransformFeatureAction(newFeatureName) {
        var _this47;

        _classCallCheck(this, TransformFeatureAction);

        _this47 = _super13.call(this);
        _this47.newFeatureName = newFeatureName;
        return _this47;
      }

      _createClass(TransformFeatureAction, [{
        key: "doFeatureAction",
        value: function doFeatureAction(actionService, targetFeature) {
          actionService.replaceFeature(targetFeature.regionId, targetFeature.instanceId, this.newFeatureName);
        }
      }]);

      return TransformFeatureAction;
    }(FeatureAction);

    var RemoveFeatureAction = /*#__PURE__*/function (_FeatureAction3) {
      _inherits(RemoveFeatureAction, _FeatureAction3);

      var _super14 = _createSuper(RemoveFeatureAction);

      function RemoveFeatureAction() {
        _classCallCheck(this, RemoveFeatureAction);

        return _super14.apply(this, arguments);
      }

      _createClass(RemoveFeatureAction, [{
        key: "doFeatureAction",
        value: function doFeatureAction(actionService, targetFeature) {
          actionService.removeFeature(targetFeature);
        }
      }]);

      return RemoveFeatureAction;
    }(FeatureAction);
    /***/

  },

  /***/
  "./src/app/staticData/effectDefinitions.ts":
  /*!*************************************************!*\
    !*** ./src/app/staticData/effectDefinitions.ts ***!
    \*************************************************/

  /*! exports provided: Effect, BaseProductionEffect, BaseConsumptionEffect */

  /***/
  function srcAppStaticDataEffectDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Effect", function () {
      return Effect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseProductionEffect", function () {
      return BaseProductionEffect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseConsumptionEffect", function () {
      return BaseConsumptionEffect;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Effect = function Effect() {
      _classCallCheck(this, Effect);

      this.canStack = true;
      this.isGlobal = false;
    };

    var BaseProductionEffect = /*#__PURE__*/function (_Effect) {
      _inherits(BaseProductionEffect, _Effect);

      var _super15 = _createSuper(BaseProductionEffect);

      function BaseProductionEffect(resource, amount) {
        var _this48;

        _classCallCheck(this, BaseProductionEffect);

        _this48 = _super15.call(this);
        _this48.resource = resource;
        _this48.amount = amount;
        return _this48;
      }

      return BaseProductionEffect;
    }(Effect);

    var BaseConsumptionEffect = /*#__PURE__*/function (_Effect2) {
      _inherits(BaseConsumptionEffect, _Effect2);

      var _super16 = _createSuper(BaseConsumptionEffect);

      function BaseConsumptionEffect(resource, amount) {
        var _this49;

        _classCallCheck(this, BaseConsumptionEffect);

        _this49 = _super16.call(this);
        _this49.resource = resource;
        _this49.amount = amount;
        return _this49;
      }

      return BaseConsumptionEffect;
    }(Effect);
    /***/

  },

  /***/
  "./src/app/staticData/exploitDefinitions.ts":
  /*!**************************************************!*\
    !*** ./src/app/staticData/exploitDefinitions.ts ***!
    \**************************************************/

  /*! exports provided: ExploitDefinition, EXPLOIT_LIBRARY */

  /***/
  function srcAppStaticDataExploitDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploitDefinition", function () {
      return ExploitDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EXPLOIT_LIBRARY", function () {
      return EXPLOIT_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./effectDefinitions */
    "./src/app/staticData/effectDefinitions.ts");

    var ExploitDefinition = /*#__PURE__*/function () {
      function ExploitDefinition(name, description) {
        _classCallCheck(this, ExploitDefinition);

        this.name = name;
        this.description = description;
        this.cost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
        this.effects = [];
      }

      _createClass(ExploitDefinition, [{
        key: "addCost",
        value: function addCost(resource, amount) {
          this.cost.add(resource, amount);
          return this;
        }
      }, {
        key: "addEffect",
        value: function addEffect(bonusEffect) {
          this.effects.push(bonusEffect);
          return this;
        }
      }, {
        key: "addProduction",
        value: function addProduction(resource, amount) {
          var bonusEffect = new _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseProductionEffect"](resource, amount * 6);
          this.effects.push(bonusEffect);
          return this;
        }
      }, {
        key: "getProduction",
        value: function getProduction() {
          var production = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
          this.effects.forEach(function (element) {
            if (element instanceof _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseProductionEffect"]) {
              var resourceGen = element;
              production.add(resourceGen.resource, resourceGen.amount);
            }
          });
          return production;
        }
      }]);

      return ExploitDefinition;
    }();

    var EXPLOIT_LIBRARY = [new ExploitDefinition('hematite mineshaft', 'extracts iron').addCost('metal', 10).addProduction('metal', 0.4), new ExploitDefinition('magnetite mineshaft', 'extracts iron').addCost('metal', 20).addProduction('metal', 0.6), new ExploitDefinition('corundum quarry', 'extracts minerals').addCost('metal', 75).addProduction('silicate', 0.3).addProduction('metal', 0.1).addProduction('rareMetal', 0.05), new ExploitDefinition('copper mineshaft', 'extracts copper').addCost('metal', 5).addProduction('metal', 0.2), new ExploitDefinition('silver mineshaft', 'extracts silver').addCost('metal', 50).addProduction('metal', 0.2).addProduction('rareMetal', 0.1), new ExploitDefinition('gold mineshaft', 'extracts gold').addCost('metal', 50).addProduction('metal', 0.3).addProduction('rareMetal', 0.2), new ExploitDefinition('lignite mine', 'extracts lignite').addCost('metal', 150).addProduction('hydrocarbon', 0.4), new ExploitDefinition('bitumen mine', 'extracts bitumen').addCost('metal', 150).addProduction('hydrocarbon', 0.6), new ExploitDefinition('methane extractor', 'collects methane').addCost('duranium', 15).addProduction('hydrocarbon', 0.5).addProduction('gas', 0.1), new ExploitDefinition('energy recombiner', 'generates power').addCost('nanofiber', 10).addProduction('power', 10), new ExploitDefinition('helium extractor', 'produces gases').addCost('duranium', 6).addProduction('gas', 0.5), new ExploitDefinition('crawler', 'produces glittersand').addCost('nanofiber', 10).addProduction('glittersand', 0.4), new ExploitDefinition('charybdin drill', 'produces charybdin').addCost('duranium', 50).addProduction('charybdin', 0.2), new ExploitDefinition('synaptite scoop', 'produces synaptite').addCost('duranium', 50).addProduction('synaptite', 0.2), new ExploitDefinition('dyene collector', 'produces dyene').addCost('duranium', 50).addProduction('dyene', 0.2), new ExploitDefinition('oil drill', 'extracts oil').addCost('duranium', 30).addProduction('hydrocarbon', 1.4)];
    /***/
  },

  /***/
  "./src/app/staticData/featureDefinitions.ts":
  /*!**************************************************!*\
    !*** ./src/app/staticData/featureDefinitions.ts ***!
    \**************************************************/

  /*! exports provided: FeatureDefinition, FEATURE_LIBRARY */

  /***/
  function srcAppStaticDataFeatureDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureDefinition", function () {
      return FeatureDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FEATURE_LIBRARY", function () {
      return FEATURE_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _effectDefinitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./effectDefinitions */
    "./src/app/staticData/effectDefinitions.ts");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./actionDefinitions */
    "./src/app/staticData/actionDefinitions.ts");
    /* harmony import */


    var _abilityDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./abilityDefinitions */
    "./src/app/staticData/abilityDefinitions.ts");
    /* harmony import */


    var _taskDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./taskDefinitions */
    "./src/app/staticData/taskDefinitions.ts");

    var FeatureDefinition = /*#__PURE__*/function () {
      function FeatureDefinition(name, description, exploitName) {
        _classCallCheck(this, FeatureDefinition);

        this.name = name;
        this.abilities = [];
        this.tasks = [];
        this.effects = [];
        this.description = '';
        this.exploitName = '';
        this.droneSlots = 0;
        this.hasGather = false;
        this.gatherRates = new _models_resource__WEBPACK_IMPORTED_MODULE_2__["ResourceCollection"]();

        if (description) {
          this.description = description;
        }

        if (exploitName) {
          this.exploitName = exploitName;
        }
      }

      _createClass(FeatureDefinition, [{
        key: "addGather",
        value: function addGather(resource, amount) {
          var cooldown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2.5;

          if (!this.hasGather) {
            var gatherAbility = new _abilityDefinitions__WEBPACK_IMPORTED_MODULE_4__["FeatureAbilityDefinition"]();
            gatherAbility.name = 'Gather';
            gatherAbility.addAction(new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["GatherFeatureAction"]());
            gatherAbility.addCost('energy', 3);
            gatherAbility.addCooldown(cooldown);
            this.abilities.push(gatherAbility);
            this.droneSlots = 1;
            this.hasGather = true;
          }

          this.gatherRates.add(resource, amount);
          return this;
        }
      }, {
        key: "addPower",
        value: function addPower(amount) {
          var powerEffect = new _effectDefinitions__WEBPACK_IMPORTED_MODULE_1__["BaseProductionEffect"]('power', amount);
          this.effects.push(powerEffect);
          return this;
        }
      }, {
        key: "setDescription",
        value: function setDescription(desc) {
          this.description = desc;
          return this;
        }
      }, {
        key: "setDroneSlots",
        value: function setDroneSlots(slots) {
          this.droneSlots = slots;
          return this;
        }
      }, {
        key: "addAbility",
        value: function addAbility(name, costResource, costAmount) {
          var ability = new _abilityDefinitions__WEBPACK_IMPORTED_MODULE_4__["FeatureAbilityDefinition"]();
          ability.name = name;

          if (costAmount > 0) {
            ability.addCost(costResource, costAmount);
          }

          this.abilities.push(ability);
          return this;
        }
      }, {
        key: "addAbilityCost",
        value: function addAbilityCost(abilityName, costResource, costAmount) {
          var ability = this.abilities.find(function (x) {
            return x.name === abilityName;
          });
          ability.addCost(costResource, costAmount);
          return this;
        }
      }, {
        key: "abilityVisibleUpgrade",
        value: function abilityVisibleUpgrade(abilityName, upgrade) {
          var ability = this.abilities.find(function (x) {
            return x.name === abilityName;
          });
          ability.setVisibleUpgrade(upgrade);
          return this;
        }
      }, {
        key: "abilityNeedsUpgrade",
        value: function abilityNeedsUpgrade(abilityName, upgrade) {
          var ability = this.abilities.find(function (x) {
            return x.name === abilityName;
          });
          ability.setUpgradeNeeded(upgrade);
          return this;
        }
      }, {
        key: "abilityNeedsDroneHub",
        value: function abilityNeedsDroneHub(abilityName) {
          var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var ability = this.abilities.find(function (x) {
            return x.name === abilityName;
          });
          ability.droneHubLevelNeeded = level;
          return this;
        }
      }, {
        key: "addResourceAction",
        value: function addResourceAction(triggerAbilityName, resource, amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["AddResourceAction"](resource, amount);
          var ability = this.abilities.find(function (x) {
            return x.name === triggerAbilityName;
          });
          ability.addAction(action);
          return this;
        }
      }, {
        key: "addMaxResourceAction",
        value: function addMaxResourceAction(triggerAbilityName, resource, amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["AddMaxResourceAction"](resource, amount);
          var ability = this.abilities.find(function (x) {
            return x.name === triggerAbilityName;
          });
          ability.addAction(action);
          return this;
        }
      }, {
        key: "addResearchAction",
        value: function addResearchAction(triggerAbilityName, discipline, amount) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["AddTheoryAction"](discipline, amount);
          var ability = this.abilities.find(function (x) {
            return x.name === triggerAbilityName;
          });
          ability.addAction(action);
          return this;
        }
      }, {
        key: "addTransformAction",
        value: function addTransformAction(triggerAbilityName, newFeatureName) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["TransformFeatureAction"](newFeatureName);
          var ability = this.abilities.find(function (x) {
            return x.name === triggerAbilityName;
          });
          ability.addAction(action);
          return this;
        }
      }, {
        key: "addFlagAction",
        value: function addFlagAction(triggerAbilityName, flagName) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["FlagAction"](flagName);
          var ability = this.abilities.find(function (x) {
            return x.name === triggerAbilityName;
          });
          ability.addAction(action);
          return this;
        }
      }, {
        key: "addRemoveFeatureAction",
        value: function addRemoveFeatureAction(triggerAbilityName) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["RemoveFeatureAction"]();
          var ability = this.abilities.find(function (x) {
            return x.name === triggerAbilityName;
          });
          ability.addAction(action);
          return this;
        }
      }, {
        key: "addTask",
        value: function addTask(name, needed) {
          var task = new _taskDefinitions__WEBPACK_IMPORTED_MODULE_5__["TaskDefinition"](name, needed);
          this.tasks.push(task);
          return this;
        }
      }, {
        key: "addTaskResearchResult",
        value: function addTaskResearchResult(taskName, discipline, amount) {
          var task = this.tasks.find(function (x) {
            return x.name === taskName;
          });
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["AddTheoryAction"](discipline, amount);
          task.resultsOnComplete.push(action);
          return this;
        }
      }, {
        key: "addTaskTransformResult",
        value: function addTaskTransformResult(taskName, newFeatureName) {
          var task = this.tasks.find(function (x) {
            return x.name === taskName;
          });
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["TransformFeatureAction"](newFeatureName);
          task.resultsOnComplete.push(action);
          return this;
        }
      }, {
        key: "addTaskRemoveResult",
        value: function addTaskRemoveResult(taskName) {
          var task = this.tasks.find(function (x) {
            return x.name === taskName;
          });
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_3__["RemoveFeatureAction"]();
          task.resultsOnComplete.push(action);
          return this;
        }
      }]);

      return FeatureDefinition;
    }();

    var FEATURE_LIBRARY = [new FeatureDefinition('crater', 'A crater in the distance appears to have been recently made.').addAbility('Search', 'drones', 1).addTransformAction('Search', 'crashed shuttle').addMaxResourceAction('Search', 'energy', 5).addFlagAction('Search', 'shuttleFound'), new FeatureDefinition('crashed shuttle', 'The ship\'s reserve power is still functioning, along with basic fabrication systems.  It may be possible to repair the computer.').addPower(5).addAbility('Repair Computer', 'nanochips', 5).addAbilityCost('Repair Computer', 'metal', 100).addTransformAction('Repair Computer', 'downed shuttle').addFlagAction('Repair Computer', 'computerRepaired').addFlagAction('Repair Computer', 'showResearchTab'), new FeatureDefinition('downed shuttle', 'With core systems repaired, the shuttle may be able to reach space with the help of a launch facility.').addPower(5), new FeatureDefinition('wrecked hull plating', 'This shredded plating is mostly useless, but some metals can be extracted from the remains.').addAbility('Salvage', 'drones', 2).addResourceAction('Salvage', 'metal', 50).addResearchAction('Salvage', 'Material Science', 20).addRemoveFeatureAction('Salvage'), new FeatureDefinition('corrupted databank', 'Any data this may have contained is irretrievable, but the components could be salvaged.').addAbility('Salvage', 'drones', 2).addAbilityCost('Salvage', 'nanochips', 1).addResourceAction('Salvage', 'nanochips', 8).addResearchAction('Salvage', 'Electronics', 20).addRemoveFeatureAction('Salvage'), new FeatureDefinition('waterlogged processing unit', 'Seawater has destroyed most of the more delicate circuits, but some could be recovered.').addAbility('Salvage', 'drones', 4).abilityNeedsUpgrade('Salvage', 'Hydrophobic Alloys').addResourceAction('Salvage', 'nanochips', 47).addResearchAction('Salvage', 'Electronics', 20).addRemoveFeatureAction('Salvage'), new FeatureDefinition('tectonic activity', 'The geologic activity in this area could provide insight into new survey techniques.').addTask('Study', 100).addTaskResearchResult('Study', 'Planetary Survey', 20).addTaskRemoveResult('Study'), new FeatureDefinition('resonance field', 'Electromagnetic signals in this area are distorted and re-broadcast.  This effect could enhance drone control signals.').addTask('Study', 100).addTaskResearchResult('Study', 'Drone Control', 20).addTaskRemoveResult('Study'), new FeatureDefinition('energy signature', 'Energy readings in this area are inconsistent with the rest of the region.').addTask('Study', 100).addTaskResearchResult('Study', 'Power Systems', 20).addTaskRemoveResult('Study'), new FeatureDefinition('electric storm', 'A powerful storm is creating electromagnetic interference in a wide area.').addTask('Study', 120).addTaskResearchResult('Study', 'Power Systems', 20).addTaskRemoveResult('Study'), new FeatureDefinition('graviton emissions', 'Scanners are picking up faint graviton emissions inconsistent with the planet\'s mass.').addTask('Study', 150).addTaskResearchResult('Study', 'Gravitics', 20).addTaskRemoveResult('Study'), new FeatureDefinition('spatial distortion', 'An anomalous force is causing disruptions in local spacetime.').addTask('Study', 150).addTaskResearchResult('Study', 'Hypertopology', 20).addTaskRemoveResult('Study'), new FeatureDefinition('energy cell', 'A mostly intact energy storage cell.  This could be refurbished and put to use.').addAbility('Repair', 'drones', 5).addAbilityCost('Repair', 'nanochips', 15).addMaxResourceAction('Repair', 'energy', 5).addResearchAction('Repair', 'Power Systems', 20).addRemoveFeatureAction('Repair'), new FeatureDefinition('hematite deposit', 'A deposit of the iron-rich mineral hematite.').addGather('metal', 18, 30).addAbility('Build Mine', 'metal', 50).addTransformAction('Build Mine', 'hematite mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('hematite mineshaft', 'A mineshaft built on a hematite deposit.').addGather('metal', 74, 30).setDroneSlots(6), new FeatureDefinition('magnetite deposit', 'A deposit of the iron-rich mineral magnetite.').addGather('metal', 26, 45).addAbility('Build Mine', 'metal', 50).addTransformAction('Build Mine', 'hematite mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('hematite mineshaft', 'A mineshaft built on a hematite deposit.').addGather('metal', 120, 45).setDroneSlots(8), new FeatureDefinition('copper deposit', 'A native deposit of metallic copper.').addGather('metal', 2).addAbility('Build Mine', 'metal', 50).addTransformAction('Build Mine', 'copper mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('copper mineshaft', 'A mineshaft built on a copper deposit.').addGather('metal', 4).setDroneSlots(4), new FeatureDefinition('silver vein', 'A native deposit of metallic silver.').addGather('metal', 14, 12).addGather('rareMetal', 0.12).addAbility('Build Mine', 'metal', 250).addTransformAction('Build Mine', 'silver mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('silver mineshaft', 'A mineshaft built on a silver vein.').addGather('metal', 20).addGather('rareMetal', 1).setDroneSlots(4), new FeatureDefinition('corundum deposit', 'A deposit of the semi-precious crystalline mineral corundum.').addGather('silicate', 6).addAbility('Build Mine', 'metal', 150).addTransformAction('Build Mine', 'corundum quarry').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('corundum quarry', 'A quarry for collecting minerals from a corundum deposit.').addGather('silicate', 30).setDroneSlots(6), new FeatureDefinition('gold vein', 'A native deposit of metallic gold.').addGather('metal', 18, 14).addGather('rareMetal', 0.18).addAbility('Build Mine', 'metal', 350).addTransformAction('Build Mine', 'gold mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('gold mineshaft', 'A mineshaft built on a gold vein.').addGather('metal', 24).addGather('rareMetal', 1.5).setDroneSlots(8), new FeatureDefinition('lignite deposit', 'A deposit of lignite, a carbon-rich rock formed from long-decayed organic matter.').addGather('hydrocarbon', 3, 6).addAbility('Build Mine', 'metal', 150).addTransformAction('Build Mine', 'lignite mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('lignite mineshaft', 'A mineshaft built on a lignite deposit.').addGather('hydrocarbon', 15, 6).setDroneSlots(4), new FeatureDefinition('bitumen deposit', 'A deposit of bitumen, a carbon-rich rock formed from long-decayed organic matter.').addGather('hydrocarbon', 5, 12).addAbility('Build Mine', 'metal', 275).addTransformAction('Build Mine', 'bitumen mineshaft').addResearchAction('Build Mine', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Mine', 'Mineral Extraction'), new FeatureDefinition('bitumen mineshaft', 'A mineshaft built on a bitumen deposit.').addGather('hydrocarbon', 28, 12).setDroneSlots(6), new FeatureDefinition('methane vent', 'The ground here emits methane, a simple gaseous hydrocarbon that can be used as fuel or in chemical engineering,' + 'as well as small amounts of other gases.').addAbility('Build Extractor', 'duranium', 25).addTransformAction('Build Extractor', 'methane extractor').addResearchAction('Build Extractor', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Extractor', 'Gas Extraction'), new FeatureDefinition('methane extractor', 'Extracts methane and refines it into hydrocarbons.').addGather('hydrocarbon', 6, 50).setDroneSlots(15), new FeatureDefinition('glittersand spout', 'An unknown process, either geologic or organic, causes glittersand to erupt from the desert\'s depths at semi-regular intervals').addAbility('Build Crawler', 'duranium', 250).addTransformAction('Build Crawler', 'glittersand crawler').addResearchAction('Build Crawler', 'Resource Extraction', 10).abilityVisibleUpgrade('Build Crawler', 'Particulate Enrichment'), new FeatureDefinition('glittersand crawler', 'Harvests glittersand from desert spouts.').addGather('glittersand', 5, 50).setDroneSlots(12), new FeatureDefinition('helium clathrates', 'The ice here has formed tight crystals which trap molecules of helium within their structure.').addAbility('Build Extractor', 'duranium', 150).addTransformAction('Build Extractor', 'helium extractor').addResearchAction('Build Extractor', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Extractor', 'Clathrate Extraction'), new FeatureDefinition('helium extractor', 'Extracts helium from ice fields.').addGather('gas', 6, 50).setDroneSlots(15), new FeatureDefinition('argon clathrates', 'The ice here has formed tight crystals which trap molecules of argon within their structure.').addAbility('Build Extractor', 'duranium', 250).addTransformAction('Build Extractor', 'argon extractor').addResearchAction('Build Extractor', 'Resource Exploitation', 5).abilityVisibleUpgrade('Build Extractor', 'Clathrate Extraction'), new FeatureDefinition('argon extractor', 'Extracts argon from ice fields.').addGather('gas', 15, 50).setDroneSlots(18), new FeatureDefinition('charybdin crystals', 'Scans of this deep-sea mineral indicate its structure extends beyond three-dimensional space.').addAbility('Drill', 'silksteel', 150).addTransformAction('Drill', 'charybdin drill').addResearchAction('Drill', 'Resource Exploitation', 25).abilityVisibleUpgrade('Drill', 'Crystal Extraction'), new FeatureDefinition('charybdin drill', 'Extracts charybdin from deep undersea crystals.').addGather('charybdin', 4, 90).setDroneSlots(8), new FeatureDefinition('porphyritic synaptite', 'Tiny sparks of current run across the surface of this luminous mineral').addAbility('Build Scoop', 'nanofiber', 150).addTransformAction('Build Scoop', 'synaptite scoop').addResearchAction('Build Scoop', 'Resource Exploitation', 25).abilityVisibleUpgrade('Build Scoop', 'Crystal Extraction'), new FeatureDefinition('synaptite scoop', 'An intricate device for extracting synaptite without damaging its delicate subatomic structure.').addGather('synaptite', 4, 90).setDroneSlots(8), new FeatureDefinition('dyene cluster', 'This brittle material gives off a weak field which interferes with elementary particles.', 'dyene collector').addAbility('Build Collector', 'optronics', 150).addTransformAction('Build Collector', 'dyene collector').addResearchAction('Build Collector', 'Resource Exploitation', 25).abilityVisibleUpgrade('Build Collector', 'Crystal Extraction'), new FeatureDefinition('dyene collector', 'Provides drones with the necessary telemetry to extract dyene.').addGather('dyene', 4, 90).setDroneSlots(8), new FeatureDefinition('oil field', 'An underground deposit of crude oil - a liquid mixture of complex hydrocarbons with a variety of industrial uses.').addAbility('Drill Well', 'duranium', 50).addTransformAction('Drill Well', 'oil well').addResearchAction('Drill Well', 'Resource Exploitation', 5).abilityVisibleUpgrade('Drill Well', 'Liquid Extraction'), new FeatureDefinition('undersea oil field', 'A rich deposit of oil, deep under the ocean.').addAbility('Drill Well', 'nanofiber', 50).addTransformAction('Drill Well', 'oil well').addResearchAction('Drill Well', 'Resource Exploitation', 5).abilityVisibleUpgrade('Drill Well', 'Liquid Extraction'), new FeatureDefinition('oil well', 'Extracts oil.').addGather('hydrocarbon', 7).setDroneSlots(8)];
    /***/
  },

  /***/
  "./src/app/staticData/outpostDefinitions.ts":
  /*!**************************************************!*\
    !*** ./src/app/staticData/outpostDefinitions.ts ***!
    \**************************************************/

  /*! exports provided: OutpostDefinition, OutpostLevelDefinition, OUTPOST_LIBRARY */

  /***/
  function srcAppStaticDataOutpostDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutpostDefinition", function () {
      return OutpostDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutpostLevelDefinition", function () {
      return OutpostLevelDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OUTPOST_LIBRARY", function () {
      return OUTPOST_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");

    var OutpostDefinition = /*#__PURE__*/function () {
      function OutpostDefinition(planetType) {
        _classCallCheck(this, OutpostDefinition);

        this.planetType = planetType;
        this.levels = [];
      }

      _createClass(OutpostDefinition, [{
        key: "getLevel",
        value: function getLevel(level) {
          return this.levels.find(function (x) {
            return x.level === level;
          });
        }
      }, {
        key: "addLevel",
        value: function addLevel(level, name) {
          this.levels.push(new OutpostLevelDefinition(level, name));
          return this;
        }
      }, {
        key: "addCost",
        value: function addCost(level, resource, amount) {
          var levelDef = this.getLevel(level);
          levelDef.cost.add(resource, amount);
          return this;
        }
      }, {
        key: "addPrerequisite",
        value: function addPrerequisite(level, researchNeeded) {
          var levelDef = this.getLevel(level);
          levelDef.researchNeeded = researchNeeded;
          return this;
        }
      }, {
        key: "setDroneCapacity",
        value: function setDroneCapacity(level, capacity) {
          var levelDef = this.getLevel(level);
          levelDef.droneCapacity = capacity;
          return this;
        }
      }]);

      return OutpostDefinition;
    }();

    var OutpostLevelDefinition = function OutpostLevelDefinition(level, name) {
      _classCallCheck(this, OutpostLevelDefinition);

      this.level = level;
      this.name = name;
      this.cost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
      this.researchNeeded = '';
      this.droneCapacity = 0;
    };

    var OUTPOST_LIBRARY = [new OutpostDefinition('temperate').addLevel(1, 'Survival Outpost').addCost(1, 'metal', 10).setDroneCapacity(1, 10).addLevel(2, 'Command Hub').addCost(2, 'optronics', 20).addCost(2, 'nanofiber', 50).setDroneCapacity(2, 100).addLevel(3, 'Launch Complex').addCost(3, 'silksteel', 100).setDroneCapacity(3, 500)];
    /***/
  },

  /***/
  "./src/app/staticData/regionDefinitions.ts":
  /*!*************************************************!*\
    !*** ./src/app/staticData/regionDefinitions.ts ***!
    \*************************************************/

  /*! exports provided: InfrastructureDefinition, RegionDefinition, REGION_LIBRARY */

  /***/
  function srcAppStaticDataRegionDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfrastructureDefinition", function () {
      return InfrastructureDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionDefinition", function () {
      return RegionDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REGION_LIBRARY", function () {
      return REGION_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");

    var InfrastructureDefinition = function InfrastructureDefinition(name) {
      _classCallCheck(this, InfrastructureDefinition);

      this.name = name;
      this.description = '';
      this.tech = '';
      this.cost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
    };

    var RegionDefinition = /*#__PURE__*/function () {
      function RegionDefinition(name) {
        _classCallCheck(this, RegionDefinition);

        this.name = name;
        this.description = '';
        this.surveyUpgradeNeeded = '';
        this.surveyBaseCost = 25;
        this.surveyCostMultiplier = 1.8;
        this.droneHubBaseCost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
        this.droneHubCostMultiplier = 1.6;
        this.infrastructure = [];
      }

      _createClass(RegionDefinition, [{
        key: "setDescription",
        value: function setDescription(desc) {
          this.description = desc;
          return this;
        }
      }, {
        key: "setSurveyUpgradeNeeded",
        value: function setSurveyUpgradeNeeded(upgrade) {
          this.surveyUpgradeNeeded = upgrade;
          return this;
        }
      }, {
        key: "setSurveyBaseCost",
        value: function setSurveyBaseCost(cost) {
          this.surveyBaseCost = cost;
          return this;
        }
      }, {
        key: "setSurveyCostMultiplier",
        value: function setSurveyCostMultiplier(multiplier) {
          this.surveyCostMultiplier = multiplier;
          return this;
        }
      }, {
        key: "addDroneHubCost",
        value: function addDroneHubCost(resource, amount) {
          this.droneHubBaseCost.add(resource, amount);
          return this;
        }
      }, {
        key: "setDroneHubCostMultiplier",
        value: function setDroneHubCostMultiplier(multiplier) {
          this.droneHubCostMultiplier = multiplier;
          return this;
        }
      }]);

      return RegionDefinition;
    }();

    var REGION_LIBRARY = [new RegionDefinition('Plains').setDescription('Rolling plains.').setSurveyBaseCost(10).setSurveyCostMultiplier(1.6).addDroneHubCost('metal', 24), new RegionDefinition('Hills').setDescription('Geographically complex region rich in minerals.').setSurveyBaseCost(25).addDroneHubCost('nanochips', 4), new RegionDefinition('Mountain').setDescription('Difficult to traverse, but can contain many valuable materials.').setSurveyUpgradeNeeded('Mountain Survey').setSurveyBaseCost(25).addDroneHubCost('duranium', 25).setDroneHubCostMultiplier(2.2), new RegionDefinition('Coast').setDescription('Coast description.').setSurveyBaseCost(25).addDroneHubCost('duranium', 25), new RegionDefinition('Forest').setDescription('Forest description.').setSurveyBaseCost(25).addDroneHubCost('duranium', 25), new RegionDefinition('Ocean').setDescription('Ocean description.').setSurveyUpgradeNeeded('Maritime Survey').setSurveyBaseCost(25).addDroneHubCost('duranium', 25), new RegionDefinition('Ocean Floor').setDescription('Ocean Floor description.').setSurveyUpgradeNeeded('Undersea Survey').setSurveyBaseCost(25).addDroneHubCost('duranium', 25), new RegionDefinition('Desert').setDescription('Desert description.').setSurveyUpgradeNeeded('Desert Survey').setSurveyBaseCost(25).addDroneHubCost('duranium', 25), new RegionDefinition('Arctic').setDescription('Arctic description.').setSurveyUpgradeNeeded('Arctic Survey').setSurveyBaseCost(25).addDroneHubCost('duranium', 25)];
    /***/
  },

  /***/
  "./src/app/staticData/researchDefinitions.ts":
  /*!***************************************************!*\
    !*** ./src/app/staticData/researchDefinitions.ts ***!
    \***************************************************/

  /*! exports provided: ResearchDiscipline, RESEARCH_LIBRARY */

  /***/
  function srcAppStaticDataResearchDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResearchDiscipline", function () {
      return ResearchDiscipline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RESEARCH_LIBRARY", function () {
      return RESEARCH_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ResearchDiscipline = /*#__PURE__*/function () {
      function ResearchDiscipline(name) {
        _classCallCheck(this, ResearchDiscipline);

        this.desc = '';
        this.theoryDesc = '';
        this.revealAtStart = false;
        this.baseCostMultiplier = 1;
        this.compoundingCostMultiplier = 1;
        this.theoryCostMultiplier = 1;
        this.upgradeUnlocks = new Map();
        this.flagUnlocks = new Map();
        this.name = name;
      }

      _createClass(ResearchDiscipline, [{
        key: "setDesc",
        value: function setDesc(desc) {
          this.desc = desc;
          return this;
        }
      }, {
        key: "setTheoryDesc",
        value: function setTheoryDesc(desc) {
          this.theoryDesc = desc;
          return this;
        }
      }, {
        key: "addUpgrade",
        value: function addUpgrade(level, upgrade) {
          this.upgradeUnlocks.set(level, upgrade);
          return this;
        }
      }, {
        key: "addFlag",
        value: function addFlag(level, flag) {
          this.flagUnlocks.set(level, flag);
          return this;
        }
      }, {
        key: "setRevealAtStart",
        value: function setRevealAtStart() {
          this.revealAtStart = true;
          return this;
        }
      }]);

      return ResearchDiscipline;
    }();

    ResearchDiscipline.baseKnowledgeCost = 24;
    ResearchDiscipline.baseTheoryCost = 20;
    ResearchDiscipline.baseResearchPerSec = 1.43;
    ResearchDiscipline.knowledgeExpCost = Math.sqrt(14);
    var RESEARCH_LIBRARY = [new ResearchDiscipline('Material Science').setDesc('Structures cost 5% less (diminishing) per level.').setTheoryDesc('Gain theory by salvaging materials.').setRevealAtStart().addUpgrade(1, 'Construction').addUpgrade(2, 'Hydrophobic Alloys').addUpgrade(3, 'Tensile Polymers').addUpgrade(5, 'Unbreakable Materials'), new ResearchDiscipline('Electronics').setTheoryDesc('Gain theory by salvaging and fabricating electronics.').addUpgrade(1, 'Automated Fabrication').addUpgrade(3, 'Photon Processing').addUpgrade(5, 'Synthetic Thought'), new ResearchDiscipline('Hypertopology').setTheoryDesc('Gain theory by studying spatial anomalies.').addUpgrade(1, 'Extradimensional Synthesis'), new ResearchDiscipline('Power Systems').setDesc('Ship energy recharges 20% faster per level.').setTheoryDesc('Gain theory by salvaging power and energy systems.').addUpgrade(1, 'Fueled Generators').addUpgrade(3, 'Electrodynamics').addUpgrade(4, 'Solar Power'), new ResearchDiscipline('Gravitics').setTheoryDesc('Gain theory by studying particle anomalies.').addUpgrade(1, 'Artificial Gravity'), new ResearchDiscipline('Planetary Survey').setDesc('Survey scannning is 20% faster per level.').setTheoryDesc('Gain theory by surveying regions.').addUpgrade(2, 'Maritime Survey').addUpgrade(3, 'Mountain Survey').addUpgrade(4, 'Desert Survey').addUpgrade(5, 'Arctic Survey').addUpgrade(6, 'Undersea Survey'), new ResearchDiscipline('Drone Control').setDesc('Drone hubs cost 5% less (diminishing) per level.').setTheoryDesc('Gain theory by building drone hubs.').addUpgrade(1, 'Bandwidth Multiplexing').addUpgrade(2, 'Adaptive Tooling').addUpgrade(3, 'Heuristic Processors'), new ResearchDiscipline('Resource Exploitation').setDesc('Drones collect 10% extra resources/sec per level.').setTheoryDesc('Gain theory by building resource extraction improvements.').setRevealAtStart().addUpgrade(1, 'Mineral Extraction').addUpgrade(2, 'Liquid Extraction').addUpgrade(3, 'Gas Extraction').addUpgrade(4, 'Clathrate Extraction').addUpgrade(5, 'Particulate Enrichment').addUpgrade(6, 'Crystal Extraction'), new ResearchDiscipline('Anomaly Scanning')];
    /***/
  },

  /***/
  "./src/app/staticData/structureDefinitions.ts":
  /*!****************************************************!*\
    !*** ./src/app/staticData/structureDefinitions.ts ***!
    \****************************************************/

  /*! exports provided: StructureDefinition, STRUCTURE_LIBRARY */

  /***/
  function srcAppStaticDataStructureDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StructureDefinition", function () {
      return StructureDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STRUCTURE_LIBRARY", function () {
      return STRUCTURE_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./effectDefinitions */
    "./src/app/staticData/effectDefinitions.ts");

    var StructureDefinition = /*#__PURE__*/function () {
      function StructureDefinition(name, sortCategory) {
        _classCallCheck(this, StructureDefinition);

        this.name = name;
        this.sortCategory = sortCategory;
        this.baseBuildCost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
        this.costMultiplier = 1.15;
        this.effects = [];
        this.prereqs = [];
      }

      _createClass(StructureDefinition, [{
        key: "addCost",
        value: function addCost(resource, amount) {
          this.baseBuildCost.add(resource, amount);
          return this;
        }
      }, {
        key: "addEffect",
        value: function addEffect(bonusEffect) {
          this.effects.push(bonusEffect);
          return this;
        }
      }, {
        key: "addProduction",
        value: function addProduction(resource, amount) {
          var bonusEffect = new _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseProductionEffect"](resource, amount);
          this.effects.push(bonusEffect);
          return this;
        }
      }, {
        key: "addConsumption",
        value: function addConsumption(resource, amount) {
          var effect = new _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseConsumptionEffect"](resource, amount);
          this.effects.push(effect);
          return this;
        }
      }, {
        key: "addPrereq",
        value: function addPrereq(upgrade) {
          this.prereqs.push(upgrade);
          return this;
        } // TODO: Move these into a proper service that can account for external bonuses and stuff

      }, {
        key: "getProductionRates",
        value: function getProductionRates() {
          var production = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
          this.effects.forEach(function (element) {
            if (element instanceof _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseProductionEffect"]) {
              var resourceGen = element;
              production.add(resourceGen.resource, resourceGen.amount);
            }
          });
          return production;
        }
      }, {
        key: "getConsumptionRates",
        value: function getConsumptionRates() {
          var consumption = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
          this.effects.forEach(function (element) {
            if (element instanceof _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseConsumptionEffect"]) {
              var resourceGen = element;
              consumption.add(resourceGen.resource, resourceGen.amount);
            }
          });
          return consumption;
        }
      }, {
        key: "hasConsumption",
        value: function hasConsumption() {
          return this.effects.some(function (element) {
            return element instanceof _effectDefinitions__WEBPACK_IMPORTED_MODULE_2__["BaseConsumptionEffect"];
          });
        }
      }]);

      return StructureDefinition;
    }();

    var STRUCTURE_LIBRARY = [// Refinement
    new StructureDefinition('Smelter', 'refine').addPrereq('Construction').addCost('metal', 100).addConsumption('power', 1).addConsumption('metal', 3).addConsumption('hydrocarbon', 1.2).addProduction('duranium', 0.3), new StructureDefinition('Electronics Lab', 'refine').addPrereq('Automated Fabrication').addCost('duranium', 10).addConsumption('power', 2).addConsumption('silicate', 1).addConsumption('rareMetal', 0.15).addProduction('nanochips', 0.2), new StructureDefinition('Cryodistillery', 'refine').addPrereq('Clathrate Extraction').addCost('duranium', 30).addConsumption('power', 3).addConsumption('gas', 0.5).addProduction('cryofluid', 0.6), new StructureDefinition('Nanofiber Loom', 'refine').addPrereq('Tensile Polymers').addCost('duranium', 40).addCost('nanochips', 20).addConsumption('power', 2).addConsumption('hydrocarbon', 3).addConsumption('silicate', 0.6).addProduction('nanofiber', 0.4), new StructureDefinition('Optronics Workshop', 'refine').addPrereq('Photon Processing').addCost('duranium', 100).addCost('nanochips', 50).addConsumption('power', 2).addConsumption('glittersand', 0.2).addConsumption('nanochips', 1).addConsumption('gas', 0.5).addProduction('optronics', 0.6), new StructureDefinition('High-Energy Lab', 'refine').addPrereq('Electrodynamics').addCost('duranium', 100).addCost('nanofiber', 20).addConsumption('power', 4).addConsumption('rareMetal', 0.04).addConsumption('cryofluid', 1).addProduction('ultraconductors', 0.4), new StructureDefinition('Dimensional Forge', 'refine').addPrereq('Extradimensional Synthesis').addCost('nanofiber', 50).addCost('optronics', 25).addConsumption('power', 4).addConsumption('charybdin', 1).addConsumption('nanofiber', 1).addConsumption('glittersand', 1).addProduction('hyperlattice', 0.4), new StructureDefinition('Silksteel Foundry', 'refine').addPrereq('Unbreakable Materials').addCost('duranium', 100).addCost('nanofiber', 20).addCost('optronics', 20).addConsumption('power', 4).addConsumption('duranium', 3).addConsumption('nanofiber', 2).addConsumption('cryofluid', 1).addProduction('silksteel', 0.6), new StructureDefinition('Neurocomputing Lab', 'refine').addPrereq('Synthetic Thought').addCost('silksteel', 30).addCost('optronics', 50).addConsumption('power', 5).addConsumption('synaptite', 1).addConsumption('optronics', 2).addConsumption('ultraconductors', 1).addProduction('cogitex', 0.6), new StructureDefinition('Gravitics Lab', 'refine').addPrereq('Artificial Gravity').addCost('silksteel', 50).addCost('optronics', 50).addConsumption('power', 5).addConsumption('dyene', 1).addConsumption('ultraconductors', 1).addProduction('gravalloy', 0.8), // Power
    new StructureDefinition('Combustion Reactor', 'power').addPrereq('Fueled Generators').addCost('metal', 10).addConsumption('hydrocarbon', 1.5).addProduction('power', 10), new StructureDefinition('Solar Plant', 'power').addPrereq('Solar Power').addCost('duranium', 10).addCost('silicate', 100).addCost('ultraconductors', 5).addProduction('power', 10)];
    /***/
  },

  /***/
  "./src/app/staticData/taskDefinitions.ts":
  /*!***********************************************!*\
    !*** ./src/app/staticData/taskDefinitions.ts ***!
    \***********************************************/

  /*! exports provided: TaskDefinition */

  /***/
  function srcAppStaticDataTaskDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDefinition", function () {
      return TaskDefinition;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");

    var TaskDefinition = function TaskDefinition(name, needed) {
      _classCallCheck(this, TaskDefinition);

      this.desc = '';
      this.baseRate = 0.01;
      this.startCost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
      this.costPerSecond = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
      this.resultsOnComplete = [];
      this.resultsPerTick = [];
      this.repeatable = false;
      this.name = name;
      this.needed = needed;
    };
    /***/

  },

  /***/
  "./src/app/staticData/upgradeDefinitions.ts":
  /*!**************************************************!*\
    !*** ./src/app/staticData/upgradeDefinitions.ts ***!
    \**************************************************/

  /*! exports provided: UpgradeDefinition, UPGRADE_LIBRARY */

  /***/
  function srcAppStaticDataUpgradeDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpgradeDefinition", function () {
      return UpgradeDefinition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPGRADE_LIBRARY", function () {
      return UPGRADE_LIBRARY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/resource */
    "./src/app/models/resource.ts");
    /* harmony import */


    var _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./actionDefinitions */
    "./src/app/staticData/actionDefinitions.ts");

    var UpgradeDefinition = /*#__PURE__*/function () {
      function UpgradeDefinition(name, description, researchNeeded) {
        _classCallCheck(this, UpgradeDefinition);

        this.name = name;
        this.description = description;
        this.researchNeeded = researchNeeded;
        this.cost = new _models_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceCollection"]();
        this.effects = [];
        this.actions = [];
        this.friendlyName = name;
      }

      _createClass(UpgradeDefinition, [{
        key: "addCost",
        value: function addCost(resource, amount) {
          this.cost.add(resource, amount);
          return this;
        }
      }, {
        key: "addAction",
        value: function addAction(action) {
          this.actions.push(action);
          return this;
        }
      }, {
        key: "setsFlag",
        value: function setsFlag(flag) {
          var action = new _actionDefinitions__WEBPACK_IMPORTED_MODULE_2__["FlagAction"](flag);
          this.addAction(action);
          return this;
        }
      }]);

      return UpgradeDefinition;
    }();

    var UPGRADE_LIBRARY = [new UpgradeDefinition('Construction', 'Large scale construction projects.').addCost('metal', 50).setsFlag('showStructureTab'), new UpgradeDefinition('Hydrophobic Alloys', 'Waterproofed drones for aquatic salvage operations.').addCost('metal', 75), new UpgradeDefinition('Tensile Polymers', 'High-strength, lightweight polymers for advanced construction.').addCost('duranium', 15).addCost('silicate', 50), new UpgradeDefinition('Unbreakable Materials', 'Engineered at the subatomic level to withstand extreme stress.').addCost('duranium', 15).addCost('silicate', 50), new UpgradeDefinition('Automated Fabrication', 'Scale up the nanochip fabrication process for bulk production.').addCost('nanochips', 8), new UpgradeDefinition('Photon Processing', 'Using glittersand to manipulate photon waveforms provides a new foundation for electronic engineering.').addCost('nanochips', 35).addCost('glittersand', 15), new UpgradeDefinition('Synthetic Thought', 'The neural patterns in synaptite form the basis of self-adaptive, intelligent networks.').addCost('optronics', 35).addCost('synaptite', 15), new UpgradeDefinition('Extradimensional Synthesis', '4-dimensional crystalloid materials allow construction to extend beyond mundane limits.').addCost('charybdin', 35), new UpgradeDefinition('Fueled Generators', 'On planets rich with oxygen and organic molecules, burning hydrocarbons can be a simple, effective power source.').addCost('hydrocarbon', 25), new UpgradeDefinition('Electrodynamics', 'As power needs increase, the inefficiencies of typical conductive materials become a problem.').addCost('cryofluid', 15), new UpgradeDefinition('Solar Power', '').addCost('ultraconductors', 15), new UpgradeDefinition('Artificial Gravity', '').addCost('dyene', 15), new UpgradeDefinition('Maritime Survey', '').addCost('metal', 15), new UpgradeDefinition('Mountain Survey', '').addCost('duranium', 15), new UpgradeDefinition('Desert Survey', '').addCost('duranium', 15), new UpgradeDefinition('Arctic Survey', '').addCost('duranium', 15), new UpgradeDefinition('Undersea Survey', '').addCost('duranium', 15), new UpgradeDefinition('Bandwidth Multiplexing', '').addCost('nanochips', 15), new UpgradeDefinition('Adaptive Tooling', '').addCost('optronics', 15), new UpgradeDefinition('Heuristic Processors', '').addCost('cogitex', 15), new UpgradeDefinition('Mineral Extraction', '').addCost('metal', 25), new UpgradeDefinition('Liquid Extraction', '').addCost('duranium', 25), new UpgradeDefinition('Gas Extraction', '').addCost('duranium', 50), new UpgradeDefinition('Clathrate Extraction', '').addCost('nanofiber', 15), new UpgradeDefinition('Particulate Enrichment', '').addCost('nanofiber', 25), new UpgradeDefinition('Crystal Extraction', '').addCost('nanofiber', 50)];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /opt/lampp/htdocs/img/space-idle/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map