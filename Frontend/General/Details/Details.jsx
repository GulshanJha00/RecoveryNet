import React, { useState } from "react";
import "./Details.css";

const Details = () => {
  const [isLostOpen, setIsLostOpen] = useState(false);
  const [isFoundOpen, setIsFoundOpen] = useState(false);

  const toggleLost = () => setIsLostOpen(!isLostOpen);
  const toggleFound = () => setIsFoundOpen(!isFoundOpen);

  return (
    <div className="bodyyy">
      <div className="how">
        <h1>How to Use RecoveryNet</h1>
        <p>
          RecoveryNet is your go-to platform for reporting and finding lost
          items within your community. Whether you've misplaced something or
          found an item that doesn't belong to you, RecoveryNet makes the
          process of reporting and finding as straightforward as possible.
        </p>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header" onClick={toggleLost}>
            <h2>Lost an Item?</h2>
            <span>{isLostOpen ? "-" : "+"}</span>
          </div>
          {isLostOpen && (
            <div className="accordion-content">
              <p>
                If you've lost something valuable, RecoveryNet helps you to
                report it and increase the chances of getting it back. Here's
                how to use the "Lost" section:
              </p>
              <ol>
                <li>
                  <h3> Navigate to the Lost Section:</h3>
                  <p>
                    From the homepage, click on the "Lost" button. This will
                    direct you to the lost item submission form.
                  </p>
                </li>
                <li>
                  <h3>Fill in the Details:</h3>
                  <p>
                    <strong>Item Description:</strong> Provide a detailed
                    description of the item you've lost. Include specific
                    details like color, brand, size, and any unique identifiers.
                    <br />
                    <strong>Location:</strong> Mention the last known location
                    where you had the item or where you think it might have been
                    lost.
                    <br />
                    <strong>Date and Time:</strong> Enter the approximate date
                    and time when you lost the item.
                    <br />
                    <strong>Contact Information:</strong> Provide your contact
                    details, such as email and phone number, so that someone who
                    finds your item can reach out to you.
                    <br />
                    <strong>Upload a Picture (Optional but Recommended):</strong>{" "}
                    If you have a picture of the item, upload it. Visuals can
                    greatly increase the chances of your item being recognized.
                  </p>
                </li>
                <li>
                  <h3>Submit Your Report:</h3>
                  <p>
                    After filling in all the necessary details, click the
                    "Submit" button. Your lost item report will be posted on the
                    platform, allowing others to view it and reach out to you if
                    they have found your item.
                  </p>
                </li>
                <li>
                  <h3>Monitor Your Submission:</h3>
                  <p>
                    Keep an eye on your post and check back regularly. If
                    someone finds your item, they can contact you directly using
                    the information you provided.
                  </p>
                </li>
                <li>
                  <h3>Mark as Recovered:</h3>
                  <p>
                    Once you have recovered your lost item, you can mark the
                    post as "Recovered" or delete it to avoid further inquiries.
                  </p>
                </li>
              </ol>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div className="accordion-header" onClick={toggleFound}>
            <h2>Found an Item?</h2>
            <span>{isFoundOpen ? "-" : "+"}</span>
          </div>
          {isFoundOpen && (
            <div className="accordion-content">
              <p>
                If you've come across an item that seems out of place, you can
                use the "Found" section to report it and help reunite it with
                its owner. Here’s how to use the "Found" section:
              </p>
              <ol>
                <li>
                  <h3>Navigate to the Found Section:</h3>
                  <p>
                    From the homepage, click on the "Found" button. This will
                    direct you to the found item submission form.
                  </p>
                </li>
                <li>
                  <h3>Fill in the Details:</h3>
                  <p>
                    <strong>Item Description:</strong> Provide a detailed
                    description of the item you found. Be as specific as
                    possible to help the rightful owner identify it.
                    <br />
                    <strong>Location:</strong> Mention the exact location where
                    you found the item.
                    <br />
                    <strong>Date and Time:</strong> Enter the date and time when
                    you found the item.
                    <br />
                    <strong>Contact Information:</strong> Provide your contact
                    details so that the owner of the item can reach out to you.
                    <br />
                    <strong>Upload a Picture (Optional but Recommended):</strong>{" "}
                    If possible, upload a picture of the found item. This can
                    help the owner recognize it more easily.
                  </p>
                </li>
                <li>
                  <h3>Submit Your Report:</h3>
                  <p>
                    Once you've filled out the details, click the "Submit"
                    button. The information about the found item will be posted
                    on the platform.
                  </p>
                </li>
                <li>
                  <h3>Wait for the Owner to Contact You:</h3>
                  <p>
                    After submitting the report, the owner can view your post
                    and reach out to you using the contact information you
                    provided.
                  </p>
                </li>
                <li>
                  <h3>Arrange the Return:</h3>
                  <p>
                    Coordinate with the owner to return the item. You can
                    arrange a safe meeting point or hand it over to a designated
                    authority if applicable.
                  </p>
                </li>
                <li>
                  <h3>Mark as Returned:</h3>
                  <p>
                    After returning the item to its rightful owner, you can mark
                    the post as "Returned" or delete it to keep the platform
                    up-to-date.
                  </p>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>

      <div className="general-tips">
        <h2>General Tips for Both Sections:</h2>
        <ul>
          <li>
            <strong>Be Honest and Detailed:</strong> The more accurate and
            honest you are in your descriptions, the higher the chances of a
            successful recovery or return.
          </li>
          <li>
            <strong>Update Your Posts:</strong> If there are any changes, like
            finding new information about where you lost something or if you've
            already found the owner, make sure to update your post.
          </li>
          <li>
            <strong>Stay Safe:</strong> When meeting someone to exchange a lost
            or found item, choose a public and safe location. If possible, bring
            someone along with you.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
