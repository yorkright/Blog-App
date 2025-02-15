import { useState } from "react";

export default function BlogPosts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all fields");
      return;
    }
    const newPost = { title, description, id: Date.now() };
    setPosts([newPost, ...posts]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          Add Post
        </button>
      </form>
      <div className="mt-6 flex flex-wrap  gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-700">{post.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No blog posts yet.</p>
        )}
      </div>
    </div>
  );
}
