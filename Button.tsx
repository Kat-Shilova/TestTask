import { useState } from 'react';

type Props = {
    text: string,
    backgroundColor: string,
    callbaсk: () => void,

}

function Button(props: Props) {
    const [text, setText] = useState<string>(props.text)
    const [backgroundColor, setBackgroundColor] = useState<string>(props.text)

    const onClick = () => {
        
        setText(preVvalue => {
            if (preVvalue === props.text ){
                return 'red';
            } else return props.text
        });

        setBackgroundColor(preVvalue => {
            if (preVvalue === props.text ){
                return 'newText';
            } else return props.text
        });

        props.callbaсk();
    }; 

    return (
        <button style={{backgroundColor: backgroundColor }} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;