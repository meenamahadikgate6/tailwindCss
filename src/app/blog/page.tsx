// // import { Post } from '@/ui/post';
// import { getPosts } from '@/lib/posts';


 
// export default async function Page() {
//   const posts = await getPosts()
 
//   return (
//     <ul>
//       {posts.map((Post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </ul>
//   )
// }

import Post from '@/ui/post'; // Use default import
import { getPosts } from '@/lib/posts';

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => ( // ✅ Changed `Post` to `post`
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
