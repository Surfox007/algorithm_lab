import { useParams } from 'react-router-dom';

export default function BlogDetailPage() {
  const { slug } = useParams();
  return <div>Blog detail: {slug}</div>;
}
