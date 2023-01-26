import {Container, Heading, List, ListItem, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {Helmet} from "react-helmet-async";

export function Privacy(){

    return(
        <Container overflowWrap='break-word' w={['23.5rem', '25rem', '30rem']}>
            <Helmet>
                <title>Privacy Policy</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. The Privacy Policy of mojos index.
                    Last updated January 06, 2023. This privacy notice for Mojos Index ('Company,' 'we,' 'us,' or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services')"
                />
            </Helmet>
            <Heading>PRIVACY NOTICE</Heading>
            <Text>Last updated January 06, 2023</Text>
            <Text>This privacy notice for Mojos Index ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:Visit our website at https://mojosindex.com, or any website of ours that links to this privacy notice</Text>
            <Text>Engage with us in other related ways, including any sales, marketing, or events</Text>
            <Text>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at mojosindex@gmail.com.</Text>
            <Heading>SUMMARY OF KEY POINTS</Heading>
            <Text>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</Text>
            <Text>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Mojos Index and the Services, the choices you make, and the products and features you use. Click here to learn more.</Text>
            <Text>Do we process any sensitive personal information? We do not process sensitive personal information.</Text>
            <Text>Do we receive any information from third parties? We do not receive any information from third parties.</Text>
            <Text>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</Text>
            <Text>We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.</Text>
            <Text>In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Click here to learn more</Text>
            <Text>How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.</Text>
            <Text>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.</Text>
            <Text>How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here: www.mojosindex/account.com, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</Text>
            <Text>Want to learn more about what Mojos Index does with any information we collect? Click here to review the notice in full.</Text>
            <Heading>TABLE OF CONTENTS</Heading>
            <List>
                <ListItem>
                    <Text>WHAT INFORMATION DO WE COLLECT?</Text>
                </ListItem>
                <ListItem>
                    <Text>HOW DO WE PROCESS YOUR INFORMATION?</Text>
                </ListItem>
                <ListItem>
                    <Text>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Text>
                </ListItem>
                <ListItem>
                    <Text>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Text>
                </ListItem>
                <ListItem>
                    <Text>HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
                </ListItem>
                <ListItem>
                    <Text>HOW DO WE KEEP YOUR INFORMATION SAFE?</Text>
                </ListItem>
                <ListItem>
                    <Text>DO WE COLLECT INFORMATION FROM MINORS?</Text>
                </ListItem>
                <ListItem>
                    <Text>WHAT ARE YOUR PRIVACY RIGHTS?</Text>
                </ListItem>
                <ListItem>
                    <Text>CONTROLS FOR DO-NOT-TRACK FEATURES</Text>
                </ListItem>
                <ListItem>
                    <Text>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Text>
                </ListItem>
                <ListItem>
                    <Text>DO WE MAKE UPDATES TO THIS NOTICE?</Text>
                </ListItem>
                <ListItem>
                    <Text>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Text>
                </ListItem>
                <ListItem>
                    <Text>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Text>
                </ListItem>
            </List>
            <Heading>1. WHAT INFORMATION DO WE COLLECT?</Heading>
            <Text>Personal information you disclose to us</Text>
            <Text>In Short: We collect personal information that you provide to us.We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</Text>
            <List>
                <ListItem>
                    <Text>names</Text>
                </ListItem>
                <ListItem>
                    <Text>phone numbers</Text>
                </ListItem>
                <ListItem>
                    <Text>email addresses</Text>
                </ListItem>
                <ListItem>
                    <Text>mailing addresses</Text>
                </ListItem>
                <ListItem>
                    <Text>usernames</Text>
                </ListItem>
                <ListItem>
                    <Text>passwords</Text>
                </ListItem>
                <ListItem>
                    <Text>billing addresses</Text>
                </ListItem>
            </List>
            <Text>Sensitive Information. We do not process sensitive information.</Text>
            <Text>Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: https://stripe.com/privacy.All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</Text>
            <Text>Information automatically collected</Text>
            <Text>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</Text>
            <Text>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.Like many businesses, we also collect information through cookies and similar technologies. The information we collect includes:</Text>
            <List>
                <ListItem>
                    <Text>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</Text>
                </ListItem>
                <ListItem>
                    <Text>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</Text>
                </ListItem>
                <ListItem>
                    <Text>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</Text>
                </ListItem>
            </List>
            <Heading>2. HOW DO WE PROCESS YOUR INFORMATION?</Heading>
            <Text>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</Text>
            <List>
                <ListItem>
                    <Text>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</Text>
                </ListItem>
                <ListItem>
                    <Text>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</Text>
                </ListItem>
                <ListItem>
                    <Text>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below).</Text>
                </ListItem>
                <ListItem>
                    <Text>To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</Text>
                </ListItem>
                <ListItem>
                    <Text>To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.</Text>
                </ListItem>
                <ListItem>
                    <Text>To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</Text>
                </ListItem>
            </List>
            <Heading>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Heading>
            <Text>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</Text>
            <Text>Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. The categories of third parties we may share personal information with are as follows:</Text>
            <List>
                <ListItem>
                    <Text>Ad Networks</Text>
                </ListItem>
                <ListItem>
                    <Text>Payment Processors</Text>
                </ListItem>
            </List>
            <Text>We also may need to share your personal information in the following situations:</Text>
            <List>
                <ListItem>
                    <Text>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</Text>
                </ListItem>
            </List>
            <Heading>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Heading>
            <Text>In Short: We may use cookies and other tracking technologies to collect and store your information.</Text>
            <Text>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</Text>
            <Heading>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Heading>
            <Text>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</Text>
            <Text>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</Text>
            <Text>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>
            <Heading>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</Heading>
            <Text>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</Text>
            <Text>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</Text>
            <Heading>7. DO WE COLLECT INFORMATION FROM MINORS?</Heading>
            <Text>In Short: We do not knowingly collect data from or market to children under 18 years of age.</Text>
            <Text>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at mojosindex@gmail.com.</Text>
            <Heading>8. WHAT ARE YOUR PRIVACY RIGHTS?</Heading>
            <Text>In Short:  You may review, change, or terminate your account at any time.</Text>
            <Text>f you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</Text>
            <Text>If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.</Text>
            <Text>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</Text>
            <Text>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Text>
            <Text>Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</Text>
            <Text>Account Information</Text>
            <Text>If you would at any time like to review or change the information in your account or terminate your account, you can:</Text>
            <List>
                <ListItem>
                    <Text>Log in to your account settings and update your user account.</Text>
                </ListItem>
            </List>
            <Text>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</Text>
            <Text>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.</Text>
            <Text>If you have questions or comments about your privacy rights, you may email us at mojosindex@gmail.com.</Text>
            <Heading>9. CONTROLS FOR DO-NOT-TRACK FEATURES</Heading>
            <Text>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</Text>
            <Heading>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Heading>
            <Text>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</Text>
            <Text>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</Text>
            <Text>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</Text>
            <Text>CCPA Privacy Notice</Text>
            <Text>The California Code of Regulations defines a "resident" as:</Text>
            <List>
                <ListItem>
                    <Text>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</Text>
                </ListItem>
                <ListItem>
                    <Text>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</Text>
                </ListItem>
            </List>
            <Text>All other individuals are defined as "non-resident</Text>
            <Text>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</Text>
            <Text>What categories of personal information do we collect?</Text>
            <Text>We have collected the following categories of personal information in the past twelve (12) months:</Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Category</Th>
                        <Th>Example</Th>
                        <Th>Collected</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>A. Identifiers</Td>
                        <Td>Contact Details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol Address, email address, and account name</Td>
                        <Td>YES</Td>
                    </Tr>
                    <Tr>
                        <Td>B. Personal information categories listed in the California Customer Records statue</Td>
                        <Td>Name, contact information, education, employment, employment history, and financial information</Td>
                        <Td>YES</Td>
                    </Tr>
                    <Tr>
                        <Td>C. Protected classification characteristics under California or federal law</Td>
                        <Td>Gender and date of birth</Td>
                        <Td>YES</Td>
                    </Tr>
                    <Tr>
                        <Td>D. Commercial information</Td>
                        <Td>Transaction information, purchase history, financial details, and payment information</Td>
                        <Td>YES</Td>
                    </Tr>
                    <Tr>
                        <Td>E. Biometric information</Td>
                        <Td>Fingerprints and boiceprints</Td>
                        <Td>NO</Td>
                    </Tr>
                    <Tr>
                        <Td>F. Internet or other similar network activity</Td>
                        <Td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</Td>
                        <Td>YES</Td>
                    </Tr>
                    <Tr>
                        <Td>G. Geolocation data</Td>
                        <Td>Device Location</Td>
                        <Td>NO</Td>
                    </Tr>
                    <Tr>
                        <Td>H. Audio, electronic, visual, thermal, olfactory, or similar information</Td>
                        <Td>Images and audio, video or call recordings created in connection with our business activities</Td>
                        <Td>NO</Td>
                    </Tr>
                    <Tr>
                        <Td>I. Professional or employment-related information</Td>
                        <Td>Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</Td>
                        <Td>NO</Td>
                    </Tr>
                    <Tr>
                        <Td>J. Education information</Td>
                        <Td>Student records and directory information</Td>
                        <Td>NO</Td>
                    </Tr>
                    <Tr>
                        <Td>K. inferences drawn from other personal information</Td>
                        <Td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</Td>
                        <Td>NO</Td>
                    </Tr>
                    <Tr>
                        <Td>L. Sensitive Personal Information</Td>
                        <Td></Td>
                        <Td>NO</Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>We will use and retain the collected personal information as needted to provide the Services or for:</Text>
            <List>
                <ListItem>
                    <Text>Category A - As long as the user has an account with us</Text>
                    <Text>Category B - As long as the user has an account with us</Text>
                    <Text>Category C - As long as the user has an account with us</Text>
                    <Text>Category D - As long as the user has an account with us</Text>
                    <Text>Category F - As long as the user has an account with us</Text>
                </ListItem>
            </List>
            <Text>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</Text>
            <List>
                <ListItem>
                    <Text>Receiving help through our customer support channels;</Text>
                </ListItem>
                <ListItem>
                    <Text>Participation in customer surveys or contests; and</Text>
                </ListItem>
                <ListItem>
                    <Text>Facilitation in the delivery of our Services and to respond to your inquiries.</Text>
                </ListItem>
            </List>
            <Text>How do we use and share your personal information?</Text>
            <Text>Mojos Index collects and shares your personal information through:</Text>
            <List>
                <ListItem>
                    <Text>Targeting cookies/Marketing cookies</Text>
                </ListItem>
            </List>
            <Text>More information about our data collection and sharing practices can be found in this privacy notice.</Text>
            <Text>You may contact us by email at mojosindex@gmail.com, or by referring to the contact details at the bottom of this document.</Text>
            <Text>If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</Text>
            <Text>.Will your information be shared with anyone else?</Text>
            <Text>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CCPA.</Text>
            <Text>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</Text>
            <Text>.Mojos Index has not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Mojos Index has disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:</Text>
            <List>
                <ListItem>
                    <Text>Category A. Identifiers, such as contact details like your real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.</Text>
                </ListItem>
                <ListItem>
                    <Text>Category B. Personal Information, as defined in the California Customer Records law, such as your name, contact information, education, employment, employment history, and financial information.</Text>
                </ListItem>
                <ListItem>
                    <Text>Category C. Characteristics of protected classifications under California or federal law, such as gender or date of birth.Category D. Commercial information, such as transaction information, purchase history, financial details, and payment information.</Text>
                </ListItem>
                <ListItem>
                    <Text>Category D. Commercial information, such as transaction information, purchase history, financial details, and payment information.</Text>
                </ListItem>
                <ListItem>
                    <Text>Category F. Internet or other electronic network activity information, such as browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements.</Text>
                </ListItem>
            </List>
            <Text>The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?".</Text>
            <Text>Your rights with respect to your personal data</Text>
            <Text>Right to request deletion of the data — Request to delete</Text>
            <Text>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</Text>
            <Text>Right to be informed — Request to know</Text>
            <Text>Depending on the circumstances, you have a right to know:</Text>
            <List>
                <ListItem>
                    <Text>whether we collect and use your personal information;</Text>
                </ListItem>
                <ListItem>
                    <Text>the categories of personal information that we collect;</Text>
                </ListItem>
                <ListItem>
                    <Text>the purposes for which the collected personal information is used;</Text>
                </ListItem>
                <ListItem>
                    <Text>whether we sell or share personal information to third parties;</Text>
                </ListItem>
                <ListItem>
                    <Text>the categories of personal information that we sold, shared, or disclosed for a business purpose;</Text>
                </ListItem>
                <ListItem>
                    <Text>the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</Text>
                </ListItem>
                <ListItem>
                    <Text>the business or commercial purpose for collecting, selling, or sharing personal information; and</Text>
                </ListItem>
                <ListItem>
                    <Text>the specific pieces of personal information we collected about you</Text>
                </ListItem>
            </List>
            <Text>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</Text>
            <Text>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</Text>
            <Text>We will not discriminate against you if you exercise your privacy rights</Text>
            <Text>Right to Limit Use and Disclosure of Sensitive Personal Information</Text>
            <Text>We do not process consumer's sensitive personal information.</Text>
            <Text>Verification process</Text>
            <Text>We will not discriminate against you if you exercise your privacy rights.Right to Limit Use and Disclosure of Sensitive Personal InformationWe do not process consumer's sensitive personal information.Verification processUpon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</Text>
            <Text>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</Text>
            <Text>Other privacy rights</Text>
            <List>
                <ListItem>
                    <Text>You may object to the processing of your personal information.</Text>
                </ListItem>
                <ListItem>
                    <Text>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</Text>
                </ListItem>
                <ListItem>
                    <Text>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</Text>
                </ListItem>
                <ListItem>
                    <Text>You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</Text>
                </ListItem>
            </List>
            <Text>To exercise these rights, you can contact us by email at mojosindex@gmail.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</Text>
            <Heading>11. DO WE MAKE UPDATES TO THIS NOTICE?</Heading>
            <Text>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</Text>
            <Text>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</Text>
            <Heading>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Heading>
            <Text>If you have questions or comments about this notice, you may email us at mojosindex@gmail.com or by post to:</Text>
            <Text>Mojos Index</Text>
            <Text>545 Brighton Circle</Text>
            <Text>Brandon, MS 39047</Text>
            <Text>United States</Text>
            <Heading>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Heading>
            <Text>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: www.mojosindex/account.com.</Text>
        </Container>
    )
}

export function TermsConditions(){

    return(
        <Container overflowWrap='break-word' w={['23.5rem', '25rem', '30rem']}>
            <Helmet>
                <title>Terms and Conditions</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. The Privacy Policy of mojos index.
                    Last updated January 06, 2023. This privacy notice for Mojos Index ('Company,' 'we,' 'us,' or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services')"
                />
            </Helmet>

            <Heading>TERMS AND CONDITIONS</Heading>
            <Text>Last updated January 06, 2023</Text>
            <Heading>TABLE OF CONTENTS</Heading>
            <List>
                <ListItem>
                    <Text>1. AGREEMENT TO TERMS</Text>
                </ListItem>
                <ListItem>
                    <Text>2. INTELLECTUAL PROPERTY RIGHTS</Text>
                </ListItem>
                <ListItem>
                    <Text>3. USER REPRESENTATIONS</Text>
                </ListItem>
                <ListItem>
                    <Text>4. USER REGISTRATION</Text>
                </ListItem>
                <ListItem>
                    <Text>5. FEES AND PAYMENT</Text>
                </ListItem>
                <ListItem>
                    <Text>6. CANCELLATION</Text>
                </ListItem>
                <ListItem>
                    <Text>7. PROHIBITED ACTIVITIES</Text>
                </ListItem>
                <ListItem>
                    <Text>8. USER GENERATED CONTRIBUTIONS</Text>
                </ListItem>
                <ListItem>
                    <Text>9. CONTRIBUTION LICENSE</Text>
                </ListItem>
                <ListItem>
                    <Text>10. GUIDELINES FOR REVIEWS</Text>
                </ListItem>
                <ListItem>
                    <Text>11. SUBMISSIONS</Text>
                </ListItem>
                <ListItem>
                    <Text>12. THIRD-PARTY WEBSITES AND CONTENT</Text>
                </ListItem>
                <ListItem>
                    <Text>13. U.S. GOVERNMENT RIGHTS</Text>
                </ListItem>
                <ListItem>
                    <Text>14. SITE MANAGEMENT</Text>
                </ListItem>
                <ListItem>
                    <Text>15. PRIVACY POLICY</Text>
                </ListItem>
                <ListItem>
                    <Text>16. TERM AND TERMINATION</Text>
                </ListItem>
                <ListItem>
                    <Text>17. MODIFICATIONS AND INTERRUPTIONS</Text>
                </ListItem>
                <ListItem>
                    <Text>18. GOVERNING LAW</Text>
                </ListItem>
                <ListItem>
                    <Text>19. DISPUTE RESOLUTION</Text>
                </ListItem>
                <ListItem>
                    <Text>20. CORRECTIONS</Text>
                </ListItem>
                <ListItem>
                    <Text>21. DISCLAIMER</Text>
                </ListItem>
                <ListItem>
                    <Text>22. LIMITATIONS OF LIABILITY</Text>
                </ListItem>
                <ListItem>
                    <Text>23. INDEMNIFICATION</Text>
                </ListItem>
                <ListItem>
                    <Text>24. USER DATA</Text>
                </ListItem>
                <ListItem>
                    <Text>25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Text>
                </ListItem>
                <ListItem>
                    <Text>26. CALIFORNIA USERS AND RESIDENTS</Text>
                </ListItem>
                <ListItem>
                    <Text>27. MISCELLANEOUS</Text>
                </ListItem>
                <ListItem>
                    <Text>28. CONTACT US</Text>
                </ListItem>
            </List>
            <Heading>1. AGREEMENT TO TERMS</Heading>
            <Text>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Mojos Index ("Company", “we”, “us”, or “our”), concerning your access to and use of the https://mojosindex.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).  We are registered in Mississippi, United States and have our registered office at 545 Brighton Circle, Brandon, MS 39047. You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</Text>
            <Text>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted.</Text>
            <Text>The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</Text>
            <Text>The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
            </Text>
            <Text>Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.
            </Text>
            <Heading>2. INTELLECTUAL PROPERTY RIGHTS</Heading>
            <Text>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </Text>
            <Text>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
            </Text>
            <Heading>3. USER REPRESENTATIONS</Heading>
            <Text>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
            </Text>
            <Text>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
            </Text>
            <Heading>4. USER REGISTRATION</Heading>
            <Text>You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </Text>
            <Heading>5. FEES AND PAYMENT</Heading>
            <Text>We accept the following forms of payment:</Text>
            <List>
                <ListItem>
                    <Text>- Visa</Text>
                </ListItem>
                <ListItem>
                    <Text>- Mastercard</Text>
                </ListItem>
                <ListItem>
                    <Text>- American Express</Text>
                </ListItem>
                <ListItem>
                    <Text>- Discover</Text>
                </ListItem>
                <ListItem>
                    <Text>- PayPal</Text>
                </ListItem>
            </List>
            <Text>You may be required to purchase or pay a fee to access some of our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. We bill you through an online billing account for purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.</Text>
            <Text>You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon making your purchase.</Text>
            <Text>We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Site.</Text>
            <Heading>6. CANCELLATION</Heading>
            <Text>You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.</Text>
            <Text>If you are unsatisfied with our services, please email us at mojosindex@gmail.com or call us at 6016720928</Text>
            <Heading>7. PROHIBITED ACTIVITIES</Heading>
            <Text>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</Text>
            <Text>As a user of the Site, you agree not to:</Text>
            <List>
                <ListItem>
                    <Text>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</Text>
                </ListItem>
                <ListItem>
                    <Text>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</Text>
                </ListItem>
                <ListItem>
                    <Text>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</Text>
                </ListItem>
                <ListItem>
                    <Text>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Use any information obtained from the Site in order to harass, abuse, or harm another person.</Text>
                </ListItem>
                <ListItem>
                    <Text>Make improper use of our support services or submit false reports of abuse or misconduct.</Text>
                </ListItem>
                <ListItem>
                    <Text>Use the Site in a manner inconsistent with any applicable laws or regulations.</Text>
                </ListItem>
                <ListItem>
                    <Text>Engage in unauthorized framing of or linking to the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</Text>
                </ListItem>
                <ListItem>
                    <Text>Delete the copyright or other proprietary rights notice from any Content.</Text>
                </ListItem>
                <ListItem>
                    <Text>Attempt to impersonate another user or person or use the username of another user.</Text>
                </ListItem>
                <ListItem>
                    <Text>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</Text>
                </ListItem>
                <ListItem>
                    <Text>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</Text>
                </ListItem>
                <ListItem>
                    <Text>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</Text>
                </ListItem>
                <ListItem>
                    <Text>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</Text>
                </ListItem>
                <ListItem>
                    <Text>Use a buying agent or purchasing agent to make purchases on the Site.</Text>
                </ListItem>
                <ListItem>
                    <Text>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</Text>
                </ListItem>
                <ListItem>
                    <Text>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</Text>
                </ListItem>
                <ListItem>
                    <Text>Sell or otherwise transfer your profile.</Text>
                </ListItem>
                <ListItem>
                    <Text>Use the Site to advertise or offer to sell goods and services.</Text>
                </ListItem>
            </List>
            <Heading>8. USER GENERATED CONTRIBUTIONS</Heading>
            <Text>The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</Text>
            <List>
                <ListItem>
                    <Text>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</Text>
                </ListItem>
                <ListItem>
                    <Text>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms and Conditions.</Text>
                </ListItem>
                <ListItem>
                    <Text>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms and Conditions.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions are not false, inaccurate, or misleading.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions do not violate any applicable law, regulation, or rule.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions do not violate the privacy or publicity rights of any third party.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</Text>
                </ListItem>
                <ListItem>
                    <Text>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms and Conditions, or any applicable law or regulation.</Text>
                </ListItem>
            </List>
            <Text>Any use of the Site in violation of the foregoing violates these Terms and Conditions and may result in, among other things, termination or suspension of your rights to use the Site.</Text>
            <Heading>9. CONTRIBUTION LICENSE</Heading>
            <Text>You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</Text>
            <Text>By submitting suggestions or other feedback regarding the Site, you agree that we can use and share  such feedback for any purpose without compensation to you.</Text>
            <Text>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</Text>
            <Heading>10. GUIDELINES FOR REVIEWS</Heading>
            <Text>We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.</Text>
            <Text>We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.</Text>
            <Heading>11. SUBMISSIONS</Heading>
            <Text>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</Text>
            <Heading>12. THIRD_PARTY WEBSITES AND CONTENT</Heading>
            <Text>The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms and Conditions no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</Text>
            <Heading>13. U.S. GOVERNMENT RIGHTS</Heading>
            <Text>Our services are “commercial items” as defined in Federal Acquisition Regulation (“FAR”) 2.101. If our services are acquired by or on behalf of any agency not within the Department of Defense (“DOD”), our services are subject to the terms of these Terms and Conditions in accordance with FAR 12.212 (for computer software) and FAR 12.211 (for technical data). If our services are acquired by or on behalf of any agency within the Department of Defense, our services are subject to the terms of these Terms and Conditions in accordance with Defense Federal Acquisition Regulation (“DFARS”) 227.7202-3. In addition, DFARS 252.227-7015 applies to technical data acquired by the DOD. This U.S. Government Rights clause is in lieu of, and supersedes, any other FAR, DFARS, or other clause or provision that addresses government rights in computer software or technical data under these Terms and Conditions.</Text>
            <Heading>14. SITE MANAGEMENT</Heading>
            <Text>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms and Conditions; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms and Conditions, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</Text>
            <Heading>15. PRIVACY POLICY</Heading>
            <Text>We care about data privacy and security. Please review our Privacy Policy: www.mojosindex/privacy.com. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms and Conditions. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you agree to have your data transferred to and processed in the United States. </Text>
            <Heading>16. TERM AND TERMINATION</Heading>
            <Text>These Terms and Conditions shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS AND CONDITIONS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</Text>
            <Text>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</Text>
            <Heading>17. MODIFICATIONS AND INTERRUPTIONS</Heading>
            <Text>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</Text>
            <Text>We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms and Conditions will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.</Text>
            <Heading>18. GOVERNING LAW</Heading>
            <Text>These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of the State of Mississippi applicable to agreements made and to be entirely performed within the State of Mississippi, without regard to its conflict of law principles.</Text>
            <Heading>19. DISPUTE RESOLUTION</Heading>
            <Text>Informal Negotiations</Text>
            <Text>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms and Conditions (each "Dispute" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</Text>
            <Text>Binding Arbitration</Text>
            <Text>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA website www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Brandon, Mississippi. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.</Text>
            <Text>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Brandon, Mississippi, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms and Conditions.</Text>
            <Text>In no event shall any Dispute brought by either Party related in any way to the Site be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</Text>
            <Text>Restrictions</Text>
            <Text>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</Text>
            <Text>Exceptions to Informal Negotiations and Arbitration</Text>
            <Text>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</Text>
            <Heading>20. CORRECTIONS</Heading>
            <Text>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</Text>
            <Heading>21. DISCLAIMER</Heading>
            <Text>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</Text>
            <Heading>22. LIMITATIONS OF LIABILITY</Heading>
            <Text>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</Text>
            <Heading>23. INDEMNIFICATION</Heading>
            <Text>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms and Conditions; (3) any breach of your representations and warranties set forth in these Terms and Conditions; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</Text>
            <Heading>24. USER DATA</Heading>
            <Text>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</Text>
            <Heading>25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Heading>
            <Text>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</Text>
            <Heading>26. CALIFORNIA USERS AND RESIDENTS</Heading>
            <Text>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.27.</Text>
            <Heading>27. MISCELLANEOUS</Heading>
            <Text>These Terms and Conditions and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms and Conditions shall not operate as a waiver of such right or provision. These Terms and Conditions operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms and Conditions is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and Conditions and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms and Conditions or use of the Site. You agree that these Terms and Conditions will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms and Conditions and the lack of signing by the parties hereto to execute these Terms and Conditions.</Text>
            <Heading>28. CONTACT US</Heading>
            <Text>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</Text>
            <List>
                <ListItem>
                    <Text>Mojos Index</Text>
                </ListItem>
                <ListItem>
                    <Text>545 Brighton Circle</Text>
                </ListItem>
                <ListItem>
                    <Text>Brandon, MS 39047</Text>
                </ListItem>
                <ListItem>
                    <Text>United States</Text>
                </ListItem>
                <ListItem>
                    <Text> Phone: 6016720928</Text>
                </ListItem>
                <ListItem>
                    <Text>mojosindex@gmail.com</Text>
                </ListItem>
            </List>
        </Container>
    )
}

export function Return(){

    return(<Container overflowWrap='break-word' w={['23.5rem', '25rem', '30rem']}>
        <Helmet>
            <title>Return Policy</title>
            <meta
                name="description"
                content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. The Privacy Policy of mojos index.
                    Last updated January 06, 2023. Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund or an exchange."
            />
        </Helmet>
        <Heading>RETURN POLICY</Heading>
        <Text>Last updated January 07, 2023</Text>
        <Text>Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund or an exchange. Please see below for more information on our return policy.</Text>
        <Heading>RETURNS</Heading>
        <Text>All returns must be postmarked within thirty (30) days of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.</Text>
        <Heading>RETURN PROCESS</Heading>
        <Text>To return an item, please email customer service at mojosindex@gmail.com to obtain a Return Merchandise Authorization (RMA) number. After receiving a RMA number, place the item securely in its original packaging, and mail your return to the following address:</Text>
        <List>
            <ListItem>
                <Text>Mojos Index</Text>
            </ListItem>
            <ListItem>
                <Text>Attn: Returns</Text>
            </ListItem>
            <ListItem>
                <Text>RMA #</Text>
            </ListItem>
            <ListItem>
                <Text>545 Brighton Circle</Text>
            </ListItem>
            <ListItem>
                <Text>Brandon, MS 39047</Text>
            </ListItem>
            <ListItem>
                <Text>United States</Text>
            </ListItem>
        </List>
        <Text>Please note, you will be responsible for all return shipping charges. We strongly recommend that you use a trackable method to mail your return.</Text>
        <Heading>REFUNDS</Heading>
        <Text>After receiving your return and inspecting the condition of your item, we will process your return or exchange. Please allow at least fourteen (14) days from the receipt of your item to process your return or exchange. We will notify you by email when your return has been processed.</Text>
        <Heading>EXCEPTIONS</Heading>
        <Text>For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.</Text>
        <Text>Please Note</Text>
        <List>
            <ListItem>
                <Text>Sale items are FINAL SALE and cannot be returned.</Text>
            </ListItem>
        </List>
        <Heading>QUESTIONS</Heading>
        <Text>If you have any questions concerning our return policy, please contact us at:</Text>
        <List>
            <ListItem>
                <Text>6016720928</Text>
            </ListItem>
            <ListItem>
                <Text>mojosindex@gmail.com</Text>
            </ListItem>
        </List>
    </Container>)
}

export function Shipping(){

    return(<Container overflowWrap='break-word' w={['23.5rem', '25rem', '30rem']}>
        <Helmet>
            <title>Shipping Policy</title>
            <meta
                name="description"
                content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. The Shipping Policy of mojos index.
                    Last updated January 06, 2023. This Shipping & Delivery Policy is part of our Terms and Conditions ('Terms') and should be therefore read alongside our main Terms:"
            />
        </Helmet>
        <Heading>SHIPPING & DELIVERY POLICY</Heading>
        <Text>Last updated January 07, 2023</Text>
        <Text>This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be therefore read alongside our main Terms: www.mojosindex/terms&conditions.com.</Text>
        <Text>Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.</Text>
        <Heading>WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</Heading>
        <Text>We offer various shipping options. In some cases a third-party supplier may be managing our inventory and will be responsible for shipping your products.</Text>
        <Text>Shipping Fees</Text>
        <Text>We offer shipping at the following rates:</Text>
        <Table>
            <Thead>
                <Tr>
                    <Th>Shipping Method</Th>
                    <Th>Shipping Fee</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Flat Rate (10 Days)</Td>
                    <Td>15</Td>
                </Tr>
            </Tbody>
        </Table>
        <Text>All times and dates given for delivery of the products are given in good faith but are estimates only.</Text>
        <Heading>DO YOU DELIVER INTERNATIONALLY?</Heading>
        <Text>We do not offer international shipping.</Text>
        <Heading>WHAT HAPPENS IF MY ORDER IS DELAYED?</Heading>
        <Text>If delivery is delayed for any reason we will let you know as soon as possible and will advise you of a revised estimated date for delivery.</Text>
        <Heading>QUESTIONS ABOUT RETURNS?</Heading>
        <Text>If you have questions about returns, please review our Return Policy: www.mojosindex/returns.com.</Text>
        <Heading>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</Heading>
        <Text>If you have any further questions or comments, you may contact us by:</Text>
        <List>
            <ListItem>
                <Text>Phone: 6016720928</Text>
            </ListItem>
            <ListItem>
                <Text>Email: mojosindex@gmail.com</Text>
            </ListItem>
        </List>
    </Container>)
}