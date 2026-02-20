import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2407 } from "./fragment2407";
import type { FragmentToken2408 } from "./fragment2408";

export const FRAGMENT_2409 = gql(`
  fragment Fragment2409 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult2409 = ResultOf<typeof FRAGMENT_2409>;
type FragmentSelf2409 = NonNullable<FragmentResult2409>;

export type FragmentToken2409 =
  | FragmentSelf2409["__typename"]
  | FragmentSelf2409["typenameHint"] | FragmentToken2407 | FragmentToken2408;
