import PropTypes from "prop-types";
import style from "./student.module.css";

function Student({ img, name, age, roll }) {
  return (
    <div className={style.student}>
      <img className={style.img1} src={img} alt="Student" />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Regd no: {roll}</p>
    </div>
  );
}


Student.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  roll: PropTypes.number,
};


Student.defaultProps = {
  img: "https://via.placeholder.com/150", // Placeholder image
  name: "Jane Doe",
  age: 20,
  roll: 10,
};

export default Student;
