import React, { useState, useEffect } from "react";
import "../News.css";
import SkeletonLoader from "./Skeleton";
import CategoryButtons from "./CategoryButtons";
import NewsCard from "./NewsCard";
import Pagination from "./Pagination";

const News = ({ setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [category, setCategory] = useState("Top");

  const fetchNews = async (category = "Top", pageToken = null) => {
    setProgress(30);
    setLoading(true);

    if (pageToken) {
      setArticles([]);
    }

    const apiKey = "pub_64335a891e0057ab7411dc8e12771e62f621e";
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en&category=${category}${
      pageToken ? `&page=${pageToken}` : ""
    }`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setArticles(data.results || []);
        setNextPage(data.nextPage || null);
        setPrevPage(data.prevPage || null);
        setLoading(false);
        setProgress(100);
      } else {
        console.error("Error:", data);
        setLoading(false);
        setProgress(100);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      setProgress(100);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const handleCategoryClick = (category) => {
    setProgress(10);
    setCategory(category);
  };

  const handlePrevClick = () => {
    if (prevPage) {
      setProgress(10);
      fetchNews(category, prevPage);
      window.scrollTo(0, 0);
    }
  };

  const handleNextClick = () => {
    if (nextPage) {
      setProgress(10);
      fetchNews(category, nextPage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container my-3">
      <h2
        className="text-center my-4 mb-5"
        style={{
          color: "#343a40",
          fontWeight: "700",
          textShadow:
            "5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(0, 0, 0, 0.2)",
          fontSize: "calc(1.5rem + 1vw)",
        }}
      >
        Newsify &mdash; {category} Headlines <br />
      </h2>

      <CategoryButtons
        category={category}
        onCategoryClick={handleCategoryClick}
        setProgress={setProgress}
      />

      {loading ? (
        <SkeletonLoader setProgress={setProgress} />
      ) : (
        <div className="row">
          {articles.length > 0 ? (
            articles.map((article) => (
              <NewsCard article={article} key={article.link || article.title} />
            ))
          ) : (
            <p className="text-center">No articles available.</p>
          )}
        </div>
      )}

      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        setProgress={setProgress}
      />
    </div>
  );
};

export default News;
