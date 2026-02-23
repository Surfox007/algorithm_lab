import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiClient } from '../../api/client';
import { BlogCard } from '../../components/blog/BlogCard';
import { Skeleton } from '../../components/ui/Skeleton';
import { setBlogLoading, setBlogs } from '../../features/blog/blogSlice';
import { featuredPosts } from '../../utils/dummyData';

export default function ExplorePage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((s) => s.blog);

  useEffect(() => {
    const fetchBlogs = async () => {
      dispatch(setBlogLoading(true));
      try {
        const { data } = await apiClient.get('/blogs');
        dispatch(setBlogs(data.data.items));
      } catch {
        dispatch(setBlogs(featuredPosts));
      } finally {
        dispatch(setBlogLoading(false));
      }
    };
    fetchBlogs();
  }, [dispatch]);

  return (
    <section className="space-y-5">
      <div className="rounded-xl border bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold">Explore Stories</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Trending insights from engineering, design, and product leaders.</p>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
