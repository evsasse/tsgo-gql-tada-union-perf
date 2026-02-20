import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4680 } from "./fragment4680";
import type { FragmentToken4681 } from "./fragment4681";

export const FRAGMENT_4682 = gql(`
  fragment Fragment4682 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult4682 = ResultOf<typeof FRAGMENT_4682>;
type FragmentSelf4682 = NonNullable<FragmentResult4682>;

export type FragmentToken4682 =
  | FragmentSelf4682["__typename"]
  | FragmentSelf4682["typenameHint"] | FragmentToken4680 | FragmentToken4681;
