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
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategory(res.data));
  }, []);

  console.log(category);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setFiles(filesArray);

    const urls = filesArray.map((file) => URL.createObjectURL(file));
    setUrls(urls);
  };

  const handleRemoveImage = (index) => {
    const newUrl = urls.filter((item, idx) => idx !== index);
    const newFiles = files.filter((item, idx) => idx !== index);
    setUrls(newUrl);
    setFiles(newFiles);
  };

  const uploadImage = async () => {
    setLoading("Uploading images...");
    const imageUrls = [];

    for (let file of files) {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", "mern_preset");

      try {
        const result = await axios.post(
          "https://api.cloudinary.com/v1_1/dssxxoqpd/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(result.data);
        imageUrls.push(result.data.url);
      } catch (error) {
        console.log(error);
      }
    }

    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const shortDescription = e.target.shortDescription.value;
    const description = content;
    const originalPrice = e.target.original_price.value;
    const offeredPrice = e.target.offered_price.value;
    const category = e.target.category.value;
    const imageUrls = await uploadImage();

    console.log({ title, description, originalPrice, offeredPrice, category });

    // console.log(imageUrls);

    setLoading("Adding Product...");

    const payload = {title, description, shortDescription ,originalPrice, offeredPrice, category , imageUrls}

    try {
      const result = await axios.post("http://localhost:3000/product" , payload);
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(null);
      e.target.reset()
      setContent(null)
      setFiles([])
      setUrls([])
    }


  };

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


            <textarea
              placeholder="Short Description"
              type="text"
              name="shortDescription"
              className="input h-28 py-2 resize-none text-wrap  mt-5 input-bordered w-full  focus:outline-0"
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
                {urls.map((url, index) => (
                  <div className="relative">
                    <img src={url} alt="" />
                    <ImCross
                      onClick={() => handleRemoveImage(index)}
                      className="absolute right-2 top-2 cursor-pointer text-red-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary ">
                  {loading ? loading : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
