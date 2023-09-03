/* eslint-disable react/no-unescaped-entities */
const HappyStudents = () => {
  return (
    <div className="my-10">
      <h3 className="text-6xl text-center mb-7 text-[#5c6465]">
        Happy Students
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Alex</h2>
            <p>
              This martial arts school has transformed my life in just a year.
              The skilled, patient instructors and the supportive community have
              boosted my confidence and self-defense skills. I wholeheartedly
              recommend it to anyone seeking physical and mental growth.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body ">
            <h2 className="card-title">John</h2>
            <p>
              This school isn't just about martial arts; it's about character
              development and respect. Exceptional training, expert instructors,
              and a focus on discipline and integrity make it a transformative
              experience. Joining this community has been one of my best
              decisions.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <h2 className="card-title">Sarah</h2>
            <p>
              This school offers dynamic, engaging training with passionate
              instructors. Beyond self-defense, I've improved my fitness, mental
              resilience, and found a supportive community. Whether a beginner
              or advanced, this school is a must for martial arts and personal
              growth enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyStudents;
