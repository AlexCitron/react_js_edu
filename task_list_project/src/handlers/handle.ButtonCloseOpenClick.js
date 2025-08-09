function toggleSection(section, setOpenSection) {
    setOpenSection((prev) => ({
        ...prev,
        [section]: !prev[section]
    }));
}

export default toggleSection
