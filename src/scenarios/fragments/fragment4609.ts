import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4607 } from "./fragment4607";
import type { FragmentToken4608 } from "./fragment4608";

export const FRAGMENT_4609 = gql(`
  fragment Fragment4609 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult4609 = ResultOf<typeof FRAGMENT_4609>;
type FragmentSelf4609 = NonNullable<FragmentResult4609>;

export type FragmentToken4609 =
  | FragmentSelf4609["__typename"]
  | FragmentSelf4609["typenameHint"] | FragmentToken4607 | FragmentToken4608;
