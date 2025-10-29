import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import EditorComponent from './Editor';

const AddProduct = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [files, setFiles] = useState(null);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategory(res.data));
  }, []);

  console.log(category);

 
  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setFiles(filesArray)

    const urls = filesArray.map((file) => URL.createObjectURL(file));
    setUrls(urls);
  };


  const handleRemoveImage = (index) => {
   const newUrl = urls.filter((item , idx) => idx !== index)
   const newFiles = files.filter((item , idx) => idx !== index)
   setUrls(newUrl)
   setFiles(newFiles)
  }


  const handleSubmit = (e) => {
     e.preventDefault()


     const title = e.target.title.value
     const description = content 
     const originalPrice = e.target.original_price.value
     const offeredPrice = e.target.offered_price.value
     const category = e.target.category.value


     console.log({title , description , originalPrice , offeredPrice , category});

  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full justify-between gap-5 ">
          <div className="mt-5 flex-2">
            <input
              placeholder="Product Name"
              type="text"
              name="title"
              className="input input-bordered w-full  focus:outline-0"
            />

            {/* <EditorComponent/> */}
            <Editor content={content} setContent={setContent} />

            <div className="flex gap-5 mt-5">
              <input
                type="number"
                name="original_price"
                placeholder="Original Price in taka"
                className="input input-bordered w-full focus:outline-0"
              />
              <input
                type="number"
                name="offered_price"
                placeholder="Offered Price in taka"
                className="input input-bordered w-full focus:outline-0"
              />
            </div>

            <select
                name="category"
              defaultValue="Pick a color"
              className="select focus:outline-0 w-full mt-5"
            >
              <option disabled={true}>Pick a Category</option>

              {category?.map((item) => (
                <option>{item.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-5 flex-1">
            <div className="max-w-[300px]">
              <label htmlFor="upload-image">
                <div className="w-[300px] flex-col gap-5 flex items-center justify-center bg-base-200 aspect-square">
                  <FaPlus className="text-5xl" />
                  <h2 className="text-xl font-semibold">Upload Images</h2>
                </div>
              </label>

              <input
                onChange={handleFileChange}
                multiple
                className="hidden"
                id="upload-image"
                accept="image/*"
                type="file"
              />

              <div className="grid h-[400px] overflow-y-auto gap-3  items-start content-start mt-5 grid-cols-3">
                {urls.map((url , index) => (
                 <div className="relative">
                     <img src={url} alt="" />
                     <ImCross onClick={() => handleRemoveImage(index)} className="absolute right-2 top-2 cursor-pointer text-red-500" />
                 </div>
                ))}
              </div>


             <div className="flex justify-end">
                 <button type="submit" className="btn btn-primary ">Submit</button>
             </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
