import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2408 } from "./fragment2408";
import type { FragmentToken2409 } from "./fragment2409";

export const FRAGMENT_2410 = gql(`
  fragment Fragment2410 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult2410 = ResultOf<typeof FRAGMENT_2410>;
type FragmentSelf2410 = NonNullable<FragmentResult2410>;

export type FragmentToken2410 =
  | FragmentSelf2410["__typename"]
  | FragmentSelf2410["typenameHint"] | FragmentToken2408 | FragmentToken2409;
