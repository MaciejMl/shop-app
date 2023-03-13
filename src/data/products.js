const productsData = [
  {
    id: 1,
    name: 'react',
    title: 'React shirt',
    basePrice: 20,
    colors: ['blue', 'red', 'green'],
    sizes: [
      { id: 1, name: 'S', additionalPrice: 0 },
      { id: 2, name: 'M', additionalPrice: 5 },
      { id: 3, name: 'L', additionalPrice: 6 },
      { id: 4, name: 'XL', additionalPrice: 8 },
    ],
  },
  {
    id: 2,
    name: 'kodilla',
    title: 'Kodilla shirt',
    basePrice: 25,
    colors: ['white', 'black', 'red'],
    sizes: [
      { id: 1, name: 'S', additionalPrice: 0 },
      { id: 2, name: 'M', additionalPrice: 2 },
      { id: 3, name: 'L', additionalPrice: 3 },
      { id: 4, name: 'XL', additionalPrice: 4 },
    ],
  },
];

export default productsData;

// przykład który może się przyda na później

// mport React, { useState, useEffect } from 'react'
// function List() {
//   const [list, setList] = useState([])
//   const [active, setActive] = useState(null)
//   const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((json) => setList(json))
//       .catch((e) => console.log(e))
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//     <div>
//       <h2 className="mb-3">React Js Active Class on List Item Example</h2>
//       <ul className="list-group">
//         {list.map((item) => {
//           return (
//             <li
//               key={item.id}
//               onClick={() => setActive(item)}
//               className={`list-group-item ${active == item && 'active'}`}
//             >
//               {item.name}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
