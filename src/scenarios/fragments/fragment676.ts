import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken674 } from "./fragment674";
import type { FragmentToken675 } from "./fragment675";

export const FRAGMENT_676 = gql(`
  fragment Fragment676 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult676 = ResultOf<typeof FRAGMENT_676>;
type FragmentSelf676 = NonNullable<FragmentResult676>;

export type FragmentToken676 =
  | FragmentSelf676["__typename"]
  | FragmentSelf676["typenameHint"] | FragmentToken674 | FragmentToken675;
