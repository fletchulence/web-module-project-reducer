# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
      - run the handle changes EvtHandler
      - call dispatch - addOne action
      - the addOne Action calls the addOne reducer
      - reducer adds one to the state.total and updates state
      - app rerenders with state updates
* 
...

* TotalDisplay shows the total plus 1.
