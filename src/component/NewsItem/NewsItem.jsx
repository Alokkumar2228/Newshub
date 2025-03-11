import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './NewsItem.css'

const NewsItem = (props) => {
  const {title, description, imageUrl, newsUrl, publish, source} = props;
  
  return (
    <div>
      <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '50%' }}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>

        <img src={!imageUrl ? "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F72299496-7eec-410f-95ee-1c31ce6a2835.jpg?source=next-barrier-page"
          : imageUrl
        } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">Published on {new Date(publish).toLocaleDateString()} at {new Date(publish).toLocaleTimeString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-dark">Read More&rarr;</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem







//class based component

// import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import './NewsItem.css'

// export default class NewsItem extends Component {




//   render() {
//     let {title,description,imageUrl,newsUrl,publish,source}=this.props;
//     return (
//       <div>
//         <div className="card" >
//         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '50%' }}>
//     {source}
//     <span className="visually-hidden">unread messages</span>
// </span>

//             <img src={!imageUrl?"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F72299496-7eec-410f-95ee-1c31ce6a2835.jpg?source=next-barrier-page"
//             :imageUrl
//             } className="card-img-top" alt="..."/>
//             <div className="card-body">
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}</p>
//               <p className="card-text"><small className="text-muted">Published on {new Date(publish).toLocaleDateString()} at {new Date(publish).toLocaleTimeString()}</small></p>
//               <a href={newsUrl} target="_blank" className="btn btn-dark">Read More&rarr;</a>
//            </div>
//         </div>
//       </div>
//     )
//   }
// }


// How to convert publish=2025-01-18T16:20:34Z indian date and time

// import React from 'react';

// const MyComponent = () => {
//   const publish = '2025-01-18T16:20:34Z';
//   const date = new Date(publish);

//   // Format date and time using toLocaleString
//   const formattedDate = date.toLocaleDateString(); // Date only
//   const formattedTime = date.toLocaleTimeString(); // Time only

//   return (
//     <div>
//       <p>Formatted Date: {formattedDate}</p>
//       <p>Formatted Time: {formattedTime}</p>
//     </div>
//   );
// };

// export default MyComponent;
