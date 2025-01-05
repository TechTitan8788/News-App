import React, { Component } from "react";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      nextPage: null, // To store the nextPage token
    };
  }

  async fetchNews(pageToken = null) {
    this.setState({ loading: true });
    const baseUrl = "https://newsdata.io/api/1/news";
    const apiKey = "pub_64335a891e0057ab7411dc8e12771e62f621e";
    const country = "in";
    const language = "en";
    const pageParam = pageToken ? `&page=${pageToken}` : "";
    const url = `${baseUrl}?apikey=${apiKey}&country=${country}&language=${language}${pageParam}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Error response:", await response.json());
        this.setState({ loading: false });
        return;
      }
      const data = await response.json();
      this.setState((prevState) => ({
        articles: pageToken
          ? [...prevState.articles, ...data.results]
          : data.results,
        nextPage: data.nextPage || null,
        loading: false,
      }));
    } catch (error) {
      console.error("Error fetching news data:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchNews();
  }

  handleLoadMore = () => {
    const { nextPage } = this.state;
    if (nextPage) {
      this.fetchNews(nextPage);
    }
  };

  render() {
    const { articles, loading, nextPage } = this.state;

    return (
      <div className="container my-3">
        <h2>Newsify - Top Headlines</h2>
        {loading && <p>Loading...</p>}
        <div className="row">
          {Array.isArray(articles) && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4 mb-5" key={element.article_id}>
                <div className="card">
                  <img
                    src={element.image_url || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt="news"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <a
                      href={element.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && <p>No articles available.</p>
          )}
        </div>
        {nextPage && (
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-secondary"
              onClick={this.handleLoadMore}
              disabled={loading}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
