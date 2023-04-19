var sqlMap = {
    user: {
        add: 'insert into user (name, email, password) values (?,?,?)',
        select: 'select * from user'
    }
}

module.exports = sqlMap;