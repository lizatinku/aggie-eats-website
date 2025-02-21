"use client"; // Needed for React state updates in Next.js App Router

import React, { useState } from "react";

const weeklyMenu = [
  {
    day: "Monday",
    meals: [
      { name: "Chipotle Bowl w/ Rice & Beans", icons: "🌶️🍚", mealsLeft: 12, hasCounter: true },
      { name: "Chicken Bowl w/ Steamed Rice", icons: "🍗🍚", mealsLeft: 15, hasCounter: true },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      { name: "Pork Chile Verde w/ Fajitas & Mexican Rice", icons: "🐷" },
      { name: "Chipotle Beans w/ Fajitas & Mexican Rice", icons: "🌿", tag: "V" },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      { name: "Chicken Salad Sandwich", icons: "🌾🥒", tags: ["SE"] },
      { name: "Jackfruit Salad Sandwich", icons: "🌾🥒", tags: ["SE", "V"] },
    ],
  },
  {
    day: "Thursday",
    meals: [
      { name: "Beef Bulgogi Bowl w/ Steamed Rice", icons: "🍤🌾🥒", tags: ["SE"] },
      { name: "Tofu Bulgogi Bowl w/ Steamed Rice", icons: "🍤🌾🥚", tags: ["SE"] },
    ],
  },
  {
    day: "Friday",
    meals: [
      { name: "BBQ Chicken w/ Roasted Corn & Potatoes", icons: "🥒" },
      { name: "BBQ Falafel w/ Roasted Corn & Potatoes", icons: "🥒", tag: "V" },
    ],
  },
];

export default function MenuPage() {
  const [mealCounts, setMealCounts] = useState(weeklyMenu);

  const reduceMealCount = (dayIndex, mealIndex) => {
    setMealCounts((prevMenu) =>
      prevMenu.map((day, dIdx) => {
        if (dIdx === dayIndex) {
          return {
            ...day,
            meals: day.meals.map((meal, mIdx) => {
              if (mIdx === mealIndex && meal.mealsLeft > 0) {
                return { ...meal, mealsLeft: meal.mealsLeft - 1 };
              }
              return meal;
            }),
          };
        }
        return day;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#002855] text-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-[#B3A369] mb-8">
        🍽️ Weekly Menu
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Monday & Tuesday */}
        {mealCounts.slice(0, 2).map((dayItem, index) => (
          <MenuCard key={index} day={dayItem.day} meals={dayItem.meals} dayIndex={index} onReduceMeal={reduceMealCount} />
        ))}

        {/* Wednesday & Thursday */}
        {mealCounts.slice(2, 4).map((dayItem, index) => (
          <MenuCard key={index + 2} day={dayItem.day} meals={dayItem.meals} />
        ))}

        {/* Friday - Full Row */}
        <div className="col-span-1 md:col-span-2">
          <MenuCard day={mealCounts[4].day} meals={mealCounts[4].meals} />
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-8">
        * Menu items are subject to change up until the day they are being served *
      </p>
    </div>
  );
}

const MenuCard = ({ day, meals, dayIndex, onReduceMeal }) => (
  <div className="bg-[#0A1733] border border-[#B3A369] rounded-xl shadow-lg p-6">
    <h2 className="text-2xl font-semibold text-[#B3A369] border-b pb-2">{day}</h2>
    <ul className="mt-3 space-y-2">
      {meals.map((meal, idx) => (
        <li key={idx} className="flex justify-between items-center">
          <span className="text-lg">{meal.name} {meal.icons}</span>
          <div className="flex gap-2">
            {meal.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-[#B3A369] text-[#002855] text-xs font-bold px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            {/* Show meal count button only for Monday’s meals */}
            {meal.hasCounter && (
              <button
                onClick={() => onReduceMeal(dayIndex, idx)}
                className="bg-transparent border border-[#B3A369] text-[#B3A369] px-3 py-1 rounded-lg font-semibold text-sm hover:bg-[#B3A369] hover:text-[#002855] transition"
              >
                Meals Left: {meal.mealsLeft}
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);
