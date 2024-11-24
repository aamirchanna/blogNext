import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { CiEdit } from "react-icons/ci";



export default function TopicLists() {
  return (

    <div className="flex border border-black p-3 justify-between m-8 flex-row">
        <div className="flex   mx-8 gap-4 flex-col w-full"> 
        <h1 className="text-3xl " > This is Title</h1>
        <p className="">This is  Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore blanditiis dolorum unde aspernatur cum, qui laboriosam ipsam tempora aliquam eaque, harum illum!</p>
       
        </div>
        <div className="flex mr-8">
          <RemoveBtn/>
         <Link href={'/editTopic/123'}> <CiEdit size={24}/></Link>
        </div>
    </div>
  )
}

