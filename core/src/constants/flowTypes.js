// @flow
export type FunctionType = () => void;
export type ActionType = (payload: any) => void;
export type CallbcackActionType = ({ values: any, onSuccess: FunctionType, onError?: FunctionType }) => void;
