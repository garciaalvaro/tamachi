import { useEffect, useRef } from "react";

export const useIsFirstRender = () => {
	const is_first_render = useRef(true);

	useEffect(() => {
		is_first_render.current = false;
	}, []);

	return is_first_render.current;
};
