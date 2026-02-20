import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2165 } from "./fragment2165";
import type { FragmentToken2166 } from "./fragment2166";

export const FRAGMENT_2167 = gql(`
  fragment Fragment2167 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult2167 = ResultOf<typeof FRAGMENT_2167>;
type FragmentSelf2167 = NonNullable<FragmentResult2167>;

export type FragmentToken2167 =
  | FragmentSelf2167["__typename"]
  | FragmentSelf2167["typenameHint"] | FragmentToken2165 | FragmentToken2166;
