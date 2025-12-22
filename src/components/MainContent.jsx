import React from 'react'
import BrowseView from './views/BrowseView'
import DetailView from './views/DetailView'
import FavoritesView from './views/FavoritesView'
import WrongAnswersView from './views/WrongAnswersView'
import TipsView from './views/TipsView'
import './MainContent.css'

function MainContent({
  currentLevel,
  selectedCategory,
  searchQuery,
  currentView,
  selectedGrammar,
  onGrammarSelect,
  onViewChange
}) {
  return (
    <main className="main-content">
      {currentView === 'browse' && (
        <BrowseView
          currentLevel={currentLevel}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onGrammarSelect={onGrammarSelect}
        />
      )}

      {currentView === 'detail' && selectedGrammar && (
        <DetailView
          grammar={selectedGrammar}
          onBackClick={() => onViewChange('browse')}
        />
      )}

      {currentView === 'favorites' && (
        <FavoritesView
          onGrammarSelect={onGrammarSelect}
          onViewChange={onViewChange}
        />
      )}

      {currentView === 'wrong-answers' && (
        <WrongAnswersView
          onGrammarSelect={onGrammarSelect}
          onViewChange={onViewChange}
        />
      )}

      {currentView === 'tips' && (
        <TipsView currentLevel={currentLevel} />
      )}
    </main>
  )
}

export default MainContent
