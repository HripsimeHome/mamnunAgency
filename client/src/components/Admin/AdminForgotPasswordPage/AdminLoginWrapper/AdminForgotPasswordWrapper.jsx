import { useState } from "react";
import { ErrorTypes } from "../../../../constants/errors";
import {
  forgotPassword,
  setForgotPassError,
} from "../../../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import AdminAuthWrapper from "../../AdminAuthWrapper/AdminAuthWrapper";

import NewPortalProvider from "../../../../providers/NewPortalProvider";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";
import Backdrop from "../../../layout/Backdrop/Backdrop";
import styles from "./AdminForgotPasswordWrapper.module.scss";

const errors = {
  email: {
    [ErrorTypes.emptyField]: "Email is a required field",
    [ErrorTypes.invalidvalue]: "There is no user with this email address.",
  },
};

const fields = [
  {
    key: "email",
    name: "Email",
    type: "email",
  },
];

const AdminForgotPasswordWrapper = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.forgotPassError);
  const loading = useSelector((state) => state.user.forgotPassLoading);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = (formData) => {
    (async () => {
      try {
        const res = await dispatch(forgotPassword(formData));

        if (res.error) throw new Error("error");
        setSubmitSuccess(true);
      } catch (error) {}
    })();
  };

  return (
    <AdminAuthWrapper
      error={error}
      loading={loading}
      setError={setForgotPassError}
      fields={fields}
      submitAction={onSubmit}
      title={"Forgot Password"}
      btnTxt="Submit"
      errorTexts={errors}
      additionalContent={
        <div>
          <Backdrop inProp={submitSuccess} onClose={() => {}} />
          <NewPortalProvider>
            <TransitionProvider
              inProp={submitSuccess}
              style={TransitionStyleTypes.opacity}
              className={styles.forgotPasswordWrapper__successModal}
            >
              We sent activation link to your email address.
            </TransitionProvider>
          </NewPortalProvider>
        </div>
      }
    />
  );
};

export default AdminForgotPasswordWrapper;
