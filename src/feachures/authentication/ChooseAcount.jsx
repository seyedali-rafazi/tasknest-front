import React from "react";

const acoounts = [
  {
    label: "Owner",
    value: "OWNER",
    phone: "09234949876",
    password: "787028",
  },
  {
    label: "Freelancer",
    value: "FREELANCER",
    phone: "09352587903",
    password: "180667",
  },
];

function ChooseAcount({ setStep, setphoneNumber, setpassword }) {
  const handelClick = (phone, password) => {
    setStep(3);
    setphoneNumber(phone);
    setpassword(password);
  };
  return (
    <div className="flex flex-col justify-evenly items-center  ">
      <p className="font-bold bg-primary-600 text-secondery-0 p-5 rounded-lg w-full md:w-2/3">
        Note: To test this website, two panels have been considered for you The
        employer to create the project and the jobseeker panel to apply for that
        project has been taken
      </p>
      <div className="max-w-xs max-h-xs w-96 h-96">
        <img src="/Login-photo.webp" />
      </div>
      <div className="flex flex-col  w-full md:max-w-xl">
        {acoounts.map((acoount) => {
          return (
            <div key={acoount.value}>
              <button
                value={acoount.value}
                onClick={() => handelClick(acoount.phone, acoount.password)}
                className="btn btn--primary bg-primary-900 w-full mt-5 py-4 px-4 text-secondery-0 rounded-lg"
              >
                {acoount.label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChooseAcount;
