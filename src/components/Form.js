import React , {useState} from "react";

export default function Form(props){
    
    const [name, setName] = useState('type here');
    // default value of name = 'type here'

    function handleSubmit(e){
        e.preventDefault();
        // alert('Hello Maneesh :>');
        props.addTask(name);
        setName("type here");
    }

    function handleChange(e) {
        setName(e.target.value);
        // console.log(e.target.value);
      }
    
    return(
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          data-testid = "test-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" data-testid = "test-button" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}