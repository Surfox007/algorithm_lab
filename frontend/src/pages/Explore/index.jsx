import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiClient } from '../../api/client';
import { BlogCard } from '../../components/blog/BlogCard';
import { Skeleton } from '../../components/ui/Skeleton';
import { setBlogLoading, setBlogs } from '../../features/blog/blogSlice';

export default function ExplorePage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((s) => s.blog);

  useEffect(() => {
    const fetchBlogs = async () => {
      dispatch(setBlogLoading(true));
      const { data } = await apiClient.get('/blogs');
      dispatch(setBlogs(data.data.items));
      dispatch(setBlogLoading(false));
    };
    fetchBlogs();
  }, [dispatch]);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Explore</h2>
      {loading ? <Skeleton /> : items.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
    </section>
  );
}
