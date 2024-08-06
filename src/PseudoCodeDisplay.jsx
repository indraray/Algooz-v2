import React from 'react';
// import './PseudocodeDisplay.css';

const PseudocodeDisplay = ({ pseudocode }) => {
  const renderStep = (step, indent = 0) => {
    const indentation = '\u00A0'.repeat(indent * 4); // 4 spaces per indent

    switch (step.step) {
      case 'initialize':
        return (
          <p>{indentation}{step.variable} := {step.value}</p>
        );

      case 'repeat':
        return (
          <>
            <p>{indentation}<span className="keyword">repeat</span></p>
            {step.body.map((subStep, index) => renderStep(subStep, indent + 1))}
            <p>{indentation}<span className="keyword">until</span> <span className="keyword">not</span> {step.until}</p>
          </>
        );

      case 'for':
        return (
          <>
            <p>{indentation}<span className="keyword">for</span> {step.variable} := {step.range.start} <span className="keyword">to</span> {step.range.end} <span className="keyword">inclusive</span> <span className="keyword">do</span></p>
            {step.body.map((subStep, index) => renderStep(subStep, indent + 1))}
            <p>{indentation}<span className="keyword">end for</span></p>
          </>
        );

      case 'if':
        return (
          <>
            <p>{indentation}<span className="keyword">if</span> {step.condition} <span className="keyword">then</span></p>
            {step.body.map((subStep, index) => renderStep(subStep, indent + 1))}
            <p>{indentation}<span className="keyword">end if</span></p>
          </>
        );

      case 'swap':
        return (
          <p>{indentation}<span className="keyword">swap</span>({step.variables.join(', ')})</p>
        );

      case 'set':
        return (
          <p>{indentation}{step.variable} := <span className="keyword">{String(step.value)}</span></p>
        );

      case 'comment':
        return (
          <p>{indentation}<span className="comment">{'{ '}{step.comment}{' }'}</span></p>
        );

      case 'end procedure':
        return (
          <p><span className="keyword">end procedure</span> <span className="function-name">{step.name}</span></p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pseudocode-container">
      <p><span className="keyword">procedure</span> <span className="function-name">{pseudocode.procedure}</span>(A : <span className="type">{pseudocode.parameters.A}</span>)</p>
      {pseudocode.steps.map((step, index) => renderStep(step))}
    </div>
  );
};

export default PseudocodeDisplay;
