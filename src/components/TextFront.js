import React,{useState} from 'react'

export default function TextFront(props) {
    const [text,setText]=useState('enter here');
    const handle=()=>{
       let newu=text.toUpperCase();
        setText(newu);
        props.showalert("converted to uppercase!","success");
    }
    const handle2=()=>{
      let newu=text.toLowerCase();
       setText(newu);
       props.showalert("converted to lowercase!","success");
   }
   const handle3=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("copied to clipboard!","success");
   }
   const handle4=()=>{
    setText('');
    props.showalert("textarea is cleared!","success");
   }
    const eventchange=(event)=>{
      setText(event.target.value);
    }
  return (
    <>
<div className="mb-3">
    <h4 style={{color: props.Mode === 'light' ?  'black':'white'}}>{props.heading}</h4>
  <textarea className="form-control" value ={text+'!'} onChange={eventchange} id="textarea" rows="8" style={{
  backgroundColor: props.Mode === 'light' ?  'white':'#101e30' ,
  color: props.Mode === 'light' ?  'black':'white' 
}}
></textarea>
  <button className="btn btn-primary mx-2 my-3" onClick={handle}>change to uppercase</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handle2}>change to lowercase</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handle3}>copy to clipboard</button>
  <button className="btn btn-primary mx-2 my-3" onClick={handle4}>clear</button>

</div>
<div className="container" style={{color: props.Mode === 'light' ?  'black':'white'}}>
   {text.split(' ').length} words and {text.length} characters
</div>
</>
  )
}
