// Chrome doesn't respect autoComplete="off" - this is ugly but solves it for all browsers
export const disableAutocomplete = (e) => {
  if (e.target.autocomplete) e.target.autocomplete = "none";
};
