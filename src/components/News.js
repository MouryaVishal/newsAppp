import React, {useEffect ,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const  News=(props)=> {
  const [articles, setArticles] = useState([])
  const [loading , setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=5f017980781842a794919a04a11bf820&page=1&pageSize=${ props.pagesize}`;

    setLoading(true)
    let data = await fetch(url);
     props.setProgress(30);
    let parseData = await data.json();
     props.setProgress(60);
     setArticles(parseData.articles);
     setTotalResults(parseData.totalResults)
     setLoading(false)
     props.setProgress(100);
  }

  useEffect(() => {
   updateNews();
  }, [])
  

  const handlePreviousclick = async () => {
    setPage(page-1)
    updateNews();
  };

  const handleNextclick = async () => {
    setPage(page+1)
    updateNews();
  };

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=5f017980781842a794919a04a11bf820&page=${page+1}&pageSize=${ props.pagesize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    
  };
    return (
      <>
        <h2 className="text-center  mb-3" style={{marginTop:'30px',color:props.mode==='dark'?'white':'black'}}>DailyNews-Headlines!!</h2>
        <h2 className="text-center  " style={{color:props.mode==='dark'?'white':'black'}}>{`${capFirstLetter(
           props.category
        )}`}</h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className="container my-3">
            <div className="row ">
              {/* {!loading && articles.map((ele) => { */}
              {/* // console.log(ele) */}
              {articles.map((ele) => {
                return (
                  <div className=" col-md-4 " key={ele.url}>
                    <NewsItem
                      Newstitle={ele.title ? ele.title.slice(0, 40) : ""}
                      description={
                        ele.description ? ele.description.slice(0, 80) : ""
                      }
                      imgurl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://www.financialexpress.com/wp-content/uploads/2022/05/815ab388aa7b43cab367de716fb386c8-815ab388aa7b43cab367de716fb386c8-06ab7e8e4b4b465f8da0c5175fe3efe4-1.jpg"
                      }
                      newsurl={ele.url}
                      publishedAt={ele.publishedAt}
                      author={ele.author}
                      source={ele.source.name}
                    ></NewsItem>
                  </div>
                  //  </InfiniteScroll>
                );
              })}
            </div>{" "}
          </div>
        </InfiniteScroll>

        {/* <div className=" container d-flex justify-content-between">
          <button
            disabled={page <= 1 ? true : false}
            type="button"
            className="btn btn-primary"
            onClick={handlePreviousclick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              page ===
              Math.ceil(totalResults /  props.pagesize)
                ? true
                : false
            }
            type="button"
            className="btn btn-primary"
            onClick={handleNextclick}
          >
            Next &rarr;
          </button>
        </div> */}
        {/* </div> */}
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pagesize: 6,
};
News.propsTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
};

export default News;

