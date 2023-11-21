import React, { Component } from 'react';

export class NewsItem extends Component {
  

  render() {
  let {title,description,imageUrl,url,author,date} = this.props;
    return (
      <div className="my-4">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{borderRadius:"7px",border:"1px  "}}>
          <img src= {!imageUrl?"https://cdn.newsfirst.lk/english-uploads/2019/05/e3bb725b-breaking-news-thumbnail.jpg":imageUrl} className="card-img-top " alt="..." style={{borderRadius:"13px",padding:"8px"}}/>
            <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>

            <a href={url} target='_blank'rel='noreferrer' className="btn btn-sm btn-danger">Read More</a>
            

            </div>
         </div>
      </div>
    );
  }
}

export default NewsItem;
