import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken660 } from "./fragment660";
import type { FragmentToken661 } from "./fragment661";

export const FRAGMENT_662 = gql(`
  fragment Fragment662 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult662 = ResultOf<typeof FRAGMENT_662>;
type FragmentSelf662 = NonNullable<FragmentResult662>;

export type FragmentToken662 =
  | FragmentSelf662["__typename"]
  | FragmentSelf662["typenameHint"] | FragmentToken660 | FragmentToken661;
