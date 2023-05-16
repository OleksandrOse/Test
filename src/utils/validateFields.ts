export const validateFields = (text: string, field: string) => {
  //eslint-disable-next-line
  let pattern = /^[\+]{0,1}380([0-9]{9})$/;

  if (field === 'name') {
    //eslint-disable-next-line
    pattern = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,60}$/;
  }

  if (field === 'email') {
    // eslint-disable-next-line max-len
    pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  return !pattern.test(text);
};
