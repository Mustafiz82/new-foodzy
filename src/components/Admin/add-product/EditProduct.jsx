import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate, useParams } from "react-router";
// import EditorComponent from './Editor';

const EditProduct = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [files, setFiles] = useState(null);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log(id);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategory(res.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/product/${id}`).then((res) => {
      setProduct(res.data);
      setContent(res.data.description);
      setUrls(res.data.imageUrls || []);
    });
  }, []);

  // console.log(product);

  // console.log(category);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setFiles(filesArray);

    const blobUrl = filesArray.map((file) => URL.createObjectURL(file));

    const urlsVariable = [...urls, ...blobUrl];

    setUrls(urlsVariable);
  };

  const handleRemoveImage = (index) => {
    const newUrl = urls?.filter((item, idx) => idx !== index);
    const newFiles = files?.filter((item, idx) => idx !== index);
    setUrls(newUrl);
    setFiles(newFiles);
  };

  const uploadImage = async () => {
    setLoading("Uploading images...");
    const imageUrls = [];

    if (files?.length > 0) {
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
    }

    return imageUrls;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = content;
    const originalPrice = e.target.original_price.value;
    const offeredPrice = e.target.offered_price.value;
    const category = e.target.category.value;

    const urlToUpload = [];
    const cloudinaryUpload = [];

    console.log(urls);

    for (let items of urls) {
      if (items.startsWith("blob:")) {
        urlToUpload.push(items);
      } else {
        cloudinaryUpload.push(items);
      }
    }

    const imageUrls = await uploadImage();
    const allDeployedUrl = [...cloudinaryUpload, ...imageUrls];
    console.log(allDeployedUrl);

    setLoading("updating Product...");

    const payload = {
      title,
      description,
      originalPrice,
      offeredPrice,
      category,
      imageUrls: allDeployedUrl,
    };

    try {
      const result = await axios.put(
        `http://localhost:3000/product/${id}`,
        payload
      );
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(null);
      navigate(-1);
      // e.target.reset();
      // setContent(null);
      // setFiles([]);
      // setUrls([]);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold">Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex w-full justify-between gap-5 ">
          <div className="mt-5 flex-2">
            <input
              placeholder="Product Name"
              type="text"
              name="title"
              defaultValue={product.title}
              className="input input-bordered w-full  focus:outline-0"
            />

            {/* <EditorComponent/> */}
            <Editor content={content} setContent={setContent} />

            <div className="flex gap-5 mt-5">
              <input
                type="number"
                name="original_price"
                defaultValue={product.originalPrice}
                placeholder="Original Price in taka"
                className="input input-bordered w-full focus:outline-0"
              />
              <input
                type="number"
                name="offered_price"
                defaultValue={product.offeredPrice}
                placeholder="Offered Price in taka"
                className="input input-bordered w-full focus:outline-0"
              />
            </div>

            <select
              name="category"
              defaultValue={product.category || "Pick a Category"}
              className="select focus:outline-0 w-full mt-5"
            >
              <option disabled={true}>Pick a Category</option>

              {category?.map((item) => (
                <option selected={product.category === item.name}>
                  {item.name}
                </option>
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
                {urls?.map((url, index) => (
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
                  {loading ? loading : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
