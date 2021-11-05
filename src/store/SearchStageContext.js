import React, { useState, createContext } from "react";

export const SearchParametersContext = createContext();
// export SearchProvider and SearchContext

export const SearchParametersProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [food, setFood] = useState("");
  const [operator, setOperator] = useState("text");
  const [distance, setDistance] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [functionScore, setFunctionScore] = useState(null);
  const [stars, setStars] = useState(1);
  const [borough, setBorough] = useState();
  const [cuisine, setCuisine] = useState([]);
  const [stages, setStages] = useState({
    searchStage: {},
    limitStage: {},
    projectStage: {},
  });
  const [facetStage, setFacetStage] = useState({});
  const [showDistanceInput, setShowDistanceInput] = useState(false); // USED IN SEARCH SIDE BAR FOR GEOWITHIN OPERATOR OPTION
  const [valid, setValid] = useState(false); // IF VALID SEARCH EXECUTED - WILL SHOW BUTTONS TO CLEAR/AGGREGATION/FUNCTION SCORE
  const [showSuggestions, setShowSuggestions] = useState(false); // FOR AUTOCOMPLETED RESTAURANT NAMES IN SEARCH BAR
  const [showMenu, setShowMenu] = useState(false); // POP UP FOR RESTAURANT MENU ITEMS
  const [index, setIndex] = useState(0);
  const [showAggregation, setShowAggregation] = useState(false); // TO SHOW MODAL FOR AGGREGATION CODE
  const [showFacetCode, setShowFacetCode] = useState(false); // TO SHOW MODAL FOR FACET CODE
  const [showSearchStage, setShowSearchStage] = useState(false);
  const [noResultsMsg, setNoResultsMsg] = useState("");
  const [cuisineBuckets, setCuisineBuckets] = useState([]);
  const [boroughBuckets, setBoroughBuckets] = useState([]);
  const [facetOverallCount, setFacetOverallCount] = useState(0);
  const [showFacets, setShowFacets] = useState(true);

  const value = {
    restaurants,
    setRestaurants,
    searchTerm,
    setSearchTerm,
    food,
    setFood,
    operator,
    setOperator,
    distance,
    setDistance,
    submitted,
    setSubmitted,
    showAggregation,
    setShowAggregation,
    showFacetCode,
    setShowFacetCode,
    setShowSearchStage,
    showSearchStage,
    functionScore,
    setFunctionScore,
    stars,
    setStars,
    borough,
    setBorough,
    cuisine,
    setCuisine,
    stages,
    setStages,
    facetStage,
    setFacetStage,
    valid,
    setValid,
    showSuggestions,
    setShowSuggestions,
    showMenu,
    setShowMenu,
    index,
    setIndex,
    showDistanceInput,
    setShowDistanceInput,
    noResultsMsg,
    setNoResultsMsg,
    cuisineBuckets,
    setCuisineBuckets,
    boroughBuckets,
    setBoroughBuckets,
    setFacetOverallCount,
    facetOverallCount,
    showFacets,
    setShowFacets,
  };

  return (
    <SearchParametersContext.Provider value={value}>
      {props.children}
    </SearchParametersContext.Provider>
  );
};

// the provider provides info to components
