app.directive("projectCard", function() {

    return {

        "restrict": "E",
        "templateUrl": "../js/directives/project_card/project_card.html",
        "scope": { project: "=" },
        "link": function(scope, elem, attr) {

            //* Get all the variables from the project obj
            const { name, link, description, stack, img_url } = scope.project;
            scope.name = name;
            scope.description = description;
            scope.stack = stack;

            //* Assign the background image to the element
            elem.css('backgroundImage', `url(${img_url})`);

            //* Create the link to the product page
            scope.redirect = function() {

                window.open(link, '_blank')

            };

        }

    }

});