import React, { useState } from "react";
import Card from "./Card";
import { Slider, Typography } from "@material-ui/core";

const OurModels = (props) => {
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sqftRange, setSqftRange] = useState([0, 5000]);

  const setFilteredModels = (bedrooms, bathrooms, priceRange, sqftRange) => {
    const filteredModels = props.modelData.filter((model) => {
      if (
        model.bedrooms >= bedrooms &&
        model.bathrooms >= bathrooms &&
        model.price > priceRange[0] &&
        model.price < priceRange[1] &&
        model.sqft > sqftRange[0] &&
        model.sqft < sqftRange[1]
      ) {
        return true;
      }

      return false;
    });
    return filteredModels;
  };

  return (
    <div className="our-models-container">
      <div className="model-filters">
        <Typography
          className="slider-label"
          id="discrete-slider-custom"
          gutterBottom
        >
          {`Bedrooms : ${bedrooms}+`}
        </Typography>
        <Slider
          defaultValue={1}
          aria-labelledby="discrete-slider-custom"
          step={1}
          value={bedrooms}
          onChange={(e, newValue) => setBedrooms(newValue)}
          valueLabelDisplay="auto"
          marks={[1, 2, 3, 4, 5]}
          min={1}
          max={10}
          className="model-filter-slider"
        />
        <Typography
          className="slider-label"
          id="discrete-slider-custom"
          gutterBottom
        >
          {`Bathrooms : ${bathrooms}+`}
        </Typography>
        <Slider
          defaultValue={1}
          aria-labelledby="discrete-slider-custom"
          step={1}
          value={bathrooms}
          onChange={(e, newValue) => setBathrooms(newValue)}
          valueLabelDisplay="auto"
          marks={[1, 2, 3, 4, 5]}
          min={1}
          max={10}
          className="model-filter-slider"
        />
        <Typography className="slider-label" id="range-slider" gutterBottom>
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={(e, newValues) => setPriceRange(newValues)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={1000}
          max={2000}
          step={100}
          className="model-filter-slider"
        />
        <Typography className="slider-label" id="range-slider" gutterBottom>
          Square Foot Range
        </Typography>
        <Slider
          value={sqftRange}
          onChange={(e, newValues) => setSqftRange(newValues)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={5000}
          step={100}
          className="model-filter-slider"
        />
      </div>
      <div className="our-models">
        {setFilteredModels(bedrooms, bathrooms, priceRange, sqftRange).map(
          (model, index) => {
            return (
              <Card
                key={index}
                handleModelSelectChange={props.handleModelSelectChange}
                handleModelLikeChange={props.handleModelLikeChange}
                model={model}
                position={index}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default OurModels;
