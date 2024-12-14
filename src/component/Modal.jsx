import React, { useState } from "react";
import { myToast } from "../utils";

const Modal = () => {
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        additionalNotes: "",
      });
      //handle change
      const handleChange = (e) => {
        setFormData(
            {
                 ...formData,
                 [e.target.name]:e.target.value

            }
        );
      };

      //handle form
      const handleSubmit = (e) => {
        e.preventDefault();
       
        
        myToast("Thank you ! We will reach your destination soon","success")
        setFormData({
          quantity: "",
          itemType: "",
          pickupLocation: "",
          additionalNotes: "",
        });
    }
   
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
      <h2 className="text-2xl font-bold text-center  text-gray-800 mb-4">Donation Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Quantity of items */}
        <div>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="How Much You Donate"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a71918]"
            required
          />
        </div>
        <div>
          <select
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a71918]"
            required
          >
            <option value="" disabled>
              Select an item type
            </option>
            <option value="Blanket">Blanket</option>
            <option value="Jacket">Jacket</option>
            <option value="Sweater">Sweater</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a71918]"
            required
          />
        </div>
        <div>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any additional instructions..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#a71918]"
            rows="4"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-[#a71918] text-white font-bold py-2 rounded-md hover:bg-[#871415] transition"
        >
          Submit
        </button>
      </form>
      </div>
         
        </div>
      </dialog>
    </>
  );
};

export default Modal;
