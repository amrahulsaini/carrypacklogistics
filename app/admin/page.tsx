'use client';

import { useState, useEffect } from 'react';
import { Lock, Eye, RefreshCw, Calendar, Mail, Phone, MapPin, MessageSquare, CheckCircle, Clock, AlertCircle, Download, FileText, Table2, FileSpreadsheet, Trash2 } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';

interface Lead {
  id: number;
  name: string;
  contact_number: string;
  email: string;
  moving_from: string;
  moving_to: string;
  moving_date: string;
  message: string | null;
  created_at: string;
  status: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleLogin = () => {
    if (password.trim()) {
      fetchLeads(password);
    }
  };

  const fetchLeads = async (pwd: string) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/admin/leads', {
        headers: {
          'Authorization': `Bearer ${pwd}`,
        },
      });

      if (response.status === 401) {
        const data = await response.json();
        setError(`Invalid password. Expected: "${process.env.NEXT_PUBLIC_DEBUG ? 'Check server logs' : 'Contact admin'}"`);
        setIsAuthenticated(false);
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(`Error ${response.status}: ${data.error || 'Failed to fetch leads'}`);
      }

      const data = await response.json();
      setLeads(data.leads);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || 'Failed to load leads');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (leadId: number, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${password}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const data = await response.json();
      
      // Show success notification
      if (newStatus !== 'new') {
        showToast(`✅ Status updated & email sent to customer!`, 'success');
      } else {
        showToast(`✅ Status updated successfully!`, 'success');
      }

      // Refresh leads
      fetchLeads(password);
    } catch (err: any) {
      setError(err.message || 'Failed to update status');
      showToast(`❌ ${err.message || 'Failed to update status'}`, 'error');
    }
  };

  const handleDeleteLead = async (leadId: number, leadName: string) => {
    if (!confirm(`Are you sure you want to permanently delete lead from ${leadName}?`)) {
      return;
    }

    try {
      const response = await fetch('/api/admin/leads', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${password}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: leadId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete lead');
      }

      showToast('✅ Lead deleted successfully!', 'success');
      fetchLeads(password);
    } catch (err: any) {
      setError(err.message || 'Failed to delete lead');
      showToast(`❌ ${err.message || 'Failed to delete lead'}`, 'error');
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.text('Carry Pack Logistics - Leads Report', 14, 20);
    
    doc.setFontSize(11);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 28);
    doc.text(`Total Leads: ${leads.length}`, 14, 34);
    
    // Table
    const tableData = leads.map(lead => [
      lead.name,
      lead.contact_number,
      lead.email,
      `${lead.moving_from}`,
      `${lead.moving_to}`,
      new Date(lead.moving_date).toLocaleDateString(),
      lead.status,
      new Date(lead.created_at).toLocaleDateString()
    ]);
    
    autoTable(doc, {
      startY: 40,
      head: [['Name', 'Phone', 'Email', 'From', 'To', 'Moving Date', 'Status', 'Created']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 7, cellPadding: 2 },
      headStyles: { fillColor: [37, 99, 235], fontSize: 8 },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 20 },
        2: { cellWidth: 30 },
        3: { cellWidth: 25 },
        4: { cellWidth: 25 },
        5: { cellWidth: 20 },
        6: { cellWidth: 18 },
        7: { cellWidth: 20 }
      }
    });
    
    doc.save(`leads-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const exportToExcel = () => {
    const worksheetData = leads.map(lead => ({
      'Name': lead.name,
      'Contact Number': lead.contact_number,
      'Email': lead.email,
      'Moving From': lead.moving_from,
      'Moving To': lead.moving_to,
      'Moving Date': new Date(lead.moving_date).toLocaleDateString(),
      'Message': lead.message || '',
      'Status': lead.status,
      'Created At': new Date(lead.created_at).toLocaleString()
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');
    
    // Set column widths
    worksheet['!cols'] = [
      { wch: 20 }, { wch: 15 }, { wch: 25 }, { wch: 20 }, 
      { wch: 20 }, { wch: 12 }, { wch: 30 }, { wch: 12 }, { wch: 20 }
    ];
    
    XLSX.writeFile(workbook, `leads-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const exportToCSV = () => {
    const csvData = leads.map(lead => ({
      'Name': lead.name,
      'Contact Number': lead.contact_number,
      'Email': lead.email,
      'Moving From': lead.moving_from,
      'Moving To': lead.moving_to,
      'Moving Date': new Date(lead.moving_date).toLocaleDateString(),
      'Message': lead.message || '',
      'Status': lead.status,
      'Created At': new Date(lead.created_at).toLocaleString()
    }));
    
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const getStatusBadge = (status: string) => {
    const statusColors: { [key: string]: string } = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      quoted: 'bg-purple-100 text-purple-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status] || statusColors.new}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Lock size={32} className="text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Admin Access</h2>
              <p className="text-gray-600 mt-2">Enter password to view leads</p>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Enter admin password"
                className="input-field"
                autoFocus
              />
              <button
                onClick={handleLogin}
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast Notification */}
        {toast && (
          <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-slideIn ${
            toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {toast.type === 'success' ? (
              <CheckCircle size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
            <span className="font-medium">{toast.message}</span>
            <button
              onClick={() => setToast(null)}
              className="ml-4 hover:opacity-75"
            >
              ✕
            </button>
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
              <p className="text-gray-600 mt-1">Total Leads: {leads.length}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={exportToPDF}
                className="btn-secondary inline-flex items-center text-sm"
                title="Export to PDF"
              >
                <FileText size={18} className="mr-2" />
                PDF
              </button>
              <button
                onClick={exportToExcel}
                className="btn-secondary inline-flex items-center text-sm"
                title="Export to Excel"
              >
                <FileSpreadsheet size={18} className="mr-2" />
                Excel
              </button>
              <button
                onClick={exportToCSV}
                className="btn-secondary inline-flex items-center text-sm"
                title="Export to CSV"
              >
                <Table2 size={18} className="mr-2" />
                CSV
              </button>
              <button
                onClick={() => fetchLeads(password)}
                className="btn-primary inline-flex items-center text-sm"
              >
                <RefreshCw size={18} className="mr-2" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-blue-600">
              {leads.filter(l => l.status === 'new').length}
            </div>
            <div className="text-sm text-gray-600">New Leads</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-yellow-600">
              {leads.filter(l => l.status === 'contacted').length}
            </div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-green-600">
              {leads.filter(l => l.status === 'confirmed').length}
            </div>
            <div className="text-sm text-gray-600">Confirmed</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl font-bold text-gray-600">
              {leads.filter(l => l.status === 'completed').length}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>

        {/* Leads List */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Moving Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.contact_number}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{lead.moving_from}</div>
                      <div className="text-sm text-gray-500">→ {lead.moving_to}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(lead.moving_date).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        Created: {new Date(lead.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(lead.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-blue-600 hover:text-blue-800"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusUpdate(lead.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <button
                          onClick={() => handleDeleteLead(lead.id, lead.name)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete Lead"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Detail Modal */}
        {selectedLead && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Lead Details</h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Customer Name</div>
                    <div className="font-semibold">{selectedLead.name}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Contact Number</div>
                    <div className="font-semibold">{selectedLead.contact_number}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold">{selectedLead.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Route</div>
                    <div className="font-semibold">
                      {selectedLead.moving_from} → {selectedLead.moving_to}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar size={16} className="text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Moving Date</div>
                    <div className="font-semibold">
                      {new Date(selectedLead.moving_date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                {selectedLead.message && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Additional Message</div>
                      <div className="font-semibold">{selectedLead.message}</div>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    Received: {new Date(selectedLead.created_at).toLocaleString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
