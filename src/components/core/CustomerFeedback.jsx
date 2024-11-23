import React from "react";
import "./dash.css";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Jenny Wilson",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
      rating: 4.5,
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      id: 2,
      name: "Dianne Russell",
      avatar:
        "https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-avatar-job-student-flat-portrait-of-man-png-image_11606888.png",
      rating: 5,
      comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 3,
      name: "Devon Lane",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      rating: 4,
      comment:
        "Normally wings are wings, but theirs are lean meaty and tender, and not overcooked. Exceptional flavor!",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <span key={index} className="star">
              ★
            </span>
          ))}
        {halfStar && <span className="star half">★</span>}
        {Array(5 - Math.ceil(rating))
          .fill()
          .map((_, index) => (
            <span key={index} className="star empty">
              ★
            </span>
          ))}
      </>
    );
  };

  return (
    <div className="customer-feedback">
      <h2>Customer’s Feedback</h2>
      <div className="feedback-list">
        {feedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback.id}>
            <div className="feedback-header">
              <img
                src={feedback.avatar}
                alt={`${feedback.name}'s avatar`}
                className="avatar"
              />
              <div>
                <p className="name">{feedback.name}</p>
                <div className="rating">{renderStars(feedback.rating)}</div>
              </div>
            </div>
            <p className="comment">{feedback.comment}</p>
            <hr className="divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
