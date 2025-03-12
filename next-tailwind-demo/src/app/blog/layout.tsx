// export default function BlogLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return <section>{children}</section>
//   }


// import { ReactNode } from "react";

// const BlogLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
//   return <section>{children}</section>;
// };

// export default BlogLayout;

import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <section>{children}</section>;
}
