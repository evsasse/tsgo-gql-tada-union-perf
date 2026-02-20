import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4979 } from "./fragment4979";
import type { FragmentToken4980 } from "./fragment4980";

export const FRAGMENT_4981 = gql(`
  fragment Fragment4981 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult4981 = ResultOf<typeof FRAGMENT_4981>;
type FragmentSelf4981 = NonNullable<FragmentResult4981>;

export type FragmentToken4981 =
  | FragmentSelf4981["__typename"]
  | FragmentSelf4981["typenameHint"] | FragmentToken4979 | FragmentToken4980;
