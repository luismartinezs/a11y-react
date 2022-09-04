import React, { type FC } from "react";

interface IProps {
  label: string;
  id: string;
  min?: number;
  max?: number;
  value: number;
  low?: number;
  high?: number;
  optimum?: number;
  children: React.ReactNode;
}

const ifDefined = (value: any, definedReturn: any, undefinedReturn: any) =>
  typeof value === "undefined" ? undefinedReturn : definedReturn;

const logWarn = (condition: boolean, message: string) => {
  if (condition) {
    console.warn(message);
  }
};

const logWarns = (checks: Array<[boolean, string]>) => {
  checks.forEach(([condition, message]) => logWarn(condition, message));
};

const Meter: FC<IProps> = ({
  label,
  id,
  min = 0,
  max = 1,
  value,
  low,
  high,
  optimum,
  children,
}) => {
  const _low = ifDefined(low, low, min);
  const _high = ifDefined(high, high, max);
  const _optimum = ifDefined(optimum, optimum, (max - min) / 2);

  logWarns([
    [_low < min, `low (${_low}) is less than min (${min})`],
    [_high > max, `high (${_high}) is greater than max (${max})`],
    [_optimum < min, `optimum (${_optimum}) is less than min (${min})`],
    [_optimum > max, `optimum (${_optimum}) is greater than max (${max})`],
    [_optimum > _high, `optimum (${_optimum}) is greater than high (${_high})`],
    [_optimum < _low, `optimum (${_optimum}) is less than low (${_low})`],
  ]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <meter
        id={id}
        min={min}
        max={max}
        low={_low}
        high={_high}
        optimum={_optimum}
        value={value}
      >
        {children}
      </meter>
    </>
  );
};

export default Meter;
