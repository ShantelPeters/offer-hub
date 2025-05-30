'use client';
import { useFreelancerSteps } from '@/hooks/use-freelancer-steps';
import UserProfilePreviewActiveState from './user-profile-preview-active-state';
import UserAddWorkExperienceDefaultState from './user-add-work-experience-default-state';
import UserSetHourlyRateActiveState from './user-set-hourly-rate-active-state';
import UserSelectJobType from './user-select-job-type';
import Header from '../header';
import UserAddLanguagesActiveState from './user-add-languages-active-state';

const steps = [
  { key: 'user-choose-role', component: null }, // to be implemented
  { key: 'user-select-job-type', component: <UserSelectJobType /> },
  { key: 'user-select-interested-category', component: null }, // to be implemented
  { key: 'user-add-work-experience', component: null }, // to be implemented
  { key: 'user-add-work-experience-active-state', component: null }, // to be implemented
  {
    key: 'user-add-work-experience-active-state-not-in-focus',
    component: null,
  }, // to be implemented
  {
    key: 'user-add-work-experience-default-state',
    component: <UserAddWorkExperienceDefaultState />,
  },
  { key: 'user-add-education-default-state', component: null }, // to be implemented
  {
    key: 'user-set-hourly-rate-active-state',
    component: <UserSetHourlyRateActiveState />,
  },
  { key: 'user-choose-languaje-active-state', component: <UserAddLanguagesActiveState />}, // to be implemented
  { key: 'user-write-bio', component: null }, // to be implemented
  { key: 'user-enter-service-fee', component: null }, // to be implemented
  { key: 'user-setting-up-account-profile-active-state', component: null }, // to be implemented
  { key: 'user-profile-photo-active-and-focus-state', component: null }, // to be implemented
  { key: 'user-profile-preview-active-state', component: <UserProfilePreviewActiveState  /> },
];

export default function StepsController() {
  const { currentStep, nextStep, prevStep } = useFreelancerSteps();
  const StepComponent = steps[currentStep]?.component;
  
  return (
    <section className='flex flex-col min-h-svh'>
      <Header /
      
      <div className='flex-1 flex'>
        {StepComponent ? (
          StepComponent
        ) : (
          <p>This step is not yet implemented.</p>
        )}
      </div>
      {/* <UserAddWorkExperienceDefaultState /> */}
      <div className='mt-8 flex justify-between'>
        <button onClick={prevStep} disabled={currentStep === 0}>
          Back
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </section>
  );
}