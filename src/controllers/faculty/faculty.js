import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

const facultyListPage = (req, res) => {
    const sortBy = req.query.sortBy || 'department';
    const facultyMembers = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Members',
        facultyMembers,
        sortBy,
    });
};

const facultyDetailPage = (req, res) => {
    const facultyId = req.params.facultyID;
    const facultyMember = getFacultyById(facultyId);
    if (!facultyMember) {
        return res.status(404).render('errors/404', {
            title: 'Faculty Member Not Found',
            message: 'The requested faculty member does not exist.',
        });
    }   
    res.render('faculty/detail', {
        title: facultyMember.name,
        facultyMember,
    });
};

export { facultyListPage, facultyDetailPage };