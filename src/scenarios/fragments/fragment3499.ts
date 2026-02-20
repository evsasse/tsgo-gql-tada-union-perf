import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3497 } from "./fragment3497";
import type { FragmentToken3498 } from "./fragment3498";

export const FRAGMENT_3499 = gql(`
  fragment Fragment3499 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult3499 = ResultOf<typeof FRAGMENT_3499>;
type FragmentSelf3499 = NonNullable<FragmentResult3499>;

export type FragmentToken3499 =
  | FragmentSelf3499["__typename"]
  | FragmentSelf3499["typenameHint"] | FragmentToken3497 | FragmentToken3498;
