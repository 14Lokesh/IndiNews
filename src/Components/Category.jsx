import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCardBox from './NewsCardBox';
import { useParams } from 'react-router-dom';

const Category = ({ countryName }) => {
  const [articles, setArticles] = useState([]);
  const { category } = useParams();
  console.log("category is", category)
  console.log(countryName)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryName}&category=${category}&apiKey=63d60114c2e84f65846eae5d34ddc669`);
      console.log("data is", response.data);
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category, countryName]); 
  return (
    <>
      <h1 className='heading'>{category} news</h1>
      <div className="parent-card">
        {articles && articles.map((article, index) => (
          <NewsCardBox key={index} article={article} />
        ))}
      </div>
    </>
  )
}

export default Category