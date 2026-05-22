function showSection(sectionId) {
    const sections = ["popularno", "filmovi", "serije"];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (id === sectionId) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}