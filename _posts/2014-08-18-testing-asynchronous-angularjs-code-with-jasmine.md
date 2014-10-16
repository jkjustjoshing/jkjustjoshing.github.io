---
title: Testing Asynchronous AngularJS Code With Jasmine
layout: default
---

Once you have a test runner and assertion library set up, writing a unit test is relatively easy:

    describe('Example test', function() {
    
        it('should run an assertion', function() {
            expect(1 + 2).toEqual(3);
        });
    
    });

Let's try unit testing the following Angular service:

    angular.module('test.josh', []).service('adder', function($http) {
    
        this.quickAdd = function(a, b) {
            return a + b;
        };
    
    })
NEVER PUT YOUR ASSERTIONS INSIDE PROMISE CALLBACKS!