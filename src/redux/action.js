export const changeCompleted = (id) => {
  return {
    payload: id,
    type: 'changeCompleted',
  }
}

export const changeImportantStatus = (data) => {
  return {
    payload: data,
    type: 'changeImportantStatus',
  }
}
