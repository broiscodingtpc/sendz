// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const texts = [
        'SEND BOBS',
        'SEND VAGINE',
        'SEND VAGNE',
        'SHOW BOOBS',
        'SHOW VAGINE',
        'SHOW VAGNE',
        'SEND NUDES',
        'SHOW NUDES',
        'BOOBS PLS',
        'VAGINE PLS',
        'SEND TITS',
        'SHOW TITS',
        'BOOBS NOW',
        'VAGINE NOW',
        'SEND BOOBS',
        'SHOW BOOBS',
        'PLS SEND',
        'PLS SHOW',
        'NEED BOOBS',
        'NEED VAGINE'
    ];
    const asciiBoobs = [
        '(.)(.)',
        'ʕ •ᴥ•ʔ',
        '(. Y .)',
        '(.)( .)',
        '(. )( .)',
        '(.)(.)',
        '(.Y.)',
        '(.)(.)',
        '(.)(.)',
        '(.)(.)'
    ];
    const fontSize = 20;
    const columns = Math.floor(canvas.width / (fontSize * 6));
    const drops = [];

    for (let i = 0; i < columns * 1.5; i++) {
        let isBoobs = Math.random() < 0.12; // 12% șansă să fie boobs
        drops[i] = {
            y: Math.random() * -canvas.height,
            speed: 2 + Math.random() * 3,
            text: isBoobs ? asciiBoobs[Math.floor(Math.random() * asciiBoobs.length)] : texts[Math.floor(Math.random() * texts.length)],
            opacity: 0.5 + Math.random() * 0.5,
            x: Math.random() * canvas.width,
            isBoobs: isBoobs
        };
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < drops.length; i++) {
            const drop = drops[i];
            ctx.fillStyle = drop.isBoobs ? 'rgba(255, 0, 255, ' + drop.opacity + ')' : `rgba(0, 255, 0, ${drop.opacity})`;
            ctx.font = drop.isBoobs ? `bold ${fontSize + 6}px monospace` : `bold ${fontSize}px monospace`;
            ctx.fillText(drop.text, drop.x, drop.y);

            drop.y += drop.speed;

            if (drop.y > canvas.height) {
                drop.y = Math.random() * -100;
                drop.isBoobs = Math.random() < 0.12;
                drop.text = drop.isBoobs ? asciiBoobs[Math.floor(Math.random() * asciiBoobs.length)] : texts[Math.floor(Math.random() * texts.length)];
                drop.opacity = 0.5 + Math.random() * 0.5;
                drop.x = Math.random() * canvas.width;
                drop.speed = 2 + Math.random() * 3;
            }
        }
    }

    setInterval(draw, 20);
}

// Chat conversation
const conversation = [
    {
        sender: 'indian',
        content: `Hello beautiful lady!
I am Rajesh from India.
You are looking very nice in profile picture.`,
        delay: 1000
    },
    {
        sender: 'girl',
        content: `Hi Rajesh!
Thanks for the compliment.`,
        delay: 2000
    },
    {
        sender: 'indian',
        content: `I am software engineer.
Very good at computer.
Making new token called Send Nudes.
You want to be first investor?`,
        delay: 3000
    },
    {
        sender: 'girl',
        content: `Send Nudes? 
That's an interesting name...`,
        delay: 2000
    },
    {
        sender: 'indian',
        content: `Yes madam!
First token for beautiful ladies.
You send nudes, token go up.
Very simple business model.`,
        delay: 3000
    },
    {
        sender: 'girl',
        content: `Oh, I see...
That's quite... creative.`,
        delay: 2000
    },
    {
        sender: 'indian',
        content: `Please madam,
SEND NUDES!
For token success!`,
        delay: 3000
    },
    {
        sender: 'girl',
        content: `SHOW VAGNE!
For token growth!`,
        delay: 2000
    }
];

function addMessage(sender, content) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    
    const messageContent = document.createElement('div');
    messageContent.className = 'content';
    messageContent.textContent = content;
    
    messageDiv.appendChild(timestamp);
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function startConversation() {
    let delay = 0;
    conversation.forEach(message => {
        setTimeout(() => {
            addMessage(message.sender, message.content);
        }, delay);
        delay += message.delay;
    });
}

// Initialize effects when page loads
window.addEventListener('load', () => {
    createMatrixRain();
    
    // Add glitch effect to main text
    const glitchText = document.querySelector('.glitch-text');
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #0f0,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #0f0
        `;
    }, 100);

    // Start the conversation
    startConversation();
});

function toggleVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('vagneVideo');
    
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
        video.pause();
    } else {
        modal.style.display = 'block';
        video.play();
    }
}

// Close modal when clicking outside the video
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        toggleVideo();
    }
});

// Audio handling
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.5;
    
    // Function to unmute and play audio
    function unmuteAndPlay() {
        audio.muted = false;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Audio started playing');
            }).catch(error => {
                console.log('Audio play failed:', error);
                // Try to play again after a short delay
                setTimeout(() => {
                    audio.muted = false;
                    audio.play();
                }, 1000);
            });
        }
    }

    // Try to play immediately
    unmuteAndPlay();

    // Try to play on any user interaction
    const interactionEvents = ['click', 'scroll', 'mousemove', 'keydown', 'touchstart'];
    
    interactionEvents.forEach(eventType => {
        document.addEventListener(eventType, function playOnInteraction() {
            unmuteAndPlay();
            // Remove this event listener after first interaction
            document.removeEventListener(eventType, playOnInteraction);
        }, { once: true });
    });

    // Try to play periodically
    setInterval(unmuteAndPlay, 2000);

    // Try to play when window gains focus
    window.addEventListener('focus', unmuteAndPlay);

    // Try to play when the page becomes visible
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            unmuteAndPlay();
        }
    });

    // Try to play when the page is fully loaded
    window.addEventListener('load', unmuteAndPlay);

    // Try to play when the page is ready
    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            unmuteAndPlay();
        }
    });
});

// Glitch out effect
function triggerGlitchOut(duration = 3000) {
    const overlay = document.getElementById('glitchOverlay');
    if (!overlay) return;
    // Mesaje random
    const messages = [
        ['NO SIGNAL SEND BOBS'],
        ['LOST SIGNAL SHOW VAGNE'],
        ["IF YOU DON'T SEND YOU HAVE TO BUY THE COIN"]
    ];
    const chosen = messages[Math.floor(Math.random() * messages.length)];
    const container = overlay.querySelector('.glitch-no-signal');
    container.innerHTML = chosen.map(msg => `<span class='glitch-big-text'>${msg}</span>`).join('');
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, duration);
}

// Poți declanșa glitch-out random la fiecare 30-60 secunde
setInterval(() => {
    if (Math.random() < 0.25) { // 25% șansă la fiecare interval
        triggerGlitchOut(2200 + Math.random() * 1800);
    }
}, 40000);

// Sau la apăsarea tastei G pentru test
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'g') {
        triggerGlitchOut();
    }
}); 