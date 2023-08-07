import { ComponentProps, FC } from 'react';

type IconProps = ComponentProps<'svg'>;

export const Target: FC<IconProps> = props => {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      {...props}
    >
      <g clip-path="url(#a)">
        <path
          d="M29.341 4.345c0 1.196-.016 2.393.01 3.589.011.394-.073.52-.498.54-9.518.457-17.702 7.305-19.881 16.609-.294 1.249-.515 2.508-.52 3.794 0 .462-.226.483-.572.483-2.284-.01-4.567-.021-6.851-.01-.404 0-1.04-.206-1.029.471.01.656.656.457 1.055.462 2.263.047 4.52.068 6.783.09.367 0 .593.026.614.519.31 6.486 3.024 11.791 8.027 15.89 3.654 2.99 7.89 4.575 12.62 4.748.484.016.52.22.526.604.015 2.303.052 4.607.084 6.91v.268c-.016.336.047.677.44.693.426.016.515-.315.515-.693-.01-2.303.021-4.607-.026-6.91-.016-.693.184-.84.86-.887 4.642-.315 8.768-1.984 12.327-4.97 3.98-3.337 6.416-7.598 7.413-12.683.168-.866.326-1.742.294-2.629-.016-.472.152-.593.61-.588 2.283.027 4.566.021 6.85.027.131 0 .268-.011.399 0 .346.031.593-.121.609-.452.026-.404-.278-.498-.625-.504a1363.74 1363.74 0 0 1-4.656-.052c-.867-.01-1.727-.042-2.594-.026-.42.01-.577-.095-.593-.546-.33-9.844-7.649-18.35-17.298-20.234-1.108-.216-2.22-.41-3.35-.383-.409.01-.52-.137-.524-.541-.01-2.062-.048-4.12-.074-6.182 0-.377-.016-.755-.01-1.128 0-.325-.095-.614-.441-.624-.378-.01-.51.257-.51.624.01 1.239 0 2.482 0 3.72h.016ZM18.217 30.399v.01h2.793c.325 0 .724.074.745-.425.021-.52-.362-.514-.735-.514-1.884-.01-3.77-.037-5.654-.026-.446 0-.593-.132-.546-.567.11-1.013.263-2.01.54-2.991 1.702-6.045 6.83-10.359 13.22-11.036.845-.089.85-.068.856.777.01 1.553.015 3.101.026 4.654 0 .11.01.22 0 .331-.026.352.063.656.462.656s.483-.294.478-.65c-.01-1.753.005-3.5-.021-5.253-.006-.447.13-.61.561-.541.153.021.31.005.462.026 3.717.42 6.93 1.91 9.54 4.613 2.488 2.576 3.842 5.688 4.204 9.23.095.897.074.903-.83.903-1.438 0-2.881 0-4.32-.006-.351 0-.709.006-.719.468-.01.477.362.472.709.472 1.486.005 2.971.063 4.457.005.73-.026.787.289.72.855-.395 3.37-1.644 6.36-3.96 8.869-2.645 2.87-5.953 4.44-9.811 4.89-.604.074-.861-.052-.845-.745.042-1.726-.016-3.458-.021-5.184 0-.373.01-.761-.51-.74-.483.02-.435.41-.435.745 0 1.753-.027 3.5.031 5.253.021.64-.194.776-.745.682-.11-.021-.22-.01-.331-.021-4.342-.514-7.912-2.425-10.605-5.888-1.895-2.435-2.903-5.226-3.118-8.307-.031-.44.1-.577.54-.561.95.031 1.906.01 2.862.01v.006Zm12.174-18.75h-.016c0-.556.042-1.112-.01-1.658-.053-.546.178-.64.646-.577.918.131 1.848.178 2.761.346 9.366 1.716 16.385 9.787 16.82 19.348.016.351-.031.53-.44.52a112.787 112.787 0 0 0-3.523-.017c-.352 0-.43-.136-.473-.461-.068-.572-.084-1.144-.184-1.711-.682-4.056-2.62-7.383-5.785-9.98-2.677-2.2-5.77-3.401-9.234-3.595-.436-.027-.62-.147-.578-.62.048-.53.01-1.06.01-1.595h.006Zm-.793 36.717h.006c0 .551-.037 1.113.01 1.658.042.488-.142.604-.598.562-1.475-.126-2.945-.31-4.373-.703-8.715-2.393-14.8-9.986-15.251-19.002-.021-.367.058-.514.451-.503 1.176.026 2.347.031 3.523.01.367-.005.436.152.462.462.042.55.1 1.102.194 1.642.903 5.295 3.743 9.22 8.437 11.802 2.063 1.134 4.294 1.721 6.646 1.858.388.02.54.136.51.55-.038.552-.011 1.108-.011 1.659l-.006.005Zm18.768-17.784v.058c.599 0 1.197.01 1.796 0 .336-.01.467.084.436.451-.195 2.34-.599 4.644-1.57 6.79-3.491 7.704-9.481 11.928-17.907 12.7-.389.036-.504-.084-.499-.462.016-.84-.005-1.685-.016-2.524-.01-.917.452-1.424 1.386-1.522.22-.021.436-.084.651-.12 4.053-.683 7.376-2.656 9.949-5.83 2.1-2.588 3.307-5.568 3.517-8.916.032-.54.236-.677.73-.64.504.036 1.018.01 1.527.01v.005Zm-36.732-1.175v-.047c-.599 0-1.197-.01-1.796 0-.336.005-.478-.105-.436-.467.137-1.27.273-2.54.583-3.784 2.21-8.863 9.754-15.123 18.9-15.69.362-.02.461.074.461.42 0 1.15 0 2.303.053 3.453.02.467-.184.556-.567.588-.593.047-1.192.089-1.78.199-7.134 1.327-12.52 7.257-13.166 14.467-.079.887-.079.882-.992.866-.42-.01-.84 0-1.266 0l.006-.005Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M29.997 24.82c-2.877 0-5.192 2.293-5.197 5.159-.005 2.886 2.289 5.21 5.15 5.216 2.898 0 5.234-2.283 5.234-5.127 0-2.934-2.273-5.237-5.181-5.242l-.006-.006Zm.01 9.425c-2.325.005-4.283-1.952-4.262-4.272.016-2.287 1.969-4.213 4.263-4.208 2.289 0 4.231 1.952 4.231 4.245 0 2.299-1.926 4.23-4.231 4.24v-.005Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M16.07 19.526c.078.462.252.866.687 1.04 1.55.608 2.583 1.684 3.266 3.21.467 1.045 1.664 1.024 2.11-.026.651-1.532 1.727-2.513 3.218-3.185.956-.43.94-1.548.037-2.073l-.058-.031c-1.543-.583-2.54-1.68-3.212-3.18-.452-1.013-1.623-1.04-2.08-.032-.687 1.517-1.685 2.63-3.25 3.228-.456.173-.64.603-.713 1.054l-.005-.005ZM34.444 42.615c.079.462.252.866.688 1.039 1.548.609 2.583 1.684 3.265 3.211.467 1.045 1.664 1.024 2.11-.026.651-1.532 1.728-2.513 3.219-3.185.955-.43.94-1.548.036-2.073l-.057-.031c-1.544-.583-2.541-1.68-3.213-3.18-.452-1.013-1.622-1.04-2.08-.032-.687 1.517-1.684 2.63-3.249 3.227-.457.174-.64.604-.714 1.055l-.005-.005Z"
          fill="#F9DF78"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M60 0H0v60h60z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Cycle: FC<IconProps> = props => {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      {...props}
    >
      <g clip-path="url(#a)">
        <path
          d="M0 29.997C.011 13.451 13.456-.044 30.02 0 46.691.044 59.971 13.43 60 29.948A29.911 29.911 0 0 1 30.025 60C13.13 60.011.05 46.33 0 29.997Zm11.154-.038c-.033 10.372 8.422 18.915 18.794 18.887 10.449-.022 18.777-8.218 18.882-18.64.104-10.724-8.318-18.892-18.54-19.03-10.598-.138-19.103 8.295-19.136 18.777v.006Zm36.92 9.176c-.115.188-.186.287-.241.391-4.346 7.888-12.697 11.903-21.543 10.361-7.81-1.366-14.387-7.75-16.034-15.538-.182-.87-.22-1.774-.738-2.578-1.058-1.647-2.049-3.344-3.046-5.029-.248-.419-.402-.562-.843-.16a78.362 78.362 0 0 1-3.624 3.123c-.386.314-.617.551-.595 1.102.044 1.25.149 2.5.353 3.729.92 5.541 3.14 10.515 7.011 14.602 8.103 8.543 17.968 11.374 29.31 8.262 7.644-2.098 13.285-6.945 17.113-13.886a19.587 19.587 0 0 0 1.542-3.48l-5.045 3.524c-.893.623-1.118.557-1.609-.43-.655-1.305-1.31-2.616-2.005-3.987l-.005-.006ZM29.288 9.628l.077.144c.071 0 .137.016.21.016 4.934-.072 9.352 1.405 13.169 4.533 4.384 3.586 6.858 8.246 7.403 13.864.292 2.997-.066 5.96-1.162 8.802-.11.287-.16.523 0 .832.655 1.261 1.3 2.528 1.9 3.811.231.49.43.518.854.21a241.963 241.963 0 0 1 5.183-3.625c.44-.297.66-.65.782-1.15.986-3.994 1.173-8.01.435-12.069-1.393-7.64-5.265-13.72-11.534-18.27-4.406-3.2-9.386-4.87-14.795-5.266-1.206-.088-2.418-.011-3.701-.011.187.374.43.49.639.644a657.717 657.717 0 0 1 4.687 3.305c1.047.744 1.014 1.13-.082 1.79l-4.065 2.446v-.006ZM9.6 29.287l.181-.055c.028-.48.039-.964.094-1.443.055-.485.149-.964.248-1.444 1.669-7.854 6.318-13.065 13.908-15.654.578-.198 1.261-.198 1.74-.523 1.89-1.278 3.89-2.368 5.834-3.553.5-.308.495-.451.027-.776a392.221 392.221 0 0 1-5.59-3.939c-.204-.148-.375-.16-.607-.12-4.808.787-9.16 2.643-12.977 5.667-6.681 5.288-10.267 12.228-10.994 20.71.259.017.364-.137.485-.242l3.404-2.924c.975-.838 1.19-.81 1.84.275.804 1.338 1.602 2.682 2.407 4.02Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M58.915 11.655c-.094.568-.309 1.063-.843 1.273-1.9.749-3.167 2.065-3.999 3.938-.567 1.278-2.038 1.256-2.589-.033-.798-1.878-2.12-3.085-3.943-3.905-1.174-.53-1.152-1.9-.044-2.545.022-.011.044-.028.071-.039 1.895-.71 3.118-2.06 3.939-3.9.556-1.244 1.993-1.272 2.55-.038.843 1.856 2.065 3.222 3.988 3.955.561.215.787.738.875 1.289l-.005.005ZM54.745 28.235c-.093.567-.308 1.063-.842 1.272-1.9.75-3.168 2.066-4 3.939-.567 1.277-2.037 1.255-2.588-.033-.799-1.879-2.12-3.085-3.944-3.906-1.173-.529-1.151-1.9-.044-2.545.022-.01.044-.027.072-.038 1.894-.71 3.117-2.06 3.938-3.9.556-1.245 1.994-1.272 2.55-.038.843 1.856 2.066 3.222 3.988 3.954.562.215.788.738.876 1.29l-.006.005Z"
          fill="#F9DF78"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h60v60H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Growth: FC<IconProps> = props => {
  return (
    <svg
      viewBox="0 0 79 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      {...props}
    >
      <g clip-path="url(#a)">
        <path
          d="M48.153 8.276c-3.191 2.828-6.253 5.49-9.247 8.226-.652.596-.824.123-1.205-.203-.554-.473-.179-.689.172-.996 3.541-3.13 7.083-6.265 10.6-9.425.424-.375.639-.48 1.087.006a928.329 928.329 0 0 0 8.872 9.536c.381.406.295.62-.086.91-.35.27-.56.72-1.1.129-2.214-2.435-4.476-4.82-6.726-7.224-.197-.21-.339-.504-.695-.59-.295 1.198-.228 2.416-.363 3.609-.8 7.254-2.976 14.036-6.812 20.264-2.564 4.168-5.76 7.765-9.739 10.636-4.463 3.228-9.425 5.122-14.946 5.472-.467.03-.67.117-.775.676-.737 4.089-4.15 7.028-8.035 7.218-4.384.216-8.005-2.797-8.946-6.738-1.076-4.537 1.87-9.24 6.53-10.347 4.518-1.076 9.326 1.924 10.328 6.443.037.16.148.32.13.473-.08.714.35.726.866.689 2.404-.166 4.747-.64 7.01-1.47 6.215-2.262 10.992-6.369 14.786-11.687 4.082-5.712 6.504-12.094 7.623-19.004.345-2.121.615-4.249.652-6.61l.019.007ZM15.752 47.864a7.074 7.074 0 0 0-7.046-7.07c-3.892-.02-7.077 3.141-7.083 7.027-.012 3.965 3.117 7.15 7.034 7.162 3.898.013 7.1-3.203 7.1-7.12h-.005Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M30.895 26.53c-.105.632-.345 1.186-.941 1.42-2.121.836-3.535 2.305-4.464 4.395-.633 1.427-2.274 1.402-2.89-.036-.89-2.097-2.366-3.443-4.401-4.36-1.31-.59-1.285-2.12-.05-2.84.025-.012.05-.03.08-.043 2.115-.793 3.48-2.3 4.396-4.353.621-1.39 2.226-1.42 2.847-.043.94 2.072 2.305 3.597 4.451 4.414.627.24.88.824.978 1.439l-.006.006ZM18.93 6.873c-.104.634-.344 1.187-.94 1.42-2.122.837-3.536 2.306-4.464 4.397-.633 1.426-2.275 1.401-2.89-.037-.891-2.097-2.367-3.443-4.402-4.36-1.31-.59-1.285-2.12-.049-2.84.025-.012.05-.03.08-.043 2.115-.793 3.48-2.3 4.396-4.353.62-1.39 2.226-1.42 2.847-.043.94 2.072 2.305 3.597 4.45 4.415.628.24.88.823.978 1.438l-.006.006ZM63.83 53.12c-.104.633-.344 1.187-.94 1.42-2.121.836-3.535 2.306-4.464 4.396-.633 1.427-2.275 1.402-2.89-.037-.891-2.096-2.367-3.443-4.402-4.359-1.31-.59-1.285-2.12-.049-2.84.025-.013.05-.031.08-.043 2.115-.793 3.48-2.3 4.396-4.353.621-1.39 2.226-1.42 2.847-.043.94 2.072 2.305 3.596 4.451 4.414.627.24.88.824.977 1.439l-.006.006ZM78.9 26.59c-.105.634-.345 1.187-.941 1.42-2.121.837-3.535 2.306-4.464 4.397-.633 1.426-2.275 1.402-2.89-.037-.89-2.096-2.367-3.443-4.401-4.36-1.31-.59-1.285-2.12-.05-2.84.025-.012.05-.03.08-.043 2.115-.793 3.48-2.299 4.396-4.352.621-1.39 2.226-1.42 2.847-.043.94 2.071 2.305 3.596 4.451 4.414.627.24.88.824.978 1.439l-.007.006Z"
          fill="#F9DF78"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h78.9v60H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ShakeHands: FC<IconProps> = props => {
  return (
    <svg
      viewBox="0 0 70 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      {...props}
    >
      <g clip-path="url(#a)">
        <path
          d="M22.342 53.272c-.582-.02-1.191.095-1.78-.047-1.916-.467-3.06-2.004-2.965-4.061.02-.528-.027-.704-.636-.751-2.098-.15-3.682-2.193-3.377-4.285.06-.413 0-.494-.413-.528-1.746-.142-2.992-1.15-3.479-2.76-.467-1.53.054-3.094 1.374-4.17.582-.474 1.428-.873 1.651-1.482.21-.59-.588-1.232-.88-1.882-.446-1.008-.839-2.037-1.103-3.113s-.446-2.16-.433-3.256c-.304-.128-.433.136-.609.23-1.861 1.056-3.919.684-5.286-.968-.866-1.049-1.746-2.084-2.599-3.14-1.618-1.997-1.374-4.338.616-5.983 5.875-4.86 11.75-9.726 17.624-14.586 1.855-1.536 4.176-1.353 5.767.474.907 1.043 1.78 2.119 2.653 3.195 1.489 1.82 1.448 3.85-.108 5.597-.082.088-.156.183-.298.345 1.61.4 3.107.941 4.508 1.72.399.223.636-.217.88-.42 1.745-1.49 3.702-2.579 5.908-3.235 1.523-.454 3.08-.616 4.73-.623-.324-.717-.744-1.306-.845-2.044-.21-1.496.244-2.734 1.374-3.709 1.144-.988 2.308-1.95 3.492-2.883 1.767-1.395 4.142-1.137 5.59.602 4.948 5.963 9.89 11.94 14.83 17.909 1.387 1.685 1.205 4.135-.433 5.57a75.942 75.942 0 0 1-3.608 2.978c-1.435 1.123-3.228 1.123-4.832.027-.386-.264-.44-.244-.535.217-.697 3.52-2.382 6.483-5.13 8.805-.515.433-.535.718-.081 1.178.426.426.764.94 1.177 1.38 1.787 1.895.914 4.65-1.008 6.017-.84.596-1.78.948-2.823.873-.48-.033-.65.109-.724.582-.386 2.363-2.477 4.068-4.86 3.94-.48-.027-.534.135-.581.514-.305 2.376-2.566 4.216-4.948 3.98-.508-.048-.467.19-.5.494-.251 2.457-2.783 4.372-5.226 3.973-.805-.136-1.468-.494-1.996-1.11-.59-.69-1.185-1.374-1.74-2.092-.27-.345-.467-.358-.785-.074-.426.386-.887.744-1.333 1.11-1.51 1.211-3.35 1.34-4.82.338-1.407-.954-1.948-2.646-1.434-4.48.034-.115.115-.224.027-.373l.007.007Zm5.32-4.352c.5-.095.866-.196 1.238-.155 1.476.169 2.64.839 3.283 2.206.636 1.354.52 2.714-.366 3.919-.338.46-.27.704.061 1.062.474.522.894 1.09 1.347 1.632.88 1.042 1.733 1.238 3.012.744 1.53-.589 2.917-2.829 1.245-4.514-1.252-1.266-2.301-2.728-3.438-4.109-1.51-1.82-3.012-3.648-4.521-5.468-.325-.393-.501-.792-.027-1.171.48-.393.832-.095 1.137.29.047.062.095.123.142.177 2.667 3.215 5.34 6.423 7.993 9.651.636.779 1.442 1.036 2.349.82 1.218-.292 2.098-1.03 2.484-2.288.236-.765.108-1.435-.393-2.044-1.699-2.058-3.398-4.109-5.096-6.166-1.03-1.239-2.044-2.484-3.08-3.723-.331-.4-.602-.825-.074-1.232.514-.392.88-.04 1.19.373.014.02.028.04.048.06 2.687 3.236 5.374 6.464 8.048 9.706.507.616 1.116.887 1.908.846 1.28-.06 2.49-1.022 2.89-2.288.244-.785.129-1.482-.4-2.111-1.732-2.092-3.464-4.183-5.197-6.281a843.525 843.525 0 0 1-3.113-3.79c-.285-.345-.305-.697.06-.988.352-.285.704-.21 1.016.088.088.088.155.196.237.297 2.666 3.215 5.346 6.423 7.993 9.652.65.792 1.442 1.076 2.403.866 2.335-.514 3.242-3.086 1.827-4.717-5.293-6.098-10.41-12.352-15.574-18.565-.325-.386-.5-.325-.825-.048-.799.69-1.632 1.34-2.45 2.01-3.046 2.505-7.398 2.586-10.423.088-1.76-1.448-1.747-1.61-.075-2.957 2.22-1.78 4.386-3.621 6.579-5.428.372-.305.507-.495-.068-.745-1.035-.453-2.112-.778-3.195-1.076-.967-.264-1.678 0-2.45.65a965.11 965.11 0 0 1-12.846 10.646c-.65.535-.873 1.103-.832 1.875.115 2.497.744 4.846 1.99 7.025.223.386.42.48.832.257.833-.446 1.733-.46 2.64-.243 1.523.365 3.018 1.84 2.822 4.094-.04.481.048.63.569.664 2.125.115 3.75 2.172 3.431 4.304-.06.427.02.501.427.522 1.617.087 2.917 1.09 3.431 2.619.325.968.203 1.922-.176 2.978l-.014-.014Zm16.365-37.963c-3.567.061-6.511 1.002-9.049 3.053-3.147 2.552-6.24 5.17-9.388 7.73-.561.46-.406.676.055 1.035 2.49 1.922 6.003 1.814 8.568-.291 1.015-.833 2.017-1.665 3.032-2.498.731-.602.941-.568 1.543.15 4.38 5.231 8.765 10.456 13.124 15.701.447.535.71.542 1.218.082 2.437-2.2 3.993-4.894 4.575-8.115.122-.684.474-1.415-.142-2.146-3.729-4.454-7.451-8.92-11.113-13.435-.765-.947-1.563-1.435-2.437-1.259l.014-.007Zm6.579-9.502c-.637-.04-1.205.21-1.706.623-1.11.907-2.22 1.82-3.31 2.748-1.211 1.028-1.346 2.51-.324 3.75 4.886 5.915 9.773 11.83 14.673 17.738 1.117 1.347 2.552 1.456 3.912.352 1.036-.839 2.064-1.692 3.08-2.551 1.353-1.144 1.468-2.626.352-3.98-3.114-3.756-6.227-7.52-9.334-11.276-1.699-2.057-3.397-4.108-5.096-6.165-.582-.704-1.239-1.246-2.247-1.232v-.007ZM22.51 2.924c-.596-.014-1.184.338-1.74.805-3.384 2.816-6.774 5.618-10.165 8.427-2.477 2.05-4.975 4.094-7.432 6.165-1.225 1.036-1.353 2.464-.379 3.675a142.15 142.15 0 0 0 2.741 3.317c1.104 1.279 2.538 1.367 3.851.277a3390.28 3390.28 0 0 1 5.645-4.656c4.027-3.337 8.061-6.667 12.081-10.017 1.178-.982 1.354-2.437.434-3.621a117.598 117.598 0 0 0-2.877-3.492c-.514-.616-1.198-.887-2.152-.88h-.007Zm-9.137 39.269c.46-.04.947-.102 1.333-.406 1.09-.887 2.207-1.747 3.229-2.714.893-.846.866-2.288.067-3.222-.75-.88-2.172-1.137-3.133-.433a35.258 35.258 0 0 0-3.242 2.694c-.758.71-.9 1.658-.46 2.632.42.941 1.177 1.395 2.213 1.449h-.007Zm13.259 4.96c-.102-.96-.488-1.718-1.347-2.151-.887-.44-1.773-.38-2.552.216a46.496 46.496 0 0 0-2.957 2.45 2.413 2.413 0 0 0-.23 3.384c.845.995 2.3 1.13 3.377.285.947-.745 1.868-1.53 2.795-2.295.596-.494.846-1.164.92-1.882l-.006-.006Zm-.86 10.214c.65.014 1.117-.115 1.496-.42 1.063-.839 2.152-1.671 3.147-2.592.954-.886.975-2.294.156-3.269-.82-.974-2.213-1.184-3.256-.406a48.57 48.57 0 0 0-3.032 2.49c-.785.698-.981 1.76-.595 2.694.379.928 1.231 1.496 2.084 1.496v.007Zm-3.201-14.978c0-1.022-.4-1.74-1.205-2.193-.887-.494-1.8-.467-2.612.149-.955.73-1.868 1.523-2.796 2.288-1.116.927-1.326 2.41-.487 3.478.853 1.09 2.382 1.232 3.547.305.9-.717 1.786-1.462 2.666-2.206.59-.495.907-1.124.887-1.821Z"
          className="fill-black dark:fill-white"
        />
        <path
          d="M42.125 36.974c-.115.698-.379 1.307-1.035 1.564-2.335.92-3.892 2.538-4.914 4.84-.697 1.57-2.504 1.542-3.181-.041-.981-2.308-2.606-3.79-4.846-4.8-1.442-.649-1.415-2.334-.054-3.126.027-.014.054-.034.088-.047 2.328-.873 3.83-2.532 4.839-4.792.684-1.53 2.45-1.564 3.134-.048 1.035 2.281 2.538 3.96 4.9 4.86.69.264.968.907 1.076 1.584l-.007.006ZM15.06 28.555c-.116.697-.38 1.306-1.036 1.564-2.335.92-3.892 2.538-4.914 4.839-.697 1.57-2.504 1.543-3.181-.04-.982-2.309-2.606-3.791-4.846-4.8-1.442-.65-1.415-2.334-.054-3.126.027-.014.054-.034.088-.048 2.328-.873 3.83-2.531 4.839-4.792.684-1.53 2.45-1.563 3.134-.047 1.035 2.28 2.538 3.96 4.9 4.86.69.264.968.907 1.076 1.583l-.007.007Z"
          fill="#F9DF78"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h69.455v60H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};