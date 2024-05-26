app.directive("jobCard", function() {

    return {

        "restrict": "E",
        "templateUrl": "../js/directives/job_card/job_card.html",
        "scope": { job: "=" },
        "link": function(scope, elem, attr) {

            //* Get all the variables from the project obj
            const { position, company, link, start, end, description, img_url } = scope.job;
            scope.position = position;
            scope.company = company;
            scope.start = start;
            scope.end = end;
            scope.description = description;

            //* Assign the background image to the element
            elem.css('backgroundImage', `url(${img_url})`);

            //* Create the link to the product page
            scope.redirect = function() { window.open(link, '_blank') };

        }

    }

});