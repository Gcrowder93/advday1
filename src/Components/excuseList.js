import React from 'react';

export default function ExcuseList({ filterExcuses }) {
  return (
    <>
      <div>
        {filterExcuses.map((excuse) => (
          <p key={excuse.id}>{excuse.excuse}</p>
        ))}
      </div>
      <div>{/* <button onClick={excuses.category}>list page</button> */}</div>
    </>
  );
}
