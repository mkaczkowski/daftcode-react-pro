// @flow
export type FunctionType = () => void;
export type TranslateType = (value: string) => string;
export type ActionType = (payload: any) => void;
export type CallbcackActionType = ({ values: any, onSuccess: FunctionType, onError?: FunctionType }) => void;
