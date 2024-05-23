import { pool } from "../tools/db.js";

export class PagoController {
    static getAll = async(req, res) => {
        try {
            const [result] = await pool.query("SELECT * FROM pago");
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({error: error})
        }
    }
    static getById = async(req, res) => {
        const {id} = req.params;
        try {
            const [result] = await pool.query("SELECT * FROM pago WHERE id = ? ", [id]);
            if (result.length === 0) {
                res.status(404).json({error: "Pago no encontrado"})
            } else {
                res.status(200).json(result);
            }
        } catch (error) {
            res.status(500).json({error: error})
        }
    }
    static delete = async (req, res) => {
        const {id} = req.params;
        try {
            const [result] = await pool.query("DELETE FROM `pago` WHERE id = ?", [id]);
            if (result.affectedRows === 0) {
                res.status(404).json({error: "Error al eliminar pago"})
            } else {
                res.status(200).json({respuesta: "Pago Eliminado Correctamente"});
            }
        } catch (error) {
            res.status(500).json({error: error})
        }
    }
}