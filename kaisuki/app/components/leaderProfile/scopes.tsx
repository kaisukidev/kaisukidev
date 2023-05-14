import { useState } from 'react';

export function Scopes() {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({'tech-project': true});

  type ExpandedItems = {
    [key: string]: boolean
  }

  const handleItemClick = (itemId: string) => {
    let newExpandedItems: {[key: string]: boolean} = {};

    Object.keys(expandedItems).forEach((key) => {
      if (key !== itemId) {
        newExpandedItems[key] = false;
      }
    });

    newExpandedItems[itemId] = !expandedItems[itemId];

    setExpandedItems(newExpandedItems);
  };

  return (
    <div className='flex'>
      <ul className='mr-6 scope-list'>
        <li><strong
          className={`cursor-pointer ${expandedItems['tech-project'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('tech-project')}
        >
          Technology Project Management {expandedItems['tech-project'] ? '-' : '+'}
        </strong></li>
        <li>
          <p className={`${expandedItems['tech-project'] ? '' : 'hidden'}`}>
            I would oversee the planning and execution of technology projects, ensuring that they are completed on time, within budget, and to the satisfaction of all stakeholders. This would involve collaborating with team members to develop project timelines and resource allocations, identifying and mitigating risks, and communicating progress and status updates to stakeholders.
          </p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['it-infra'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('it-infra')}>IT Infrastructure {expandedItems['it-infra'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['it-infra'] ? '' : 'hidden'}`}>I would manage the organization&apos;s IT infrastructure, which includes hardware, software, and network systems. This would involve ensuring that systems are running efficiently and effectively, staying up-to-date with the latest technologies, identifying opportunities for improvement, and making recommendations to senior leadership on IT investments.</p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['user-sup'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('user-sup')}>User Support {expandedItems['user-sup'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['user-sup'] ? '' : 'hidden'}`}>I would provide technical support to users within the organization, responding to requests and troubleshooting issues as they arise. This would involve working closely with users to understand their needs and challenges, providing guidance on how to effectively use technology tools, and developing training programs to ensure that users are able to work efficiently and effectively.</p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['it-security'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('it-security')}>IT Security {expandedItems['it-security'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['it-security'] ? '' : 'hidden'}`}>I would be responsible for ensuring the security of all technology systems and data within the organization. This would involve developing and implementing security policies and procedures, conducting risk assessments, and managing security incidents. I would work closely with stakeholders to ensure that all technology systems are protected against unauthorized access and data breaches.</p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['software-dev'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('software-dev')}>Software Development {expandedItems['software-dev'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['software-dev'] ? '' : 'hidden'}`}>I would manage software development projects, overseeing all aspects of the software development life cycle. This would involve working closely with team members to gather requirements, design solutions, develop and test code, and deploy software solutions to end-users.</p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['buss-proc'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('buss-proc')}>Business Process Automation {expandedItems['buss-proc'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['buss-proc'] ? '' : 'hidden'}`}>I would identify opportunities to automate manual business processes within the organization, evaluating and selecting automation tools and technologies, and overseeing the implementation of automated processes. This would involve working closely with stakeholders to understand their needs and challenges, identifying areas for improvement, and developing solutions that increase efficiency, accuracy, and productivity.</p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['sys-int'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('sys-int')}>Systems Integration {expandedItems['sys-int'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['sys-int'] ? '' : 'hidden'}`}>I would oversee the integration of various technology systems within the organization, ensuring that they are seamlessly integrated, reliable, and secure. This would involve evaluating and selecting integration technologies, designing integration solutions, and overseeing the implementation of those solutions.</p>
        </li>
        <li><strong className={`cursor-pointer ${expandedItems['it-pl'] ? 'text-sky-500' : ''}`}
          onClick={() => handleItemClick('it-pl')}>IT Planning and Budgeting {expandedItems['it-pl'] ? '-' : '+'}</strong></li>
        <li>
          <p className={`${expandedItems['it-pl'] ? '' : 'hidden'}`}>I would be responsible for developing and managing the IT budget for the organization. This would involve working closely with stakeholders to understand their needs and priorities, identifying and evaluating technology solutions, and developing a budget that reflects those needs and priorities. I would ensure that the IT budget is managed effectively, with a focus on delivering value to the organization while also staying within budgetary constraints.</p>
        </li>
      </ul>
    </div>
  )
}