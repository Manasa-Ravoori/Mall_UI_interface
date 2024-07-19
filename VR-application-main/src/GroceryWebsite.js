import React from 'react';
import './GroceryWebsite.css'; // Import specific styles for GroceryWebsite

function GroceryWebsite() {
    return (
        <div className="grocery-website">
            <h2>Grocery Section</h2>
            <div className="grocery-game">
                <iframe
                    src="https://alifeasaparna.itch.io/shopping-mall-vr"
                    title="Unity Grocery Game"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default GroceryWebsite;
