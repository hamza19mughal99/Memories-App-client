import axios from 'axios';

const url = 'http://localhost:4000/posts'

export const fetchPosts = () => axios.get(url)













// const postsData = [
//     {
//       id: 1,
//       image: newYork,
//       tags: [
//         {
//           id: 1,
//           name: 'newyorkcity'
//         },
//         {
//           id: 2,
//           name: 'courtyard'
//         },

//       ],
//       title: 'New York',
//       desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       likeCount: 1,
//       time: '2 hours ago'
//     },
//     {
//       id: 2,
//       image: newYork,
//       tags: [
//         {
//           id: 1,
//           name: 'newyorkcity'
//         },
//       ],
//       title: 'CourtYard',
//       desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       likeCount: 3,
//       time: '1 hour ago'
//     },
//     {
//       id: 2,
//       image: newYork,
//       tags: [
//         {
//           id: 1,
//           name: 'newyorkcity'
//         },
//       ],
//       title: 'CourtYard',
//       desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       likeCount: 3,
//       time: '1 hour ago'
//     },
//     {
//       id: 2,
//       image: newYork,
//       tags: [
//         {
//           id: 1,
//           name: 'newyorkcity'
//         },
//       ],
//       title: 'CourtYard',
//       desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       likeCount: 3,
//       time: '1 hour ago'
//     },
//   ]