function showPopup(event, systemName, description) {
    event.stopPropagation();
    alert(systemName + "\n\n" + description);
}
