import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4678 } from "./fragment4678";
import type { FragmentToken4679 } from "./fragment4679";

export const FRAGMENT_4680 = gql(`
  fragment Fragment4680 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult4680 = ResultOf<typeof FRAGMENT_4680>;
type FragmentSelf4680 = NonNullable<FragmentResult4680>;

export type FragmentToken4680 =
  | FragmentSelf4680["__typename"]
  | FragmentSelf4680["typenameHint"] | FragmentToken4678 | FragmentToken4679;
