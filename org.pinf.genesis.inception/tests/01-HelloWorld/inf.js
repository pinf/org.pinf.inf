
'use strict';

exports.inf = async function (INF, ALIAS) {

    return {
        invoke: async function (pointer, value) {

            if (pointer === "expand") {

                console.log("Expand!");

                return true;
            }
        }        
    }
}
