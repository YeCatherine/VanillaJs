/**
 * Creates a new MyPromise.
 * @class
 */
class MyPromise extends Promise {
    constructor(executor) {
        super((resolve, reject) => {
            return executor(resolve, reject);
        });

        /**
         * Solves addition of the synchronous function to the promise.
         * @example <caption>Example usage of synchThen method.</caption>
         *  .synchThen(() => { console.log(2); })
         * MyPromise.synchThen(2);
         * @param fn {object} The function to execute like IIFE.
         * @returns {object} Executes the function and returns the new promise.
         */
        this.synchThen = function (fn) {
            fn();
            return this;
        };
    }
}

export default MyPromise;
