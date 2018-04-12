"use strict";

declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    })
  }
  
  setImage(imageUrl:string) {
    this.mainImageUrl = imageUrl;
  }
}


angular
  .module("phoneDetail")
  .component("phoneDetail", {
    templateUrl: "./phone-detail.template.html",
    controller: PhoneDetailController
});

// [
//   "$routeParams",
//   "Phone",
//   function PhoneDetailController($routeParams, Phone) {
//     var self = this;
//     self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(
//       phone
//     ) {
//       self.setImage(phone.images[0]);
//     });

//     self.setImage = function setImage(imageUrl) {
//       self.mainImageUrl = imageUrl;
//     };
//   }
// ]
