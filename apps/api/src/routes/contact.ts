import axios from 'axios';
import { Endpoint } from 'express-custom';

import config from '@/config';
import { ContactModel } from '@/models/Contact';

export const contactSubmission = new Endpoint({
  name: 'Contact Submission',
  description: 'The contact submission route',
  path: '/submit',
  method: 'POST',
})
  .setBodySchema((schema) =>
    schema
      .addString({
        name: 'name',
        required: true,
        min: 3,
        max: 50,
      })
      .addString({
        name: 'email',
        required: true,
        min: 3,
        max: 50,
        test: 'email',
      })
      .addString({
        name: 'phone',
        required: false,
        min: 5,
        max: 12,
      })
      .addString({
        name: 'message',
        required: true,
        min: 3,
        max: 1000,
      })
  )
  .setController<{
    body: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
  }>(async (req, res) => {
    const { name, email, phone, message } = req.body;

    const contact = new ContactModel({
      name,
      email,
      phone,
      message,
    });

    try {
      await contact.save();

      res.status(200).json({
        status: 200,
        message: 'Your contact form was submitted successfully.',
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'An error occurred while submitting your contact form.',
      });
    }

    // Send message to Discord
    axios.post(config.env.DISCORD_WEBHOOK_URL, {
      embeds: [
        {
          title: 'New Contact Form Submission',
          description: `
          **Name:** ${name}
          **Email:** ${email}
          **Phone:** ${phone}
          **Timestamp:** <t:${(Date.now() / 1000).toFixed(0)}:R>
          **Message:** \`\`\`\n${message}\`\`\``,
        },
      ],
    });
  });
