// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import JobPost from './jobPost';
// import selectData from '../redux/selectors/sortByText';
// // import Search from './search'

// class JobPostList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.results.map((post) => {
//             return (
//               <li key={post.identifier}>
//                 <Link
//                   to={`/annonser/${post.identifier}`}>
//                   <JobPost {...post} />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapPropsToTheState = (state) => {
//   return {
//     results: selectData(
//       state.results,
//       state.filter
//     ),
//   };
// };

// export default connect(mapPropsToTheState)(
//   JobPostList
// );
