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
            unbind,
            call,
            apply,
            bind;

        sbind = Object.create(null);
        add = Object.defineProperty.bind(null, sbind);
        binder = Function.bind;

        add('unbind', {
            value: unbind = binder.bind(binder)
        });

        add('call', {
            value: call = unbind(Function.call)
        });

        add('apply', {
            value: apply = unbind(Function.apply)
        });

        add('bind', {
            value: bind = unbind(Function.bind)
        });

        add('all', {
            value: unbind(Function.apply.bind)
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