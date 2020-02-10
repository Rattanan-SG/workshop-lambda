const express = require('express');
const { Role } = require('../../controllers');

const router = express.Router();

router.post('/role', Role.createRole);
router.get('/role', Role.getRole);
router.put('/role', Role.updateOrCreateRole);
router.get('/role/:id', Role.getRoleById);
router.patch('/role/:id', Role.updateRoleById);
router.delete('/role/:id', Role.deleteRoleById);

module.exports = router;
