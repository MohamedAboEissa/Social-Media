// sidebar
let menu = Array.from(document.querySelectorAll('.sidebar .menu-item'));

// messages
let messagesNotificoations = document.querySelector('#messages-notificoations');
let messages = document.querySelector('.messages');
let message = messages.querySelectorAll('.message');
let messageSearch = document.querySelector('#message-search');

// theme
let theme = document.querySelector('#theme');
let themeModal = document.querySelector('.customize-theme');

let fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

let colorPalette = document.querySelectorAll('.choose-color span');

let Bg1 = document.querySelector('.bg-1');
let Bg2 = document.querySelector('.bg-2');
let Bg3 = document.querySelector('.bg-3');

// ========== sidebar ==================

let removeActiveItems = function() {
    menu.forEach(item => {
        item.classList.remove('active');
    })
}
menu.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveItems();
        item.classList.add('active')

        if (item.id != 'notificoations') {
            document.querySelector('.popup').style.display = 'none';
        } else {
            document.querySelector('.popup').style.display = 'block';
            document.querySelector('#notificoations .notificoations-count').style.display = 'none';
        }
    });
});


// ========== messages ==================
// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

// search chat 
messageSearch.addEventListener('keyup', searchMessage)

//hightlight messages card when messages menu item is clicked
messagesNotificoations.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotificoations.querySelector('.notificoations-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);

});


// theme/display customization

//opens modal
let openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal
let closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    };
}

//closes modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);



// ============= fonts =====================
// remove active class form span or font size selectors
let removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}



fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    });

});


// =========== change primary colors =========

// remove active class for colors
let changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    });
};


colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        // remove active class for colors
        changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});



// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color 
let changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class form the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes  for local storage
    window.location.reload();
});


Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class form the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class form the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});