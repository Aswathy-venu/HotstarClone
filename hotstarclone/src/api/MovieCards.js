export const fetchData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/movies/animation');
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const popularShows = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/movies/drama');
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const loveStories = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/movies/animation');
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  