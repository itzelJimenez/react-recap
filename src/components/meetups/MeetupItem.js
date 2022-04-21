import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem({ id, image, title, description, address }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemsIsFavorite = favoritesCtx.itemsIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemsIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({ id, image, title, description, address });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemsIsFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
