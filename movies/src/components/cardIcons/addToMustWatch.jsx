import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToMustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToWatch = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
    };

    return (
        <IconButton aria-label="add to watch" onClick={handleAddToWatch}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToMustWatchIcon;
