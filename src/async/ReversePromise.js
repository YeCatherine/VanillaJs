/**
 * Creates a new ReversePromise.
 * @class
 */
class ReversePromise extends Promise {
    constructor(fn) {
        super((f) => f());
        this.fn = fn;
        this.stack = [];
        setTimeout(() => {
            this.res();
        });
    }

    /**
     * Solves reversing of the promise' stack.
     * @returns {object} Accumulates the promises and reverses the stack.
     */
    res() {
        let current = new Promise(this.fn);
        while (this.stack.length) {
            current = current.then(this.stack.pop());
        }
        return current;
    }

    then(fn) {
        this.stack.push(fn);
        return this;
    }
}

export default ReversePromise;
