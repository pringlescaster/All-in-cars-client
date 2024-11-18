import React, { useState } from 'react'
import axios from 'axios'
import speedIcon from "../../../public/speedIcon.svg";
import engineIcon from "../../../public/engineIcon.svg";
import favoriteIcon from "../../../public/favorite.svg";
import selectedFavorite from "../../../public/selectedfavorite.svg";
import { useAuthStore } from '@/app/store/authStore';


function Main() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
  const {isAuthenticated} = useAuthStore();

  useEffect(() => {
    const fetchFavorites = async () => {
        try {
            const response = await axios.get("http://localhost:2000/api/v1/favorites");
            setCars(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    } 
    fetchFavorites();
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Main
