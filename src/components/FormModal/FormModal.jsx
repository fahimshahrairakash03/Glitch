import React from "react";
import Button2 from "../Buttons/Button2";
import Button1 from "../Buttons/Button1";

const FormModal = (props) => {
  const handleSumit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const user = {
      name,
      email,
      phone,
    };
    console.log(user);
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <a
        className=""
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {props.btnName}
      </a>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-900">
          <form onSubmit={handleSumit} className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input bg-transparent input-info bottom-2 input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input bg-transparent input-info bottom-2 input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="input bg-transparent input-info bottom-2 input-bordered w-full "
            />

            <div className="modal-action flex justify-center mt-5 ">
              <button
                className="btn bg-transparent border-2 border-white w-1/2 text-xl font-bold text-white"
                type="submit "
              >
                SUBMIT
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FormModal;
