import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4800 } from "./fragment4800";
import type { FragmentToken4801 } from "./fragment4801";

export const FRAGMENT_4802 = gql(`
  fragment Fragment4802 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult4802 = ResultOf<typeof FRAGMENT_4802>;
type FragmentSelf4802 = NonNullable<FragmentResult4802>;

export type FragmentToken4802 =
  | FragmentSelf4802["__typename"]
  | FragmentSelf4802["typenameHint"] | FragmentToken4800 | FragmentToken4801;
