# The Plan
## The Map

```
App.js (state: token)
|
+ Header.js (props: log out handler)
|
+ HomePage.js (props: button handlers)
|
+ LoginPage.js (state: form)
|   |
|   + Form.js (props: handlers)
|
+ SignUpPage.js (state: form)
|   |
|   + Form.js (props: handlers)
|
+ TodoPage.js (props: token; state: to-do [])
    |
    + TodoList.js (props: token, to-do [])
        |
        + ToDoItem.js (props: handler for item click)
```

## The To Do List To Do List
1. create app skeleton
1. get something rendering on each page
1. work from the bottom up, figuring out which props are are needed and passing them from parent
    - to-do item
        - `<li>? <p>?`
        - click-handler `(() => handleClick(itemId))`
    - to-do list
        - `<ul>?`
        - map to-do array
    - to-do page
        - input & button for adding new item
            - remember `onSubmit` on form
    - form
        - to be used by both sign up and log in pages; make generic and pass in the click & state handlers
    - sign up and login pages are identical (necessary to have two?)
    - home page is just a welcome with login & sign up buttons
    - header has nav links & sign out button
    - app.js has all the routes & mega state