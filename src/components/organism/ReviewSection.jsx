import { useState } from 'react';
import RenderStars from '../atoms/RenderStars';
import user1 from "../../assets/images/user1.jpg"
const reviews = [
  {
    id: 1,
    name: 'Nicole Brown',
    role: 'UX/UI Designer',
    rating: 4.5,
    comment: `This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian.`,
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Graphic Designer',
    rating: 4.7,
    comment: `Great course! I learned a lot and I highly recommend it.`,
    imageUrl: 'https://via.placeholder.com/50',
  },
];

const ReviewSection = () => {
  const [comments, setComments] = useState(reviews);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {

    const newReview = {
      id: comments.length + 1,
      name: 'New User',
      role: 'Student',
      rating: 4.0,
      comment: newComment,
      imageUrl: 'https://via.placeholder.com/50',
    };
    setComments([...comments, newReview]);
    setNewComment('');

  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg mt-7">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {comments.map((review) => (
        <div key={review.id} className="mb-6 border-b pb-5 ">
          <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between '>
            <div className="flex flex-col mobile:flex-row text-center mobile:text-left justify-start items-center">
              <img className="w-12 h-12 rounded-full border-4 mobile:mr-3" src={user1} alt="Rounded avatar" />
              <div className="flex flex-col mobile:mr-7">
                <h1 className='font-semibold'>{review.name}</h1>
                <p className='text-sm text-gray-500'>{review.role}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 mobile:flex-row text-sm justify-center mobile:justify-normal items-center'>
              <RenderStars ratingNumber={review.rating} />
              <span className="text-gray-600 xmobile:ml-2">{review.rating} Rating</span>
            </div>
          </div>
          <p className="mt-4 text-gray-700 overflow-x-auto">“ {review.comment} ”</p>
        </div>
      ))}

      <div className="mt-6">
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-purple-300"
          rows="4"
          placeholder="Add your review..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={handleAddComment}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
