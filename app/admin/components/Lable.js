import React from 'react';

const Lable = ({ label }) => {
    return (
        <div className="">
            <div className="flex justify-start items-center">
                <div className="bg-[var(--primary-color)] px-5  h-10  flex rounded-l-full items-center justify-center">
                    <span className="text-white font-semibold">{label}</span>
                </div>
            </div>
        </div>
    );
};

export default Lable;

// import Lable from "../../../components/Lable";
// <Lable label="" />