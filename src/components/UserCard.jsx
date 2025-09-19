import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

export const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, gender, photoUrl, about, skills } =
    user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {}, // backend doesn't need body
        { withCredentials: true }
      );

      console.log("Request success:", response.data);
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.error("Request failed:", error.response?.data || error.message);
    }
  };

  // ✅ Return moved outside
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img className="object-cover" src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{"Age: " + age + " | Gender: " + gender}</p>}
        <p>{about}</p>
        <p>Skills : {skills?.join(", ")}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
