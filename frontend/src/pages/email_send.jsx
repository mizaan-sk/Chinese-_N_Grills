import React, { useState } from 'react';

function EmailSender() {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const sendEmail = async () => {
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to,
                    subject,
                    // text,
                    html: `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>Image and Text Example</title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix {
          width: 100% !important;
        }
      </style>
    <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"
    type="text/css" />
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    @import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);
  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width: 480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-65 {
        width: 65% !important;
        max-width: 65%;
      }

      .mj-column-per-35 {
        width: 35% !important;
        max-width: 35%;
      }

      .mj-column-per-27 {
        width: 27% !important;
        max-width: 27%;
      }

      .mj-column-per-73 {
        width: 73% !important;
        max-width: 73%;
      }
    }
  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

    .moz-text-html .mj-column-per-65 {
      width: 65% !important;
      max-width: 65%;
    }

    .moz-text-html .mj-column-per-35 {
      width: 35% !important;
      max-width: 35%;
    }

    .moz-text-html .mj-column-per-27 {
      width: 27% !important;
      max-width: 27%;
    }

    .moz-text-html .mj-column-per-73 {
      width: 73% !important;
      max-width: 73%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width: 480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
  <style type="text/css">
    * {
      font-family: 'Montserrat !important;

    }

    a {
      color: #fff;
      text-decoration: none
    }
  </style>
</head>

<body style="word-spacing: normal">
  <div style="">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%">
        <tbody>
          <tr>
            <td style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0;
                  text-align: center;
                ">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  ">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top"
                  width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="
                            font-size: 0px;
                            padding: 0px;
                            word-break: break-word;
                          ">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            ">
                          <tbody>
                            <tr>
                              <td style="width: 600px">
                                <a href="https://hellomealsonme.com/" target=”_blank”>
                                  <img alt="Example Image" height="auto"
                                    src="When-the-Customer-registers-on-the-website.png" style="
                                        border: 0;
                                        display: block;
                                        outline: none;
                                        text-decoration: none;
                                        height: auto;
                                        width: 100%;
                                        font-size: 13px;
                                      " width="550" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="font-size: 25px; font-weight: 600">
                            Hi ${subject}!
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="font-size: 25px; font-weight: 600">
                            Welcome to the MOM Family!
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="
                                font-size: 20px;
                                font-weight: 200;
                                line-height: 1.3;
                              ">
                            Indulge in a gourmet meal plan featuring 6
                            cuisines, premium ingredients, and weekly fresh
                            menus, all with precise calorie and macro details.
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" vertical-align="middle" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                          style="border-collapse: separate; line-height: 100%">
                          <tbody>
                            <tr>
                              <td align="center" bgcolor="#9F0201" role="presentation" style="
                                    border: none;
                                    border-radius: 20px;
                                    cursor: auto;
                                    mso-padding-alt: 10px 25px;
                                    background: #9f0201;
                                  " valign="middle">
                                <p style="
                                      display: inline-block;
                                      background: #9f0201;
                                      color: #ffffff;
                                      font-family: Ubuntu, Helvetica, Arial,
                                        sans-serif;
                                      font-size: 18px;
                                      font-weight: bold;
                                      line-height: 120%;
                                      margin: 0;
                                      text-decoration: none;
                                      text-transform: none;
                                      padding: 10px 25px;
                                      mso-padding-alt: 0px;
                                      border-radius: 20px;
                                    ">
                                  <a href="https://hellomealsonme.com/" target=”_blank”>
                                    Subscribe Now
                                  </a>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
    <p style="
          border-top: solid 2px #000000;
          font-size: 1px;
          margin: 0px auto;
          width: 35%;
        "></p>
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #000000;font-size:1px;margin:0px auto;width:467.5px;" role="presentation" width="467.5px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%">
        <tbody>
          <tr>
            <td style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0;
                  text-align: center;
                ">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  ">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top"
                  width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="font-size: 25px; font-weight: 600">
                            How to Login!
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="font-size: 21px; font-weight: 400">
                            Use your registered email & use the below
                            password:
                            <span style="font-size: 21px; font-weight: 800">Password:{password}</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="
                                font-size: 20px;
                                font-weight: 200;
                                line-height: 1.3;
                              ">
                            Visit this link and click Login:
                            <span style="
                                  background: #9f0201;
                                  color: #fff !important;
                                  text-decoration: none;
                                  padding: 7px;
                                  border-radius: 20px;
                                  font-weight: 600;
                                  font-size: 16px;
                                "><a href="https://hellomealsonme.com/login" target=”_blank”>Click here</a></span>
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="font-size: 25px; font-weight: 600">
                            How to Login!
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 18px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          Our dedicated account manager will get in touch with
                          you to help you get started, guide you throught the
                          process and also answer your queries, if any
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 18px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          Drop in an email to let us know what time will be
                          best for us to call you
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 13px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          <p style="font-size: 25px; font-weight: 600">
                            Your Account at glance:
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 18px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          Manage your account, subscriptions & menu selections
                          from your personal dashboard.
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 18px;
                              line-height: 1;
                              text-align: left;
                              color: #000000;
                            ">
                          Login with your email & password to access
                          dashboard.
                          <p style="
                                font-size: 20px;
                                font-weight: 200;
                                line-height: 1.3;
                              ">
                            <span style="
                                  background: #ba0000;
                                  color: #fff !important;
                                  text-decoration: none;
                                  padding: 7px;
                                  border-radius: 10px;
                                  font-weight: 600;
                                  font-size: 18px;
                                "><a href="https://hellomealsonme.com/login" target=”_blank”>Click here</a></span>
                            to login to dashboard.
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FF691C" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%">
        <tbody>
          <tr>
            <td style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 20px 0;
                  text-align: center;
                ">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  ">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top"
                  width="100%">
                  <tbody>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 20px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            ">
                          For support contact us on:
                          <span style="font-weight: bold">+971508973952</span>.
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          ">
                        <div style="
                              font-family: Montserrat;
                              font-size: 20px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            ">
                          If you didn't create an account using this email<br />
                          address, please report on above number.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin: 0px auto; max-width: 600px">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: top" width="100%">
        <tbody>
          <tr>
            <td align="left" style="
                  font-size: 0px;
                  padding: 10px 25px;
                  word-break: break-word;
                ">
              <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="float: none; display: inline-table">
                <tbody>
                  <tr>
                    <td style="padding: 4px; vertical-align: middle">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                            background: #c451bf;
                            border-radius: 3px;
                            width: 20px;
                          ">
                        <tbody>
                          <tr>
                            <td style="
                                  font-size: 0;
                                  height: 20px;
                                  vertical-align: middle;
                                  width: 20px;
                                ">
                              <a href="https://www.instagram.com/hellomealsonme/?hl=en" title="Instagram"
                                target="_blank">
                                <img height="20"
                                  src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png"
                                  style="border-radius: 3px; display: block" width="20" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso | IE]></td><td><![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="float: none; display: inline-table">
                <tbody>
                  <tr>
                    <td style="padding: 4px; vertical-align: middle">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                            background: #3b5998;
                            border-radius: 3px;
                            width: 20px;
                          ">
                        <tbody>
                          <tr>
                            <td style="
                                  font-size: 0;
                                  height: 20px;
                                  vertical-align: middle;
                                  width: 20px;
                                ">
                              <a href="https://www.facebook.com/hellomealsonme" title="Facebook" target="_blank">
                                <img height="20"
                                  src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png"
                                  style="border-radius: 3px; display: block" width="20" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso | IE]></td><td><![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="float: none; display: inline-table">
                <tbody>
                  <tr>
                    <td style="padding: 4px; vertical-align: middle">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                        style="border-radius: 3px; width: 150px">
                        <tbody>
                          <tr>
                            <td style="
                                  font-size: 0;
                                  height: 20px;
                                  vertical-align: middle;
                                  width: 150px;
                                ">
                              <a href="https://hellomealsonme.com/" target=”_blank”>
                                <img
                                  src="http://cdn.mcauto-images-production.sendgrid.net/829eed7de8322697/92904a3f-ba17-4559-8314-f33f30a6abed/396x46.jpg"
                                  height="18" style="border-radius: 3px; display: block" width="150" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>`,
                }),
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send email');
        }
    };

    return (
        <div>
            <h1>Send an Email</h1>
            <input
                type="email"
                placeholder="Recipient's email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
            /><br/><br/>
            <input
                type="text"
                placeholder="Enter Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            /><br/><br/>
            {/* <textarea
                placeholder="Email body"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea> */}
            <br/><br/>
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
}

export default EmailSender;
