import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4066 } from "./fragment4066";
import type { FragmentToken4067 } from "./fragment4067";

export const FRAGMENT_4068 = gql(`
  fragment Fragment4068 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult4068 = ResultOf<typeof FRAGMENT_4068>;
type FragmentSelf4068 = NonNullable<FragmentResult4068>;

export type FragmentToken4068 =
  | FragmentSelf4068["__typename"]
  | FragmentSelf4068["typenameHint"] | FragmentToken4066 | FragmentToken4067;
