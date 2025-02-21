
const AboutMe = () => {
  return (
    <div
      className="bg-base-100 flex flex-col justify-center items-center space-y-8 pb-20 pt-20"
      id="about-me"
    >
      <div className="container px-4 space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-2">
          <h4 className="text-3xl text-primary">About Me</h4>
          <p className="text-base-content-300 text-xl">
            Frontend developer with a passion for learning.
          </p>
          <p>
            Starting with a BS in Graphic Design, then learning and growing into
            a well-versed frontend web developer. Worked with many large
            enterprises in my career to deliver fast and user-friendly
            experiences.
          </p>
          <p>My degree in Graphic Design has given me a keen eye for matching mock-ups to experiences for users.</p>
        </div>
        <div className="join join-vertical bg-base-100">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              Where are you currently working?
            </div>
            <div className="collapse-content text-sm space-y-2">
              <p>
                I have had the pleasure of working with ActiveLAMP for over 14
                years. I have learned so much and been able to utilize many
                different frameworks and technologies.
              </p>
              <p>My career so far has allowed me to collaborate with some other great developers and companies. Being able to bounce ideas off other developers and grow has been a highlight.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              What do you do in your free time?
            </div>
            <div className="collapse-content text-sm space-y-2">
              <p>{`I love being a part of my family's lives. I have been able to coach my kid's sports, help them with homework, and teach them new things.`}</p>
              <p>{`I also love fitness, eating healthy, and being outside whenever I can.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;