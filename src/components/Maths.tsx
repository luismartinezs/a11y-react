import React from "react";

const Maths = () => {
  return (
    <p>
      The infinite sum
      <math display="block">
        <mrow>
          <munderover>
            <mo>∑</mo>
            <mrow>
              <mi>n</mi>
              <mo>=</mo>
              <mn>1</mn>
            </mrow>
            <mrow>
              <mo>+</mo>
              <mn>∞</mn>
            </mrow>
          </munderover>
          <mfrac>
            <mn>1</mn>
            <msup>
              <mi>n</mi>
              <mn>2</mn>
            </msup>
          </mfrac>
        </mrow>
      </math>
      is equal to the real number
      <math display="inline">
        <mfrac>
          <msup>
            <mi>π</mi>
            <mn>2</mn>
          </msup>
          <mn>6</mn>
        </mfrac>
      </math>
      .
    </p>
  );
};

export default Maths;
