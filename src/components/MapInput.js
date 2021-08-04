// doesn't require redux

import React, { useState, useEffect } from "react";
import DisplayMapData from "../d3/DisplayMapData";
import { Loader } from "../components/Loader";
import Select from "react-select";

const MapInput = () => {
  const data = [
    {
      value: "cases",
      label: "Total Cases",
    },
    {
      value: "casesPerOneMillion",
      label: "Total Cases Per Million",
    },
    {
      value: "todayCases",
      label: "todayCases block",
    },
    {
      value: "deaths",
      label: "deaths block",
    },
    {
      value: "deathsPerOneMillion",
      label: "deathsPerOneMillion block",
    },
    {
      value: "todayDeaths",
      label: "todayDeaths block",
    },
  ];
  const [countryResults, setCountryResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch("https://corona.lmao.ninja/v2/countries");
      const data = await response.json();
      setCountryResults(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // logic for collapsing map choices
  // let coll = document.getElementsByClassName("collapsible1");
  // let collButton = document.querySelector("button.collapsible1")
  // let i

  // for (i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", function() {
  //         this.classList.toggle("active");

  //         if (collButton.innerText === "Open Map Menu") {
  //             collButton.innerText = "Close Map Menu"
  //         } else {
  //             collButton.innerText = "Open Map Menu"
  //         }

  //         var content = this.nextElementSibling;
  //         if (content.style.display === "none") {
  //           content.style.display = "block";
  //         } else {
  //           content.style.display = "none";
  //         }
  //     });
  // }

  return (
    <div>
      {/* loading */}
      {isLoading ? (
        <Loader />
      ) : (
        // )}

        <span>
          {/* <button className="collapsible1">Close Map Menu</button> */}
          <Select
            placeholder="Select Option"
            value={selectedOption} // set selected value
            options={data} // set list of the data
            onChange={(event) => ( // assign onChange function
              setSelectedOption(event),
              DisplayMapData(event.value, event.label, countryResults)
            )} 
          />
          <button
            onClick={(event) =>
              DisplayMapData(
                event.target.value,
                event.target.innerText,
                countryResults
              )
            }
            className="reset block"
            value="reset"
          >
            Reset Map
          </button>
          {/* </div> */}
        </span>
      )}
    </div>
  );
};

export default MapInput;
