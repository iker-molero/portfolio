app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state ("about_me", {

            "url": "/about_me",
            "templateUrl": "../view/about_me.html",
            "icon": "fa-user"

        })
        .state ("projects", {
            
            "url": "/projects",
            "templateUrl": "../view/projects.html",
            "icon": "fa-code"
            
        })
        .state ("career", {

            "url": "/career",
            "templateUrl": "../view/career.html",
            "icon": "fa-briefcase"

        })

    $urlRouterProvider.otherwise("/about_me");

});