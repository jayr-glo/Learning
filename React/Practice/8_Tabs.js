import React, { useState } from 'react';
import './App.css';


const Tabs = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {tabs.map((tab, index) =>
        // <li key={index}>{tab.title}</li>
        <button
          key={index}
          className={index === activeTab ? 'active' : ''}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </button>
      )}

      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>

  )

};


function App() {

  const tabs = [
    { title: 'Tab 1', content: 'This is the content of Tab 1' },
    { title: 'Tab 2', content: 'This is the content of Tab 2' },
    { title: 'Tab 3', content: 'This is the content of Tab 3' },
  ]

  return (
    <Tabs tabs={tabs} />
  );
}

export default App;
