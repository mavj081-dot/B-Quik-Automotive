import React from 'react';
import { BusinessData, LoadingState } from '../types';

interface ContactSectionProps {
    data: BusinessData | null;
    status: LoadingState;
    onRefresh: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, status, onRefresh }) => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#051329] pt-24 pb-12 overflow-hidden text-white border-t border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-orange blur-[180px] opacity-10 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black to-transparent opacity-80 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Main CTA / Contact Card - Top Section */}
                <div className="flex flex-col lg:flex-row gap-16 mb-24 border-b border-white/10 pb-20">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 mb-6">
                            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Get in Touch</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            Ready to <span className="text-brand-orange">Tune Up?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                            Visit B-Quik Automotive for premium diagnostics and repair. We treat every vehicle with the precision and care it deserves.
                        </p>

                        {status === LoadingState.LOADING && (
                            <div className="flex space-x-2 animate-pulse mb-8">
                                <div className="h-12 w-40 bg-white/10 rounded-full"></div>
                            </div>
                        )}

                        {status === LoadingState.ERROR && (
                            <div className="text-red-400 mb-6 text-sm">
                                Unable to load live contact data. <button onClick={onRefresh} className="underline hover:text-white">Retry</button>
                            </div>
                        )}

                        {data && (
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={`tel:${data.phoneNumber?.replace(/\s/g, '')}`}
                                    className="group inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-[0_10px_30px_rgba(249,76,16,0.3)] hover:shadow-[0_10px_40px_rgba(249,76,16,0.5)] transform hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    {data.phoneNumber || "Call Now"}
                                </a>
                                <a
                                    href={data.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex justify-center items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Get Directions
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Address / Info Card - Floats nicely */}
                    <div className="lg:w-1/2 flex items-center lg:justify-end">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/20 transition-all duration-700"></div>

                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-brand-orange"></span>
                                Workshop Details
                            </h3>

                            {data ? (
                                <div className="space-y-6">
                                    <div className="group/item">
                                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover/item:text-brand-orange transition-colors">Location</span>
                                        <p className="text-gray-200 text-lg font-light leading-relaxed">{data.address}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="group/item">
                                            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-hover/item:text-brand-orange transition-colors">Hours</span>
                                            <p className="text-gray-200 text-sm flex items-center gap-2 font-medium">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                                Mon - Sat<br />9:00 AM - 8:00 PM
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-pulse opacity-50">
                                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="font-display text-3xl font-bold italic mb-6 text-white tracking-tighter">B-QUIK<span className="text-brand-orange">.</span></div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 pr-4">
                            Professional automotive care you can trust. State-of-the-art diagnostics and experienced technicians dedicated to your engine's health.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders with Hover Effects */}
                            {[
                                { name: 'Facebook', path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                                { name: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                            ].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                                    <span className="sr-only">{icon.name}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={icon.path} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest border-b border-white/10 pb-2 inline-block">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {["Engine Diagnostics", "Wheel Alignment", "Periodic Maintenance", "AC Repair", "Battery Service"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-brand-orange transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-brand-orange transition-colors"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest border-b border-white/10 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                            <li><a href="#bento" className="hover:text-brand-orange transition-colors">Our Capabilities</a></li>
                            <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest border-b border-white/10 pb-2 inline-block">Contact Info</h4>
                        <div className="space-y-6 text-sm text-gray-400">
                            <p className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <span className="mt-1">Plot No: 23, Riddhi Siddhi Society, Besides Leo School, Udhna, Surat</span>
                            </p>
                            <p className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <a href="tel:+919737710111" className="mt-1 hover:text-white transition-colors">+91 97377 10111</a>
                            </p>
                            <p className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <a href="mailto:info@b-quik.com" className="mt-1 hover:text-white transition-colors">info@b-quik.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs tracking-wider">
                        &copy; {year} B-Quik Automotive. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-600 font-medium tracking-wide">
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
