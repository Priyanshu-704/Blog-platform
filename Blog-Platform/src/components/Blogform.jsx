import React, { useState, useEffect } from 'react';

const BlogForm = ({ addPost, updatePost, currentPost, setCurrentPost }) => {
    const [formData, setFormData] = useState({ title: '', content: '', image: '' });

    useEffect(() => {
        if (currentPost) {
            setFormData(currentPost);
        } else {
            setFormData({ title: '', content: '', image: '' });
        }
    }, [currentPost]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPost) {
            updatePost({ ...formData, id: currentPost.id });
        } else {
            addPost(formData);
        }
        setFormData({ title: '', content: '', image: '' });
        setCurrentPost(null);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Content"
                    className="w-full p-2 border rounded"
                    required
                ></textarea>
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full p-2 border rounded"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {currentPost ? 'Update' : 'Add'} Post
            </button>
        </form>
    );
};

export default BlogForm;
