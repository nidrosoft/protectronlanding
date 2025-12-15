"use client";

import type { ReactNode } from "react";
import type { Placement } from "react-aria";
import {
    Button,
    OverlayArrow,
    Tooltip as AriaTooltip,
    TooltipTrigger,
} from "react-aria-components";
import { cx } from "@/utils/cx";

interface TooltipProps {
    children: ReactNode;
    title: string;
    placement?: Placement;
    isDisabled?: boolean;
    offset?: number;
}

export const Tooltip = ({
    children,
    title,
    placement = "top",
    isDisabled = false,
    offset = 8,
}: TooltipProps) => {
    if (isDisabled) {
        return <>{children}</>;
    }

    return (
        <TooltipTrigger delay={300} closeDelay={0}>
            {children}
            <AriaTooltip
                offset={offset}
                placement={placement}
                className={cx(
                    "rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg",
                    "dark:bg-gray-100 dark:text-gray-900",
                    "animate-in fade-in-0 zoom-in-95 data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
                    "data-[placement=top]:slide-in-from-bottom-2",
                    "data-[placement=bottom]:slide-in-from-top-2",
                    "data-[placement=left]:slide-in-from-right-2",
                    "data-[placement=right]:slide-in-from-left-2"
                )}
            >
                <OverlayArrow>
                    <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        className="fill-gray-900 dark:fill-gray-100"
                    >
                        <path d="M0 0 L6 6 L12 0" />
                    </svg>
                </OverlayArrow>
                {title}
            </AriaTooltip>
        </TooltipTrigger>
    );
};
