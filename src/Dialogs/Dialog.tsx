import React, { useState, useRef } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { IDIalogProps } from "./IDialogProps";
import Button from "../Button/Button";
import { closeDialogRef } from "../Gizmos/Modals";
import Typography from "../Typography/Typography";

const Dialog: React.FC<IDIalogProps> = ({
	className,
	id,
	children,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	title,
	buttons,
	showCloseButton
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_children] = useState(children || "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.");
	const [_title]	= useState(title || "Dialog Title");
	const [_buttons] = useState(buttons || undefined);
	const [_showActions] = useState(!!_buttons);

	const dialogRef = useRef<HTMLDialogElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("dialog")
		.add("dialog-" + _theme)
		.add(_className)
		.toString();

	const actionButtons = _showActions && (
		<div className="dialog-actions">
			{showCloseButton && 		<Button onClick={(event) => closeDialogRef(dialogRef)}>
					Close Dialog
		</Button>}

			{_buttons?.map((button, index) => (
				<Button key={index} onClick={button.onClick} configuration="filled">
					{button.label || "Action"}
				</Button>
			))}
		</div>
	);

	return (
		<div>
			<dialog
				id={_id}
				className={_computedComponentClassName}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onMouseMove={onMouseMove}
				onClick={onClick}
				ref={dialogRef}
			>
				<div className="dialog-text-content">
					<Typography variant="text-headline-small">{_title}</Typography>
					<Typography variant="text-body-medium">{_children}</Typography>
				</div>
				<div className="dialog-divider"></div>

				{actionButtons}

			</dialog>
		</div>
	);
};

export default Dialog;
