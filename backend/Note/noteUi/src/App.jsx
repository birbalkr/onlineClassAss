import React from "react";

function App() {
  return (
    <div className="h-screen p-5 bg-gray-300 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes APP</h1>

    {/* title, description */}
    <form className="w-70 border border-white p-4 rounded-xl flex flex-col gap-5">
        <input type="text" placeholder="Title" className="p-2 outline-none text-xl rounded-xl border border-white" />
        <input placeholder="Description" className="p-2 outline-none text-xl rounded-xl border border-white"></input>
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Add Note</button>
    </form>
    </div>
  );
}

export default App;
