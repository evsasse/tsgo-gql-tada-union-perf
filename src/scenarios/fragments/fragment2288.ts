import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2286 } from "./fragment2286";
import type { FragmentToken2287 } from "./fragment2287";

export const FRAGMENT_2288 = gql(`
  fragment Fragment2288 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult2288 = ResultOf<typeof FRAGMENT_2288>;
type FragmentSelf2288 = NonNullable<FragmentResult2288>;

export type FragmentToken2288 =
  | FragmentSelf2288["__typename"]
  | FragmentSelf2288["typenameHint"] | FragmentToken2286 | FragmentToken2287;
