import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4694 } from "./fragment4694";
import type { FragmentToken4695 } from "./fragment4695";

export const FRAGMENT_4696 = gql(`
  fragment Fragment4696 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult4696 = ResultOf<typeof FRAGMENT_4696>;
type FragmentSelf4696 = NonNullable<FragmentResult4696>;

export type FragmentToken4696 =
  | FragmentSelf4696["__typename"]
  | FragmentSelf4696["typenameHint"] | FragmentToken4694 | FragmentToken4695;
