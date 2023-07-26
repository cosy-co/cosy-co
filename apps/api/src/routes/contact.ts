import { Endpoint } from 'express-custom';

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
        name: 'firstName',
        required: true,
        min: 3,
        max: 50,
      })
      .addString({
        name: 'lastName',
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
        required: true,
        min: 5,
        max: 12,
      })
      .addString({
        name: 'message',
        required: true,
        min: 3,
        max: 500,
      })
  )
  .setController<{
    body: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
    };
  }>(async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const contact = new ContactModel({
      firstName,
      lastName,
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
  });
