import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

//TODO add logic for actually changing password
const ChangePassword = ({ changeShowPassword }) => {
    const [stepper, setStepper] = useState(2);

    return (
        <div className="changePassword backdrop">
            <div className="changePassword-wrapper">
                <div className="changePassword-close">
                    <div>Password Change</div>
                    <div>
                        <AiOutlineClose onClick={() => changeShowPassword(false)} />
                    </div>
                </div>

                {stepper === 1 && (
                    <form className="changePassword-inner center-column">
                        <div className="changePassword-input">
                            <label htmlFor="changePass">Enter your current Password</label>
                            <input type="password" name="changePass" id="changePass" autoComplete="yes" />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}

                {stepper === 2 && (
                    <form className="changePassword-inner center-column">
                        <div className="changePassword-input">
                            <label htmlFor="password2">Enter your new Password</label>
                            <input type="password" name="password2" id="password2" autoComplete="yes" />
                        </div>
                        <div className="changePassword-input">
                            <label htmlFor="password3">Re-Enter your new Password</label>
                            <input type="password" name="password3" id="password3" autoComplete="yes" />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ChangePassword;
