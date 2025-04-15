import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import PropTypes from 'prop-types';
import './News.css';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    setLoading(true);

    const url = `http://localhost:3000/api/${props.category}/news?page=${page}&pageSize=${props.pageSize}`;

    props.setProgress(30);
    const response = await axios.get(url);
    const data = response.data;

    props.setProgress(60);
    setArticles(data.articles || []);
    setTotalResults(data.totalResults || 0);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [props.category, props.pageSize]);

  useEffect(() => {
    const totalPages = Math.ceil(totalResults / props.pageSize);
    if (page === totalPages) {
      props.setRenderfooter(true);
    }
  }, [page, props.pageSize, totalResults, props.setRenderfooter]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const url = `http://localhost:3000/api/${props.category}/news?page=${nextPage}&pageSize=${props.pageSize}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setArticles(prev => prev.concat(data.articles || []));
    setTotalResults(data.totalResults || 0);
    setLoading(false);
  };

  return (
    <div className="container my-3">
      {loading && <Spinner />}
      <h1 className="text-left" style={{ marginTop: "90px" }}>{props.news}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading ? <Spinner /> : null}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele, idx) => (
              ele.urlToImage && (
                <div className="col-md-4" key={idx} style={{ paddingTop: "50px" }}>
                  <NewsItem
                    title={ele.title}
                    description={ele.description}
                    imageUrl={ele.urlToImage}
                    newsUrl={ele.url}
                    publish={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  category: 'general',
  pageSize: 6,
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  setRenderfooter: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  news: PropTypes.string,
};

export default News;
