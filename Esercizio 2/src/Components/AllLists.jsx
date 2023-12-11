import React from 'react';
import CustomList from './CustomList';

export default function AllLists(){

  const allLists = [

    {
      title: 'Invitati',
      type: 'ul',
      list: ['Tizio', 'Caio'],
    },

    {
      title: 'Altro Titolo',
      type: 'ol',
      list: ['Elemento 1', 'Elemento 2'],
    },

  ];

  return (
    <>
      {allLists.map((list, i) => (
        <div key={i}>
          <h2>{list.title}</h2>
          <CustomList type={list.type} list={list.list} />
        </div>
      ))}
    </>
  );
  
};
