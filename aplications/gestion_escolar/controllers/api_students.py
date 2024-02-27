def register_student():
    from applications.gestion_escolar.modules.repository.student_repository import StudentRepository
    repository = StudentRepository(db)

    # Allow all CORS requests
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'

    # Handle CORS preflight request
    if request.env.request_method == 'OPTIONS':
        return response

    if request.vars:
        student_id = repository.add_student(request.vars)
        if student_id:
            return response.json({'success': True, 'id': student_id})
        else:
            return response.json({'success': False, 'error': 'No se pudo registrar el estudiante'})
    else:
        return response.json({'success': False, 'error': 'Datos inválidos'})
