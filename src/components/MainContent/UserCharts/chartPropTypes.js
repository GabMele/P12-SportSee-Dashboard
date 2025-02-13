/**
 * @module chartPropTypes
 * @category PropTypes
 * 
 * @description
 * This module defines the PropTypes for the data used in the UserCharts 
 * component: activity data, session data, performance metrics, 
 * and score data.
 */

import PropTypes from "prop-types";


/**
 * Prop type definition for activity data.
 * The activity data consists of an array of session objects, each containing 
 * the day of the session, the user's weight in kilograms, and the number of 
 * calories burned.
 * 
*/
export const activityDataType = PropTypes.arrayOf(
 PropTypes.shape({
   day: PropTypes.number.isRequired,
   kilogram: PropTypes.number.isRequired,
   calories: PropTypes.number.isRequired,
 })
).isRequired;


/**
* Prop type definition for session data.
* The session data consists of an array of session objects, each containing 
* the first letter of the day of the week and the length of the session in minutes.
* 
*/
export const sessionDataType = PropTypes.arrayOf(
 PropTypes.shape({
   day: PropTypes.string.isRequired,
   sessionLength: PropTypes.number.isRequired,
 })
).isRequired;


/**
* Prop type definition for performance data.
* The performance data consists of an array of performance metrics, where 
* each metric includes the kind of performance (e.g., "speed") and the 
* corresponding value.
* 
*/
export const performanceDataType = PropTypes.arrayOf(
 PropTypes.shape({
   kind: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
 })
).isRequired;


/**
* Prop type definition for score data.
* The score data is a single numeric value that represents the user's overall 
* score (normalized between 0 and 1).
* 
*/
export const scoreDataType = PropTypes.number.isRequired;
