document.addEventListener('DOMContentLoaded', () => {
    console.log('Quest Log JS Loaded');

    const questInput = document.getElementById('questInput');
    const addQuestBtn = document.getElementById('addQuestBtn');
    const questList = document.getElementById('questList');
    const feedback = document.getElementById('feedback');

    function setFeedback(msg) {
        feedback.textContent = msg;
    }

    function questExists(text) {
        const wanted = text.toLowerCase();
        for (const li of questList.querySelectorAll('li')) {
            if (li.textContent.toLowerCase() === wanted) return true;
        }
        return false;
    }

    addQuestBtn.addEventListener('click', () => {
        const rawText = questInput.value;
        const questText = rawText.trim();

        if (questText === '') {
            console.log('No quest entered.');
            questInput.focus();
            return;
        }

        if (questExists(questText)) {
            setFeedback('That quest already exist.');
            questInput.select();
            return;
        }

        const li = document.createElement('li');
        li.textContent = questText;
        questList.appendChild(li);

        setFeedback('Quest added!');
        questInput.value = '';
        questInput.focus()
    });

    questInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addQuestBtn.click();
        }
    });
})