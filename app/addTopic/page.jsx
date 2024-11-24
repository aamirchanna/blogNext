
export default function Page() {
  return (
    <div>

     <form action="#" className="flex flex-col my-10 items-center">
     <input type="text" className="border-black w-96 border p-2 m-2 rounded-lg" placeholder="Enter Title"/>
     <input type="text" className="border-black w-96 border p-2 m-2 rounded-lg" placeholder="Enter Description"/>
      <button className="bg-gray-800 text-white rounded-e-md px-4 py-2">Add Topic</button>
      </form>
    </div>
  )
}
