function handleToggleSection(section, setOpenSection) {
    setOpenSection((prev) => ({
        ...prev,
        [section]: !prev[section]
    }));
}

export default handleToggleSection
