import React from 'react';

export type RobotMood = 'neutral' | 'curious' | 'success' | 'alert' | 'thinking' | 'celebrating';

interface RobotInspectorProps {
  mood?: RobotMood;
  size?: number;
  speech?: string;
  showStatusBadge?: boolean;
  ariaHidden?: boolean;
}

export const RobotInspector: React.FC<RobotInspectorProps> = ({
  mood = 'neutral',
  size = 110,
  speech,
  showStatusBadge = false,
  ariaHidden = true,
}) => {
  // Pixel coordinates for eyes, mouth, and cheeks based on mood
  // Inspired by the charming pixel art character from robot-learning-game
  const renderFace = () => {
    switch (mood) {
      case 'celebrating':
        return (
          <>
            {/* Sparkle star eyes ★ ★ */}
            <rect x="18" y="23" width="2" height="6" fill="var(--white)" />
            <rect x="16" y="25" width="6" height="2" fill="var(--white)" />

            <rect x="34" y="23" width="2" height="6" fill="var(--white)" />
            <rect x="32" y="25" width="6" height="2" fill="var(--white)" />

            {/* Rosy cheeks */}
            <rect x="14" y="29" width="4" height="2" fill="var(--clay)" />
            <rect x="36" y="29" width="4" height="2" fill="var(--clay)" />

            {/* Big open joyful smile */}
            <rect x="22" y="29" width="10" height="4" fill="var(--copper)" />
            <rect x="24" y="30" width="6" height="2" fill="var(--white)" />
          </>
        );

      case 'success':
        return (
          <>
            {/* Joyful eyes ^ ^ */}
            <rect x="18" y="24" width="4" height="2" fill="var(--white)" />
            <rect x="16" y="26" width="2" height="2" fill="var(--white)" />
            <rect x="22" y="26" width="2" height="2" fill="var(--white)" />

            <rect x="34" y="24" width="4" height="2" fill="var(--white)" />
            <rect x="32" y="26" width="2" height="2" fill="var(--white)" />
            <rect x="38" y="26" width="2" height="2" fill="var(--white)" />

            {/* Rosy blush cheeks */}
            <rect x="14" y="28" width="4" height="2" fill="var(--clay)" />
            <rect x="36" y="28" width="4" height="2" fill="var(--clay)" />

            {/* Happy smile mouth */}
            <rect x="24" y="30" width="6" height="2" fill="var(--copper)" />
            <rect x="22" y="29" width="2" height="1" fill="var(--copper)" />
            <rect x="30" y="29" width="2" height="1" fill="var(--copper)" />
          </>
        );

      case 'curious':
        return (
          <>
            {/* Inquisitive eyes O o */}
            <rect x="16" y="22" width="6" height="6" fill="var(--white)" />
            <rect x="18" y="24" width="2" height="2" fill="var(--ink)" />

            <rect x="33" y="24" width="4" height="4" fill="var(--white)" />
            <rect x="34" y="25" width="2" height="2" fill="var(--ink)" />

            {/* Rosy tint */}
            <rect x="14" y="29" width="3" height="1" fill="var(--clay)" />
            <rect x="37" y="29" width="3" height="1" fill="var(--clay)" />

            {/* Small 'o' mouth */}
            <rect x="25" y="30" width="4" height="3" fill="var(--copper)" />
            <rect x="26" y="31" width="2" height="1" fill="var(--white)" />
          </>
        );

      case 'thinking':
        return (
          <>
            {/* Scanning processing lines */}
            <rect x="16" y="23" width="8" height="2" fill="var(--copper)" className="animate-scan" />
            <rect x="30" y="23" width="8" height="2" fill="var(--copper)" className="animate-scan" />

            {/* Data dots */}
            <rect x="18" y="27" width="2" height="2" fill="var(--blush)" />
            <rect x="22" y="27" width="2" height="2" fill="var(--white)" />
            <rect x="30" y="27" width="2" height="2" fill="var(--white)" />
            <rect x="34" y="27" width="2" height="2" fill="var(--blush)" />

            {/* Processing mouth line */}
            <rect x="23" y="31" width="8" height="2" fill="var(--blush)" />
          </>
        );

      case 'alert':
        return (
          <>
            {/* Puzzled / evaluating eyes > < */}
            <rect x="16" y="23" width="2" height="2" fill="var(--white)" />
            <rect x="18" y="25" width="2" height="2" fill="var(--white)" />
            <rect x="16" y="27" width="2" height="2" fill="var(--white)" />

            <rect x="36" y="23" width="2" height="2" fill="var(--white)" />
            <rect x="34" y="25" width="2" height="2" fill="var(--white)" />
            <rect x="36" y="27" width="2" height="2" fill="var(--white)" />

            {/* Concerned mouth line */}
            <rect x="23" y="30" width="8" height="2" fill="var(--clay)" />
          </>
        );

      case 'neutral':
      default:
        return (
          <>
            {/* Calm friendly wide eyes */}
            <rect x="17" y="23" width="5" height="5" fill="var(--white)" />
            <rect x="19" y="24" width="2" height="2" fill="var(--ink)" />

            <rect x="32" y="23" width="5" height="5" fill="var(--white)" />
            <rect x="34" y="24" width="2" height="2" fill="var(--ink)" />

            {/* Cheeks */}
            <rect x="15" y="29" width="3" height="1" fill="var(--blush)" />
            <rect x="36" y="29" width="3" height="1" fill="var(--blush)" />

            {/* Friendly small mouth */}
            <rect x="24" y="30" width="6" height="2" fill="var(--copper)" />
          </>
        );
    }
  };

  const getAntennaColor = () => {
    switch (mood) {
      case 'celebrating':
      case 'success':
        return 'var(--copper)';
      case 'thinking':
        return 'var(--clay)';
      case 'alert':
        return 'var(--blush)';
      default:
        return 'var(--clay)';
    }
  };

  const isCelebratory = mood === 'celebrating' || mood === 'success';

  return (
    <div
      className="sigma-robot-container"
      aria-hidden={ariaHidden}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <svg
        viewBox="0 0 54 58"
        width={size}
        height={(size * 58) / 54}
        shapeRendering="crispEdges"
        style={{ imageRendering: 'pixelated' }}
        className={`sigma-robot-svg mood-${mood}`}
      >
        {/* Antenna */}
        {/* Antenna tip bulb with cute highlight */}
        <rect x="24" y="2" width="6" height="6" fill={getAntennaColor()} />
        <rect x="25" y="3" width="2" height="2" fill="var(--white)" />
        {/* Antenna stalk */}
        <rect x="26" y="8" width="2" height="6" fill="var(--ink)" />

        {/* Outer Head Chassis (Teal outline & Blue casing) */}
        <rect x="10" y="14" width="34" height="24" fill="var(--ink)" />
        <rect x="12" y="16" width="30" height="20" fill="var(--blue)" />
        {/* Head highlight */}
        <rect x="12" y="16" width="30" height="2" fill="var(--blush)" />

        {/* Ear bolts */}
        <rect x="7" y="22" width="3" height="8" fill="var(--copper)" />
        <rect x="44" y="22" width="3" height="8" fill="var(--copper)" />

        {/* Monitor Screen Frame (Dark Teal) */}
        <rect x="14" y="20" width="26" height="14" fill="var(--ink)" />

        {/* Render animated Face */}
        {renderFace()}

        {/* Neck */}
        <rect x="23" y="38" width="8" height="3" fill="var(--ink)" />
        <rect x="24" y="39" width="6" height="1" fill="var(--copper)" />

        {/* Torso / Body Chassis */}
        <rect x="13" y="41" width="28" height="14" fill="var(--ink)" />
        <rect x="15" y="43" width="24" height="10" fill="var(--paper)" />

        {/* Chest Panel: Power core & status lights */}
        <rect x="18" y="45" width="6" height="6" fill="var(--blue)" />
        <rect x="20" y="47" width="2" height="2" fill={getAntennaColor()} />

        {/* Sigma Badge 'Σ' on the inspector chest */}
        <rect x="27" y="44" width="10" height="7" fill="var(--ink)" />
        <rect x="28" y="45" width="4" height="1" fill="var(--copper)" />
        <rect x="29" y="46" width="2" height="1" fill="var(--copper)" />
        <rect x="30" y="47" width="2" height="1" fill="var(--copper)" />
        <rect x="29" y="48" width="2" height="1" fill="var(--copper)" />
        <rect x="28" y="49" width="4" height="1" fill="var(--copper)" />
        {/* Mini meter light */}
        <rect x="34" y="46" width="2" height="3" fill="var(--clay)" />

        {/* Arms */}
        {isCelebratory ? (
          <>
            {/* Arms raised up in joy! */}
            <rect x="8" y="36" width="4" height="8" fill="var(--ink)" />
            <rect x="6" y="33" width="4" height="4" fill="var(--copper)" />

            <rect x="42" y="36" width="4" height="8" fill="var(--ink)" />
            <rect x="44" y="33" width="4" height="4" fill="var(--copper)" />
          </>
        ) : (
          <>
            {/* Relaxed / attentive arms */}
            <rect x="8" y="43" width="4" height="8" fill="var(--ink)" />
            <rect x="8" y="50" width="4" height="3" fill="var(--copper)" />

            <rect x="42" y="43" width="4" height="8" fill="var(--ink)" />
            <rect x="42" y="50" width="4" height="3" fill="var(--copper)" />
          </>
        )}

        {/* Base / Treads */}
        <rect x="16" y="55" width="22" height="3" fill="var(--ink)" />
        <rect x="18" y="56" width="3" height="1" fill="var(--clay)" />
        <rect x="25" y="56" width="3" height="1" fill="var(--clay)" />
        <rect x="32" y="56" width="3" height="1" fill="var(--clay)" />
      </svg>

      {showStatusBadge && (
        <span
          className="robot-status-badge"
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '9px',
            marginTop: '6px',
            padding: '2px 6px',
            background: 'var(--ink)',
            color: 'var(--white)',
            border: '1px solid var(--copper)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          SIGMA
        </span>
      )}

      {speech && (
        <div className="sigma-robot-speech" role="status">
          <span className="speech-badge">INSPECTEUR SIGMA</span>
          <p>{speech}</p>
        </div>
      )}
    </div>
  );
};
