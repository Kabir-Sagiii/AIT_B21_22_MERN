import { useState } from "react";
import "./Users.css";
import { usersdata } from "./Users";
function Users() {
  const [users, setUsers] = useState(usersdata);
  return (
    <div className="users-container">
      <h1>Users Information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repellat
        consequuntur iusto iste, architecto adipisci iure voluptatum,
        reiciendis, asperiores commodi repellendus expedita. Saepe autem
        quisquam ad aliquid corrupti a fugit, inventore deserunt perferendis
        quis voluptas veniam fugiat officiis nihil aliquam nemo voluptatem
        tenetur labore, sit consequatur aperiam repudiandae! Iste vel dolores
        enim. Adipisci tempore autem eligendi ea dolores expedita deserunt
        molestias eveniet, ad illo harum incidunt, temporibus debitis culpa
        quibusdam fugiat vel. Aliquid accusantium esse sint aut at quae,
        veritatis iusto ipsa harum soluta ullam corrupti doloremque vel odit
        autem. Corporis delectus reiciendis asperiores veritatis consectetur
        voluptatem accusantium dolorum similique.
      </p>

      <div className="user-cards">
        {users.map(function (user, index) {
          return (
            <div className="card">
              <img src={user.image} alt="" width="100%" height="230" />
              <h3>{user.name}</h3>
              <p>{user.gender}</p>
              <p>{user.description}</p>
              <button>Profile Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
