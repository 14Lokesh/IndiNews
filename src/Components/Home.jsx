import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardBox from './NewsCardBox';
const Home = ({ countryName }) => {

  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=63d60114c2e84f65846eae5d34ddc669`);
      console.log("data is", response.data);
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [countryName]);

  return (
    <>
      <div className="home-container">
        <h1>Today's Headlines</h1>
        <div className="parent-card">
          {articles && articles.map((article, index) => (
            <NewsCardBox key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
