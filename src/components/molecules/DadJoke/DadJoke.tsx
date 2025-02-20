'use client'

import { useEffect, useState } from "react";

interface DadJokeResp {
  id: string;
  joke: string;
  status: number;
}

export default function DadJoke() {
  const [data, setData] = useState<DadJokeResp | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {      
        setLoading(true);
        const response = await fetch('https://icanhazdadjoke.com/', {
          method: 'GET',
          headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
          }
        }); 
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData()
  }, []);

  const className = `font-(family-name:--font-source-code) text-2xl`;

  return (
    <div className={className}>
      {loading && <p>Dad joke magic making...</p>}
      {error && <p>Dad joke errored... 😭</p>}
      {data?.joke && <p>{data.joke}</p>}
    </div>
  );
}