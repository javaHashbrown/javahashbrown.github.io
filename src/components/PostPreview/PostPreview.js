import React from 'react';
import { Link } from 'gatsby';
import postPreviewStyles from './PostPreview.module.css';

const PostPreview = ({ node: post, showExcerpt = true, showButton = true }) => {
  return (
    <div className={postPreviewStyles.container}>
      <Link className={postPreviewStyles.entry} to={post.fields.slug}>
        <span className={postPreviewStyles.date}>{post.frontmatter.date}</span>
        <h3 className={postPreviewStyles.title}>{post.frontmatter.title}</h3>
        {showExcerpt && (
          <p className={postPreviewStyles.excerpt}>{post.excerpt}</p>
        )}
      </Link>
      {showButton && (
        <Link className={postPreviewStyles.button} to={post.fields.slug}>
          <span className={postPreviewStyles.arrow}>Read</span>
        </Link>
      )}
    </div>
  );
};

const PostPreviewByYear = ({ year, postsInYear = [] }) => {
  return (
    <section className={postPreviewStyles.yearPostsContainer}>
      <h1 className={postPreviewStyles.year}>{year}</h1>
      {postsInYear ? (
        postsInYear.map(post => (
          <div
            key={post.node.id}
            className={postPreviewStyles.postPreviewWrapper}
          >
            <PostPreview
              key={post.node.id}
              node={post.node}
              showExcerpt={false}
            />
          </div>
        ))
      ) : (
        <h2>暂无</h2>
      )}
    </section>
  );
};

export default PostPreview;
export { PostPreviewByYear };
