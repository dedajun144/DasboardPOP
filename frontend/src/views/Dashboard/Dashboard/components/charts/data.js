import React, { useEffect, useState } from "react";

const data = ({ dataSb }) => {
  const dataSb = [];
  const getDataSbackbone = async () => {
    try {
      const good = await axios.get(`${BASE_API_URL}/pm/count/sbackbonegood`);

      dataSb.push(good.data);

      const warning = await axios.get(`${BASE_API_URL}/pm/count/sbackbonewarning`);

      dataSb.push(warning.data);

      const danger = await axios.get(`${BASE_API_URL}/pm/count/sbackbonedanger`);

      dataSb.push(danger.data);

      setDataChart(dataSb);
      console.log(dataSb);
    } catch (error) {
      console.error("Error get count", error);
    }
  };

  useEffect(() => {
    getDataSbackbone();
  }, []);

  return dataSb;
};

export default data;
