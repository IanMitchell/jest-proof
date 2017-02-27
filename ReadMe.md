Bad file names, but essentially this is the structure:

* Base class (person.js) which has methods / variables intended to be static.
* Closure (static-person.js) which is intended to create a singleton to persist Base class variables.
* Consumers (actor.js) that have a dependency on the Closure

When testing Consumer, if you mock out a method you get from the closure, it doesn't reset between tests. How can you discard the mock?
