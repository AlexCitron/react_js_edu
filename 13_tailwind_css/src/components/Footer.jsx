import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-5 px-5 text-xs bg-blue-200 max-w-2xl m-auto">
            <div className="grid grid-cols-3">
                {/* Customer Support */}
                <div>
                    <h3 className="mb-3 text-sm font-bold">
                        Customer <br /> Support
                    </h3>
                    <ul className="space-y-1">
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">FAQs</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">Shipping & Returns</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">Order Tracking</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="mb-3 text-sm font-bold">Follow Us</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">Instagram</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">Twitter</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:text-blue-900" to="#">LinkedIn</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="space-y-1">
                    <h3 className="mb-3 text-sm font-bold">Contact Us</h3>
                    <p>Email: support@yourstore.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Market Street, City, Country</p>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-7">
                <p>&copy; 2025 YourStore. All rights reserved.</p>
            </div>
        </footer>
    );
}
