import React, { SetStateAction } from 'react';

type InputOnChangeHandleType = (
  callback: React.Dispatch<SetStateAction<string>>,
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

export const inputOnChangeHandle: InputOnChangeHandleType = (callback) => (e) =>
  callback(e.target.value);
