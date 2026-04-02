export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  const hookMessage = `📬 Nuevo contacto del formulario web:\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`

  await Promise.all([
    fetch('https://openclaw.genchelita.site/hooks/agent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer claw-hook-genchelita-2026'
      },
      body: JSON.stringify({
        message: hookMessage,
        name: 'Formulario',
        deliver: true,
        channel: 'telegram',
        to: '6357553334'  // Carlos
      })
    }),
    fetch('https://openclaw.genchelita.site/hooks/agent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer claw-hook-genchelita-2026'
      },
      body: JSON.stringify({
        message: hookMessage,
        name: 'Formulario',
        deliver: true,
        channel: 'telegram',
        to: '1630980825'  // Pavel
      })
    })
  ])

  return Response.json({ ok: true })
}
