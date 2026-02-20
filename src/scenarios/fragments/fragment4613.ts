import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4611 } from "./fragment4611";
import type { FragmentToken4612 } from "./fragment4612";

export const FRAGMENT_4613 = gql(`
  fragment Fragment4613 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult4613 = ResultOf<typeof FRAGMENT_4613>;
type FragmentSelf4613 = NonNullable<FragmentResult4613>;

export type FragmentToken4613 =
  | FragmentSelf4613["__typename"]
  | FragmentSelf4613["typenameHint"] | FragmentToken4611 | FragmentToken4612;
