import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4238 } from "./fragment4238";
import type { FragmentToken4239 } from "./fragment4239";

export const FRAGMENT_4240 = gql(`
  fragment Fragment4240 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult4240 = ResultOf<typeof FRAGMENT_4240>;
type FragmentSelf4240 = NonNullable<FragmentResult4240>;

export type FragmentToken4240 =
  | FragmentSelf4240["__typename"]
  | FragmentSelf4240["typenameHint"] | FragmentToken4238 | FragmentToken4239;
