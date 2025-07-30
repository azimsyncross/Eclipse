import BlogSection from "../components/blogs/BlogSection";
import PageTitle from "../components/PageTitle";
import pageInfo from "../components/utils/pageInfo";

export default function BlogPage() {
  const blogInfo = pageInfo.blog;
  return (
    <div>
      <PageTitle
        title={blogInfo.title}
        backgroundImage={blogInfo.bgImage}
        breadcrumbs={blogInfo.breadcrumbs}
      />
      <BlogSection />
    </div>
  );
}
