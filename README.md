
# react-outsideClick-Handler

React Library for dealing with outside click of its container.




## Usage/Examples

```javascript
import { useState } from "react";
import "./App.css";
import { OutsideClickHandler } from "outsideclick-handler-react";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <OutsideClickHandler
          onClickOutside={() => {
            alert("You clicked outside of me!");
            setCount((pre) => pre + 1);
          }}
        >
          <div className="border-red">click outside of me, clicks {count}</div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
```



## Props

### onOutsideClick:
This prop is required to access outside click callback otherwise it is just a div.

### other Props
you can pass any other props, which you wish to pass/assign a `div`. 
Like you can pass `className` to style it, you can pass `id/ref` to assign it. I mean you can pass any attribute to this which you ever want to assign your div. As I said it is just a div but you need to pass `onOutsideClick` function for accessing callback.