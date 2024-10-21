import React from "react";

interface ListItem {
  id: string;
  title: string;
}

interface ListProps {
  items: ListItem[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

const List: React.FC<ListProps> = ({ items, removeItem, editItem }) => {
  return (
    <div className="bg-blue-200">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                edit{" "}
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                trash
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
