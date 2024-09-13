import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1200px] w-[90%] m-auto h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center min-h-full">
        <div className=" w-full md:w-[50%] p-5">
          <h1 className="text-3xl font-bold mb-5">
            Providing Quality <span className="text-[#0067CF]">Healthcare</span>{" "}
            for a <span className="text-[#0067CF]">Brighter </span> and{" "}
            <span className="text-[#0067CF]">
              <span className="text-[#0067CF]">Healthcare</span>
            </span>{" "}
            Future
          </h1>

          <p className="font-medium text-[#474747]">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </p>
        </div>
        <div className="w-full md:w-[50%] h-full overflow-hidden p-[5rem]">
          <img
            src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
            alt="doctor image"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
