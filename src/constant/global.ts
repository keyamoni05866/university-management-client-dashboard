export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));
export const genderNames = ["Female", "Male", "Other"];

export const genderOptions = genderNames.map((item) => ({
  value: item,
  label: item,
}));

export const bloodGroups = [
  "A",
  "B",
  "AB",
  "O",
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));
