(function () {

    "use strict";

    var valMsg = "validation message:";
    var regPatt = new RegExp(/^[0-9]*$/);
    var printDelay = 250;
    var infoMessage = "Printout delay is set to " + printDelay + "ms";

    // get DOM element references
    var label = $("#label");
    var input = $("#input");
    var button = $("#button");

    var printoutInfo = $("#printoutInfo");
    printoutInfo.html(infoMessage);

    // set label text
    label.text(valMsg);

    /**
     * print timeouted text
     * @param val[number] - value tobe printed out
     * @param delay[number] - print delay in ms
     * @param final[bool] - is last to be printed out 
     */
    function printTimeout(val, delay, final) {
        setTimeout(function () {
            if (!final) {
                console.warn(val, "delay: " + delay + "ms");
            }
            else {
                console.warn(val, "bee(s) in the honeypot");
            }
        }, delay);
    };

    /**
     * Helper to set DOM elements styles & properties on valid number
     */
    function validationOk(n) {
        button.removeClass("locked");
        var message = " valid";
        label.text(valMsg + message);

        
    };

    /**
     * Helper to set DOM elements styles & properties on invalid number
     */
    function validationFailed() {
        button.addClass("locked");
        var message = " not a number or number not in [0 - 10000] range";
        label.text(valMsg + message);
    };
    
    /**
     * Validate input - test if number (integer) and if fits in 0-10k range
     */
    function validateInput() {
        // use regular expresion to validate inut string
        setTimeout(function () {
            var v = input.val();
            if (regPatt.test(v)) {

                var n = parseInt(v);
                if (n > 0 && n < 10000) {
                    validationOk(n);
                }
                else {
                    validationFailed();
                }
            }
            else {
                validationFailed();
            }

        }, 10);
    };

    // bing input value change events
    input.on("keypress", validateInput);
    input.on("change", validateInput);

    // bind "onclick" callback
    button.on("click", function () {
        var v = input.val();
        var n = parseInt(v);
        for (var i = 1; i <= n; i++) {
            printTimeout(i, i * printDelay, i == n);
        }
    });


})();