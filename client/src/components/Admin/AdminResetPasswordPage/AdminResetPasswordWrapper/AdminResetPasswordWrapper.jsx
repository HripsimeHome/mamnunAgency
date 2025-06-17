import { useNavigate, useParams } from "react-router-dom";

import { ErrorTypes } from "../../../../constants/errors";
import { adminLoginPagePath } from "../../../../router/path";
import { openTooltip } from "../../../../store/slices/UISlice";
import {
  resetPassword,
  setResetPassError,
} from "../../../../store/slices/userSlice";
import AdminAuthWrapper from "../../AdminAuthWrapper/AdminAuthWrapper";

import styles from "./AdminResetPasswordWrapper.module.scss";
import { useDispatch, useSelector } from "react-redux";

const errors = {
  password: {
    [ErrorTypes.emptyField]: "Password is a required field",
    [ErrorTypes.invalidvalue]: "Incorrect password",
  },
  passwordConfirm: {
    [ErrorTypes.emptyField]: "Password Confirm is a required field",
    [ErrorTypes.invalidvalue]: "The passwords do not match",
  },
};

const fields = [
  {
    key: "password",
    name: "Password",
    type: "password",
  },
  {
    key: "passwordConfirm",
    name: "Password Confirm",
    type: "password",
  },
];

const AdminResetPasswordWrapper = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.resetPassError);
  const loading = useSelector((state) => state.user.resetPassLoading);

  const onSubmit = (formData) => {
    (async () => {
      try {
        const res = await dispatch(
          resetPassword({
            ...formData,
            token: params.token || "",
          })
        );

        if (res.error) throw new Error("error");
        dispatch(openTooltip("Password was changed"));
        navigate(adminLoginPagePath);
      } catch (error) {}
    })();
  };

  if (params.token)
    return (
      <AdminAuthWrapper
        error={error}
        loading={loading}
        setError={setResetPassError}
        fields={fields}
        submitAction={onSubmit}
        title={"Reset Password"}
        btnTxt="Submit"
        errorTexts={errors}
        additionalContent={
          <p
            className={`${styles.adminResetPasswordWrapper__errorTxt} ${
              typeof error === "object" && error?.token
                ? styles.adminResetPasswordWrapper__errorTxt_active
                : ""
            }`}
          >
            Token is invalid or has expired
          </p>
        }
      />
    );
  else return null;
};

export default AdminResetPasswordWrapper;
