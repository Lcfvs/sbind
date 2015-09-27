/*
Copyright 2015 Lcf.vs
Released under the MIT license
https://github.com/Lcfvs/sbind
*/
(function (global) {
    'use strict';

    var main;
    
    main = function () {
        var sbind,
            add,
            binder,
            detach,
            call,
            apply,
            bind;

        sbind = Object.create(null);
        add = Object.defineProperty.bind(null, sbind);
        binder = Function.bind;

        add('detach', {
            value: detach = function (method) {
                return binder.bind(method);
            }
        });

        add('call', {
            value: call = detach(Function.call)
        });

        add('apply', {
            value: apply = detach(Function.apply)
        });

        add('bind', {
            value: bind = detach(Function.bind)
        });

        add('all', {
            value: detach(apply, null)
        });
        
        return sbind;
    };
        
    if (typeof define === 'function' && define.amd) {
        return define(main);
    }
    
    if (typeof module === 'object' && module.exports) {
        return module.exports = main();
    }

    return global.sbind = main();
}(this));