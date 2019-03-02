<div id="proj-spec-div">
  <h2 id="project-spec-headline" translate="">Project Specification</h2>
  <h3 id="project-name"><p>Mobile Flashcards</p>
  </h3>
  <div style=""> <span><p>Application Setup</p>
</span>
    <table>
      <thead>
      <tr>
        <th><span translate="">Criteria</span></th>
        <th><span translate="">Meets Specifications</span></th>
        <th><span translate="">Completed</span></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><p>Is the application easy to install and start?</p>
        </td>
        <td>
          <p>The application requires only <code>yarn install</code> and <code>yarn start</code> to install and launch. <code>npm</code> can be used in place of <code>yarn</code>.
          </p>
        </td>
        <td>complete</td>
      </tr>
      <tr>
        <td>
          <p>Does the application include a README with clear installation and launch instructions?</p>
        </td>
        <td>
          <p>A README is included with the project. The README includes clear instructions for installing and launching the project.</p>
        </td>
        <td>complete</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div> <span><p>Application Functionality</p>
</span>
    <table>
      <thead>
      <tr>
        <th><span translate="">Criteria</span></th>
        <th><span translate="">Meets Specifications</span></th>
        <th><span translate="">Completed</span></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><p>Is the initial view a Deck List view?</p>
        </td>
        <td>
          <p>The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.</p>
        </td>
        <td>complete</td>
      </tr>
      <tr>
        <td><p>Does the Deck List view function correctly?</p>
        </td>
        <td>
          <p>Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.</p>
        </td>
           <td><p>- Deck routes to individual view</p><p>- Needs animation</p></td>
      </tr>
      <tr>
        <td>
          <p>Does the Individual Deck view display the correct information?</p>
        </td>
        <td><p>The individual deck view includes (at a minimum):</p>
          <ul>
            <li>The deck title</li>
            <li>Number of cards in the deck</li>
            <li>Option to start a quiz for that deck</li>
            <li>Option to add a new question to the deck</li>
          </ul>
        </td>
        <td>Complete</td>
      </tr>
      <tr>
        <td><p>Does the Individual Deck view function correctly?</p>
        </td>
        <td>
          <p>Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.</p>
        </td>
        <td>Complete</td>
      </tr>
      <tr>
        <td><p>Does the New Question view function correctly?</p>
        </td>
        <td>
          <p>The New Question view includes a form with fields for a question and answer, and a submit button.</p>
          <p>Submitting the form correctly adds the question to the deck.</p>
        </td>
        <td><p>Complete</p></td>
      </tr>
      <tr>
        <td><p>Does the Quiz View function correctly?</p>
        </td>
        <td>
          <ul>
            <li>The Quiz view starts with a question from the selected deck. </li>
            <li>The question is displayed, along with a button to show the answer.</li>
            <li>Pressing the 'Show Answer' button displays the answer.</li>
            <li>Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'</li>
            <li>The view displays the number of questions remaining.</li>
            <li>When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.</li>
            <li>When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.</li>
            <li>Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.</li>
          </ul>
        </td>
        <td>Complete
        <p>- Need to add number of remaining questions: complete</p>
        <p>- Need to display score after last question is answered : complete</p>
        <p>- Need to add button to start quiz over or return back to deck: complete</p>
        </td>
      </tr>
      <tr>
        <td><p>Does the New Deck view work correctly?</p>
        </td>
        <td>
          <p>The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button. </p>
          <p>Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.</p>
        </td>
        <td><p>- Complete</p></td>
      </tr>
      <tr>
        <td>
          <p>Does the user receive a notification at a particular time if they haven't studied that day?</p>
        </td>
        <td>
          <p>Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.</p>
        </td>
        <td>- completed</td>
      </tr>
      <tr>
        <td><p>Does the app function correctly in either Android or iOS?</p>
        </td>
        <td>
          <p>The app works correctly in either Android OR iOS devices (or emulator). </p>
          <p>Project README identifies which platform(s) have been tested.</p>
        </td>
        <td><p>- Complete</p></td>
      </tr>
      </tbody>
    </table>
  </div>
  <div> <span><p>Code Quality</p>
</span>
    <table>
      <thead>
      <tr>
        <th><span translate="">Criteria</span></th>
        <th><span translate="">Meets Specifications</span></th>
        <th><span translate="">Completed</span></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><p>Is the code well written and reasonably structured?</p>
        </td>
        <td>
          <p>Project code uses reasonable naming conventions. Components are written for reuse and use a modular structure. </p>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <p>Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using <code>key</code> for list items? Is the code formatted properly?
          </p>
        </td>
        <td>
          <p>There are no build errors when starting the app. There are no errors while using the app. There are no warnings that resulted from not following the best practices listed in the documentation, such as using <code>key</code> for list items. All code is functional and formatted properly.
          </p>
        </td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
