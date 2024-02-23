import React, { useState } from 'react';
import FilterBtn from './FilterBtn';

const genres = ["Action", "Drama", "Sci-Fi"];
const authors = ["Jk Rowling", "icon", "Def"];
const publishedYears = [2009, 2006, 2007];

const FilterMenu = ({toggleFilterMenu}) => {
    const [selectedFilters, setSelectedFilters] = useState({
        genres: [],
        authors: [],
        publishedYear: []
    });
    const [openCategory, setOpenCategory] = useState([]);

    const toggleCategory = (category) => {
        openCategory.includes (category) ?  setOpenCategory(openCategory.filter(cat => cat !== category)): setOpenCategory([...openCategory,category]);
    };

    const handleCheckboxChange = (category, value) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [category]: prevState[category].includes(value)
                ? prevState[category].filter(item => item !== value)
                : [...prevState[category], value]
        }));
    };

    return (
        <div className='filter-options-container'>
            <FilterBtn sideBtn={true} toggleFilterMenu={toggleFilterMenu} />
            <ul className='filter-options-list'>
                <li>
                    <div onClick={() => toggleCategory('genres')}>
                        <span className='filter-heading-icon'>icon</span>
                    <h4 >Genres</h4>
                        </div>
                    {openCategory.includes('genres') && (
                        <ul className='filter-options-sub-list'>
                            {genres.map(genre => (
                                <li key={genre}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.genres.includes(genre)}
                                            onChange={() => handleCheckboxChange('genres', genre)}
                                        />
                                        {genre}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li>
                <div onClick={() => toggleCategory('authors')}>
                        <span className='filter-heading-icon'>icon</span>
                    <h4 >Authors</h4>
                        </div>
                    {openCategory.includes('authors') && (
                        <ul className='filter-options-sub-list'>
                            {authors.map(author => (
                                <li key={author}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.authors.includes(author)}

                                            onChange={() => handleCheckboxChange('authors', author)}
                                        />
                                        {author}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li>
                <div onClick={() => toggleCategory('publishedYear')}>
                        <span className='filter-heading-icon'>icon</span>
                    <h4 >Published Year</h4>
                        </div>
                    {openCategory.includes('publishedYear') && (
                        <ul className='filter-options-sub-list'>
                            {publishedYears.map(year => (
                                <li key={year}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedFilters.publishedYear.includes(year)}
                                            onChange={() => handleCheckboxChange('publishedYear', year)}
                                        />
                                        {year}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default FilterMenu;
