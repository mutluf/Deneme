import { useState, useEffect } from 'react';
import Posts from '../../components/posts/Posts';
import { PostType } from '../../types/types';

const PostPage = () => {
  const [datas, setDatas] = useState<PostType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData = await res.json();
        setDatas(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Posts post={datas} />
    </div>

  );
};

export default PostPage;