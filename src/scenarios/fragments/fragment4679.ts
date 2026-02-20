import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4677 } from "./fragment4677";
import type { FragmentToken4678 } from "./fragment4678";

export const FRAGMENT_4679 = gql(`
  fragment Fragment4679 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult4679 = ResultOf<typeof FRAGMENT_4679>;
type FragmentSelf4679 = NonNullable<FragmentResult4679>;

export type FragmentToken4679 =
  | FragmentSelf4679["__typename"]
  | FragmentSelf4679["typenameHint"] | FragmentToken4677 | FragmentToken4678;
