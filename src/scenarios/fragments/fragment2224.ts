import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2222 } from "./fragment2222";
import type { FragmentToken2223 } from "./fragment2223";

export const FRAGMENT_2224 = gql(`
  fragment Fragment2224 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult2224 = ResultOf<typeof FRAGMENT_2224>;
type FragmentSelf2224 = NonNullable<FragmentResult2224>;

export type FragmentToken2224 =
  | FragmentSelf2224["__typename"]
  | FragmentSelf2224["typenameHint"] | FragmentToken2222 | FragmentToken2223;
