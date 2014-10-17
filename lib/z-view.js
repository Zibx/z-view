/**
 * Created by Ivan on 10/17/2014.
 */
(function(  ){
    'use strict';
    var Z = require('z-lib');
    var View = Z.View = function(  ){

    };
    View.prototype = {};
    View.Observable = {
        listenersProperty: '_listen',
        _unbindListeners: function( listenersProperty ){
            var listen = this[ listenersProperty || this.listenersProperty],
                i, remove;

            if (listen)
                for( i in listen )
                    listen.hasOwnProperty( i ) &&
                        (remove = listen[i]) &&
                            (
                                (typeof remove.remove === 'function' && remove.remove())
                                ||
                                (typeof remove === 'function' && remove)
                            );

        },

        _initListeners: function () {
            this[this.listenersProperty] = {};
        }
    }
})();