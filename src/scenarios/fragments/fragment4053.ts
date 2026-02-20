import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4051 } from "./fragment4051";
import type { FragmentToken4052 } from "./fragment4052";

export const FRAGMENT_4053 = gql(`
  fragment Fragment4053 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult4053 = ResultOf<typeof FRAGMENT_4053>;
type FragmentSelf4053 = NonNullable<FragmentResult4053>;

export type FragmentToken4053 =
  | FragmentSelf4053["__typename"]
  | FragmentSelf4053["typenameHint"] | FragmentToken4051 | FragmentToken4052;
