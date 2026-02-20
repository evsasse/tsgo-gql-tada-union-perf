import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4672 } from "./fragment4672";
import type { FragmentToken4673 } from "./fragment4673";

export const FRAGMENT_4674 = gql(`
  fragment Fragment4674 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult4674 = ResultOf<typeof FRAGMENT_4674>;
type FragmentSelf4674 = NonNullable<FragmentResult4674>;

export type FragmentToken4674 =
  | FragmentSelf4674["__typename"]
  | FragmentSelf4674["typenameHint"] | FragmentToken4672 | FragmentToken4673;
