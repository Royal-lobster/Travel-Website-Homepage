import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
function DiscoverWidget() {
  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];

  const [date, setDate] = useState();
  const [city, setCity] = useState();

  return (
    <>
      <div className="discoverWidget">
        <div className="discoverWidget__location">
          <label>Location</label>

          <Dropdown
            className="discoverWidget__locationDropdown"
            value={city}
            options={citySelectItems}
            onChange={(e) => setCity(e.value)}
            placeholder="Select a City"
          />
        </div>
        <div className="discoverWidget__data">
          <label>Date</label>
          <Calendar
            className="discoverWidget__calender"
            value={date}
            onChange={(e) => setDate(e.value)}
            placeholder="Select date"
          ></Calendar>
        </div>
        <Button className="discoverWidget__discoverBtn" label="Discover" />
      </div>
      <style jsx global>{`
        .discoverWidget {
          display: flex;
          gap: 20px;
          background: #ffffff;
          box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02),
            0 0px 5.3px rgba(0, 0, 0, 0.028), 0 0px 10px rgba(0, 0, 0, 0.035),
            0 0px 17.9px rgba(0, 0, 0, 0.042), 0 0px 33.4px rgba(0, 0, 0, 0.05),
            0 0px 80px rgba(0, 0, 0, 0.07);
          padding: 20px;
          border-radius: 4px;

          &__location,
          &__data {
            display: flex;
            flex-direction: column;
            label {
              font-weight: bold;
              font-size: 14px;
              color: #181c29;
              padding-bottom: 5px;
            }
          }
          &__discoverBtn {
            padding: 15px 58px;
            border: none;
            background-color: var(--primary);
            color: white;
            border-radius: 4px;
          }
          &__locationDropdown,
          &__calender input {
            height: 35px;
            min-width: 150px;
            border: 1px solid #eaf1ff;
            ::placeholder {
              color: #424242;
            }
            .p-placeholder {
              color: #a7a7a7 !important;
            }
          }
        }

        @media only screen and (max-width: 750px) {
          .discoverWidget {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

export default DiscoverWidget;
