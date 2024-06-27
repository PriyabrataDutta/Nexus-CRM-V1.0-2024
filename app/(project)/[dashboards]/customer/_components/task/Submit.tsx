export const Submit = (
  setRows: any,
  addtask: any,
  rows: any,
  createData: any,
  data: any,
  setData: any,
  setAddtask: any
) => {
  const dataValues = Object.keys(data).map((key) => data[key]);

  if (addtask.editmode === undefined) {
    setRows([...rows, createData(rows.length, false, ...dataValues)]);
  } else {
    const update: any = rows.map((elem: any) => {
      if (addtask.editmode === elem.id) {
        return {
          ...elem,
          ...data,
        };
      }
      return elem;
    });

    setRows(update);
  }

  const resetData = Object.keys(data).reduce((acc: any, key) => {
    acc[key] = "";
    return acc;
  }, {});

  setData(resetData);
  setAddtask({ addmode: false, editmode: undefined });
};
