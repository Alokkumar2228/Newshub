import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import PropTypes from 'prop-types'
import './News.css'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const apikey = import.meta.env.VITE_API_KEY;

  console.log(apikey);

  const updatNews = async () => {
    props.setProgress(0);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
    setLoading(false);
    
  }
  useEffect(() => {
    updatNews();
    // eslint-disable-next-line
  }, [props.category, props.pageSize]);

  useEffect(() => {
    let totalpage =Math.ceil(totalResults/props.pageSize);
    console.log(totalpage);
    if(page === totalpage){
      props.setRenderfooter(true);
    }
    
  }, [page,props.pageSize,totalResults,props.setRenderfooter]);

  

  const fetchMoreData = async () => {
    const nextNews = page + 1;
    setPage(nextNews);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apikey}&page=${nextNews}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
  };

  return (
    <div className="container my-3">
      {loading ? <Spinner /> : null}
      <h1 className="text-left" style={{marginTop: "90px"}}>{props.news}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading ? <Spinner /> : null}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele, idx) => {
              if (ele.urlToImage) {
                return (
                  <div
                    className="col-md-4"
                    key={idx}
                    style={{ paddingTop: "50px" }}
                  >
                    <NewsItem
                      title={ele.title}
                      description={ele.description}
                      imageUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      publish={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </InfiniteScroll>

      
    </div>
  );
}

News.defaultProps = {
  category: 'general',
  pageSize: 6,
}

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  setRenderfooter: PropTypes.func.isRequired, 
}

export default News;

