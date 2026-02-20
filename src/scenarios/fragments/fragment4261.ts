import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4259 } from "./fragment4259";
import type { FragmentToken4260 } from "./fragment4260";

export const FRAGMENT_4261 = gql(`
  fragment Fragment4261 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult4261 = ResultOf<typeof FRAGMENT_4261>;
type FragmentSelf4261 = NonNullable<FragmentResult4261>;

export type FragmentToken4261 =
  | FragmentSelf4261["__typename"]
  | FragmentSelf4261["typenameHint"] | FragmentToken4259 | FragmentToken4260;
