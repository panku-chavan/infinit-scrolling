import "../styles/home.css"
import axios from "axios";
import { useEffect, useState } from "react";
import User from "../components/User";
import FadingLoader from "../components/Loading";
export interface UsersType {
  id: number;
  name: string;
  img: string;
}


const Home = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadUsers = async () => {
      const res = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`);
      setTimeout(() => {
        setUsers((prevUsers) => [...prevUsers, ...res.data.results]);
        setLoading(false);
      }, 1000);
    };
    loadUsers();
  }, [page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    // console.log('scrollTop: ', scrollTop);
    const scrollHeight = document.documentElement.scrollHeight;
    // console.log('scrollHeight: ', scrollHeight);
    const clientHeight = document.documentElement.clientHeight;
    // console.log('clientHeight: ', clientHeight);
    if (scrollTop + clientHeight + 1 >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [users]);

  return (
    <div className="hcontainer">
      <div className="hWrapper">
        {users.map((user, index) => {
          return <User key={index} user={user} />
        })}
        {loading &&
         
          <FadingLoader />
        }
      </div>
    </div>
  );
};

export default Home;

