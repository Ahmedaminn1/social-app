import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../services/postServices";
import CardHeader from "../../components/PostCard/CardHeader";
import CardBody from "../../components/PostCard/CardBody";
import CardFooter from "../../components/PostCard/CardFooter";
import PostSkeleton from "../../components/Skeletons/PostSkeleton";

export default function PostDetails() {

  const { id } = useParams();
  const [post, setpost] = useState("")
  const [isLoading, setisLoading] = useState(true)
  const [postComments, setpostComments] = useState([])


  async function getPostDetails(postId) {
    try {
      setisLoading(true)
      const response = await getSinglePost(postId);
      const data = response?.data;
      const apiPayload = data?.data || data; // Auto-discovery for nested data field
      
      if (apiPayload?.post) {
        setpost(apiPayload.post);
        setpostComments(apiPayload.post.comments || []);
      } else if (apiPayload?.[0]) { // Fallback if API returns single post as array
        setpost(apiPayload[0]);
        setpostComments(apiPayload[0].comments || []);
      }
    } catch (error) {
      console.error("DEBUG: Failed to fetch post details:", error.response?.data || error.message);
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    getPostDetails(id);
  }, []);

  return ( 
    <>

    <div className="max-w-3xl mx-auto m-5 bg-white rounded-lg shadow-sm border border-gray-200">
    {isLoading ? <PostSkeleton/> : <>
      <CardHeader 
        photo={post?.user?.photo} 
        name={post?.user?.name} 
        createdAt={post?.createdAt}
      />

      <CardBody 
        setpostComments={setpostComments} 
        isPostDetails={true} 
        id={id} 
        body={post?.body} 
        image={post?.image} 
        commentsLength={postComments?.length || 0}
      />

      {postComments?.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-100 divide-y divide-gray-100">
          {postComments.map((comment) => (
            comment?.commentCreator ? (
              <CardFooter 
                key={comment._id} 
                postUserId={post?.user?._id}
                postId={post?._id}
                comment={comment}
                setpostComments={setpostComments}
              />
            ) : null
          ))}
        </div>
      )}
    </>}
    </div>
    </>
  );
}
