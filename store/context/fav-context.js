import { createContext, useState } from 'react';

export const FavContext = createContext();

function FavContextProvider({ children }) {
    const [favMealIds, setMealIds] = useState([]);
    const addFavMeal = (id) => {
        setMealIds((curr) => [...curr, id]);
    };
    const removeMeal = (id) => {
        setMealIds((currFavMealIds) => currFavMealIds.filter((mealId) => mealId !== id));
    };
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        ids: favMealIds,
        addFavMeal,
        removeMeal,
    };
    return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}

export default FavContextProvider;
