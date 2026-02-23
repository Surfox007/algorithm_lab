export const ok = (res, data, message = 'OK', status = 200) =>
  res.status(status).json({ success: true, message, data });

export const fail = (res, message = 'Error', status = 500, errors = null) =>
  res.status(status).json({ success: false, message, errors });
