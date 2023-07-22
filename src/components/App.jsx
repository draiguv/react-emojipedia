import React from 'react';
import Entry from './Entry.jsx'
import emojipedia from '../data/emojipedia.js'

const createEntry = data => {
  return (
    <Entry
      key={data.id}
      emoji={data.emoji}
      name={data.name}
      meaning={data.meaning}
    />
  )
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}
