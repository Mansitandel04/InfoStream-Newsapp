import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
  static  defaultProps={
    country:'in',
    pageSize: 8,
    category:'general'
  }
  static  defaultPropsTypes={
   country:PropTypes.string,
    pageSize: PropTypes.number,
    
  }
    constructor(){
    super();
    this.state= {
  articles: [],
  loading:false,
  page:1
    }
  }
 async componentDidMount(){
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bf67b7fa6644dd89ccf6491b6a50bde&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData = await data.json()
    this.setState({
    articles:parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false})
  }
 handleNextClick=async()=>{
// console.log("Next")
if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bf67b7fa6644dd89ccf6491b6a50bde&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
      let data= await fetch(url);
       let parsedData = await data.json()
       this.setState({loading:false});
      this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
  
      })
}
 }
 handlePrevClick=async()=>{
  // console.log("privious")
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9bf67b7fa6644dd89ccf6491b6a50bde&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
   this.setState({
  page:this.state.page-1,
  articles:parsedData.articles,
  loading:false
})
}



  render() {
    
    return (
      <div className='container  my-3'>
        <h1 className='text-center ' style={{marginTop:'90px'}}>InfoStream-Top Headlines</h1>
       {this.state.loading && < Spinner/>}
        <div className='row'>
          
        { !this.state.loading && this.state.articles?.map((element)=>{
         return <div className="col-md-3" key={element.url}>
            <NewsItem  
             title={element.title?element.title:""} 
             description={element.description?element.description:""}
              imageUrl={element.urlToImage} 
              url={element.url}
              author={element.author}
              date={element.publishedAt}/>
           </div>
        })}
        </div>
     <div className='container d-flex justify-content-between'>

     <button  disabled={this.state.page<=1}type="button" className="btn btn-danger"onClick={this.handlePrevClick}>&larr;  Previous</button>
     <button type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;  </button>

     </div>
        
      </div>
    )
  }
}

export default News;
