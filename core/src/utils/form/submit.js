// @flow

export const onSubmitHandler = async (
  values: any,
  successCallback: any,
  errorCallback: any,
  onSubmit: any,
  onSuccess: any,
  onError: any
) => {
  try {
    try {
      const submitResult = await onSubmit(values);
      successCallback();
      onSuccess(submitResult);
    } catch (err) {
      onError(errorCallback, err);
    }
  } catch (err) {
    onError(errorCallback, err);
  }
};
