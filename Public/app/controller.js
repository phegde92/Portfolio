/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
; (function () {

  angular
    .module('myPortfolio')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$scope'];


  function MainController(LocalStorage, QueryService, $scope) {

    // 'controller as' syntax
    var self = this;
    console.log('Blah');
    var myBirthday = new Date("1992-05-29T09:00:00");
    var ageDifMs = Date.now() - myBirthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    $scope.myAge = Math.abs(ageDate.getUTCFullYear() - 1970);



    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();