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

### Use Styled Components to style
    - Using it we can write the css code in js file and it also not tied up with other components. Because we
        rendered components on a single page and at last two components with same className elements will lead to problems.
    - It also handles props and also let us pass dynamic styles.
    - syntax
    ```
    const Button = styled.button`
    all style code here
    The code which directly affects button then don't use .botton{} directly write the code
    And code for elements which are inside the button for them use &:hover , &:label
    ```

    - Adding classes dynamically to the style componenet which are created using styled components 
        - &.invalid{ style code }
            - Here & is root element or class to which we want to attach a new class 
            - <FormHandler {!isValid && 'invalid'}>  this code add invalid class when isValid is false.


