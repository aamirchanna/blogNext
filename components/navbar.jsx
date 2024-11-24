import Link from "next/link";


export function Navbar(){
    return(
        <nav className="flex justify-between items-center mx-8 my-3 bg-gray-900 p-3">
            <Link className="text-3xl text-bold text-white" href={'/'}>Next Blog</Link>
            <Link className=" text-bold bg-white p-3  rounded-t-lg " href={'/addTopic'}>Add Blog</Link>
        </nav>
    )
}














// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <nav className="bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-4">
//             {/* Logo */}
//             <div>
//               <a href="#" className="flex items-center py-5 px-2 text-white">
//                 <span className="font-bold text-xl">BlogLogo</span>
//               </a>
//             </div>
//             {/* Primary Nav */}
//             <div className="hidden md:flex items-center space-x-1">
//               <a href="#" className="py-5 px-3 hover:text-blue-200">Home</a>
//               <a href="#" className="py-5 px-3 hover:text-blue-200">Categories</a>
//               <a href="#" className="py-5 px-3 hover:text-blue-200">About</a>
//               <a href="#" className="py-5 px-3 hover:text-blue-200">Contact</a>
//             </div>
//           </div>
//           {/* Secondary Nav */}
//           <div className="hidden md:flex items-center space-x-1">
//             <a href="#" className="py-5 px-3">Login</a>
//             <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-500 text-white rounded transition duration-300">Signup</a>
//           </div>
//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu}>
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Home</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Categories</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">About</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Contact</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Login</a>
//         <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">Signup</a>
//       </div>
//     </nav>
//   )
// }