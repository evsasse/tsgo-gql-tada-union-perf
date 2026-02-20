import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4662 } from "./fragment4662";
import type { FragmentToken4663 } from "./fragment4663";

export const FRAGMENT_4664 = gql(`
  fragment Fragment4664 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult4664 = ResultOf<typeof FRAGMENT_4664>;
type FragmentSelf4664 = NonNullable<FragmentResult4664>;

export type FragmentToken4664 =
  | FragmentSelf4664["__typename"]
  | FragmentSelf4664["typenameHint"] | FragmentToken4662 | FragmentToken4663;
