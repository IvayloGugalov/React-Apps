const apiRequest = async (url = '', options = null, errMsg = null) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error('Error during API request');

  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest;