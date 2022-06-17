import { Component, For } from 'solid-js';
import { createStore, produce } from "solid-js/store";
import styles from './App.module.css';
import { Suggestion } from './model/suggestion'

const Form: Component = () => {
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

  const removeSuggestion = (id:number, event: MouseEvent) => {
    event.preventDefault();
    if(confirm('Are you sure you want to delete this suggestion? This cannot be undone')){
      const suggestionIdx = suggestions.findIndex(s => s.id === id);
    setSuggestions(
      produce((suggestions) => {
        suggestions.splice(suggestionIdx, 1);
      }),
    );
    }    
  }

  const addVote = (id: number) => {
    const idx = suggestions.findIndex((s) => s.id === id);
    setSuggestions([idx], 'votes', s => ++s);
    console.log(suggestions[0].votes)
  }

  const removeVote = (id: number) => {
    const idx = suggestions.findIndex((s) => s.id === id);
    setSuggestions([idx], 'votes', s => s > 0 ? --s : 0);
    console.log(suggestions[0].votes)
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <ul>
          <For each={suggestions}>{(suggestion) =>
            <li>
              {suggestion.text} <strong>Votes:</strong> {suggestion.votes} <button onClick={(e) => addVote(suggestion.id)}>Add Vote</button><button onClick={(e) => removeVote(suggestion.id)}>Remove Vote</button><button onClick={(e) => removeSuggestion(suggestion.id, e)}>Delete Suggestion</button>
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

export default Form;
