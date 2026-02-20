import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4278 } from "./fragment4278";
import type { FragmentToken4279 } from "./fragment4279";

export const FRAGMENT_4280 = gql(`
  fragment Fragment4280 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult4280 = ResultOf<typeof FRAGMENT_4280>;
type FragmentSelf4280 = NonNullable<FragmentResult4280>;

export type FragmentToken4280 =
  | FragmentSelf4280["__typename"]
  | FragmentSelf4280["typenameHint"] | FragmentToken4278 | FragmentToken4279;
