import Link from 'next/link';
import {
  CompanyContact,
  ConsentSentence,
  LegalArticle,
  SiteFrame,
} from '@/components/site/SiteFrame';
import {
  LEGAL_NAME,
  SMS_DISCLOSURES,
  SMS_MESSAGE_TYPES,
  SMS_NONSHARE_CLAUSE,
  SMS_PROGRAM_NAME,
} from '@/lib/legal';

const PrivacyPolicy = () => (
  <SiteFrame>
    <LegalArticle
      title="Privacy Policy"
      lede={`${LEGAL_NAME} builds and runs software. This policy says what we collect, how we use it, and how to reach us.`}>
      <p>
        It covers somnuslabs.com and the software we operate, including
        Deskwork, MagicReply, CMAForge, ARV Analyzer, and PlantVision, and
        custom software we run for a customer&apos;s users.
      </p>

      <h2>Who we are</h2>
      <CompanyContact />

      <h2>Information we collect</h2>
      <ul>
        <li>
          Account information: name, email address, organization, and role, when
          you or your employer creates an account.
        </li>
        <li>
          Information you put into the software so it can do its job. That
          includes documents, messages, review text, property details, and
          photos you upload.
        </li>
        <li>
          Mobile information, if you opt in to text messages: your mobile
          number, the record of when and how you opted in, and the messages we
          exchange.
        </li>
        <li>
          The email address you submit on somnuslabs.com if you ask for product
          updates.
        </li>
        <li>
          Technical data needed to run and protect the services: IP address,
          browser type, and operational logs.
        </li>
      </ul>
      <p>
        We do not buy contact lists. We do not text a mobile number unless that
        person opted in, as described on our <Link href="/sms">SMS</Link> page.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>
          To provide the software and the account you or your employer signed up
          for.
        </li>
        <li>To send the text messages you agreed to receive.</li>
        <li>
          To answer support requests and to send product email you asked for.
        </li>
        <li>To keep the services secure and to fix problems.</li>
        <li>
          To understand, in aggregate, how the products are used so we can
          improve them.
        </li>
      </ul>
      <p>
        We do not sell personal information. We do not share it with third
        parties or affiliates for their marketing.
      </p>

      <h2>Text messages</h2>
      <p>{SMS_NONSHARE_CLAUSE}</p>
      <p>
        We share a mobile number, and the content of a message, with service
        providers that transmit the texts, only so they can deliver those
        messages. Those providers may not use that information to market their
        own products.
      </p>
      <p>
        The program name is {SMS_PROGRAM_NAME}. How a person opts in is on the{' '}
        <Link href="/sms">SMS</Link> page. The message terms are in the{' '}
        <Link href="/terms">Terms of Use</Link>.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep account and product information while the account is open. After
        an account closes, we delete or de-identify that information within a
        reasonable time, unless we have to keep a record for security, tax, or
        another legal obligation.
      </p>
      <p>
        We keep the text-message consent record for as long as we need it to
        show that the person opted in. After you reply STOP, we stop sending
        texts. We keep the opt-out record so we do not text you again unless you
        opt in again.
      </p>

      <h2>Your choices</h2>
      <p>
        Email us at the address above to ask what we hold about you, to correct
        it, or to ask us to delete it. If you subscribed to product email, each
        of those messages has a way to unsubscribe. Reply STOP to opt out of
        texts. The steps are in the <Link href="/terms">Terms of Use</Link>.
      </p>

      <h2>Children</h2>
      <p>
        Our software is for businesses and adults. We do not knowingly collect
        information from children under 13. If you believe a child gave us
        information, email us and we will delete it.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy, we post the new version on this page and
        change the date at the top.
      </p>

      <h2>Contact</h2>
      <CompanyContact />
    </LegalArticle>
  </SiteFrame>
);

const TermsOfUse = () => (
  <SiteFrame>
    <LegalArticle
      title="Terms of Use"
      lede={`These terms are the agreement between you and ${LEGAL_NAME} for our websites and software.`}>
      <p>
        The software includes Deskwork, MagicReply, CMAForge, ARV Analyzer, and
        PlantVision, and other software we operate. By using it, you agree to
        these terms. If you use it for an organization, you confirm that you can
        agree for that organization.
      </p>

      <h2>The software</h2>
      <p>
        We provide the software as a service. Features change as we ship
        improvements. A product page describes what that product does. We may
        suspend access when we need to protect the service, other people, or to
        follow the law.
      </p>

      <h2>Accounts</h2>
      <p>
        Keep your sign-in private. You are responsible for activity on your
        account. An employer or an administrator may add you as a user and may
        remove that access. Give accurate account information.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the software. That includes breaking the law, trying to
        break into the service or another person&apos;s account, sending spam,
        uploading malware, or using the software to harm someone. We may suspend
        an account that does this.
      </p>

      <h2>SMS messaging</h2>
      <p>
        Program name: {SMS_PROGRAM_NAME}. {LEGAL_NAME} sends text messages to
        people who opt in. The messages are {SMS_MESSAGE_TYPES}.
      </p>
      <ul>
        {SMS_DISCLOSURES.map(line => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>
        Message frequency varies because a message goes out when the account has
        an alert, a lead, a task, or a support reply. There is no fixed
        schedule. Reply STOP and we send one confirmation that you are
        unsubscribed, then nothing further unless you opt in again. Reply HELP
        and we reply with the program name and the support contact below.
      </p>
      <p>
        How you opt in, and the consent sentence shown in the software, are on
        the <Link href="/sms">SMS</Link> page.
      </p>
      <p>{SMS_NONSHARE_CLAUSE}</p>
      <p>
        We share a mobile number with service providers that transmit the
        messages, only so they can deliver them. The{' '}
        <Link href="/privacy">Privacy Policy</Link> says what else we do with
        information.
      </p>
      <p>
        Consent to texts is not a condition of buying anything or of having an
        account. If you do not opt in, or if you reply STOP, you can still use
        the software. You will not get these texts.
      </p>
      <p>Support for the text program:</p>
      <CompanyContact />

      <h2>Your content and ours</h2>
      <p>
        The software, the Somnus Labs name, and the product names belong to{' '}
        {LEGAL_NAME} or its licensors. These terms do not transfer that
        ownership. You keep what you submit. You give us permission to host and
        process it so we can provide the software to you.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The software is provided as available. Results can be wrong. They are
        not legal, financial, appraisal, tax, or other professional advice. You
        decide what to do with them.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, {LEGAL_NAME} is not liable for indirect,
        incidental, special, or consequential damages, or for lost profits or
        data, arising from these terms or the software. If the law does not
        allow a limitation, that limitation does not apply.
      </p>

      <h2>Other terms</h2>
      <p>
        Delaware law governs these terms, excluding conflict-of-law rules. If a
        court holds one part unenforceable, the rest stays in effect. We may
        update these terms by posting a new version on this page. If you keep
        using the software after that date, the new terms apply.
      </p>

      <h2>Contact</h2>
      <CompanyContact />
    </LegalArticle>
  </SiteFrame>
);

const SmsProgram = () => (
  <SiteFrame>
    <LegalArticle
      title={SMS_PROGRAM_NAME}
      lede={`This page is how a person opts in to text messages from ${LEGAL_NAME}. It is the public description of that consent.`}>
      <p>
        Program name: {SMS_PROGRAM_NAME}. The messages are {SMS_MESSAGE_TYPES}.
      </p>

      <h2>How a person opts in</h2>
      <p>
        A person opts in for themselves. We do not add mobile numbers from a
        purchased or rented list.
      </p>
      <ol>
        <li>
          Their employer or an administrator adds them as a user of our
          software.
        </li>
        <li>
          The software shows this consent sentence, and the person can read it
          before agreeing:
          <ConsentSentence />
        </li>
        <li>
          They confirm by texting START or JOIN to the Somnus Labs number shown
          in the software. A person can also opt in by texting that number
          first. We then connect the number to their user account.
        </li>
      </ol>
      <p>
        The number is shown inside the software when the person is asked to
        confirm. It is not published on this website. After they opt in, we send
        a confirmation text that repeats how to opt out and how to get help.
      </p>

      <h2>What we send, and how to stop</h2>
      <ul>
        {SMS_DISCLOSURES.map(line => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>
        Message frequency varies. A message goes out when the account has an
        alert, a lead, a task, or a support reply. There is no fixed schedule.
      </p>
      <p>
        Reply STOP to opt out. We send one confirmation that the number is
        unsubscribed, and we send nothing further unless the person opts in
        again by texting START or JOIN.
      </p>
      <p>
        Reply HELP for help. We reply with the program name, {SMS_PROGRAM_NAME},
        and the support contact on this page.
      </p>
      <p>
        Carriers are not liable for delayed or undelivered messages. Consent is
        not a condition of purchase, and it is not required to have an account.
        A person who does not opt in, or who replies STOP, can still use the
        software.
      </p>

      <h2>Mobile information</h2>
      <p>{SMS_NONSHARE_CLAUSE}</p>
      <p>
        We share a mobile number, and the content of a message, with service
        providers that transmit the texts, only so they can deliver those
        messages. Those providers may not use that information for their own
        marketing.
      </p>
      <p>
        <Link href="/privacy">Privacy Policy</Link>
        {' · '}
        <Link href="/terms">Terms of Use</Link>
      </p>

      <h2>Support</h2>
      <CompanyContact />
    </LegalArticle>
  </SiteFrame>
);

export { PrivacyPolicy, SmsProgram, TermsOfUse };
