import { useState,useEffect } from 'react'
// import './App.css'
import Papa from 'papaparse'; // Assuming you're using PapaParse for CSV parsing

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch or load your CSV file here
    fetch('../src/assets/reviews.csv')
      .then(response => response.text())
      .then(csvData => {
        // Parse CSV data
        const parsedData = Papa.parse(csvData, { header: true });
        // Extract user reviews
        const userReviews = parsedData.data.map(row => row.reviews);
        setReviews(userReviews);
      })
      .catch(error => {
        console.error('Error fetching CSV file:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Reviews</h1>
      <div>
        {reviews.map((review, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: review }} />
        ))}
      </div>
    </div>
  );
}

export default App
