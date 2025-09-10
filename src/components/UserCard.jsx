import React from "react";

export const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, about, skills } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img className="object-cover" src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{"Age: " + age + " " + "gender: " + gender}</p>}
        <p>{about}</p>
        <p>Skills : {skills.join(", ")}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};
