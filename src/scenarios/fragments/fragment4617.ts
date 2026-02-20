import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4615 } from "./fragment4615";
import type { FragmentToken4616 } from "./fragment4616";

export const FRAGMENT_4617 = gql(`
  fragment Fragment4617 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult4617 = ResultOf<typeof FRAGMENT_4617>;
type FragmentSelf4617 = NonNullable<FragmentResult4617>;

export type FragmentToken4617 =
  | FragmentSelf4617["__typename"]
  | FragmentSelf4617["typenameHint"] | FragmentToken4615 | FragmentToken4616;
