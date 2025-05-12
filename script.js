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
    const fontSize = 20;
    const columns = Math.floor(canvas.width / (fontSize * 6));
    const drops = [];

    for (let i = 0; i < columns * 1.5; i++) {
        drops[i] = {
            y: Math.random() * -canvas.height,
            speed: 2 + Math.random() * 3,
            text: texts[Math.floor(Math.random() * texts.length)],
            opacity: 0.5 + Math.random() * 0.5,
            x: Math.random() * canvas.width
        };
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < drops.length; i++) {
            const drop = drops[i];
            ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
            ctx.font = `bold ${fontSize}px monospace`;
            ctx.fillText(drop.text, drop.x, drop.y);

            drop.y += drop.speed;

            if (drop.y > canvas.height) {
                drop.y = Math.random() * -100;
                drop.text = texts[Math.floor(Math.random() * texts.length)];
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