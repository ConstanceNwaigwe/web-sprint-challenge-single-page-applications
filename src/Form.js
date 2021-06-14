import React from 'react';

export default function Forms(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    const onChange = evt => {

    const { name, value, checked, type } = evt.target;

    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
    }

    return(
        <form>
            <div>
                <h2>Pizza Choice</h2>
                <div className='errors'>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instructions}</div>
                </div>
            </div>
            <div>
                <h4>Build Your Own Pizza</h4>
                <label>Choose  A Size: 
                <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
                    </label>

                    <label>Original Sauce 
                        <input
                            type="radio"
                            name="sauce"
                            value="original"
                            checked={values.civil === "original"}
                            onChange={onChange}
                        />
                    </label>
                    <label>BBQ Sauce 
                        <input
                            type="radio"
                            name="sauce"
                            value="bbq"
                            checked={values.civil === "bbq"}
                            onChange={onChange}
                        />
                    </label>
                    <label>Buffalo sauce 
                        <input
                            type="radio"
                            name="sauce"
                            value="buffalo"
                            checked={values.civil === "buffalo"}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pepperoni
                        <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                        </label>

                        <label>Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked ={values.bacon}
                            onChange={onChange}
                            />
                        </label>

                        <label>Tomatos
                        <input
                            type='checkbox'
                            name='tomatos'
                            checked={values.tomatos}
                            onChange={onChange}
                            />
                        </label>
                        <label>Special Instructions
                        <input
                            value={values.instructions}
                            onChange={onChange}
                            name='instructions'
                            type='text'
                        />
                        </label>
            </div>
            <div><button disabled={disabled} id="submitBtn">Add to order</button></div>
        </form>
    )
}