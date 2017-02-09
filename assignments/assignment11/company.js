var company = {
    Employee: function (name, department) {
        this.name = name;
        this.department = department;
        this.role = "employee";
        this.getInfo = function () {
            return "My name is " + this.name + ". I am " + this.role + " in the " + this.department + " department.";
        }

    }
}
module.exports = company;