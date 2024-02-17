import { useState } from "react";
import axios from "axios"
function AddTour(){
    const [tourName,setTourName]=useState()
    const [description,setDescription]=useState()
    const [price,setPrice]=useState()
    const [tourType,setTourType]=useState()
const [selectedFile,setSelectedFile]=useState()
const handleNameChange = (event) => {
    setTourName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleTypeChange=(event)=>{
    setTourType(event.target.value)
    console.log(event.target.value)
  }
  const handlePriceChange=(event)=>{
setPrice(event.target.value)
  }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

      const handleSubmit = async () => {
        try {
          const formData = new FormData();
          formData.append('title', tourName);
          formData.append('description', description);
          formData.append('type',tourType);
          formData.append('price',price)
          formData.append('file', selectedFile);
          // Lokal API adresinizi buraya ekleyin
        
    
    
          // Axios ile POST isteği gönderme
          const response = await axios.post("http://localhost:3001/api/tours", formData);
    
          // İsteğin başarılı olup olmadığını kontrol edebilirsiniz
          if(response.status===200){
            console.log("success")
          }
        } catch (error) {
          console.error('Hata:', error);
        }
      };
    return(
        <div className="flex flex-col w-full overflow-hidden">
<div className="flex flex-col gap-[20px] p-[20px]">
    <input type="text" name="name" value={tourName} onChange={handleNameChange}  placeholder="Tur adı" className="pl-2 border-[1px] border-black outline-none h-[40px]"></input>
    <input type="text" name="price" value={price} onChange={handlePriceChange} placeholder="Qiyməti" className="pl-2 border-[1px] border-black outline-none h-[40px]"></input>
    <select name="type" value={tourType} onChange={handleTypeChange} className="pl-2 border-[1px] border-black outline-none h-[40px]">
        <option hidden>Kateqoriya</option>
        <option value="Xarici tur">Xarici tur</option>
        <option value="Daxili tur">Daxili tur</option>
        <option value="Məktəbli turu">Məktəbli turu</option>
        <option value="Ziyarətlər">Ziyarətlər</option>
    </select>
    <label htmlFor="fileInput" className='cursor-pointer bg-white text-black h-[40px] flex items-center justify-start pl-2 border-2 border-black w-full'>Örtük şəkli</label>
      <input type="file" name="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
    <textarea name="description" value={description} onChange={handleDescriptionChange} placeholder="Açıqlama" className="pl-2 border-[1px] border-black outline-none h-[40px] min-h-[300px] min-w-full max-h-[300px] max-w-full"></textarea>
<button onClick={handleSubmit} className="w-[200px] bg-red-600 text-white h-[40px] flex items-center justify-center font-bold">Əlavə et</button>
</div>
        </div>
    )
}
export default AddTour