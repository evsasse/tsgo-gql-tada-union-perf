import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4867 } from "./fragment4867";
import type { FragmentToken4868 } from "./fragment4868";

export const FRAGMENT_4869 = gql(`
  fragment Fragment4869 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult4869 = ResultOf<typeof FRAGMENT_4869>;
type FragmentSelf4869 = NonNullable<FragmentResult4869>;

export type FragmentToken4869 =
  | FragmentSelf4869["__typename"]
  | FragmentSelf4869["typenameHint"] | FragmentToken4867 | FragmentToken4868;
