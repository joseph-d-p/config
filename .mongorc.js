let count = 1;
let host = db.serverStatus().host;

prompt = function() {
  return `${db}@${host}  ${count++} >`;
};
