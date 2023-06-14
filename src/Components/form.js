import React, { useState } from "react";
import "./form.css";
import "./card.css";
function Form() {
  const [formData, setFormData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setCurrentData({ ...currentData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData([...formData, currentData]);
    setCurrentData({});
    setSubmitted(true);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCurrentData((prevData) => ({
        ...prevData,
        skill: [...(prevData.skill || []), value],
      }));
    } else {
      setCurrentData((prevData) => ({
        ...prevData,
        skill: prevData.skill.filter((item) => item !== value),
      }));
    }
  };

  return (
    <div className="flex-container">
      <div className="inp-form-container f-item">
        <h1>Enroll Here ...</h1>
        <table className="form-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={currentData.name || ""}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={currentData.email || ""}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Website</td>
              <td>
                <input
                  type="text"
                  name="website"
                  value={currentData.website || ""}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Image Link</td>
              <td>
                <input
                  type="text"
                  name="imageLink"
                  value={currentData.imageLink || ""}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td id="radio-box">
                <input
                  type="radio"
                  id="male"
                  className="radio"
                  name="gender"
                  value="Male"
                  checked={currentData.gender === "Male"}
                  onChange={handleInputChange}
                />
                <label htmlFor="male">Male</label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={currentData.gender === "Female"}
                  onChange={handleInputChange}
                />
                <label htmlFor="female">Female</label>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="skill">Skills</label>
              </td>
              <td id="check-box-container">
                <div>
                  <input
                    type="checkbox"
                    id="java"
                    name="skill"
                    value="Java"
                    checked={currentData.skill?.includes("Java")}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="java">JAVA</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="html"
                    name="skill"
                    value="Html"
                    checked={currentData.skill?.includes("Html")}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="html">HTML</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="css"
                    name="skill"
                    value="CSS"
                    checked={currentData.skill?.includes("CSS")}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="css">CSS</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-div">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div className="f-item output-container">
        <h1>Enrolled Students</h1>
        {submitted && (
          <div>
            <div className="users-container ">
              {formData.map((data, index) => (
                <div
                  className="card bgGradient"
                >
                  <div className="img-container">
                    <img
                      src={data.imageLink}
                      className="card-img-top"
                      alt="your image here"
                    />
                  </div>
                  <div className="card-body" style={{ paddingLeft: 30 }}>
                    <h5 className="card-title" key={index}>
                      {data.name}
                    </h5>

                    <p className="card-text">Email : {data.email}</p>
                    <p className="card-text">Gender : {data.gender}</p>
                    <p className="card-text b">Skills : {data.skill?.join(", ")}</p>
                    <p className="card-text">Website : {data.website}</p>
                  </div>
                </div>
              ))}
            </div>

            {/*  
            <table className="output-table">
              <tbody>
                {formData.map((data, index) => (
                  <>
                    <tr key={index}>
                      <td>Name</td>
                      <td>{data.name}</td>
                    </tr>

                    <tr>
                      <td>Email</td>
                      <td>{data.email}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{data.gender}</td>
                    </tr>
                    <tr>
                      <td>Skills</td>
                      <td>{data.skill?.join(", ")}</td>
                    </tr>
                    <tr>
                      <hr></hr>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            
            */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
