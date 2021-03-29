import {useInput} from "../hooks/hooks"
import { useColors} from "../hooks/ColorHooks"

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const {addColor} = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle("");
        resetColor("#000000");

    }


    return (
       <>
       <form onSubmit={submit}>

            <input type="text" placeholder="Color text" required {...titleProps} />
            <input {...colorProps} type="color" required  />
            <button>Add</button>
       
       </form>
       </>
    )
}
