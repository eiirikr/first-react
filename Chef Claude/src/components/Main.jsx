export default function Main() {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. Oregano"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
}
