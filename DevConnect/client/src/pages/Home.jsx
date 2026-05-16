import { useEffect } from "react";
import axios from "axios";

function Home() {

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/test"
        );

        console.log(response.data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchData();

  }, []);

  return (
    <div className="text-4xl p-10">
      Home Page
    </div>
  );
}

export default Home;