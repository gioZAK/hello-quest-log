document.addEventListener('DOMContentLoaded', () => {
    console.log('Quest Log JS Loaded');

    const questInput = document.getElementById('questInput');
    const addQuestBtn = document.getElementsByName('addQuestBtn');
    const questList = document.getElementById('questList');

    console.log({ questInput, addQuestBtn, questList});
} )