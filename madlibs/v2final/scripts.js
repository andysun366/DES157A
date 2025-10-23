(function(){
    'use strict';
    console.log("reading js");

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;
        const noun4 = document.querySelector('#noun4').value;
        const noun5 = document.querySelector('#noun5').value;

        const color1 = document.querySelector('#color1').value;

        const verb1 = document.querySelector('#verb1').value;
        const verb2 = document.querySelector('#verb2').value;
        const verb3 = document.querySelector('#verb3').value;
        const verb4 = document.querySelector('#verb4').value;
        const verb5 = document.querySelector('#verb5').value;
        const verb6 = document.querySelector('#verb6').value;

        const adjective1 = document.querySelector('#adjective1').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const adjective3 = document.querySelector('#adjective3').value;

        const creature1 = document.querySelector('#creature1').value;
        const name1 = document.querySelector('#name1').value;
        const number1 = document.querySelector('#number1').value;

        if (noun1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#noun1').focus();
            return;
        }
        else if (noun2 === '') {
            alert('You did not enter a word!');
            document.querySelector('#noun2').focus();
            return;
        }
        else if (noun3 === '') {
            alert('You did not enter a word!');
            document.querySelector('#noun3').focus();
            return;
        }
        else if (noun4 === '') {
            alert('You did not enter a word!');
            document.querySelector('#noun4').focus();
            return;
        }
        else if (noun5 === '') {
            alert('You did not enter a word!');
            document.querySelector('#noun5').focus();
            return;
        }
        else if (color1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#color1').focus();
            return;
        }
        else if (verb1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#verb1').focus();
            return;
        }
        else if (verb2 === '') {
            alert('You did not enter a word!');
            document.querySelector('#verb2').focus();
            return;
        }
        else if (verb3 === '') {
            alert('You did not enter a word!');
            document.querySelector('#verb3').focus();
            return;
        }
        else if (verb4 === '') {
            alert('You did not enter a word!');
            document.querySelector('#verb4').focus();
            return;
        }
        else if (verb5 === '') {
            alert('You did not enter a word!');
            document.querySelector('#verb5').focus();
            return;
        }
        else if (verb6 === '') {
            alert('You did not enter a word!');
            document.querySelector('#verb6').focus();
            return;
        }
        else if (adjective1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#adjective1').focus();
            return;
        }
        else if (adjective2 === '') {
            alert('You did not enter a word!');
            document.querySelector('#adjective2').focus();
            return;
        }
        else if (adjective3 === '') {
            alert('You did not enter a word!');
            document.querySelector('#adjective3').focus();
            return;
        }
        else if (creature1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#creature1').focus();
            return;
        }
        else if (name1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#name1').focus();
            return;
        }
        else if (number1 === '') {
            alert('You did not enter a word!');
            document.querySelector('#number1').focus();
            return;
        }

        const madlibText = `This morning, I woke up in a ${adjective1} ${noun1}. The sky was ${color1}, and I could hear the wind ${verb1} in the distance. I took one step, and the ground ${verb3}, pulling me into a ${adjective2} hole. I fell into ${noun2}, surrounded by broken ${noun3}. I picked up a ${adjective3} ${noun4} that began ${verb2} softly. A flash of light—then a ${creature1} appeared before me. It whispered, "Only by defeating ${name1} can this world survive." I nodded and ${verb4} beside it. We crossed ${number1} mountains and rivers until the sky itself ${verb5}. I ${verb6} the darkness and restored the light back into the world.`;

        alert(madlibText);

        document.querySelector('#noun1').value = '';
        document.querySelector('#noun2').value = '';
        document.querySelector('#noun3').value = '';
        document.querySelector('#noun4').value = '';
        document.querySelector('#noun5').value = '';
        document.querySelector('#color1').value = '';
        document.querySelector('#verb1').value = '';
        document.querySelector('#verb2').value = '';
        document.querySelector('#verb3').value = '';
        document.querySelector('#verb4').value = '';
        document.querySelector('#verb5').value = '';
        document.querySelector('#verb6').value = '';
        document.querySelector('#adjective1').value = '';
        document.querySelector('#adjective2').value = '';
        document.querySelector('#adjective3').value = '';
        document.querySelector('#creature1').value = '';
        document.querySelector('#name1').value = '';
        document.querySelector('#number1').value = '';

        document.querySelector('#noun1').focus();
    });
})();

