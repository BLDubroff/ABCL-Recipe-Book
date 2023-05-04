import React from "react";
import { Link } from "react-router-dom";
import "./show.css";
import { Card, ListGroup, Row, Col } from "react-bootstrap";

const ShowRecipe = (recipe_data) => {
  return (
    <Row xs={1} md={2} className="container g-4">
      <Card
        className="shadow-sm p-3 mb-5 bg-body rounded"
        // className="cardContainer"
        key={recipe_data.recipe_id}
      >
        <div>
          <Card.Img
            variant="top"
            src={recipe_data.img}
            alt={recipe_data.name}
          />
        </div>
        <div>
          <Link className="linkRecipe" to={`/recipe/${recipe_data.recipe_id}`}>
            <Card.Title>
              <h2>{recipe_data.title}</h2>
            </Card.Title>
          </Link>
        </div>
        <div>
          <Card.Text>
            <h4>{recipe_data.description}</h4>
          </Card.Text>
        </div>
        <div>
          <ListGroup className="list-group-flush">
            {" "}
            <ListGroup.Item>
              <p>Preparation Time: {recipe_data.prep_time_in_minutes}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cook Time: {recipe_data.cook_time_in_minutes}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Total time: {recipe_data.total_time_in_minutes}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Servings: {recipe_data.servings}</p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card>
      {/* </Col>
       ))} */}
    </Row>
  );
};

export default ShowRecipe;
