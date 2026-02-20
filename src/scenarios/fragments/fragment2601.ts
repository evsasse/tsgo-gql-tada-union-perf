import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2599 } from "./fragment2599";
import type { FragmentToken2600 } from "./fragment2600";

export const FRAGMENT_2601 = gql(`
  fragment Fragment2601 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult2601 = ResultOf<typeof FRAGMENT_2601>;
type FragmentSelf2601 = NonNullable<FragmentResult2601>;

export type FragmentToken2601 =
  | FragmentSelf2601["__typename"]
  | FragmentSelf2601["typenameHint"] | FragmentToken2599 | FragmentToken2600;
