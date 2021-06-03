/** @jsx jsx */
import { jsx } from "theme-ui"
import { useForm } from "react-hook-form"
import {
  Label,
  ErrorMessage,
  inputStyles,
  buttonStyles,
} from "./contactFormComponents"

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    shouldFocusError: true,
  })
  const { isSubmitSuccessful } = formState

  return (
    <form
      method="POST"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
      name="contact-form"
      id="contact"
      action="/succes"
      sx={{ paddingBottom: 5 }}
    >
      {/* hidden form field neccessary for netlify form submission */}
      <input type="hidden" name="form-name" value="contact-form" />
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <Label for="name">Naam</Label>
        <input
          type="text"
          autoFocus
          id="name"
          placeholder="Naam"
          sx={{
            ...inputStyles,
          }}
          {...register("name", { required: true, minLength: 2, maxLength: 30 })}
        />
        {errors.name ? (
          <ErrorMessage>Dit is een verplicht veld</ErrorMessage>
        ) : null}
        <Label for="email">E-mail</Label>
        <input
          type="email"
          id="email"
          placeholder="E-mail adres"
          sx={{
            ...inputStyles,
          }}
          {...register("email", {
            required: "Dit is een verplicht veld.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ongeldige e-mailadres.",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label for="message">Bericht</Label>
        <textarea
          id="message"
          form="contact"
          placeholder="Uw vraag of boodschap"
          rows={6}
          sx={{
            ...inputStyles,
          }}
          {...register("message", {
            required: true,
            minLength: 6,
            maxLength: 2000,
          })}
        ></textarea>
        {errors.message && (
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <button
          type="submit"
          sx={{
            ...buttonStyles,
            transitionProperty: "transform",
            transitionDuration: "0.25s",
            "&:focus": {
              outline: "none",
              boxShadow: "focus",
              transform: "scale(1.05)",
            },
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          {isSubmitSuccessful ? "Verstuurd!" : "Verstuur >"}
        </button>
        {isSubmitSuccessful ? (
          <span sx={{ color: "green", marginLeft: 3, marginTop: 1 }}>
            U bericht is verstuurd.
          </span>
        ) : null}
      </div>
    </form>
  )
}
