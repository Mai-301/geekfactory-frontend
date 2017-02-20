"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    Person.prototype.getRole = function () {
    };
    Person.prototype.getInfo = function () {
        return "My name is " + this.name + ". I am a " + this.getRole() + ".";
    };
    return Person;
}());
exports.Person = Person;
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Student.prototype.getRole = function () {
        return "Student";
    };
    return Student;
}(Person));
exports.Student = Student;
var Staff = (function (_super) {
    __extends(Staff, _super);
    function Staff(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Staff.prototype.getRole = function () {
        return "Staff";
    };
    return Staff;
}(Person));
exports.Staff = Staff;
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, type) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.type = type;
        return _this;
    }
    Teacher.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ' I teach ' + this.type + '.';
    };
    return Teacher;
}(Staff));
exports.Teacher = Teacher;
