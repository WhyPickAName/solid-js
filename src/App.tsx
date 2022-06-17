import { Component, For } from 'solid-js';
import { createStore, produce } from "solid-js/store";
import styles from './App.module.css';
import { Suggestion } from './model/suggestion'

const App: Component = () => {
  let suggestionText: HTMLInputElement | ((el: HTMLInputElement) => void) | undefined;
  let suggestionId = 0
  const [suggestions, setSuggestions] = createStore<Array<Suggestion>>([]);


  const addSuggestion = (event: SubmitEvent) => {
    event.preventDefault();
    if (!suggestionText)
      return;

    setSuggestions(
      produce((suggestions) => {
        suggestions.push({ id: suggestionId++, text: (suggestionText as HTMLInputElement).value, votes: 0 });
      }),
    );
  }

  const addVote = (id: number) => {
    const idx = suggestions.findIndex((s) => s.id === id);
    setSuggestions([idx], 'votes', s => ++s);
    console.log(suggestions[0].votes)
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <ul>
          <For each={suggestions}>{(suggestion) =>
            <li>
              {suggestion.text} <strong>Votes:</strong> {suggestion.votes} <button onClick={(e) => addVote(suggestion.id)}>Vote</button>
            </li>
          }</For>
        </ul>

      <h2>Add Suggestion</h2>
      <form onSubmit={addSuggestion}>
        <input name='text' type='text' placeholder='Add suggestion here' ref={suggestionText}></input>
        <button type='submit'>Add Suggestion</button>
      </form>
      </header>
    </div>
  );
};

export default App;
