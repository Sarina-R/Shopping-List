import { useState } from "react";
import "./App.css";
const list = [];

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const id = items.length;
    const item = { id: id, name };
    const updateItem = [...items, item];
    setItems(updateItem);
    setName("");
  };

  const remove = (id) => {
    const updateItem = items.filter((items) => items.id !== id);
    setItems(updateItem);
  };

  return (
    <section>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h4>Shopping List</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-block">
            submit
          </button>
        </form>
        {/* render users below */}

        {items.map((item) => (
          <div className="row" key={item.id}>
            <h2>{item.name}</h2>
            <div className="hover" onClick={() => remove(item.id)}>
              <h6>x</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
