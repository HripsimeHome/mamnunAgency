import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../../../layout/Checkbox/Checkbox";

import { ErrorTypes } from "../../../../constants/errors";
import {
  adminForgotPasswordPagePath,
  adminNewsPagePath,
} from "../../../../router/path";
import { loginUser, setLoginError } from "../../../../store/slices/userSlice";
import AdminAuthWrapper from "../../AdminAuthWrapper/AdminAuthWrapper";
import styles from "./AdminLoginWrapper.module.scss";
import { useDispatch, useSelector } from "react-redux";

const errors = {
  email: {
    [ErrorTypes.emptyField]: "Email is a required field",
    [ErrorTypes.invalidvalue]: "Incorrect email",
  },
  password: {
    [ErrorTypes.emptyField]: "Password is a required field",
    [ErrorTypes.invalidvalue]: "Incorrect password",
  },
};

const fields = [
  {
    key: "email",
    name: "Email",
    type: "email",
  },
  {
    key: "password",
    name: "Password",
    type: "password",
  },
  {
    key: "remember",
    name: "Remember me",
    type: "email",
    defaultValue: false,
  },
];

const AdminLoginWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.user.loginError);
  const loading = useSelector((state) => state.user.loginLoading);

  const onSubmit = (formData) => {
    (async () => {
      try {
        const res = await dispatch(loginUser(formData));

        if (res.error) throw new Error("error");
        navigate(adminNewsPagePath);
      } catch (error) {}
    })();
  };

  return (
    <AdminAuthWrapper
      error={loginError}
      loading={loading}
      setError={setLoginError}
      fields={fields}
      submitAction={onSubmit}
      title={"Administration Panel"}
      btnTxt="Log in"
      errorTexts={errors}
      renderAdditionalField={(formData, onChange) => (
        <Checkbox
          onChange={(e) => onChange("remember", !formData.remember)}
          value={"remember"}
          checked={!!formData.remember}
          name={"remember"}
          labelClass={styles.loginWrapper__checkboxLabel}
        >
          Remember me
        </Checkbox>
      )}
      additionalContent={
        <Link
          to={adminForgotPasswordPagePath}
          className={styles.loginWrapper__link}
        >
          Forgot password?
        </Link>
      }
    />
  );
};

export default AdminLoginWrapper;
