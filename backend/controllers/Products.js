import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getProducts = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes:['uuid','npp', 'npwp', 'awal_masuk', 'status_pegawai', 'name', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs', 'no_bpjs'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Product.findAll({
                attributes:['uuid','npp', 'npwp', 'awal_masuk', 'status_pegawai', 'name', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs', 'no_bpjs'],
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

export const getProductById = async(req, res) =>{
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Product.findOne({
                attributes:['uuid','npp', 'npwp', 'awal_masuk', 'status_pegawai', 'name', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs', 'no_bpjs'],
                where:{
                    id: product.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            respone = await Product.findOne({
                attributes:['uuid','npp', 'npwp', 'awal_masuk', 'status_pegawai', 'name', 'email', 'jenis_kelamin', 'tanggal_lahir', 'profesi', 'str', 'sip', 'alamat', 'no_hp', 'status_nikah', 'pendidikan', 'tipe_bpjs', 'no_bpjs'],
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProduct = async(req, res) =>{
    const {npp, npwp, awal_masuk, status_pegawai, name, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs, no_bpjs} = req.body;
    try {
        await Product.create({
            npp: npp,
            npwp: npwp,
            awal_masuk: awal_masuk,
            status_pegawai: status_pegawai,
            name: name,
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
            no_bpjs: no_bpjs,           
            userId: req.userId
        }); 
        res.status(201).json({msg: "Employe created successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req, res) =>{
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {npp, npwp, awal_masuk, status_pegawai, name, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs, no_bpjs} = req.body;
        if(req.role === "admin"){
            await Product.update({npp, npwp, awal_masuk, status_pegawai, name, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs, no_bpjs},{
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Product.update({npp, npwp, awal_masuk, status_pegawai, name, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs, no_bpjs},{
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product update successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProduct = async(req, res) =>{
    try {
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {npp, npwp, awal_masuk, status_pegawai, name, email, jenis_kelamin, tanggal_lahir, profesi, str, sip, alamat, no_hp, status_nikah, pendidikan, tipe_bpjs, no_bpjs} = req.body;
        if(req.role === "admin"){
            await Product.destroy({
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Product.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product delete successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}