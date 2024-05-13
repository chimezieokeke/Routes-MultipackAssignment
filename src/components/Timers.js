import React, { useState, useEffect } from 'react';

const Timers = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    loadTimersFromServer();
    const intervalId = setInterval(loadTimersFromServer, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const loadTimersFromServer = () => {
    // Simulated timers data for demonstration
    const serverTimers = [
      { id: 1, title: 'Timer 1', project: 'Project 1', elapsed: 3600000, runningSince: null },
      { id: 2, title: 'Timer 2', project: 'Project 2', elapsed: 7200000, runningSince: null },
    ];
    setTimers(serverTimers);
  };

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  const handleEditFormSubmit = (attrs) => {
    updateTimer(attrs);
  };

  const handleTrashClick = (timerId) => {
    deleteTimer(timerId);
  };

  const handleStartClick = (timerId) => {
    startTimer(timerId);
  };

  const handleStopClick = (timerId) => {
    stopTimer(timerId);
  };

  const createTimer = (timer) => {
    // Simulated creation of a new timer
    const newTimer = { id: Date.now(), ...timer, elapsed: 0, runningSince: null };
    setTimers([...timers, newTimer]);
  };

  const updateTimer = (attrs) => {
    // Simulated update of an existing timer
    setTimers(timers.map((timer) => (timer.id === attrs.id ? { ...timer, title: attrs.title, project: attrs.project } : timer)));
  };

  const deleteTimer = (timerId) => {
    // Simulated deletion of a timer
    setTimers(timers.filter((timer) => timer.id !== timerId));
  };

  const startTimer = (timerId) => {
    const now = Date.now();
    const updatedTimers = timers.map((timer) => {
      if (timer.id === timerId) {
        return { ...timer, runningSince: now };
      } else {
        return timer;
      }
    });
    setTimers(updatedTimers);
  };

  const stopTimer = (timerId) => {
    const now = Date.now();
    const updatedTimers = timers.map((timer) => {
      if (timer.id === timerId && timer.runningSince) {
        const elapsed = timer.elapsed + (now - timer.runningSince);
        return { ...timer, elapsed, runningSince: null };
      } else {
        return timer;
      }
    });
    setTimers(updatedTimers);
  };

  const millisecondsToHuman = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  };

  const pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  };

  return (
    <div className='ui three column centered grid'>
      <div className='column'>
        {/* EditableTimerList component */}
        <div id='timers'>
          {timers.map((timer) => (
            <div key={timer.id} className='ui centered card'>
              <div className='content'>
                <div className='header'>{timer.title}</div>
                <div className='meta'>{timer.project}</div>
                <div className='center aligned description'>
                  <h2>{millisecondsToHuman(timer.elapsed)}</h2>
                </div>
              </div>
              {/* TimerActionButton component */}
              <div className='extra content'>
                <button className='ui basic green button' onClick={() => handleStartClick(timer.id)}>
                  Start
                </button>
                <button className='ui basic red button' onClick={() => handleStopClick(timer.id)}>
                  Stop
                </button>
                <button className='ui basic blue button' onClick={() => handleEditFormSubmit(timer)}>
                  Edit
                </button>
                <button className='ui basic red button' onClick={() => handleTrashClick(timer.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ToggleableTimerForm component */}
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon' onClick={() => handleCreateFormSubmit({ title: 'New Timer', project: 'New Project' })}>
            <i className='plus icon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timers;
