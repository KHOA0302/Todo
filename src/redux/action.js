export const changeCompleted = (id) => {
  return {
    payload: id,
    type: 'changeCompleted',
  }
}
