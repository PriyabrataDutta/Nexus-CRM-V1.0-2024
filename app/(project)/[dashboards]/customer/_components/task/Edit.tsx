function Edit(id: number, rows: any, setData: any, setAddtask: any) {
  const update = rows.find((elem: any) => elem.id === id);
  if (update) {
    setAddtask({ addmode: true, editmode: id });
    setData({
      ...update,
    });
  }
}
export default Edit;
