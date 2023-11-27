import axios from 'axios';

const fetcher = async (url) => {
  const result = await axios.get(url).then((res) => {
    switch (res.status) {
      case 200:
        return res.data;
      case 404:
        return new Error('404 Error');
      default:
        return res.data;
    }
  });

  return result;
};

export default fetcher;
