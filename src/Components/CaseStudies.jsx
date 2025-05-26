import React, { useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Details from "../Details";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  let navigate = useNavigate();

  const RouteChange = (ID) => {
    navigate("/case-studies/" + ID + "/details");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">    
    <div className="min-h-screen flex flex-col items-center py-12 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Projects</h1>
      <p className="text-lg text-gray-800 mb-12 text-center">
        Witness the impact of our successful projects and how they have shaped industries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {Details.map((EachDetail, Index) => (
          <div key={Index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              {EachDetail?.Image?.endsWith(".mp4") ? (
                <video
                  src={EachDetail.Image}
                  className="w-full h-auto rounded-md"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={EachDetail.Image}
                  className="w-full h-auto rounded-md"
                  alt={EachDetail.Title}
                />
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{EachDetail?.Title}</h2>
            {/* <p className="text-gray-800 mb-4">{EachDetail?.Description}</p> */}
            <p className="text-md text-gray-700 mb-6 leading-relaxed tracking-wide max-w-3xl mx-auto px-4 text-justify">{EachDetail?.Description}</p>
            <button
              style={{ backgroundColor: '#000f38' }}
              className="bg-deepNavy hover:bg-deepNavyHover transition-colors duration-300 text-white px-4 py-2 rounded-full flex items-center gap-x-2"
              // className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-400"
              onClick={() => RouteChange(EachDetail?.Title)}
            >
              Let's Dive In
              <TiLocationArrow className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CaseStudies
