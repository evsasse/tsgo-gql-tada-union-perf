import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2204 } from "./fragment2204";
import type { FragmentToken2205 } from "./fragment2205";

export const FRAGMENT_2206 = gql(`
  fragment Fragment2206 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult2206 = ResultOf<typeof FRAGMENT_2206>;
type FragmentSelf2206 = NonNullable<FragmentResult2206>;

export type FragmentToken2206 =
  | FragmentSelf2206["__typename"]
  | FragmentSelf2206["typenameHint"] | FragmentToken2204 | FragmentToken2205;
