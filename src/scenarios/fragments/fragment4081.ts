import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4079 } from "./fragment4079";
import type { FragmentToken4080 } from "./fragment4080";

export const FRAGMENT_4081 = gql(`
  fragment Fragment4081 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult4081 = ResultOf<typeof FRAGMENT_4081>;
type FragmentSelf4081 = NonNullable<FragmentResult4081>;

export type FragmentToken4081 =
  | FragmentSelf4081["__typename"]
  | FragmentSelf4081["typenameHint"] | FragmentToken4079 | FragmentToken4080;
