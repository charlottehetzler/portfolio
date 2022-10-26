const theme = [
    {
      bg: "#FCEEDE",
      color: "#0E414F",
    },
    {
      bg: "#EEDFDF",
      color: "#434C38",
    },
    {
      bg: "#E5E2DB",
      color: "#293C34",
    },
    {
      bg: "#E5E2DB",
      color: "#F8AA28",
    },
    {
      bg: "#E5E2DB",
      color: "#9E1822",
    },
    {
      bg: "#F0EBE9",
      color: "#704C67",
    },
    {
      bg: "#F4F4F6",
      color: "#0E4144",
    },
  ];
  const darkTheme = [
    {
      bg: "#121211",
      color: "#324341",
    },
    {
      bg: "#121211",
      color: "#E7A84E",
    },
    {
      bg: "#121211",
      color: "#863734",
    },
    {
      bg: "#121211",
      color: "#0E4144",
    },
    {
      bg: "#121211",
      color: "#E51D40",
    },
    {
      bg: "#121211",
      color: "#434C38",
    },
    {
      bg: "#121211",
      color: "#383860",
    },
  ];
  
  function setTheme(color = 0, darkStatus) {
    const initialBg = darkStatus ? darkTheme[color].bg : theme[color].bg;
    const initialColor = darkStatus ? darkTheme[color].color : theme[color].color;
  
    document.body.style.background = initialBg;
    document.body.style.color = initialColor;
    document.getElementById("abc").style.fill = initialColor;
    document.getElementById("efg").style.fill = initialColor;
  }
  const button = document.getElementById("toggler");
  const darkToggler = document.getElementById("darkToggler");
  let count = 0 || Number(localStorage.getItem("counter"));
  
  button.onclick = () => {
    if (count + 1 === theme.length) {
      count = 0;
      localStorage.setItem("counter", count);
      setTheme(
        count,
        localStorage.getItem("darkToggler")
          ? localStorage.getItem("darkToggler")
          : null
      );
    } else {
      count = count + 1;
      localStorage.setItem("counter", count);
      setTheme(
        count,
        localStorage.getItem("darkToggler")
          ? localStorage.getItem("darkToggler")
          : null
      );
    }
  };
  
  darkToggler.onclick = () => {
    if (!localStorage.getItem("darkToggler")) {
      localStorage.setItem("darkToggler", "dark");
      let count = 0 || Number(localStorage.getItem("counter"));
      setTheme(count, "dark");
    } else {
      localStorage.removeItem("darkToggler");
      let count = 0 || Number(localStorage.getItem("counter"));
      setTheme(count, null);
    }
  };
  
  // Immediately invoked function to set the theme on initial load
  (function () {
    let count = 0 || Number(localStorage.getItem("counter"));
    let darkStatus = localStorage.getItem("darkToggler");
    setTheme(count, darkStatus);
  })();
  