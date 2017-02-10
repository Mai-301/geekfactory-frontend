var company = {};
company.Employee = function (name, department) {
    var self = this;
    self.name = name;
    self.department = department;
    self.role = "employee";
}

company.Manager = function (name, department, reports) {
    var self = this;
    company.Employee.call(self, name, department);
    self.role = "manager";
    self.reports = reports;

}
company.Manager.prototype.__proto__ = company.Employee.prototype;
company.Employee.prototype.getInfo = function () {
    return "My name is " + this.name + ". I am " + this.role + " in the " + this.department + " department.";
}
company.Manager.prototype.getInfo = function () {
    return company.Employee.prototype.getInfo.call(this) + " I manage " + this.reports + " employees.";
}
module.exports = company;