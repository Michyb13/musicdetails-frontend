import MusicCard from "./MusicCard";
import useMusicContext from "../hooks/useMusicContext";

const Main = () => {
  const musisContext = useMusicContext();
  const { data } = musisContext;
  if (!Array.isArray(data)) {
    return <h1>No Song Details</h1>;
  }

  const renderList = data.map((item) => {
    return (
      <MusicCard
        key={item.id}
        id={item.id}
        artist={item.artistName}
        song={item.songName}
        genre={item.genre}
      />
    );
  });
  return (
    <div className="main">
      {data.length === 0 ? <h1>No Song Details</h1> : renderList}
    </div>
  );
};

export default Main;
