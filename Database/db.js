const connection = require('./dbConfig');

class DabRequete {
  static getAll(cb) {
    connection.query('select * from T_client_cli', (err, rows) => {
      if (err) throw err;
      cb(rows);
    });
  }

  static insertClient(content1, content2, cb) {
    connection.query('INSERT INTO `T_client_cli` (`cli_id`, `cli_name`, `cli_description`, `cli_creation`, `cli_update`) VALUES(?, ?,?, ?, ?)', [null, content1, content2, new Date().toLocaleString(), new Date().toLocaleString()], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

  static updateClientDesc(content1, content2, cb) {
    connection.query('UPDATE `T_client_cli` SET `cli_description` = ? WHERE `cli_id` = ?', [content2, content1], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

  static updateClientAll(content1, content2, content3, cb) {
    connection.query('UPDATE `T_client_cli` SET  cli_name =?,cli_description = ? WHERE  `cli_id` = ?', [content2, content3, content1], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

  static updateClientName(content1, content2, cb) {
    connection.query('UPDATE `T_client_cli` SET `cli_name` = ? WHERE `cli_id` = ?', [content2, content1], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

  static deleteuser(content1, cb) {
    connection.query('Delete from T_client_cli where cli_id= ?', [content1], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
}
module.exports = DabRequete;
