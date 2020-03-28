/**
 * External dependencies
 */
import { useRef, useEffect, createPortal } from 'react';

/**
 * Internal dependencies
 */
import useSlot from './use-slot';

export default function Fill( { name, children } ) {
	const slot = useSlot( name );
	const ref = useRef();

	useEffect( () => {
		// We register fills so we can keep track of their existance.
		// Some Slot implementations need to know if there're already fills
		// registered so they can choose to render themselves or not.
		slot.registerFill( ref );
		return () => {
			slot.unregisterFill( ref );
		};
	}, [ slot.registerFill, slot.unregisterFill ] );

	if ( ! slot.ref || ! slot.ref.current ) {
		return null;
	}

	if ( typeof children === 'function' ) {
		children = children( slot.fillProps );
	}

	return createPortal( children, slot.ref.current );
}
