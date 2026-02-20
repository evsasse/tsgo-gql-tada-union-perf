import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken400 } from "./fragment400";
import type { FragmentToken401 } from "./fragment401";

export const FRAGMENT_402 = gql(`
  fragment Fragment402 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult402 = ResultOf<typeof FRAGMENT_402>;
type FragmentSelf402 = NonNullable<FragmentResult402>;

export type FragmentToken402 =
  | FragmentSelf402["__typename"]
  | FragmentSelf402["typenameHint"] | FragmentToken400 | FragmentToken401;
