// components/ImageGallery.js
"use client";
// components/ImageGallery.js
import { useState } from "react";
import "./galleryStyle.css";

const ImageGallery = ({ images }) => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handleNextPage = () => {
    // Ensure not to exceed the total number of pages
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(images.length / itemsPerPage))
    );
  };

  const handlePrevPage = () => {
    // Ensure not to go below the first page
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <>
      <div className=" h-100 p-auto" style={{backgroundColor:'white'}} >
        {currentImages.map((image, index) => (
          <div key={index}  id="myContainer">
            <div id="image-container">
              <img src={image.url} alt={image.description} className="img-fluid" />
            </div>
            <div id="image-desc">
              <p className="d-block text-bold fs-2">{image.description}</p>
              <p>
                Our solutions find application not only in big corporations but
                also in small family companies that need chemistry for well
                drilling, coring, engineering and drilling operations including
                geothermal installations.
              </p>
            </div>
          </div>
        ))}
        <div  id="paginate-buttons" style={{paddingLeft:'18%'}}>
          <button
            className="mx-1 my-1 rounded-circle btn border-dark p-auto fs-2 lh-1"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <i
              className="fa-solid fa-arrow-left fa-xs"
            ></i>
          </button>
          <button
            className="mx-1 my-1 rounded-circle  btn bg-light border-dark p-auto fs-2 lh-1"
            onClick={handleNextPage}
            disabled={endIndex >= images.length}
          >
            <i
              className="fa-solid fa-arrow-right fa-xs"
              ></i>
          </button>
        </div>
      </div>
   
    </>
  );
};

export default ImageGallery;
