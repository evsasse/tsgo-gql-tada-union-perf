import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2149 } from "./fragment2149";
import type { FragmentToken2150 } from "./fragment2150";

export const FRAGMENT_2151 = gql(`
  fragment Fragment2151 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult2151 = ResultOf<typeof FRAGMENT_2151>;
type FragmentSelf2151 = NonNullable<FragmentResult2151>;

export type FragmentToken2151 =
  | FragmentSelf2151["__typename"]
  | FragmentSelf2151["typenameHint"] | FragmentToken2149 | FragmentToken2150;
