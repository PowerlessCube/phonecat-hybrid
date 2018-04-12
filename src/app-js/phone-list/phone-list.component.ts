"use strict";
declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from "../core/phone/phone.service";

export class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

angular
  .module("phoneList")
  .component("phoneList", {
  templateUrl: "./phone-list.template.html",
  controller: PhoneListController
});
