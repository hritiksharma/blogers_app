import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility</b>Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>

          <div className="buttons">
            <button>Save as a drafts</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="education" id="education" />
            <label htmlFor="education">Education</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="childLabour"
              id="childLabour"
            />
            <label htmlFor="childLabour">Child Labour</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="womeneEmp" id="womenEmp" />
            <label htmlFor="art">WomenEmp</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="health" id="health" />
            <label htmlFor="health">Health</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="social" id="social" />
            <label htmlFor="social">Social</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
