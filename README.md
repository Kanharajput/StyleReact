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
    `;
    ```
    The code which directly affects button then don't use .botton{} directly write the code
    And code for elements which are inside the button for them use &:hover , &:label

    - Adding classes dynamically to the style componenet which are created using styled components 
        - &.invalid{ style code }
            - Here & is root element or class to which we want to attach a new class 
            - <FormHandler {!isValid && 'invalid'}>  this code add invalid class when isValid is false.

        - Another way is using props.
            - Just pass the props like how we pass to normal component and handle it inside styled components
                syntax 
                ```
                <FormHandler invalid = {!isValid}> 
                <!-- if invalid is true it shows the red clr otherwise black -->
                border: 1px solid ${props => (props.invalid ? 'red': '#ccc')};
                ```
    - Css Modules: This modules hepl us store styles of component seperatly from the component logical code.
        - Change file names from button.css to button.module.css
        - Import like ```import style from './button.module.css';```
        - <FormHandler className={style.button}> attaching button class to FormHandler