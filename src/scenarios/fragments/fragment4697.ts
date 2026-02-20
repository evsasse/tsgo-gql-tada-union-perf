import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4695 } from "./fragment4695";
import type { FragmentToken4696 } from "./fragment4696";

export const FRAGMENT_4697 = gql(`
  fragment Fragment4697 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult4697 = ResultOf<typeof FRAGMENT_4697>;
type FragmentSelf4697 = NonNullable<FragmentResult4697>;

export type FragmentToken4697 =
  | FragmentSelf4697["__typename"]
  | FragmentSelf4697["typenameHint"] | FragmentToken4695 | FragmentToken4696;
