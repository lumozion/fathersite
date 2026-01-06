

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Use Formspree or similar service for reliable email delivery
    const response = await fetch('https://formspree.io/f/xpwzgkqr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        company: company || 'Not specified',
        message: message,
        _replyto: email,
        _subject: `New Inquiry from ${name}`,
        _to: 'info@srelectronics.store'
      })
    });

    if (response.ok) {
      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}