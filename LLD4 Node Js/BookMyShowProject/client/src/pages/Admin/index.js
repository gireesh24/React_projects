import React from 'react'
import { Tabs } from 'antd'
import MovieList from './MovieList'
import TheatersTable from './TheatersTable'

function Admin() {
    const tabItems=[
        {
            key:"1",
            label:"Movies",
            children:<MovieList />,
        },
        {
            key:"2",
            label:"Theatres",
            children:<TheatersTable />,
        },

    ]
  return (
    <div>
        <h1>Admin page</h1>
        <Tabs items={tabItems} />
    </div>
  )
}

export default Admin


// import React from "react";
// import { Tabs } from "antd";
// import MovieList from "./MovieList";
// import TheatersTable from './TheatersTable'

// function Admin() {
//   const tabItems = [
//     {
//       key: "1",
//       label: "Movies",
//       children: <MovieList />,
//     },
//     {
//       key: "2",
//       label: "Theatres",
//       children: <TheatersTable />,
//     },
//   ];
//   return (
//     <div>
//       <h1>Admin Page</h1>
//       <Tabs items={tabItems} />
//     </div>
//   );
// }

// export default Admin;