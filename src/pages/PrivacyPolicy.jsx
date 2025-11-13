import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rich-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              We respect your Privacy
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              noa's <span className="italic text-soft-gold">Privacy Policy</span>
            </h1>
            <p className="text-warm-cream/90 text-lg">
              Last updated August 21, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-rich-black/80 leading-relaxed mb-6">
                This privacy notice for Noa's cafe ('we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80 mb-6">
                <li>Download and use our mobile application (Noa's Cafe), or any other application of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="text-rich-black/80 leading-relaxed">
                <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@noas.uk" className="text-coffee-brown hover:underline">info@noas.uk</a>.
              </p>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-warm-cream p-8 mb-12"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">Summary of Key Points</h2>
              <div className="space-y-4 text-rich-black/80">
                <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
                <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
                <p><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</p>
                <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
                <p><strong>How do we keep your information safe?</strong> We have organisational and technical processes and procedures in place to protect your personal information.</p>
              </div>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-2 text-rich-black/80">
                <li><a href="#section1" className="text-coffee-brown hover:underline">What Information Do We Collect?</a></li>
                <li><a href="#section2" className="text-coffee-brown hover:underline">How Do We Process Your Information?</a></li>
                <li><a href="#section3" className="text-coffee-brown hover:underline">What Legal Bases Do We Rely On?</a></li>
                <li><a href="#section4" className="text-coffee-brown hover:underline">When and With Whom Do We Share Information?</a></li>
                <li><a href="#section5" className="text-coffee-brown hover:underline">How Do We Handle Your Social Logins?</a></li>
                <li><a href="#section6" className="text-coffee-brown hover:underline">How Long Do We Keep Your Information?</a></li>
                <li><a href="#section7" className="text-coffee-brown hover:underline">How Do We Keep Your Information Safe?</a></li>
                <li><a href="#section8" className="text-coffee-brown hover:underline">What Are Your Privacy Rights?</a></li>
                <li><a href="#section9" className="text-coffee-brown hover:underline">Controls for Do-Not-Track Features</a></li>
                <li><a href="#section10" className="text-coffee-brown hover:underline">Do We Make Updates to This Notice?</a></li>
                <li><a href="#section11" className="text-coffee-brown hover:underline">How Can You Contact Us?</a></li>
                <li><a href="#section12" className="text-coffee-brown hover:underline">How Can You Review, Update, or Delete Data?</a></li>
              </ol>
            </motion.div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section1"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">1. What Information Do We Collect?</h2>
              
              <h3 className="text-2xl font-display text-coffee-brown mb-4">Personal information you disclose to us</h3>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> We collect personal information that you provide to us.
              </p>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <strong>Personal Information Provided by You.</strong> The personal information that we collect may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80 mb-6">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Usernames</li>
                <li>Passwords</li>
                <li>Contact preferences</li>
              </ul>

              <p className="text-rich-black/80 leading-relaxed mb-4">
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>

              <p className="text-rich-black/80 leading-relaxed mb-4">
                <strong>Application Data.</strong> If you use our application(s), we also may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80 mb-6">
                <li><strong>Geolocation Information:</strong> We may request access or permission to track location-based information from your mobile device.</li>
                <li><strong>Mobile Device Access:</strong> We may request access to certain features from your mobile device, including bluetooth and other features.</li>
                <li><strong>Push Notifications:</strong> We may request to send you push notifications regarding your account or features of the application.</li>
              </ul>

              <h3 className="text-2xl font-display text-coffee-brown mb-4 mt-8">Information automatically collected</h3>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                The information we collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80 mb-6">
                <li><strong>Log and Usage Data:</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect.</li>
                <li><strong>Device Data:</strong> Information about your computer, phone, tablet, or other device you use to access the Services.</li>
                <li><strong>Location Data:</strong> Information about your device's location, which can be either precise or imprecise.</li>
              </ul>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section2"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">2. How Do We Process Your Information?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
              </p>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                We process your personal information for a variety of reasons, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80">
                <li>To facilitate account creation and authentication and otherwise manage user accounts</li>
                <li>To determine the effectiveness of our marketing and promotional campaigns</li>
                <li>To save or protect an individual's vital interest</li>
              </ul>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section3"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">3. What Legal Bases Do We Rely On?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.
              </p>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                We may rely on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80">
                <li><strong>Consent:</strong> We may process your information if you have given us permission to use your personal information for a specific purpose.</li>
                <li><strong>Legitimate Interests:</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests.</li>
                <li><strong>Legal Obligations:</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
                <li><strong>Vital Interests:</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
              </ul>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section4"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">4. When and With Whom Do We Share Information?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> We may share information in specific situations described in this section.
              </p>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us. Categories include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80 mb-4">
                <li>Affiliate Marketing Programs</li>
                <li>User Account Registration & Authentication Services</li>
                <li>Cloud Computing Services</li>
              </ul>
              <p className="text-rich-black/80 leading-relaxed">
                <strong>Business Transfers.</strong> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section5"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">5. How Do We Handle Your Social Logins?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> If you choose to register or log in using a social media account, we may have access to certain information about you.
              </p>
              <p className="text-rich-black/80 leading-relaxed">
                Our Services offer you the ability to register and log in using your third-party social media account details. Where you choose to do this, we will receive certain profile information about you from your social media provider. We will use the information we receive only for the purposes described in this privacy notice.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section6"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">6. How Long Do We Keep Your Information?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.
              </p>
              <p className="text-rich-black/80 leading-relaxed">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this notice. When we have no ongoing legitimate business need to process your information, we will either delete or anonymise it.
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section7"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">7. How Do We Keep Your Information Safe?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> We aim to protect your personal information through a system of organisational and technical security measures.
              </p>
              <p className="text-rich-black/80 leading-relaxed">
                We have implemented appropriate security measures designed to protect your personal information. However, no electronic transmission over the Internet can be guaranteed to be 100% secure. You should only access the Services within a secure environment.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section8"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">8. What Are Your Privacy Rights?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> In some regions, you have rights that allow you greater access to and control over your personal information.
              </p>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-rich-black/80 mb-4">
                <li>Request access and obtain a copy of your personal information</li>
                <li>Request rectification or erasure</li>
                <li>Restrict the processing of your personal information</li>
                <li>Data portability</li>
                <li>Object to the processing of your personal information</li>
              </ul>
              
              <div className="bg-warm-cream p-6 mb-4">
                <p className="text-rich-black/80 leading-relaxed mb-4">
                  <strong>Account Information</strong>
                </p>
                <p className="text-rich-black/80 leading-relaxed mb-4">
                  If you would like to review or change information in your account or terminate your account, you can:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-rich-black/80">
                  <li>Log in to your account settings and update your user account</li>
                  <li>Contact us using the contact information provided</li>
                </ul>
              </div>

              <p className="text-rich-black/80 leading-relaxed">
                If you have questions about your privacy rights, email us at <a href="mailto:info@noas.uk" className="text-coffee-brown hover:underline">info@noas.uk</a>.
              </p>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section9"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">9. Controls for Do-Not-Track Features</h2>
              <p className="text-rich-black/80 leading-relaxed">
                Most web browsers include a Do-Not-Track ('DNT') feature. At this stage, no uniform technology standard for recognising DNT signals has been finalised. As such, we do not currently respond to DNT browser signals.
              </p>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section10"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">10. Do We Make Updates to This Notice?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                <em>In Short:</em> Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
              <p className="text-rich-black/80 leading-relaxed">
                We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date. We encourage you to review this notice frequently.
              </p>
            </motion.div>

            {/* Section 11 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section11"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">11. How Can You Contact Us About This Notice?</h2>
              <p className="text-rich-black/80 leading-relaxed mb-4">
                If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO), Sumith Damodaran, by email at <a href="mailto:operations@noas.uk" className="text-coffee-brown hover:underline">operations@noas.uk</a>, or contact us by post at:
              </p>
              <div className="bg-warm-cream p-6">
                <p className="text-rich-black/80 leading-relaxed">
                  <strong>Noa's cafe</strong><br />
                  The Porter Building,<br />
                  1 Brunel Wy,<br />
                  Slough SL1 1FQ
                </p>
              </div>
            </motion.div>

            {/* Section 12 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="section12"
              className="mb-12 scroll-mt-32"
            >
              <h2 className="text-3xl font-display text-rich-black mb-6">12. How Can You Review, Update, or Delete Data?</h2>
              <p className="text-rich-black/80 leading-relaxed">
                You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a data subject access request by email at <a href="mailto:operations@noas.uk" className="text-coffee-brown hover:underline">operations@noas.uk</a>.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
