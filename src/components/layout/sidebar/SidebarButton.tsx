import { LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../ui/button";
import { cn } from "~/lib/utils";
import { SheetClose } from "~/components/ui/sheet";

interface SidebarButtonProps extends ButtonProps {
    icon?: LucideIcon;
}

export function SidebarButton({ icon: Icon, className, children, ...props }: SidebarButtonProps) {
    return (
        <Button  variant="secondary" className={cn("gap-3 justify-start rounded-full mb-4", className)} {...props}>
            {Icon && <Icon size={21} />}
            <span>{children}</span>
        </Button>
    )
};

export function SidebarButtonSheet(props: SidebarButtonProps) {
    return (
        <SheetClose asChild>
            <SidebarButton {...props} />
        </SheetClose>
    )
}