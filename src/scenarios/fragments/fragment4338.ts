import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4336 } from "./fragment4336";
import type { FragmentToken4337 } from "./fragment4337";

export const FRAGMENT_4338 = gql(`
  fragment Fragment4338 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult4338 = ResultOf<typeof FRAGMENT_4338>;
type FragmentSelf4338 = NonNullable<FragmentResult4338>;

export type FragmentToken4338 =
  | FragmentSelf4338["__typename"]
  | FragmentSelf4338["typenameHint"] | FragmentToken4336 | FragmentToken4337;
