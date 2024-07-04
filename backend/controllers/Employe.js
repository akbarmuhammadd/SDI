import Employe from "../models/EmployeModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getEmployes = async(req, res) =>{
   try {
    let response;
    if(req.role === "admin"){    
        response = await Employe.findAll({
            attributes:['npp', 'npwp', 'awal_masuk', 'nama', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs'],
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
    }else{
        response = await Employe.findAll({
            attributes:['npp', 'npwp', 'awal_masuk', 'nama', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs'],
            where:{
                userId: req.userId
            },
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
    }
    res.status(200).json(response);
   }catch (error) {
    res.status(500).json({msg: error.message})
   }
}

export const getEmployeById = async(req, res) =>{
    try {
        const employe = await Employe.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!user) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Employe.findOne({
                where:{
                    id: employe.id
                },
                include:[{
                    model: User,
                }]
            });
        }else{
            respone = await Employe.findOne({
                attributes:['npp', 'npwp', 'awal_masuk', 'nama', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs'],
                where:{
                    [Op.and]:[{id: employe.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createEmploye = async(req, res) =>{
    const {npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs} = req.body
    try {
        await Employe.create({
            npp: npp,
            npwp: npwp,
            awal_masuk: awal_masuk,
            nama: nama,
            email: email,
            jenis_kelamin: jenis_kelamin,
            tanggal_lahir: tanggal_lahir,
            profesi: profesi,
            str: str,
            sip: sip,
            alamat: alamat,
            no_hp: no_hp,
            status_nikah: status_nikah,
            pendidikan: pendidikan,
            tipe_bpjs: tipe_bpjs,
            userId: req.userId
        }); 
        res.status(201).json({msg: "Employe created successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateEmploye = async(req, res) =>{
    try {
        const employe = await Employe.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!employe) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs} = req.body;
        if(req.role === "admin"){
            await Employe.update({npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs},{
                where:{
                    id: employe.id
                }
            });
        }else{
            if(req.userId !== employe.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Employe.update({npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs},{
                where:{
                    [Op.and]:[{id: employe.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Employe update successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteEmploye = async(req, res) =>{
    try {
    const employe = await Employe.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!employe) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs} = req.body;
    if(req.role === "admin"){
        await Employe.destroy({npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs},{
            where:{
                id: employe.id
            }
        });
    }else{
        if(req.userId !== employe.userId) return res.status(403).json({msg: "Akses Terlarang"});
        await Employe.destroy({npp, npwp, awal_masuk, nama, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs},{
            where:{
                [Op.and]:[{id: employe.id}, {userId: req.userId}]
            }
        });
    }
    res.status(200).json({msg: "Employe delete successfully"});
} catch (error) {
    res.status(500).json({msg: error.message});
}
}