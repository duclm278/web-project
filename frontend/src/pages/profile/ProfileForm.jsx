import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export function ProfileForm() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          required
          label="Birthday"
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="email"
          name="email"
          label="Email Address"
          fullWidth
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="city"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="country"
          name="country"
          label="Country"
          fullWidth
          autoComplete="country"
        />
      </Grid>
    </Grid>
  );
}
