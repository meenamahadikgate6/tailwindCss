 
export default function Post({ post }: { post: { id: number; title: string } }) {
  return (
    <li className="p-2 border-b border-gray-200 sm:text-6xl md:text-2xl">
      {post.title} 
      
    </li>
  );
}
