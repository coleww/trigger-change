triggerChange
------------------

given an element, it sets it's value and triggers a "change event" (this is an utter betrayal of the unix philosophy AKA "do one thing", i should really write another module that changes the value and let this one just trigger the event, but c'est la vie).

```
    var triggerChange = require('triggerChange')
    var inny = document.querySelector('input')
    triggerChange(inny, 'wowowowowowowow')
```

you know, for testing event handlers and stuff...

#### FAQ:

Q: What if I want to trigger other kinds of events?
A: Too bad.

Q: Does this work in IE?
A: Probably not.

Q: Why not just use jQuery?
A: This is funnier.

Q: [B-b-b-b-ut createEvent/initEvent are deprecated!](https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent)
A: That is not actually a question.
