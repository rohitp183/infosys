const pool = require('./../config/db');

//POST 
exports.searchCases = async (req, res, next) => {
    try {
        const { role, accessControlType, caseCategoty, caseSubCategory } = req.body;

        let query = "SELECT * FROM cases  WHERE 1=1";
        let params = [];

        if(role) {
            query += " AND role = ?";
            params.push(role);
        }
        if(accessControlType) {
            query += " AND access_control_type = ?";
            params.push(accessControlType);
        }
        if(caseCategoty) {
            query += " AND case_category = ?";
            params.push(caseCategoty);
        }
        if(caseSubCategory) {
            query += " AND case_sub_category = ?";
            params.push(caseSubCategory);
        }

        console.log(query)
        const [rows] = await pool.query(query, params);
        res.status(200).json({
            message: "Cases fetched successfully",
            data: rows,
            status: "success"
        });
    } catch (error) {
        next(error);
    }
}

//GET
exports.getRoles  = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT DISTINCT role FROM cases");
        res.status(200)
        res.json({
            message: "Roles fetched successfully",
            data: rows.map(row => row.role),
            status: "success"
        });
    } catch (error) {
        next(error);
    }
}

//GET
exports.getAccessControlTypes  = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT DISTINCT access_control_type FROM cases");
        res.status(200)
        res.json({
            message: "Access Control Types fetched successfully",
            data: rows.map(row => row.access_control_type),
            status: "success"
        });
    } catch (error) {
        next(error);
    } 
}

//GET
exports.getCaseCategories  = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT DISTINCT case_category FROM cases");
        res.status(200)
        res.json({
            message: "Case Categories fetched successfully",
            data: rows.map(row => row.case_category),
            status: "success"
        });
    } catch (error) {
        next(error);
    }
}
//GET
exports.getCaseSubCategories  = async (req, res, next) => {
    try {
        const [rows] = await pool.query("SELECT DISTINCT case_sub_category FROM cases");
        res.status(200)
        res.json({
            message: "Case Sub Categories fetched successfully",
            data: rows.map(row => row.case_sub_category),
            status: "success"
        });
    } catch (error) {
        next(error);
    }
}
