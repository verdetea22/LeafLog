// pages/tos.tsx
"use client";

import Head from "next/head";
import Header from "../../components/Header";
import { useState, FormEvent, ChangeEvent } from "react";
import styles from "./Tos.module.css";


export default function TosPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Privacy Policy</title>
          <meta name="description" content="Privacy Policy" />
        </Head>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>
      </div>
      <div>
        Effective Date: [Date]
        <br/><br/>
        LeafLog ("the Site") is committed to protecting the privacy of its users. 
        This Privacy Policy outlines how we collect, use, disclose, and safeguard 
        your personal information when you use our website.
        <br/><br/>
        Information We Collect:
        <br/>
        Personal Information: We may collect personal information such as your name, 
        email address, and location when you register an account with LeafLog or 
        voluntarily provide such information.
        <br/>Plant Data: LeafLog allows users to log information about their plants,
        including species, care routines, and growth progress. 
        <br/>Usage Data: We may collect non-personal information about how you 
        interact with the Site, such as the features you use, the frequency of use, and 
        device information.
        <br/><br/>Use of Information:
        <br/>
        Personal Information: We may use your personal information to provide you with the 
        services offered by LeafLog, communicate with you, and improve the Site's functionality and user experience.
        <br/>Plant Data: The plant data you log in LeafLog is used solely to provide you
        with plant care recommendations and track your plant's progress. This data is stored
        securely and is not shared with third parties unless you choose to do so.
        <br/>Usage Data: We may use usage data to analyze trends, monitor the performance 
        of the Site, and make improvements.
        <br/><br/>Disclosure of Information:
        <br/>We do not sell, trade, or otherwise transfer your personal information to 
        third parties without your consent, except as required by law or as necessary to 
        provide you with the services offered by LeafLog.
        <br/>
        <br/>Data Security:
        <br/>LeafLog takes reasonable measures to protect the security of your personal 
        information and plant data. However, no method of transmission over the internet or 
        electronic storage is 100% secure, and we cannot guarantee absolute security.
        <br/><br/>Children's Privacy:
        <br/>LeafLog is not intended for use by children under the age of 13. We do not 
        knowingly collect personal information from children under 13. If you are a parent 
        or guardian and believe that your child has provided us with personal information, 
        please contact us so that we can delete the information.
        <br/><br/>Changes to this Privacy Policy:

        <br/>LeafLog reserves the right to modify or update this Privacy Policy at any 
        time. We will notify users of any changes by posting the revised policy on our website 
        or within the Site. Your continued use of LeafLog after the posting of changes 
        constitutes acceptance of the revised policy.
        <br/><br/>Contact Us:

        <br/>If you have any questions or concerns about this Privacy Policy or our data 
        practices, please contact us at [Contact Information].
        By using LeafLog, you consent to the collection, use, and disclosure of your 
        information as described in this Privacy Policy.
      </div>
      <div className={styles.container}>
        <Head>
          <title>Terms of Service</title>
          <meta name="description" content="Terms of Service" />
        </Head>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Terms of Service</h1>
        </div>
      </div>
      <div>
        <br/>
        Acceptance of Terms:
        By using LeafLog ("the Site"), you agree to be bound by the terms and conditions 
        outlined in this document. If you do not agree to these terms, please refrain from using the Site.
        <br/><br/>
        Description of Service:
        LeafLog is a website designed to assist users in logging and tracking 
        information about their plants, including care routines, watering schedules, and growth progress.
        <br/><br/>
        User Conduct:
        Users are solely responsible for their conduct while using the Site. This includes 
        adherence to all applicable laws and regulations. Users must not engage in any activities that 
        could harm the integrity or functionality of the Site.
        <br/><br/>
        User Accounts:
        Users may be required to create an account to access certain features of the Site. Users 
        are responsible for maintaining the confidentiality of their account credentials and for 
        all activities that occur under their account.
        <br/><br/>
        Privacy Policy:
        LeafLog respects user privacy and is committed to protecting personal information. Our 
        Privacy Policy outlines how we collect, use, and disclose user data. By using the Site, 
        you consent to the terms of our Privacy Policy.
        <br/><br/>
        Intellectual Property:
        All content and materials provided through the Site, including but not limited to text, 
        graphics, logos, and software, are the property of LeafLog.
        <br/><br/>
        Limitation of Liability:
        LeafLog is provided on an "as is" and "as available" basis. We make no warranties or 
        representations regarding the reliability, accuracy, or availability of the Site. In no 
        event shall LeafLog be liable for any indirect, incidental, special, or consequential 
        damages arising out of or in connection with the use of the Site.
        <br/><br/>
        Modifications to Terms:
        LeafLog reserves the right to modify or update these terms at any time without prior notice. 
        Users are encouraged to review the terms periodically for changes. Continued use of the Site 
        after the posting of modifications constitutes acceptance of the revised terms.
        <br/><br/>
        Termination:
        LeafLog reserves the right to terminate or suspend access to the Site at any time, with or 
        without cause, and without prior notice. Upon termination, all rights granted to users will 
        cease immediately.
        <br/><br/>
        Governing Law:
        These terms shall be governed by and construed in accordance with the laws of New Jersey, 
        without regard to its conflict of law provisions.
        <br/><br/>
        By using LeafLog, you acknowledge that you have read, understood, and agreed to abide by 
        these Terms of Service. If you have any questions or concerns regarding these terms, please 
        contact us at [Contact Information].
      </div>
    </>
  );
}