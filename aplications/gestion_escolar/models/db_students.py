db.define_table('student',
                Field('name', 'string', requires=IS_NOT_EMPTY()),
                Field('last_name', 'string', requires=IS_NOT_EMPTY()),
                Field('email', 'string', requires=[IS_EMAIL(), IS_NOT_IN_DB(db, 'estudiante.email')]),
                Field('birth_date', 'date', requires=IS_DATE()))

