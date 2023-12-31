import React from 'react';

const MovieList = ({ data }) => {
  return (
    <div>
       {data[0]?.map((name, columnIndex) => (
        <div key={columnIndex}>
          <p>{name}</p>
          <img src={data[1][columnIndex]}/>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
