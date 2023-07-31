import axios from 'axios';
import { Schema } from 'builder-validation';

interface ClientOptions {
  apiUrl: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * The API Client.
 */
export class Client {
  private url: string;
  private axios = axios;

  /**
   * Creates a new instance of the API Client.
   * @param options The options for the API Client.
   */
  public constructor(options: ClientOptions) {
    this.url = options.apiUrl;
  }

  /**
   * Handles an error.
   * @param error The error to handle.
   */
  private handleError(error: unknown): void {
    if (this.axios.isAxiosError(error)) {
      // convert axios error to string
      const errorString =
        (error.response?.data as { message?: string }).message ?? error.message;

      throw new Error(errorString);
    } else {
      // convert other error to string
      const errorString = (error as string).toString();
      throw new Error(errorString);
    }
  }

  /**
   * Submits a contact form.
   * @param form The contact form.
   * @returns A promise that resolves when the form is submitted.
   */
  public async submitContactForm(form: ContactForm): Promise<void> {
    const schema = new Schema()
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
      });

    const result = await schema.validate({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });

    if (typeof result === 'string') throw new Error(result);

    await this.axios
      .post(`${this.url}/contact/submit`, {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      })
      .catch((error) => this.handleError(error));
  }
}
