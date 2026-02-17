import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

const facultyListPage = async (req, res) => {
    const sortBy = req.query.sortBy || 'department';
    const facultyMembers = await getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Members',
        facultyMembers,
        sortBy,
    });
};

const facultyDetailPage = async (req, res) => {
    const facultySlug = req.params.slugId;
    const facultyMember = await getFacultyBySlug(facultySlug);
    if (Object.keys(facultyMember).length === 0) {
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