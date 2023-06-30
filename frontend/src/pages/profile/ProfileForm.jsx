import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import userService from "../../services/user";

const readOnlyStyle = {
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000000",
  },
};

function newEmptyFormData() {
  return {
    id: "",
    firstName: "",
    lastName: "",
    birthday: new moment().toISOString(),
    email: "",
  };
}

export function ProfileForm() {
  const { user } = useAuthContext();
  const [readOnly, setReadOnly] = useState(true);
  const [formData, setFormData] = useState(newEmptyFormData);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = user.token;
    const request = async () => {
      try {
        const data = await userService.getProfile(token);
        setFormData(data);
      } catch (err) {
        setError(err);
      }
    };

    request();
  }, [user.token]);

  const handleFormChange = (...args) => {
    let fieldName = null;
    let fieldValue = null;
    if (args.length === 1) {
      const e = args[0];
      fieldName = e.target.name;
      fieldValue = e.target.value;
    } else if (args.length > 1) {
      [fieldName, fieldValue] = args;
    }

    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required={!readOnly}
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          value={formData.firstName}
          onChange={(e) => handleFormChange(e)}
          disabled={readOnly}
          sx={readOnly ? readOnlyStyle : {}}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required={!readOnly}
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          value={formData.lastName}
          onChange={(e) => handleFormChange(e)}
          disabled={readOnly}
          sx={readOnly ? readOnlyStyle : {}}
        />
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          required={!readOnly}
          label="Birthday"
          value={moment(formData.birthday)}
          onChange={(v) => {
            // Reset local time to 00:00:00.000
            v = v?.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
            handleFormChange("birthday", v?.toISOString());
          }}
          onError={(newError) => setError(newError)}
          slotProps={{ textField: { fullWidth: true } }}
          disabled={readOnly}
          sx={readOnly ? readOnlyStyle : {}}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required={!readOnly}
          id="email"
          name="email"
          label="Email Address"
          fullWidth
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleFormChange(e)}
          disabled={readOnly}
          sx={readOnly ? readOnlyStyle : {}}
        />
      </Grid>
    </Grid>
  );
}
