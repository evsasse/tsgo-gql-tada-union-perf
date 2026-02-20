import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken230 } from "./fragment230";
import type { FragmentToken231 } from "./fragment231";

export const FRAGMENT_232 = gql(`
  fragment Fragment232 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult232 = ResultOf<typeof FRAGMENT_232>;
type FragmentSelf232 = NonNullable<FragmentResult232>;

export type FragmentToken232 =
  | FragmentSelf232["__typename"]
  | FragmentSelf232["typenameHint"] | FragmentToken230 | FragmentToken231;
