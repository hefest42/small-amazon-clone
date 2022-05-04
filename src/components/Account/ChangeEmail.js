import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const ChangeEmail = ({ changeShowEmail }) => {
    const [stepper, setStepper] = useState(1);

    return (
        <div className="changePassword backdrop">
            <div className="changePassword-wrapper">
                <div className="changePassword-close">
                    <div>Email Change</div>
                    <div>
                        <AiOutlineClose onClick={() => changeShowEmail(false)} />
                    </div>
                </div>

                {stepper === 1 && (
                    <form className="changePassword-inner center-column">
                        <div className="changePassword-input">
                            <label htmlFor="changeEmail">Enter your current Password</label>
                            <input type="password" name="changeEmail" id="changeEmail" autoComplete="yes" />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}

                {stepper === 2 && (
                    <form className="changePassword-inner center-column">
                        <div className="changePassword-input">
                            <label htmlFor="email2">Enter your new Email</label>
                            <input type="text" name="email2" id="email2" autoComplete="yes" />
                        </div>
                        <button className="button-orange">Continue</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ChangeEmail;
