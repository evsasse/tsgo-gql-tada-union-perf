import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken079 } from "./fragment079";
import type { FragmentToken080 } from "./fragment080";

export const FRAGMENT_081 = gql(`
  fragment Fragment081 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult081 = ResultOf<typeof FRAGMENT_081>;
type FragmentSelf081 = NonNullable<FragmentResult081>;

export type FragmentToken081 =
  | FragmentSelf081["__typename"]
  | FragmentSelf081["typenameHint"] | FragmentToken079 | FragmentToken080;
