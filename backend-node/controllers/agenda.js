import {db} from "../db";

export const getAgendas = (_, res) => {
    const q = "SELECT * FROM tb_agenda ORDER BY nome";

    db.query(q, (err, data)=>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addAgenda = (req, res) => {
    const q = "INSERT INSTO tb_agenda (`nome`, `endereco`, `telefone`, `email`, `data_nasc`) VALUES(?)";

    const values = [
        req.body.nome,
        req.bodyendereco,
        req.body.telefone,
        req.body.email,
        req.body.data_nasc,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Registro criado com sucesso");

    });
};

export const updateAgenda = (req, res) => {
    const q = "UPDATE tb_agenda SET `nome` = ?, `endereco` = ?, `telefone` = ?, `email` = ?, `data_nasc` = ? WHERE `codigo` = ?";

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
        req.body.email,
        req.body.data_nasc,
    ];

    db.query(q, [...values, req.params,codigo], (err) => {
        if (err) return res.json("err");


        return res.status(200).json("Registro atualizado com sucesso")
    });
};


export const deleteAgenda = (req, res) => {
    const q = "DELETE FROM tb_agenda WHERE `codigo` = ?";

    db.query(q, [req.params.codigo], (err) => {
        if (err) return req.json(err);

        return res.status(200).json("Registro deleteado com sucesso");

    });

};

