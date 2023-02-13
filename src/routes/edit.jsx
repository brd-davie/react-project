import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../contacts";

export default function EditContact() {
  const contact = useLoaderData();

  return (
    <Form method="post" id="contact-form" style={{
      color: '#fff',

    }}>
      <p>
        <span>Name</span>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          className="input input-bordered input-accent w-full max-w-xs"
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button className="btn btn-sm btn-accent" type="submit">Save</button>
        <button className="btn btn-sm btn-error" type="button">Cancel</button>
      </p>
    </Form>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}