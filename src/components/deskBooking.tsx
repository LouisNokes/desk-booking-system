import React, { FC } from "react";
import "../App.css";

interface bookingProps {}

//
export const BookingDesk: FC<bookingProps> = () => {
  return (
    <div className="Main-comp" onSubmit={() => console.log("submit")}>
      <form className="form-element">
        <div style={{ display: "flex", color: "red", flexDirection: "column" }}>
          <input placeholder="Title" />
          <input placeholder="Email" />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input placeholder="Location" />
            <input placeholder="Desk" />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input placeholder="Date" />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input placeholder="Time From" />
            <input placeholder="Time Til" />
          </div>
        </div>
        <input placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
