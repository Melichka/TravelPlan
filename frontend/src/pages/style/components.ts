export const Style = () => {
  return {
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#a61700",
              backgroundColor: "#FFA040",
              boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          grouped: {
            "&:not(:last-of-type)": {
              borderRadius: 30,
            },
            "&:not(:first-of-type)": {
              borderRadius: 30,
            },
          },
        },
      },
    },
  };
};
