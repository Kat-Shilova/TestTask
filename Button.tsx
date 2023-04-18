import { useState } from 'react';

type Props = {
    text: string,
    backgroundColor: string,
    callback: () => void,

}

function Button(props: Props) {
    const [text, setText] = useState<string>(props.text)
    const [backgroundColor, setBackgroundColor] = useState<string>(props.backgroundColor)

    const onClick = () => {
        
        setText(preVvalue => {
            if (preVvalue === props.text ){
                return 'newText';
            } else return props.text
        });

        setBackgroundColor(preVvalue => {
            if (preVvalue === props.backgroundColor ){
                return 'red';
            } else return props.backgroundColor
        });

        props.callback();
    }; 

    return (
        <button style={{backgroundColor: backgroundColor }} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;