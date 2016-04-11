/**
 * Created by Kaushik Samanta on 10-04-2016.
 */
angular
    .module('Resume', ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/page/tab1');
        $stateProvider
            .state('tab1', {
                name: 'tab1',
                url: '/tab1',
                templateUrl: 'app/views/tab1.html'
            })
            .state('tab2', {
                name: 'tab2',
                url: '/tab2',
                templateUrl: 'app/views/tab2.html'
            })
            .state('tab3', {
                name: 'tab3',
                url: '/tab3',
                templateUrl: 'app/views/tab3.html'
            })
            .state('tab4', {
                name: 'tab4',
                url: '/tab4',
                templateUrl: 'app/views/tab4.html'
            });
    })
    .controller('DemoController', function( $scope, $window, $state ,$timeout)
    {
        $scope.transition = 'slide-left';
        $scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
        $scope.currentIndex = -1;
        $scope.maxIndex = $scope.tabs.length;
        $scope.left = false;

        $state.go('tab1');
        $scope.left = function()
        {
            $scope.transition = 'slide-left';
            $state.go('tab1');
        };

        $scope.right = function()
        {
            $scope.transition = 'slide-right';
            $state.go('tab2');
        };

        $scope.top = function()
        {
            $scope.transition = 'slide-top';
            $state.go('tab3');
        };

        $scope.bottom = function()
        {
            $scope.transition = 'slide-bottom';
            $state.go('tab4');
        };

    })
;