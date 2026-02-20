import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2203 } from "./fragment2203";
import type { FragmentToken2204 } from "./fragment2204";

export const FRAGMENT_2205 = gql(`
  fragment Fragment2205 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult2205 = ResultOf<typeof FRAGMENT_2205>;
type FragmentSelf2205 = NonNullable<FragmentResult2205>;

export type FragmentToken2205 =
  | FragmentSelf2205["__typename"]
  | FragmentSelf2205["typenameHint"] | FragmentToken2203 | FragmentToken2204;
