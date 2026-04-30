import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, PlusCircle, MapPin, Briefcase, RefreshCcw, Edit3, X, AlertCircle } from 'lucide-react';

const Admin = () => {
  // Use the env variable and clean any trailing slashes
  const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, "");
  // Since we used app.use('/api/jobs'), our full endpoint is:
  const JOBS_URL = `${API_BASE}/jobs`;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '', department: '', type: 'Full-Time', location: '', desc: ''
  });

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(JOBS_URL);
      setJobs(response.data);
    } catch (error) {
      setErrorMsg("Connection Error: Server is not responding.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  const handleEditClick = (job) => {
    setEditingId(job._id);
    setFormData({
      title: job.title,
      department: job.department,
      type: job.type,
      location: job.location,
      desc: job.desc
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', department: '', type: 'Full-Time', location: '', desc: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);

    // Construct URL carefully
    const finalUrl = editingId ? `${JOBS_URL}/${editingId}` : JOBS_URL;

    try {
      if (editingId) {
        await axios.put(finalUrl, formData);
        alert('Position Updated!');
      } else {
        await axios.post(finalUrl, formData);
        alert('Job Published!');
      }
      cancelEdit();
      fetchJobs();
    } catch (error) {
      const status = error.response?.status || "Network Error";
      const detail = error.response?.data?.message || error.message;
      setErrorMsg(`Action Failed (${status}): ${detail}`);
    }
  };

  const deleteJob = async (id) => {
    if (!window.confirm("Delete this position?")) return;
    try {
      await axios.delete(`${JOBS_URL}/${id}`);
      fetchJobs();
    } catch (error) {
      alert("Delete failed.");
    }
  };

  return (
    <div className="bg-[#05070a] min-h-screen text-slate-300 p-6 pt-32 font-sans">
      <div className="max-w-7xl mx-auto">
        {errorMsg && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-2xl flex items-center gap-3 text-red-500">
            <AlertCircle size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">{errorMsg}</span>
          </div>
        )}

        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl text-white font-black uppercase tracking-tighter leading-none">
            {editingId ? 'Update' : 'Recruitment'} <span className="text-blue-600 italic font-serif">Console.</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className={`p-8 rounded-[2.5rem] border transition-all sticky top-32 ${editingId ? 'border-orange-500/40 bg-orange-500/5' : 'border-slate-800 bg-slate-900/20'}`}>
              <h2 className="text-white font-black uppercase mb-8 flex items-center gap-3">
                {editingId ? <Edit3 className="text-orange-500" /> : <PlusCircle className="text-blue-500" />} 
                {editingId ? 'Edit Mode' : 'New Posting'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-black/40 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-blue-600" placeholder="Job Title" />
                <input required value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full bg-black/40 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-blue-600" placeholder="Department" />
                <div className="grid grid-cols-2 gap-4">
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-black/40 border border-slate-800 rounded-2xl p-4 text-white outline-none">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Remote</option>
                    <option>Contract</option>
                  </select>
                  <input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-black/40 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-blue-600" placeholder="Location" />
                </div>
                <textarea required rows="4" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} className="w-full bg-black/40 border border-slate-800 rounded-2xl p-4 text-white outline-none resize-none" placeholder="Description"></textarea>
                <button type="submit" className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${editingId ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600'}`}>
                  {editingId ? 'Confirm Update' : 'Publish to Careers'}
                </button>
                {editingId && (
                  <button type="button" onClick={cancelEdit} className="w-full text-[10px] font-bold text-slate-500 uppercase mt-2">Cancel Edit</button>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job._id} className={`p-8 border rounded-[2rem] transition-all flex flex-col md:flex-row justify-between items-center gap-6 ${editingId === job._id ? 'border-orange-500/50 bg-orange-500/5' : 'border-slate-900 bg-slate-900/10'}`}>
                  <div className="flex gap-6 items-center w-full">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center font-black text-xl">{job.title.charAt(0)}</div>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase">{job.title}</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{job.location} • {job.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button onClick={() => handleEditClick(job)} className="p-4 bg-blue-500/10 text-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white"><Edit3 size={18}/></button>
                    <button onClick={() => deleteJob(job._id)} className="p-4 bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;