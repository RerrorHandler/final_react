import React, { useState } from 'react';

const Farmers = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Cy Ganderton', job: 'Специалист по контролю качества', favoriteColor: 'Синий' },
    { id: 2, name: 'Hart Hagerty', job: 'Специалист по хелпдеску яблок', favoriteColor: 'Фиолетовый' },
    { id: 3, name: 'Brice Swyre', job: 'Увороты от налогов', favoriteColor: 'красный' },
  ]);
  const [isEditing, setIsEditing] = useState({});

  const handleEdit = (id) => {
    setIsEditing({ ...isEditing, [id]: true });
  };

  const handleSave = (updatedData) => {
    setData(data.map((item) => (item.id === updatedData.id ? updatedData : item)));
    setIsEditing({ ...isEditing, [updatedData.id]: false });
  };

  const handleCancel = (id) => {
    setIsEditing({ ...isEditing, [id]: false });
  };

  const EditForm = ({ id, name, job, favoriteColor, onSave, onCancel }) => {
    const [newName, setNewName] = useState(name);
    const [newJob, setNewJob] = useState(job);
    const [newFavoriteColor, setNewFavoriteColor] = useState(favoriteColor);

    const handleSubmit = (event) => {
      event.preventDefault();
      onSave({
        id,
        name: newName,
        job: newJob,
        favoriteColor: newFavoriteColor,
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>Имя:</label>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <label>Работа:</label>
        <input type="text" value={newJob} onChange={(e) => setNewJob(e.target.value)} />
        <label>Любимый цвет:</label>
        <input type="text" value={newFavoriteColor} onChange={(e) => setNewFavoriteColor(e.target.value)} />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отменить</button>
      </form>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Имя</th>
            <th>Работа</th>
            <th>Любимый цвет</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.job}</td>
              <td>{item.favoriteColor}</td>
              <td>
                {isEditing[item.id] ? (
                  <EditForm
                    id={item.id}
                    name={item.name}
                    job={item.job}
                    favoriteColor={item.favoriteColor}
                    onSave={handleSave}
                    onCancel={() => handleCancel(item.id)}
                  />
                ) : (
                  <button onClick={() => handleEdit(item.id)}>Редактировать</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Farmers;
