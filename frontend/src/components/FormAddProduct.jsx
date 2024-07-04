import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FormAddProduct = () => {
    const [npp, setNpp] = useState("");
    const [npwp, setNpwp] = useState("");
    const [awal_masuk, setAwal_masuk] = useState("");
    const [status_pegawai, setStatus_pegawai] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [jenis_kelamin, setJenis_kelamin] = useState("");
    const [tanggal_lahir, setTanggal_lahir] = useState("");
    const [profesi, setProfesi] = useState("");
    const [str, setStr] = useState("");
    const [sip, setSip] = useState("");
    const [alamat, setAlamat] = useState("");
    const [no_hp, setNo_hp] = useState("");
    const [status_nikah, setStatus_nikah] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [tipe_bpjs, setTipe_bpjs] = useState("");
    const [no_bpjs, setNo__bpjs] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/products',{
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
                no_bpjs: no_bpjs
            });
            navigate("/products");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    
  return (
    <div>
        <h1 className="title">Pegawai</h1>
        <h2 className="subtitle">Tambah Pegawai</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveProduct}>
                    <p className="has-text-centered">{msg}</p>
                    <div className="field">
                        <label className="label">Npp</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={npp}
                                onChange={(e) => setNpp(e.target.value)}
                                placeholder="Npp"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Npwp</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={npwp}
                                onChange={(e) => setNpwp(e.target.value)}
                                placeholder="Npwp"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">TMT Kerja</label>
                        <div className="control">
                            <input 
                                type="date" 
                                className="input" 
                                value={awal_masuk}
                                onChange={(e) => setAwal_masuk(e.target.value)}
                                placeholder="TMT Kerja"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Status Pegawai</label>
                        <div className="control">
                        <div className="select is-fullwidth">
                                <select value={status_pegawai} onChange={(e)=> setStatus_pegawai(e.target.value)}>
                                    <option value="CP">CP</option>
                                    <option value="PO">PO</option>
                                    <option value="PT">PT</option>
                                </select>
                        </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama Lengkap</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="masukan nama"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Jenis Kelamin</label>
                        <div className="control">
                        <div className="select is-fullwidth">
                                <select value={jenis_kelamin} onChange={(e)=> setJenis_kelamin(e.target.value)}>
                                    <option value="Laki-Laki">Laki - Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                        </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tanggal Lahir</label>
                        <div className="control">
                            <input 
                                type="date" 
                                className="input" 
                                value={tanggal_lahir}
                                onChange={(e) => setTanggal_lahir(e.target.value)}
                                placeholder="Tanggal Lahir"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Profesi</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={profesi}
                                onChange={(e) => setProfesi(e.target.value)}
                                placeholder="Profesi"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">STR</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={str}
                                onChange={(e) => setStr(e.target.value)}
                                placeholder="STR"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">SIP</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={sip}
                                onChange={(e) => setSip(e.target.value)}
                                placeholder="SIP"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Alamat</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                                placeholder="Alamat"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">No Hp</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={no_hp}
                                onChange={(e) => setNo_hp(e.target.value)}
                                placeholder="No Hp"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Status Nikah</label>
                        <div className="control">
                        <div className="select is-fullwidth">
                                <select value={status_nikah} onChange={(e)=> setStatus_nikah(e.target.value)}>
                                    <option value="Kawin">Kawin</option>
                                    <option value="Belum Kawin">Belum Kawin</option>
                                </select>
                        </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Pendidikan</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={pendidikan}
                                onChange={(e) => setPendidikan(e.target.value)} 
                                placeholder="Pendidikan"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tipe BPJS</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={tipe_bpjs} onChange={(e)=> setTipe_bpjs(e.target.value)}>
                                    <option value="Ketenagakerjaan">Ketenagakerjaan</option>
                                    <option value="Kesehatan">Kesehatan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">No BPJS</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={no_bpjs}
                                onChange={(e) => setNo__bpjs(e.target.value)}
                                placeholder="no bpjs"
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <div className="control">
                        <button type="submit" className="button is-success">Save</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddProduct;