/**
 * nová~vlna — Petition Google Apps Script
 * ─────────────────────────────────────────
 * SETUP:
 * 1. Otevřete Google Sheets → Rozšíření → Apps Script
 * 2. Vložte tento kód (nahraďte výchozí obsah)
 * 3. Nastavte konstanty níže (SHEET_ID, FROM_EMAIL, atd.)
 * 4. Nasaďte: Nasadit → Nové nasazení → Typ: Webová aplikace
 *    → Přistupovat jako: Já → Přístup: Kdokoli
 * 5. Zkopírujte URL webové aplikace do podpis.html → GAS_URL
 */

// ── KONFIGURACE ──────────────────────────────────────────────
const SHEET_ID    = 'VASE_SPREADSHEET_ID';   // ID Google tabulky
const SHEET_NAME  = 'Podpisy';               // Název listu
const FROM_NAME   = 'nová~vlna';
const FROM_EMAIL  = 'info@novavlna.cz';      // Gmail adresa odesílatele
const SITE_URL    = 'https://novavlna.cz';   // URL vašeho webu
// ─────────────────────────────────────────────────────────────

function doGet(e) {
  // Vrátí počet podpisů pro čítač
  if (e.parameter.action === 'count') {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const count = Math.max(0, sheet.getLastRow() - 1); // -1 za hlavičku
    return ContentService
      .createTextOutput(JSON.stringify({ count }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput('OK');
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { name, email, gdpr, ts } = data;

    // ── Uložit do Sheets ──────────────────────────────────
    const ss    = SpreadsheetApp.openById(SHEET_ID);
    let   sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Časové razítko', 'Jméno', 'E-mail', 'GDPR souhlas']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date(ts || Date.now()),
      name,
      email,
      gdpr ? 'ANO' : 'NE'
    ]);

    // ── Odeslat potvrzovací e-mail ────────────────────────
    const subject = 'Potvrzení podpisu manifestu — nová~vlna';
    const html    = buildEmailHtml(name);

    GmailApp.sendEmail(email, subject, '', {
      htmlBody: html,
      name:     FROM_NAME,
      replyTo:  FROM_EMAIL
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── HTML šablona e-mailu ─────────────────────────────────────
function buildEmailHtml(name) {
  return `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#F2EFEA;font-family:-apple-system,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2EFEA;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- HEADER -->
        <tr>
          <td style="background:#1E2438;padding:40px 48px;border-radius:12px 12px 0 0;">
            <p style="margin:0;font-family:Georgia,serif;font-weight:700;font-size:22px;color:#F2EFEA;letter-spacing:0.02em;">
              nová<span style="color:#C94B1A;">~</span>vlna
            </p>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="background:#FAFAF8;padding:48px;border-left:1px solid #E8E2D4;border-right:1px solid #E8E2D4;">

            <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#C94B1A;">
              Potvrzení podpisu
            </p>
            <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-weight:700;font-size:32px;color:#1E2438;line-height:1.1;">
              Děkujeme,<br>${escapeHtml(name)}.
            </h1>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:rgba(30,36,56,0.65);">
              Váš podpis byl úspěšně zaznamenán. Jste součástí vlny lidí, kteří věří,
              že změna společnosti začíná u každého z nás.
            </p>

            <!-- Co jste podepsali -->
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="background:#1E2438;border-radius:10px;margin:32px 0;">
              <tr>
                <td style="padding:32px 36px;">
                  <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.18em;
                             text-transform:uppercase;color:rgba(242,239,234,0.35);">
                    Co jste podepsali
                  </p>
                  <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:rgba(242,239,234,0.7);">
                    <strong style="color:#F2EFEA;">Odpovědnost jako základ.</strong>
                    Silný stát nezačíná institucemi. Začíná u lidí. Pravidla platí pro všechny stejně.
                  </p>
                  <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:rgba(242,239,234,0.7);">
                    <strong style="color:#F2EFEA;">Odbornost místo populismu.</strong>
                    Rozhodování na datech. Politika je odpovědnost, ne marketing.
                  </p>
                  <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:rgba(242,239,234,0.7);">
                    <strong style="color:#F2EFEA;">Stát, který funguje.</strong>
                    Efektivní, digitální, transparentní. Slouží lidem — ne naopak.
                  </p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:rgba(242,239,234,0.7);">
                    <strong style="color:#F2EFEA;">Svoboda a zodpovědnost patří k sobě.</strong>
                    Tvoříme místo stěžování. Jednáme místo čekání.
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 32px;font-size:15px;line-height:1.75;color:rgba(30,36,56,0.65);">
              Přečtěte si oba manifesty v plném znění:
            </p>

            <!-- CTA tlačítka -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding-right:12px;">
                  <a href="${SITE_URL}/manifest.html"
                     style="display:inline-block;padding:13px 28px;background:#1E2438;color:#F2EFEA;
                            font-size:13px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;
                            text-decoration:none;border-radius:999px;">
                    Manifest osobní odpovědnosti
                  </a>
                </td>
                <td>
                  <a href="${SITE_URL}/index.html#zasady"
                     style="display:inline-block;padding:12px 28px;background:transparent;color:#1E2438;
                            font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
                            text-decoration:none;border-radius:999px;border:1.5px solid rgba(30,36,56,0.25);">
                    Zásady manifestu
                  </a>
                </td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #E8E2D4;margin:32px 0;">

            <p style="margin:0;font-size:12px;line-height:1.7;color:rgba(30,36,56,0.35);">
              Tento e-mail byl odeslán, protože jste podepsali manifest nová~vlna
              na adrese ${SITE_URL}.<br>
              Vaše data zpracováváme v souladu s GDPR. Souhlas lze odvolat na
              <a href="mailto:gdpr@novavlna.cz" style="color:#C94B1A;">gdpr@novavlna.cz</a>.
            </p>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#E8E2D4;padding:24px 48px;border-radius:0 0 12px 12px;
                     text-align:center;">
            <p style="margin:0;font-size:11px;color:rgba(30,36,56,0.4);letter-spacing:0.04em;">
              © 2026 nová~vlna · <a href="mailto:info@novavlna.cz" style="color:inherit;">info@novavlna.cz</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
