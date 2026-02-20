import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4028 } from "./fragment4028";
import type { FragmentToken4029 } from "./fragment4029";

export const FRAGMENT_4030 = gql(`
  fragment Fragment4030 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult4030 = ResultOf<typeof FRAGMENT_4030>;
type FragmentSelf4030 = NonNullable<FragmentResult4030>;

export type FragmentToken4030 =
  | FragmentSelf4030["__typename"]
  | FragmentSelf4030["typenameHint"] | FragmentToken4028 | FragmentToken4029;
