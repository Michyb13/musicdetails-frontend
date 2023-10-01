import { useContext } from "react";
import { MusicContext } from "../context/MusicContextProvider";

const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (context === null) {
    throw new Error(
      "useMusicContext must be used within a MusicContextProvider"
    );
  }
  return context;
};

export default useMusicContext;
