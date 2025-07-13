import React, { useState } from "react";
import MainInput from "../../../layout/MainInput/MainInput";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import { BOOKING_FORM_TYPES } from "../../../../constants/bookingFormtypes";
import Select from "../../../layout/Select/Select";

import styles from "./ServiceBookForm.module.scss";
import { useFormValue } from "../../../../hooks/useFormValue";
import { setBookError } from "../../../../store/slices/constactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendBook } from "../../../../store/slices/constactsSlice";
import { openTooltip } from "../../../../store/slices/UISlice";

const serviceOptions = [
  {
    value: BOOKING_FORM_TYPES.MEET_AND_GREET,
    name: BOOKING_FORM_TYPES.MEET_AND_GREET,
  },
  {
    value: BOOKING_FORM_TYPES.FAST_TRACK_SERVICES,
    name: BOOKING_FORM_TYPES.FAST_TRACK_SERVICES,
  },
  {
    value: BOOKING_FORM_TYPES.TRANSFER_SERVICES_WORLDWIDE,
    name: BOOKING_FORM_TYPES.TRANSFER_SERVICES_WORLDWIDE,
  },
  {
    value: BOOKING_FORM_TYPES.MEET_AND_GREET_RAILWAY,
    name: BOOKING_FORM_TYPES.MEET_AND_GREET_RAILWAY,
  },
];

const ServiceBookForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.contacts.bookError);
  const {
    onChange,
    onChangeSelect,
    onNumberChange,
    formData,
    onResetForm,
    getError,
  } = useFormValue(
    {
      fullName: "",
      contactNumber: "",
      services: [],
      email: "",
    },
    setBookError,
    error
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await dispatch(sendBook(formData)).unwrap();
      dispatch(openTooltip("Form submitted successfully."));
      onResetForm();
    } catch (error) {
      dispatch(openTooltip("Failed to submit."));
    }
    setLoading(false);
  };

  return (
    <form className={styles.serviceBookForm} onSubmit={onSubmit}>
      <div className={styles.serviceBookForm__col}>
        <MainInput
          disabled={loading}
          value={formData.fullName}
          isInvalid={getError("fullName")}
          name="fullName"
          onChange={onChange}
          placeholder="Full name:"
        />
        <MainInput
          disabled={loading}
          value={formData.contactNumber}
          isInvalid={getError("contactNumber")}
          name="contactNumber"
          onChange={onNumberChange}
          placeholder="Phone number:"
        />
      </div>
      <Select
        options={serviceOptions}
        onChange={(val) => onChangeSelect("services", val)}
        selectedValue={formData.services}
        disabled={loading}
        isInvalid={getError("services")}
        name="services"
        placeholder="Service(s):"
        multiSelect
      />
      <MainInput
        disabled={loading}
        value={formData.email}
        isInvalid={getError("email")}
        name="email"
        onChange={onChange}
        placeholder="Email:"
      />
      <MainBtn disabled={loading}>{loading ? "Sending..." : "Send"}</MainBtn>
    </form>
  );
};

export default ServiceBookForm;
