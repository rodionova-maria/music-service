// const authors = [
//   {
//     id: 0,
//     author: 'Michael Jackson',
//   },
//   {
//     id: 1,
//     author: 'Frank Sinatra',
//   },
//   {
//     id: 2,
//     author: 'Arctic Monkeys',
//   },
//   {
//     id: 3,
//     author: 'Calvin Harris',
//   },
//   {
//     id: 4,
//     author: 'Zhu',
//   },
// ]

// const genres = [
//   {
//     id: 0,
//     genre: 'Рок',
//   },
//   {
//     id: 1,
//     genre: 'Хип-хоп',
//   },
//   {
//     id: 2,
//     genre: 'Поп-музыка',
//   },
//   {
//     id: 3,
//     genre: 'Техно',
//   },
//   {
//     id: 4,
//     genre: 'Инди',
//   },
// ]

// const years = [
//   {
//     id: 0,
//     year: '2022',
//   },
//   {
//     id: 1,
//     year: '2021',
//   },
//   {
//     id: 2,
//     year: '2020',
//   },
//   {
//     id: 3,
//     year: '2019',
//   },
//   {
//     id: 4,
//     year: '2018',
//   },
// ]

// function FilterPopup({ isPopupVisible, filterBy, coords }) {
//   let content = ''

//   content = filterBy.map((item) => (
//     <a href="#" className="dropdawn-item" key={item.id}>
//       {item.year}
//     </a>
//   ))

//   return isPopupVisible ? (
//     <div className="dropdown-menu" style={{ top: coords.top, left: coords.left }}>
//       {content}
//     </div>
//   ) : null
// }

// export default FilterPopup
