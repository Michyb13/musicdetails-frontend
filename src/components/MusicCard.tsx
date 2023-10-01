import axios from "axios";
import React, { ChangeEvent, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import useMusicContext from "../hooks/useMusicContext";

type MusicCardProps = {
  id: number;
  artist: string;
  song: string;
  genre: string;
};

const MusicCard = ({ id, artist, song, genre }: MusicCardProps) => {
  const musicContext = useMusicContext();
  const { deleteData } = musicContext;
  const handleDelete = async () => {
    const response = await axios.delete(
      `http://localhost:5190/api/Music/${id}`
    );
    deleteData(response.data);
    console.log(response.data);
  };
  return (
    <div className="card">
      <div className="card-details">
        <h2>{song}</h2>
        <p>{artist}</p>
        <p>{genre}</p>

        <button onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default MusicCard;
