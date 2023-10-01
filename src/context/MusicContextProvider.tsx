import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";
type ContextProps = {
  children: ReactNode;
};
type MusicProps = {
  id: number;
  artistName: string;
  songName: string;
  genre: string;
};
interface MusicContextProps {
  data: MusicProps[];
  addData: (response: MusicProps) => void;
  deleteData: (response: MusicProps) => void;
}

export const MusicContext = createContext<MusicContextProps | null>(null);

const MusicContextProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<MusicProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5190/api/Music");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [data]);

  const addData = (response: MusicProps) => {
    setData((prev) => {
      return { response, ...prev };
    });
  };

  const deleteData = (response: MusicProps) => {
    const filteredData = data.filter((item) => item.id !== response.id);
    setData(filteredData);
  };

  const exports = {
    data,
    addData,
    deleteData,
  };
  return (
    <MusicContext.Provider value={exports}>{children}</MusicContext.Provider>
  );
};

export default MusicContextProvider;
