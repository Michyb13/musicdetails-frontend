import { useState, ChangeEvent } from "react";
import axios from "axios";
import useMusicContext from "../hooks/useMusicContext";

const Form = () => {
  const musisContext = useMusicContext();
  const { addData } = musisContext;
  const [formData, setFormData] = useState({
    songName: "",
    artistName: "",
    genre: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setError({});
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5190/api/Music",
        formData
      );
      addData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.errors);
      setIsLoading(false);
    }
  };

  return (
    <div className="form-page">
      <h1>Add Song Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-details">
          <label htmlFor="artist">Artist Name</label>
          <input
            type="text"
            id="artist"
            name="artistName"
            onChange={handleChange}
            value={formData.artistName}
          />
          {error && error.ArtistName && (
            <div className="error">{error.ArtistName[0]}</div>
          )}
        </div>
        <div className="form-details">
          <label htmlFor="song">Song Name</label>
          <input
            type="text"
            id="song"
            name="songName"
            onChange={handleChange}
            value={formData.songName}
          />
          {error && error.SongName && (
            <div className="error">{error.SongName[0]}</div>
          )}
        </div>

        <div className="form-details">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            onChange={handleChange}
            value={formData.genre}
          />
          {error && error.Genre && (
            <div className="error">{error.Genre[0]}</div>
          )}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding.." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
