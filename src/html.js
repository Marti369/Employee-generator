//creates a new function to generate a new member
const newMemberGenerate = function(employee) {
    //console.log('Hello') //just to verify the function works on the console

    if (employee.position === "Manager") {
        positionAdd = `Office Number: ${employee.phone}`;
        /* positionAdd2 = `Github: <a href = https://www.github.com/${employee.github} target="new_tab">${employee.github}</a>` */
    } else if (employee.position === "Engineer") {
        positionAdd = `Github: <a href = https://www.github.com/${employee.github} target="new_tab">${employee.github}</a>`;
    } else {
        (employee.position === "Intern")
        positionAdd = `School: ${employee.school}`
    }

    return `
    <div class="col-4 mb-5">
                <div class="card shadow-lg" style="width: 18rem;">
                    <div class="card-header text-white bg-success">
                        <h2 class="card-title">${employee.name}</h2>
                        <h4>${employee.position}</h4>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email:
                                <a href = "mailto: ${employee.email}">${employee.email}</a>
                                </li>
                                <li class="list-group-item">${positionAdd}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `
}

const generatePage = function(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Our Team!</title>
</head>
<div class="jumbotron jumbotron-fluid bg-primary ">
    <div class="container">
        <h1 class="display-3 text-center text-white">Welcome to Our Team!</h1>
    </div>
</div>
<body>
    <div class="container">
        <div class="row">
            ${employees}
        </div>
    </div>
</body>
<footer>
<h6 class="display-3 text-center text-white">UCB Challenge</h6>
</footer>
</html>
    `;
};

module.exports = { generatePage, newMemberGenerate }