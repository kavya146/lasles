import "./Testimonial.css";

const TestimonialTemplate = ({
  url,
  heading,
  subtext,
  rating,
  desc,
  className,
}) => {
  return (
    <div className={className} style={{ padding: "10px" }}>
      <div className="testimonial-box-top">
        <img src={url}></img>

        <div>
          <h4>{heading}</h4>
          <p>{subtext}</p>
        </div>

        <p>{rating}</p>
      </div>

      <p>{desc}</p>
    </div>
  );
};

export default TestimonialTemplate;
