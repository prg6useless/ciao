import React, { useState, useEffect } from "react";
import "../styles/FromTemplate.css";
import Navbar from "../components/Navbar";
import Recursioncircle from "../components/art/RecursionCircle";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const PrettoSlider = styled(Slider)({
  color: "#fff",
  height: 8,
  "& .MuiSlider-track": {
    
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#7b2cbf",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#c77dff",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function Rcircle() {
  const [value, setvalue] = useState(100);
  const handleChange = (e) => {
    setvalue(e.target.value);
    console.log(value);
  };
  return (
    <>
      <Navbar />
      <div className="containerrrrr">
        <h1 className="header-title">Recursion Circle</h1>
        <div className="main-area">
          <div className="description">
            <h1>Description</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            facilisis leo, ac sodales mi. Praesent id libero a urna porttitor
            auctor vitae vel nibh. Suspendisse potenti. Aliquam ac tellus quis
            turpis placerat facilisis. Phasellus quam leo, placerat in viverra
            id, aliquam congue felis. Fusce non mauris purus. Suspendisse
            condimentum rutrum justo, sed tempor enim. Morbi vitae eros cursus,
            dictum massa vel, rhoncus quam. Fusce nibh nisi, eleifend eget
            dignissim vel, sodales nec justo. Nunc tincidunt orci ut nunc
            vulputate sagittis. Cras elit erat, dapibus eget mollis sed,
            fringilla a sapien. Integer pulvinar eleifend ex, quis facilisis dui
            lacinia facilisis. Suspendisse quis erat id elit vehicula lacinia
            sollicitudin id elit. Ut nec lobortis sem, in ornare sapien. Sed
            sodales, odio luctus vulputate tempor, libero magna tempor arcu,
            quis tincidunt arcu justo congue tortor. Suspendisse quis tortor
            rhoncus mi cursus tincidunt. Aliquam a dolor lorem. Aenean
            ullamcorper mattis lorem sit amet aliquet. In dignissim metus sit
            amet justo porta commodo. Integer sit amet leo lectus. Quisque
            iaculis odio in tellus porttitor, ac finibus risus sollicitudin.
            Donec aliquet, quam nec consectetur consectetur, tortor tellus
            pulvinar odio, at aliquet dui sem quis erat. Proin est tortor,
            placerat vitae justo vitae, congue molestie neque. Vestibulum at
            sapien et turpis efficitur ultrices. Vivamus at eros a mi porttitor
            tristique ut eu urna. Aenean dapibus enim eu venenatis porttitor.
            Sed erat arcu, tincidunt et imperdiet sed, pellentesque at risus.
            Duis semper scelerisque justo non egestas. Suspendisse vehicula
            nulla sit amet lorem laoreet, consequat mollis odio fringilla.
          </div>
          <div className="main-art">
            <Recursioncircle text={value} />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <h5>Branch Length</h5>
            <div class="brancheditor">
              50
              <PrettoSlider
                min={50}
                max={200}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
                onChange={handleChange}
              />
              100
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="header">
    //   <h2 className="header-title">Recursive Tree</h2>
    // </div>
    // <div className="drawfromTemplateArea">
    //   <div className="box-1">
    //     <b>Description</b>
    //     <br />
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
    //     doloremque quis a atque quidem esse excepturi, architecto amet
    //     pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
    //     repudiandae eligendi impedit beatae! Lorem ipsum dolor sit amet
    //     consectetur adipisicing elit. Rem doloremque quis a atque quidem esse
    //     excepturi, architecto amet pariatur impedit. Fuga perspiciatis
    //     pariatur temporibus veniam. Quod repudiandae eligendi impedit beatae!
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
    //     doloremque quis a atque quidem esse excepturi, architecto amet
    //     pariatur impedit. Fuga perspiciatis pariatur temporibus veniam. Quod
    //     repudiandae eligendi impedit beatae! Lorem ipsum dolor sit amet
    //     consectetur adipisicing elit. Rem doloremque quis a atque quidem esse
    //     excepturi, architecto amet pariatur impedit. Fuga perspiciatis
    //     pariatur temporibus veniam. Quod repudiandae eligendi impedit beatae!
    //   </div>
    //   <div className="box-2">
    //     {" "}
    //     <Recursivetree />{" "}
    //   </div>
    //   <div className="box-3">
    //     <h1>Sliders</h1>
    //     <h2>Button-1</h2>
    //     <h2>Button-2</h2>
    //     <h2>Button-3</h2>
    //     <h2>Button-4</h2>
    //     <h2>Button-5</h2>
    //     <h2>Button-6</h2>
    //   </div>
    // </div>
  );
}
