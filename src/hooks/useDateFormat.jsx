import { useState, useEffect } from 'react';

const useFormatDate = (dateString) => {
  const [formatedDate, setFormatedDate] = useState('');

  useEffect(() => {
    let date = new Date(dateString);
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);

    setFormatedDate(`${year}-${month}-${day}`);
  }, [dateString]);

  return formatedDate;
};

export default useFormatDate;
