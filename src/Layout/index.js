import React, { useState } from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = () => {
  const [image, setImage] = useState(1);
  return (
    <>
      <Header />
      <div className="min-h-[90vh] flex flex-col gap-5 justify-center  items-center">
        <span>
          <img
            src={`https://source.unsplash.com/random/900x700/?fruit/${image}`}
            alt=""
            className="h-96 transition-all duration-1000 hover:scale-105 hover:shadow-2xl"
          />
        </span>
        <span className="flex flex-wrap w-[800px] gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
            (i) => {
              return (
                <img
                  src={`https://source.unsplash.com/random/900x700/?fruit/${i}`}
                  alt=""
                  className="h-20 w-20 transition-all duration-400 hover:scale-110"
                  onDoubleClick={() => setImage(i)}
                />
              );
            }
          )}
        </span>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
