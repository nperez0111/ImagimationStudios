/* global describe, it */

(function() {
    'use strict';

    describe('Person Obj', function() {
        describe('.addCourse()', function() {
            it('adds a new course to the persons schedule', function() {
                var me = new person(),
                    obj = new course();
                assert.equal(obj, me.addCourse(1, obj).schedule[1][0]);
            });
            it('sorts added course when entered into persons schedule by start time', function() {
                var me = new person(),
                    obj1 = new course('', '', 8, ''),
                    obj2 = new course('', '', 7, ''),
                    save = me.addCourse(1, obj1).addCourse(1, obj2).schedule[1];
                expect(save[0]).to.equal(obj2);
                expect(save[1]).to.equal(obj1);
            });
        });
        describe('.getName()', function() {
            it("gets the initially set name", function() {
                var str = "name",
                    me = new person(str);
                expect(me.getName()).to.be.a('string');
                expect(me.getName()).to.equal(str);
            });
        });
        describe('.getEveryCourse()', function() {
            it("gets all courses prop by prop", function() {
                var prop = "title",
                    me = new person();
                me.addCourse(1, new course('title')).addCourse(1, new course('title')).addCourse(2, new course('title')).addCourse(3, new course('title')).addCourse(4, new course('title')).addCourse(5, new course('title'));
                //expect(me.getEveryCourse(prop)).to.be.a('array');
                expect(me.getEveryCourse(prop)[1][0]).to.equal("title");
                expect(me.getEveryCourse(prop)[1][1]).to.equal("title");
                expect(me.getEveryCourse(prop)[2][0]).to.equal("title");
                expect(me.getEveryCourse(prop)[3][0]).to.equal("title");
                expect(me.getEveryCourse(prop)[4][0]).to.equal("title");
                expect(me.getEveryCourse(prop)[5][0]).to.equal("title");
            });
            it("returns empty array if no value inputted into person obj", function() {
                var prop = "title",
                    me = new person();
                //me.addCourse(1, new course('title')).addCourse(1, new course('title')).addCourse(2, new course('title')).addCourse(3, new course('title')).addCourse(4, new course('title')).addCourse(5, new course('title'));
                //expect(me.getEveryCourse(prop)).to.be.a('array');
                expect(me.getEveryCourse(prop)[0]).to.be.an('Array');
                expect(me.getEveryCourse(prop)[1]).to.be.an('Array');
                expect(me.getEveryCourse(prop)[2]).to.be.an('Array');
                expect(me.getEveryCourse(prop)[3]).to.be.an('Array');
                expect(me.getEveryCourse(prop)[4]).to.be.an('Array');
                expect(me.getEveryCourse(prop)[5]).to.be.an('Array');
            });
        });
        describe('.getTimes()', function() {
            it("gets all times in format[start,end]", function() {
                var str = "name",
                    me = new person(str);
                me.addCourse(0, new course("", "", 8, 2)).addCourse(0, new course("", "", 7, 8)).addCourse(1, new course("", "", 7, 8)).addCourse(2, new course("", "", 7, 8)).addCourse(6, new course("", "", 7, 8)).addCourse(6, new course("", "", 9, 10));
                expect(me.getTimes()).to.be.an('Array');
                expect(me.getTimes()[0][0][0]).to.equal(7);
                expect(me.getTimes()[0][1][0]).to.equal(8);
                expect(me.getTimes()[6][0][0]).to.equal(7);
            });
        });
        describe('.removeCourse(day,courseTitle)', function() {
            it("removes course from day with courseTitle", function() {
                var str = "name",
                    me = new person(str);
                me.addCourse(0, new course("title", "", 8, 2)).removeCourse(0, "title");

                expect(me.schedule[0][0]).to.be.undefined;
            });
            it("returns removed course from day with courseTitle", function() {
                var str = "name",
                    me = new person(str),
                    obj = new course("title", "", 8, 2);
                me.addCourse(0, obj);

                expect(me.removeCourse(0, "title")).to.equal(obj);
            });
            it("returns null if course from day with courseTitle is not found", function() {
                var str = "name",
                    me = new person(str),
                    obj = new course("title", "", 8, 2);
                me.addCourse(0, obj);

                expect(me.removeCourse(0, "not a title")).to.be.null;
            });
        });
        describe('.getCourse(day,courseTitle)', function() {
            it("gets course for day with course title of courseTitle", function() {
                var str = "name",
                    me = new person(str),
                    obj = new course("title", "", 8, 2),
                    courseObj = me.addCourse(1, obj).getCourse(1, "title");

                expect(courseObj).to.equal(obj);
            });
            it("returns null if course for day with course title of courseTitle is not found", function() {
                var str = "name",
                    me = new person(str),
                    obj = new course("title", "", 8, 2),
                    courseObj = me.addCourse(1, obj).getCourse(1, "not a title");

                expect(courseObj).to.be.null;
            });
        });
        describe('.getTimes()', function() {
            it('gets all times of every course and mocks the schedule of this person', function() {
                var str = "name",
                    me = new person(str);
                me.addCourse(0, new course("", "", 8, 12))
                    .addCourse(0, new course("", "", 13, 15))
                    .addCourse(1, new course("", "", 7, 8))
                    .addCourse(1, new course("", "", 9, 13))
                    .addCourse(2, new course("", "", 7, 8))
                    .addCourse(6, new course("", "", 7, 8))
                    .addCourse(6, new course("", "", 9, 10));

                var test = me.getTimes();

                expect(test[0][0][0]).to.equal(8);
                expect(test[0][0][1]).to.equal(12);
                expect(test[0][1][0]).to.equal(13);
                expect(test[0][1][1]).to.equal(15);
                expect(test[6][1][0]).to.equal(9);
                expect(test[6][1][1]).to.equal(10);
            });
        });
    });
    describe('Course Obj', function() {
        describe('.edit(property,to)', function() {
            it("sets any property of course to be to if property exists", function() {
                var c = new course("title", "prof", 8, 9);
                c.edit('prof', "proffessor man teacher").edit('title', "title of hard course");
                expect(c.getTitle()).to.equal("title of hard course");
                expect(c.getProf()).to.equal("proffessor man teacher");
            });
            it("returns null if property is not possible", function() {
                var c = new course('', '', 8, 9);
                expect(c.edit('notAProp', 'wont be set')).to.be.null;
            });
        });
        describe('.get(property)', function() {
            it("gets any property of course if property exists", function() {
                var c = new course("title", "prof", 8, 9);
                c.edit('prof', "proffessor man teacher").edit('title', "title of hard course");
                expect(c.get('title')).to.equal("title of hard course");
                expect(c.get('prof')).to.equal("proffessor man teacher");
            });
        });
    });
    describe('graph obj', function() {
        it('graphs users schedule and whoever is selected to be viewed by default everyone', function() {

        });
        describe('.graphA(person)', function() {
            it('graphs an individual person in order to modularize the graphing proccess to be easily disabled', function() {

            });
        });
        describe('.getUser(userID)', function() {
            it('gets and returns a user obj by ajaxing for specified userID', function() {

            });
            it('returns null if userID not found', function() {

            });
        });
    });
})();
