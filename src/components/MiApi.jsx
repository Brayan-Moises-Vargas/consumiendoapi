import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const MiApi = () => {
  const [users, setUsers] = useState([]);

  const RickDatoApi = async () => {
    try {
      const urlApi = "https://rickandmortyapi.com/api/character";
      const respuesta = await fetch(urlApi);
      const data = await respuesta.json();
      const api = data.results
        .map((item) => {
          return {
            id: item.id,
            name: item.name,
            status: item.status,
            species: item.species,
            gender: item.gender,
            image: item.image,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      setUsers(api);
      
      console.log(api);
    } catch (error) {
      console.log({ mensaje: error });
    }
  };

  useEffect(() => {
    RickDatoApi();
  }, []);

  return (
    <div className="container">
      {users ? (
        users.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.gender}
                <br />
                {item.species}
                <br />
                {item.status}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
};
export default MiApi;
