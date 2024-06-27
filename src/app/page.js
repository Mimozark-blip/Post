"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [localPosts, setLocalPosts] = useState([]); // Local state for new posts
  const [editPost, setEditPost] = useState(null); // Store the post being edited
  const [nextId, setNextId] = useState(1); // State to track the next available ID starting from 1
  const api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(api);
        setPosts(Array.isArray(data) ? data : []);

        // Determine the next available ID based on existing posts
        if (Array.isArray(data) && data.length > 0) {
          const maxId = Math.max(...data.map((post) => post.id));
          setNextId(maxId + 1);
        } else {
          // If no posts are fetched, start nextId from 1
          setNextId(1);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    getPosts();
  }, []);

  const addPost = (newPost) => {
    // Increment nextId and use it for new post ID
    const newPostWithId = { ...newPost, id: nextId };

    // Update local state with the new post
    setLocalPosts((prevPosts) => [...prevPosts, newPostWithId]);

    // Increment nextId for the next potential post
    setNextId((prevId) => prevId + 1);
  };

  const updatePost = (updatedPost) => {
    const postId = updatedPost.id;

    // Check if the post is in localPosts or posts
    if (localPosts.some((post) => post.id === postId)) {
      // Update localPosts
      setLocalPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === postId ? updatedPost : post))
      );
    } else {
      // Update posts
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === postId ? updatedPost : post))
      );
    }

    // Clear edit mode
    setEditPost(null);
  };

  const deletePost = (postId) => {
    // Check if the post is in localPosts or posts
    if (localPosts.some((post) => post.id === postId)) {
      // Remove the deleted post from localPosts
      setLocalPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== postId)
      );
    } else {
      // Remove the deleted post from posts
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    }

    // Optionally make a DELETE request to delete the post on the server
    axios
      .delete(`${api}/${postId}`)
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <>
      <Navbar addPost={addPost} />
      <div className="container mx-auto my-10">
        <Stats length={posts.length + localPosts.length} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="overflow-x-auto">
            <Table
              posts={[...posts, ...localPosts]} // Combine both arrays for display
              deletePost={deletePost}
              setEditPost={setEditPost}
            />
          </div>
        </div>
      </div>
      {editPost && (
        <Update
          post={editPost}
          onClose={() => setEditPost(null)}
          onSave={updatePost}
        />
      )}
      <Footer />
    </>
  );
};

export default Page;
