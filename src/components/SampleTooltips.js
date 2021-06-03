import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

// https://github.com/atomiks/tippyjs-react

const CustomTooltip = () => {
  return <span style={{ color: "orange" }}>Colored Custom Tooltip</span>;
};

/**
 * if want to use custom component as child to Tippy, need to forward the ref of the DOM node
 */
const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Tool Tip Custom Component</div>
    </div>
  );
});

function SampleTooltips() {
  return (
    <>
      <Tippy
        content={<CustomTooltip />}
        arrow={false}
        delay={1000}
        placement="right"
      >
        <button>Hover for a tooltip</button>
      </Tippy>
      <br/>
      <br/>
      <Tippy
        content="custom tooltip component message"
        arrow={false}
        delay={1000}
        placement="right"
      >
        <CustomChild />
      </Tippy>
    </>
  );
}

export default SampleTooltips;
