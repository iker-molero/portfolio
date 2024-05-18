portfolio_controller = function($scope, $state, $transitions) {

    //? [ VARIABLES ]
    //* Get a list of all available states
    $scope.states = $state.get();
    //* Filter the default states
    $scope.states = $scope.states.filter((state) => state.name != "");

    //* Save the selected state index
    $scope.selected_state_index = 0;

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

};

app.controller("portfolio_controller", portfolio_controller);