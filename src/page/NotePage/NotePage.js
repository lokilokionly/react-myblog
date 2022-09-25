import './NotePage.css'

// import { useEffect } from "react";
import { useState } from "react";
// import { useRef } from "react"

function NotePage() {
    const [Note , setNote] = useState('Здесь будет ваша запись)')
    const [Text , setText] = useState('')

    const OnlyText = event => {
        setText(event.target.value)
    }
    const AddNote = () => {
        setNote(Text)
    }
    const DeleteNote = () => {
        setNote('Здесь будет ваша запись')

        
    }
    
    
    // const [content, setContent] = useState('');
    // const [width, setWidth] = useState(0);
    // const span = useRef();

    // useEffect(() => {
    //     setWidth(span.current.offsetWidth);
    //   }, [content]);
    
    //   const changeHandler = evt => {
    //     setContent(evt.target.value);
    //   };
       
    return(
        <main className="">


           


            <div className="px-10 py-10 ">
            <div className="flex justify-between">
            <button
                onClick={AddNote} 
                className=" border-2 border-[#9ACD32] px-5 py-2 bg-[#9ACD32]">
                    <p className=" text-[18px]">
                        Добавить</p></button>
            <button 
                className=" border-2 border-[#FFA500] px-5 py-2 bg-[#FFA500]">
                    <p className=" text-[18px]">
                        Редактировать</p></button>
            <button 
                onClick={DeleteNote}
                className=" border-2 border-[#FF6347] px-5 py-2 bg-[#FF6347]">
                    <p className=" text-[18px]">
                        Удалить</p></button>
            </div>
                <input className="m-5 p-auto text-[26px] w-2/3 p-2 rounded-lg" type="text" value={Text} onChange={OnlyText} />
            <div>
                <div className=" bg-red-400 rounded-lg">
                    <h1 
                        className=" text-[26px] break-all px-5 py-2 text-left MyNote">{Note}</h1>
                </div>

                {/* <wrapper is="custom">
                <span id="hide" ref={span}>{content}</span>
                <input type="text" style={{ width }} autoFocus onChange={changeHandler} />
                </wrapper>
 */}

            </div>
            </div>
        </main>
    )
}
export default NotePage;