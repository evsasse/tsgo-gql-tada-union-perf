import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4319 } from "./fragment4319";
import type { FragmentToken4320 } from "./fragment4320";

export const FRAGMENT_4321 = gql(`
  fragment Fragment4321 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult4321 = ResultOf<typeof FRAGMENT_4321>;
type FragmentSelf4321 = NonNullable<FragmentResult4321>;

export type FragmentToken4321 =
  | FragmentSelf4321["__typename"]
  | FragmentSelf4321["typenameHint"] | FragmentToken4319 | FragmentToken4320;
