/*
Copyright MIT 2015 Lcf.vs
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
            value: detach = binder.bind(binder)
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
            value: detach(binder, Function.apply)
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