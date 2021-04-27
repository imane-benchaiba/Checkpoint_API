import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    const getUser= async () => {
        try {
          const reponse = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
          );
          setListOfUser(reponse.data);
          console.log(reponse.data);
        } catch (error) {}
      };
      useEffect(() => {
        getUser();
      }, []);
    return (
        <div>
            {listOfUser.map((user) => 
                <div>
                    <p>Name : {user.name}</p>
                    <p>Username : {user.username}</p>
                    <p>Email : {user.email}</p>
                </div>
            )}
        </div>
    )
}

export default UserList;
