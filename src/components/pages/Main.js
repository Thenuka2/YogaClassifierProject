import React, { useState , useEffect} from 'react';

function Main() {
  const [result, setResult] = useState('');
  const [file, setFile] = useState(null);
  const [base64TextString, setBase64TextString] = useState('');

  useEffect(() => {
    console.log('image : ', file);
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  }, [file]);

  const handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setBase64TextString(btoa(binaryString));
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setResult('');
  };

  function handleSubmit(event) {
    event.preventDefault();
    const form_data = new FormData(event.target);
    fetch('/predict', {
      method: 'POST',
      body: form_data
    })
    .then(response => response.text())
    .then(data => setResult(data))
    .catch(error => console.error(error));
  }

  return (
  

  
 <div >
  
   
   <form onSubmit={handleSubmit}>
   <h1>Yoga Pose Classifier</h1>
   
     <input  type="file" name="file" accept="image/*" required onChange={handleChange}/>
  
     <div >
       <img src={file ? URL.createObjectURL(file) : ''} alt="file"  width="200"  height ="200"/>
     </div>
     <button  type="submit">Submit</button>
   </form>
 
  
    <div>
    {result && <p>Yoga Pose: {result}</p>}
    </div>
  
 </div>
 

  );
}
export default Main;
