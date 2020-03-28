/**
 * External dependencies
 */
import { createContext } from 'react';

const SlotFillContext = createContext( {
	slots: {},
	fills: {},
	registerSlot: () => {},
	unregisterSlot: () => {},
	registerFill: () => {},
	unregisterFill: () => {},
} );

export default SlotFillContext;
