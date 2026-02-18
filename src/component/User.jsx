import React, { useState } from 'react'


function User() {
  const [user, setUser] = useState("sana");

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <p>Hello {user}</p>
    </div>
  );
}

export default User;
