Swal.fire({
    title: 'Enter a character',
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off',
        autocorrect: 'off',
        placeholder: 'Type a letter...',
    },
    confirmButtonText: 'Check',
}).then((result) => {
    if (result.value) {
        const character = result.value;
        if ('aeiouAEIOU'.includes(character)) {
            Swal.fire('True', `"${character}" is a vowel!`, 'success');
        } else {
            Swal.fire('False', `"${character}" is not a vowel.`, 'error');
        }
    } else {
        Swal.fire('Oops!', 'You didn\'t enter any character.', 'info');
    }
});
