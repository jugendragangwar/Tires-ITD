import React from 'react';
import Navbar from '../../components/navbar/Header';
import Footer from '../../components/footer/NewFooter';

function Suppliers() {
  return (
    <>
      <Navbar isContactPage={true} />
      <div className="container mx-auto px-4 pt-40 pb-16 flex">
        <div className="w-full ">
          <h1 className="text-3xl lg:text-6xl leading-5.125rem text-blue-900 font-bold mb-6 text-center">Terms and Conditions of Purchase</h1>
         <ol className="list-decimal pl-6 mb-8">
           <p>&nbsp;</p>
              <h1 className=" text-2xl font-bold mb-4">1. Formation; Offer; Acceptance; Exclusive Terms.</h1><p>&nbsp;</p>
              <div className="font-normal text-base leading-normal text-black tracking-normal mt-3 ">
                <li>
                    <p>
                    Each purchase order, together with these terms and conditions of purchase (the 'Terms'), is an offer by the buyer (the 'Buyer') named on the blanket or spot buy purchase order (each an 'Order') to the party to whom such Order is addressed and such party's applicable affiliates and subsidiaries ('Seller') to enter into the agreement it describes, and, subject to these Terms, it shall be the complete and exclusive record of such offer and agreement for the purchase of the products ('Products') and/or services ('Services') (Products and/or Services may also be referred to as 'Ordered Items'). No Order constitutes an acceptance by Buyer of any offer or proposal by Seller, whether reflected in Seller's quotation, acknowledgement, invoice, or otherwise. In the event that any Seller quotation or proposal is held to be an offer, that offer is expressly rejected and is replaced in its entirety by the subsequent Order made by Buyer.
                    </p>
                </li>
                <li>
                    <p>A contract is formed when Seller accepts the offer of Buyer. Acceptance of an Order by Seller may be accomplished by, the earlier of Seller's: A) shipment of Products; B) performance of Services; C) commencement of work on an Order; D) written acknowledgement confirming acceptance; or E) any other conduct of Seller that recognizes the existence of a contract pertaining to the Ordered Items. The term Order shall refer to the Buyer's offer and, once accepted by Seller, the resulting contract.</p>
                </li>
                <li>
                   <p>
                    Acceptance is expressly limited to these Terms, and any terms and conditions that are otherwise expressly referenced on the face of the Order, are incorporated herein by reference, or as mutually agreed upon, in writing, as evidenced by a signed agreement amongst the parties. No purported acceptance of any Order on terms and conditions which modify, supersede, supplement or otherwise alter these Terms shall be binding upon Buyer and such terms and conditions are hereby rejected and replaced by these Terms unless Seller's proffered terms or conditions are accepted in a writing signed by an authorized representative of Buyer (a 'Signed Writing'), notwithstanding Buyer's acceptance of or payment for any shipment of the Ordered Items or similar act of Buyer. While a contrary proposal by Seller does not operate as a rejection of the Order, it is deemed a material alteration of the Order.
                    </p>
                       </li>
                       <li>
                   <p>
                    As an exception to the foregoing, any signed written agreement between Buyer and Seller regarding the subject matter of the Order that contains terms and conditions that are inconsistent with these Terms, that is in effect at the time Buyer submits an Order, will have priority over these Terms.
                    </p>
                       </li>
                       <li>
                  <p>
                   Buyer's affiliates may from time to time administer purchasing for Buyer and its other affiliates and subsidiaries, and issue Orders containing logos of Buyer or its affiliates but identifying the Buyer as the responsible party. Seller acknowledges and agrees that no such Order shall constitute or be interpreted to represent an Order of such affiliate or a guaranty from such affiliate of any obligations or liabilities of the Buyer identified on the Order.
                   </p>
                       </li>
                             </div>
              <p>&nbsp;</p>
              </ol>
              <ol className="list-decimal pl-6 mb-8">
              <h1 className=" text-2xl font-bold mb-4">2. Applicability of Terms.</h1>
              <p>&nbsp;</p>
              <div className="font-normal text-base leading-normal text-black tracking-normal mt-3 ">
              <li>
                  <p>
                   These Terms, as may be amended from time to time, apply to the purchase by Buyer of Ordered Items or on any document expressly referenced on the face of such Order describing such Ordered Items. Certain of the sections of the Terms apply only to particular types of Ordered Items, but only where expressly limited to those types of Ordered Items indicated on the Order.
                   </p>
                </li><p>&nbsp;</p>
            <p>&nbsp;</p>
              </div>
              </ol>
              <ol className="list-decimal pl-6 mb-8">
              <h1 className=" text-2xl font-bold mb-4">3. Quantity/Forecasts.</h1><p>&nbsp;</p>
              <div className="font-normal text-base leading-normal text-black tracking-normal mt-3 ">
              <li>
                 <p>
                  Forecasts  Buyer may provide Seller with forecasts of its future anticipated Ordered Item requirements. Seller acknowledges that any such forecasts, including, without limitation, estimated annual volumes, are for informational purposes only and are based on a number of factors which may change over time. Buyer makes no representation, warranty, guaranty or commitment of any kind or nature, express or implied, regarding any such forecasts, including, without limitation, with respect to the accuracy or completeness of such forecasts.
                  </p>
                </li><p>&nbsp;</p><p>&nbsp;</p>
              </div>
          </ol>

        </div>
      </div>
              <Footer />
    </>
  )
}

export default Suppliers;