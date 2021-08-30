</script>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
    
    <script>


    Stripe.setPublishableKey('fillMePlease')

    angular.module('app', ['angularPayments'])

    MainController = function($scope){
      $scope.handleStripe = function(status, response){
        if(response.error) {
          // there was an error. Fix it.
        } else {
          // got stripe token, now charge it or smt
          token = response.id
        }
      }
    }

    