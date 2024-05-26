portfolio_controller = function($scope, $state, $transitions) {

    //? [ VARIABLES ]
    //* Get a list of all available states
    $scope.states = $state.get();
    //* Filter the default states
    $scope.states = $scope.states.filter((state) => state.name != "");

    //* Save the selected state index
    $scope.selected_state_index = 0;

    //* Copy interval flag
    $scope.copy_flag = false;

    //* Get the projects for the projects section
    $scope.projects = projects;

    //* Get the jobs for the jobs section
    $scope.jobs = jobs;

    //? [ FUNCTIONS ]
    //* When a state is changed, update the selected state index
    $transitions.onSuccess({}, function() {

        //* Get the currently selected state index
        const selected_index = $scope.states.indexOf($state.current);

        //* Change the saved variable to the selected index
        $scope.selected_state_index = selected_index;

    });

    //* Change the current state
    $scope.change_state = function(state_name) { 

        if ($state.current.name == state_name) return;
        $state.go(state_name);

    };

    //* Redirect to other sites
    $scope.redirect = function(link) { window.open(link, '_blank') };

    //* Copy mail to clipboard
    $scope.mail_copy = function() {

        navigator.clipboard.writeText("munoz.molero.iker@gmail.com");
        $scope.set_copy_timeout();

    };

    //* Copy mail message interval
    $scope.set_copy_timeout = function() {

        $scope.copy_flag = true;

        $scope.copy_timeout = setTimeout(() => {
            
            $scope.copy_flag = false;
            $scope.$apply()

        }, 3000);

    };

};

app.controller("portfolio_controller", portfolio_controller);