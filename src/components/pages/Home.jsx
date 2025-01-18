import React from "react";

function Home({ data }) {
  return (
    <div class="grid grid-cols-[1fr_auto] grid-rows-[auto_auto_1fr] gap-4 ">
      <div class="bg-blue-500 text-white text-center p-4 rounded-lg">Box 1</div>
      <div class="bg-blue-500 text-white text-center p-4 rounded-lg">Box 2</div>
      <div class="bg-blue-500 text-white text-center p-4 rounded-lg">Box 3</div>
      <div class="bg-blue-500 text-white text-center p-4 rounded-lg">Box 4</div>
      <div class="bg-blue-700 text-white text-center p-4 rounded-lg col-span-2">
        Box 5
      </div>
    </div>
  );
}

export default Home;
