import React from 'react';

const BlogList = ({ posts, setCurrentPost, deletePost }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="bg-white border rounded-lg p-4 flex flex-col items-center hover:shadow-xl cursor-pointer">
                        {post.image && (
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        )}
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p className="text-gray-700">{post.content}</p>
                        <div className="mt-auto">
                            <button onClick={() => setCurrentPost(post)} className="bg-yellow-500 text-white p-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white p-1 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
