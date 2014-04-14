/*! pretty-drop - v0.0.2 - 2014-04-14
* https://github.com/satoshi-m8a/pretty-drop
* Copyright (c) 2014 satoshi.m8a; Licensed MIT */
(function ($) {
    "use strict";

    function PrettyDrop(element, options) {
        this.element = $(element);
        this.options = options;
        this.menus = element.find(this.options.menuSelector);
        this.count = 0;
        this.tracks = new Array(this.options.track);

        var timer, closeTimer, prev, active, first = true , that = this;

        this.element.on('mouseleave', function () {
            closeTimer = setTimeout(function () {
                if (active) {
                    options.deactive(active);
                }
                first = true;
            }, options.closeDelay);
        });
        this.element.on('mouseenter', function () {
            if (closeTimer) {
                clearTimeout(closeTimer);
            }
        });

        this.menus.each(function () {
            var menu = $(this);
            var leave = false;
            menu.on('mouseenter', function () {
                if (first) {
                    active = menu;
                    options.active(menu);
                    first = false;
                    return;
                }

                leave = false;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    if (prev) {
                        options.deactive(prev);
                    }
                    if (!leave) {
                        active = menu;
                        options.active(menu);
                    }
                }, that.calcDelay());
            });

            menu.on('mouseleave', function () {
                leave = true;
                if (menu === active) {
                    prev = menu;
                }
            });

            menu.on('mousemove', function (e) {
                that.trackPosition({
                    x: e.pageX,
                    y: e.pageY
                });
            });
        });
    }

    PrettyDrop.prototype.trackPosition = function (pt) {
        var index = this.count % this.options.track;
        this.tracks[index] = pt;
        this.count++;
    };

    PrettyDrop.prototype.calcDelay = function () {
        var endIndex = (this.count - 1) % this.options.track;
        var startIndex = this.count % this.options.track;
        var end = this.tracks[endIndex];
        var start = this.tracks[startIndex];
        if (!start) {
            start = this.tracks[0];
        }
        if (this.count < this.track && !end) {
            end = this.tracks[this.count];
        }
        if (!end && !start) {
            return this.options.defaultDelay;
        }

        var angle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
        if (angle <= 0) {
            return this.options.defaultDelay;
        } else if (angle > 90) {
            angle = 180 - angle;
        }

        var delay = this.options.delay * angle;
        if (delay > this.options.maxDelay) {
            delay = this.options.maxDelay;
        }

        return delay;
    };

    PrettyDrop.defaults = {
        active: $.noop,
        deactive: $.noop,
        menuSelector: "li",
        delay: 100,
        defaultDelay: 300,
        track: 5,
        closeDelay: 500,
        maxDelay: 1300
    };

    var old = $.fn.prettyDrop;

    $.fn.prettyDrop = function (options) {
        return this.each(function () {
            var elem = $(this);
            options = $.extend({}, PrettyDrop.defaults, options);
            return new PrettyDrop(elem, options);
        });
    };

    $.fn.prettyDrop.Constructor = PrettyDrop;

    $.fn.prettyDrop.noConflict = function () {
        $.fn.prettyDrop = old;
        return this;
    };


}(jQuery));
