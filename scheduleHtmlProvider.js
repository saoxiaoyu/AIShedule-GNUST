async function scheduleHtmlProvider() {
    await loadTool('AIScheduleTools');
    await AIScheduleAlert("请点击最近使用-教学安排，然后点击导入课表");
    return 'do not continue';
    
}
