import React, { useState } from "react";

const FilterComponent = ({ onFilterChange,currentCategory }) => {
    const [activeFilters, setActiveFilters] = useState([]);

    const filters = [
        {name: 'rating_4.0',label: 'Rating: 4.0 +', categories: ['diningOut','nightLife']},
        {name: 'open_now', label: 'Open Now', categories: null},
        {name: 'price_1200', label: 'Price > 1200', categories: null},
        {name: 'pet_friendly', label: 'Pet Friendly', categories: ['diningOut']},
        {name: 'outdoor_seating', label: 'Outdoor Seating', categories: ['diningOut']},
        {name: 'serves_alcohol', label: 'Serves Alcohol', categories: ['diningOut']},
        {name: 'pubs_bars', label: 'Pubs & Bars', categories: ['nightLife']},
        {name: 'pure_veg', label: 'Pure Veg', categories: ['orderOnline']}
    ];


    const toggleFilter = (filter) => {
        let updatedFilters;
        if (activeFilters.includes(filter)) {
            updatedFilters = activeFilters.filter((f) => f !== filter); // Remove filter
        } else {
            updatedFilters = [...activeFilters, filter]; // Add filter
        }
        setActiveFilters(updatedFilters);
        onFilterChange(updatedFilters); // Send the updated filters to the parent
    };

    const removeFilter = (filter,e) => {
        e.stopPropagation();
        const updatedFilters = activeFilters.filter((item) => item !== filter);
        setActiveFilters(updatedFilters);
        onFilterChange(updatedFilters)
    };

    const relevantFilters = filters.filter((filter) => 
        !filter.categories || 
        filter.categories.includes(currentCategory)
    )


    return (
        <div>
            {relevantFilters.map((filter) => (
                <button
                 key={filter.name}
                 onClick={() => toggleFilter(filter.name)}
                 style={{
                    backgroundColor: activeFilters.includes(filter.name) ? "#E03546" : "white",
                    color: activeFilters.includes(filter.name) ? 'white' : 'gray',
                    padding: "10px 15px",
                    borderRadius: '10px',
                    border: '1px solid gray',
                    margin: '10px',
                    cursor: "pointer",
                }}
                >
                    {filter.label}
                    {activeFilters.includes(filter.name) && (
                        <span
                         onClick={(e) => removeFilter(filter.name,e)}
                         style={{
                            color: "white",
                            fontWeight: "500",
                            cursor: "pointer",
                            marginLeft: '5px'
                        }}
                        >
                            x
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default FilterComponent;
