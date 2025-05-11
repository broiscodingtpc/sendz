// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

// Chat conversation
const conversation = [
    {
        sender: 'indian',
        content: `> Initializing connection...
> Scanning for vulnerabilities...
> Connection established!`,
        delay: 1000
    },
    {
        sender: 'girl',
        content: `Who's there?`,
        delay: 2000
    },
    {
        sender: 'indian',
        content: `> Hello beautiful! I am Rajesh from India.
> I am very good at computer.
> I can hack anything!`,
        delay: 3000
    },
    {
        sender: 'girl',
        content: `Oh really? What can you hack?`,
        delay: 2000
    },
    {
        sender: 'indian',
        content: `> I can hack your heart! 
> *typing furiously*
> *sweating profusely*`,
        delay: 3000
    },
    {
        sender: 'girl',
        content: `That's cute... but can you hack my webcam?`,
        delay: 2000
    },
    {
        sender: 'indian',
        content: `> *nervous typing*
> *glasses fogging up*
> SEND NUDES!`,
        delay: 3000
    },
    {
        sender: 'girl',
        content: `SHOW VAGNE!`,
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