import React, { useState } from "react";

import styles from "./AdminSettings.module.scss";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import MainInput from "../../../layout/MainInput/MainInput";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  setChangePassError,
} from "../../../../store/slices/userSlice";
import { useFormValue } from "../../../../hooks/useFormValue";
import { openTooltip } from "../../../../store/slices/UISlice";

const AdminSettings = () => {
  const dispatch = useDispatch();
  const initialState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const error = useSelector((state) => state.user.changePassError);
  const setError = setChangePassError;
  const { formData, onChange, getError, onResetForm } = useFormValue(
    initialState,
    setError,
    error
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(changePassword(formData)).unwrap();
      dispatch(openTooltip("Password changed"));
      onResetForm();
    } catch (error) {
      dispatch(openTooltip("Failed to change password"));
    }
    setLoading(false);
  };

  return (
    <section className={styles.adminSettings}>
      <h3 className={"titleBlackh3"}>Settings</h3>

      <form onSubmit={onSubmit} className={styles.adminSettings__form}>
        <h4 className={styles.adminSettings__formtitle}>Change Password</h4>
        <MainInput
          onChange={onChange}
          value={formData.currentPassword}
          name={"currentPassword"}
          isInvalid={getError("currentPassword")}
          type="password"
          placeholder="Current password"
        />
        <MainInput
          onChange={onChange}
          value={formData.newPassword}
          name={"newPassword"}
          isInvalid={getError("newPassword")}
          type="password"
          placeholder="New password"
        />
        <MainInput
          onChange={onChange}
          value={formData.confirmPassword}
          name={"confirmPassword"}
          isInvalid={getError("confirmPassword")}
          type="password"
          placeholder="Confirm new password"
        />
        <MainBtn className={"textWhite"} disabled={loading} withBg>
          {loading ? "Saving" : "Save"}
        </MainBtn>
      </form>
    </section>
  );
};

export default AdminSettings;
