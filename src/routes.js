import { Router } from 'express';
import { addDemoHeaders } from './middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './controllers/catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './controllers/index.js';
import { facultyListPage, facultyDetailPage } from './controllers/faculty/faculty.js';

// Create a new router instance
const router = Router();

// Add catalog-specific styles to all catalog routes
router.use('/catalog', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/main.css">');
    res.addStyle('<link rel="stylesheet" href="/css/catalog.css">');
    next();
});

router.use('/faculty', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/main.css">');
    next();
});

// Home and basic pages
router.get('/', homePage);
router.get('/about', aboutPage);

// Course catalog routes
router.get('/catalog', catalogPage);
router.get('/catalog/:slugId', courseDetailPage);

// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);

// Route to trigger a test error
router.get('/test-error', testErrorPage);

// Route for faculty list and detail pages
router.get('/faculty', facultyListPage);
router.get('/faculty/:slugId', facultyDetailPage);

// Export the router to be used in the main app
export default router;