// function ComboBoxExample() {
//   const books = [
//     { author: 'Harper Lee', title: 'To Kill a Mockingbird' },
//     { author: 'Lev Tolstoy', title: 'War and Peace' },
//     { author: 'Fyodor Dostoyevsy', title: 'The Idiot' },
//     { author: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
//     { author: 'George Orwell', title: '1984' },
//     { author: 'Jane Austen', title: 'Pride and Prejudice' },
//     { author: 'Marcus Aurelius', title: 'Meditations' },
//     { author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov' },
//     { author: 'Lev Tolstoy', title: 'Anna Karenina' },
//     { author: 'Fyodor Dostoevsky', title: 'Crime and Punishment' },
//   ]
//   function getBooksFilter(inputValue) {
//     const lowerCasedInputValue = inputValue.toLowerCase()

//     return function booksFilter(book) {
//       return (
//         !inputValue ||
//         book.title.toLowerCase().includes(lowerCasedInputValue) ||
//         book.author.toLowerCase().includes(lowerCasedInputValue)
//       )
//     }
//   }

//   function ComboBox() {
//     const [items, setItems] = React.useState(books)
//     const [selectedItems, setSelectedItems] = useState([])

//     const {
//       isOpen,
//       getToggleButtonProps,
//       getLabelProps,
//       getMenuProps,
//       getInputProps,
//       highlightedIndex,
//       getItemProps,
//       selectedItem,
//     } = useCombobox({
//       onInputValueChange({ inputValue }) {
//         setItems(books.filter(getBooksFilter(inputValue)))
//       },
//       items,
//       itemToString(item) {
//         return item ? item.title : ''
//       },
//       onSelectedItemChange: ({ selectedItem }) => {
//         if (!selectedItem) {
//           return
//         }
//         const index = selectedItems.indexOf(selectedItem)
//         if (index > 0) {
//           setSelectedItems([
//             ...selectedItems.slice(0, index),
//             ...selectedItems.slice(index + 1),
//           ])
//         } else if (index === 0) {
//           setSelectedItems([...selectedItems.slice(1)])
//         } else {
//           setSelectedItems([...selectedItems, selectedItem])
//         }
//       },
//       selectedItem: null,
//       stateReducer: (state, actionAndChanges) => {
//         const { changes, type } = actionAndChanges
//         switch (type) {
//           case useCombobox.stateChangeTypes.InputKeyDownEnter:
//           case useCombobox.stateChangeTypes.ItemClick:
//             return {
//               ...changes,
//               isOpen: true, // keep menu open after selection.
//               highlightedIndex: state.highlightedIndex,
//               inputValue: '', // don't add the item string as input value at selection.
//             }
//           case useCombobox.stateChangeTypes.InputBlur:
//             return {
//               ...changes,
//               inputValue: '', // don't add the item string as input value at selection.
//             }
//           default:
//             return changes
//         }
//       },
//     })

//     return (
//       <div>
//         <div className="w-72 flex flex-col gap-1">
//           <label className="w-fit" {...getLabelProps()}>
//             Choose your favorite books:
//           </label>
//           <div className="flex shadow-sm bg-white gap-0.5">
//             <input
//               placeholder="Best book ever"
//               className="w-full p-1.5"
//               {...getInputProps()}
//             />
//             <button
//               aria-label="toggle menu"
//               className="px-2"
//               type="button"
//               {...getToggleButtonProps()}
//             >
//               {isOpen ? <>&#8593;</> : <>&#8595;</>}
//             </button>
//           </div>
//         </div>
//         <ul
//           className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${
//             !(isOpen && items.length) && 'hidden'
//           }`}
//           {...getMenuProps()}
//         >
//           {isOpen &&
//             items.map((item, index) => (
//               <li
//                 className={cx(
//                   highlightedIndex === index && 'bg-blue-300',
//                   selectedItem === item && 'font-bold',
//                   'py-2 px-3 shadow-sm flex gap-3 items-center'
//                 )}
//                 key={`${item.value}${index}`}
//                 {...getItemProps({
//                   item,
//                   index,
//                   'aria-selected': selectedItems.includes(item),
//                 })}
//               >
//                 <input
//                   placeholder="Best book ever"
//                   type="checkbox"
//                   className="h-5 w-5"
//                   checked={selectedItems.includes(item)}
//                   value={item}
//                   onChange={() => null}
//                 />
//                 <div className="flex flex-col">
//                   <span>{item.title}</span>
//                   <span className="text-sm text-gray-700">{item.author}</span>
//                 </div>
//               </li>
//             ))}
//         </ul>
//       </div>
//     )
//   }

//   return <ComboBox />
// }
