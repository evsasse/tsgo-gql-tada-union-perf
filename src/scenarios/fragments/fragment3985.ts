import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3983 } from "./fragment3983";
import type { FragmentToken3984 } from "./fragment3984";

export const FRAGMENT_3985 = gql(`
  fragment Fragment3985 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult3985 = ResultOf<typeof FRAGMENT_3985>;
type FragmentSelf3985 = NonNullable<FragmentResult3985>;

export type FragmentToken3985 =
  | FragmentSelf3985["__typename"]
  | FragmentSelf3985["typenameHint"] | FragmentToken3983 | FragmentToken3984;
