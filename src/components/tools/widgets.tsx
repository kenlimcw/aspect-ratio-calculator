import type { ToolData } from "@/lib/tools-data";
import { SafeZoneChecker } from "@/components/SafeZoneChecker";
import { PrintCropCalculator } from "@/components/tools/PrintCropCalculator";
import { ScreenSizeCalculator } from "@/components/tools/ScreenSizeCalculator";
import { SensorCropCalculator } from "@/components/tools/SensorCropCalculator";
import { PixelsInchesCalculator } from "@/components/tools/PixelsInchesCalculator";
import { PhoneCropExplainer } from "@/components/tools/PhoneCropExplainer";

/* One place a cell is wired to its widget.
 *
 * Typed as an exhaustive Record over ToolData["widget"], so adding a member to
 * that union without adding it here is a compile error rather than a page that
 * renders its heading, its answer block and then nothing at all. */
const WIDGETS: Record<ToolData["widget"], () => React.ReactElement> = {
  "safe-zone-checker": SafeZoneChecker,
  "print-crop-calculator": PrintCropCalculator,
  "screen-size-calculator": ScreenSizeCalculator,
  "sensor-crop-factor": SensorCropCalculator,
  "pixels-to-inches": PixelsInchesCalculator,
  "phone-crop-explainer": PhoneCropExplainer,
};

export function ToolWidget({ widget }: { widget: ToolData["widget"] }) {
  const W = WIDGETS[widget];
  return <W />;
}
