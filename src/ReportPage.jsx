import { useState } from 'react';
import jsPDF from 'jspdf';
import 'tailwindcss/tailwind.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from './Components/Providers/UseAuth';

const ReportPage = () => {
    const { user } = useAuth();
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [reportData, setReportData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchReportData(user.email, fromDate, toDate);
    };

    const fetchReportData = (email, from, to) => {
        // Format dates to YYYY-MM-DD
        const formattedFromDate = from ? from.toISOString().split('T')[0] : null;
        const formattedToDate = to ? to.toISOString().split('T')[0] : null;

        // Fetch data from the server
        fetch(`http://localhost:5000/product?email=${email}&from=${formattedFromDate}&to=${formattedToDate}`)
            .then((res) => res.json())
            .then((data) => {
                setReportData(data); 
            })
            .catch((error) => {
                console.error('Error fetching report data:', error);
            });
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Report', 10, 10);
        doc.setFontSize(12);

        // Adding report data to the PDF
        reportData.forEach((item, index) => {
            doc.text(`Email: ${item.Email} Category: ${item.category} Cost: ${item.cost} Date: ${item.date}`, 10, 20 + index * 10);
        });

        doc.save('report.pdf');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            {/* <h1 className="text-3xl font-semibold mb-6">Generate Report by {user.displayName}</h1> */}
            <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">From Date</label>
                    <DatePicker
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        className="input input-bordered w-full p-2"
                        placeholderText="Select From Date"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">To Date</label>
                    <DatePicker
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        className="input input-bordered w-full p-2"
                        placeholderText="Select To Date"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Filter
                    </button>
                </div>
            </form>

            {/* Display filtered report data */}
            {reportData.length > 0 && (
                <div className="w-full mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Filtered Data</h2>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Cost</th>
                                <th className="px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((item) => (
                                <tr key={item._id}>
                                    <td className="border px-4 py-2">{item.Email}</td>
                                    <td className="border px-4 py-2">{item.category}</td>
                                    <td className="border px-4 py-2">{item.cost}</td>
                                    <td className="border px-4 py-2">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded"
                        onClick={generatePDF}
                    >
                        Generate PDF
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReportPage;
