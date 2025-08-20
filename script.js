document.addEventListener('DOMContentLoaded', () => {
    console.log('Quest Log JS Loaded');

    const questInput = document.getElementById('questInput');
    const addQuestBtn = document.getElementById('addQuestBtn');
    const questList = document.getElementById('questList');

    console.log({ questInput, addQuestBtn, questList});

    addQuestBtn.addEventListener('click', () => {
        const rawText = questInput.value;
        const questText = rawText.trim();

        if (questText === '') {
            console.log('No quest entered.');
            questInput.focus();
            return;
        }

        console.log('New quest:', questText);
        questInput.value = '';
        questInput.focus()
    });

    questInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addQuestBtn.click();
        }
    })
} )