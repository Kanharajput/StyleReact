## Dynamic styles applying through js
### syntax
```
style={{color: 'red'}}
```
### Dynamically adding classes to jsx elements
- Use backticks `` to modify string dynamically
    - example
        ```
        <div className={`form-control` ${!formValid ? 'invalid':''}}></div>
        ```
        - It will add a invalid class if formValid is false otherwise add a empty string.
        - We don't need this backticks if we className not contains any class already. It is used to merge two 
            classNames.
        - Access the invalid class in css like form-control.invalid
