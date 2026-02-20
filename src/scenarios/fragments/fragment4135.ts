import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4133 } from "./fragment4133";
import type { FragmentToken4134 } from "./fragment4134";

export const FRAGMENT_4135 = gql(`
  fragment Fragment4135 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult4135 = ResultOf<typeof FRAGMENT_4135>;
type FragmentSelf4135 = NonNullable<FragmentResult4135>;

export type FragmentToken4135 =
  | FragmentSelf4135["__typename"]
  | FragmentSelf4135["typenameHint"] | FragmentToken4133 | FragmentToken4134;
