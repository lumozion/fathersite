

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Use Web3Forms for reliable email delivery
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: '8c2e4b5a-7f3d-4e9c-b1a6-2d8f5e3c9b7a',
        name: name,
        email: email,
        company: company || 'Not specified',
        message: message,
        subject: `New Inquiry from ${name}`,
        from_name: 'S.R. Electronics Website',
        to: 'info@srelectronics.store'
      })
    });

    const result = await response.json();
    
    if (result.success) {
      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}