import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken181 } from "./fragment181";
import type { FragmentToken182 } from "./fragment182";

export const FRAGMENT_183 = gql(`
  fragment Fragment183 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult183 = ResultOf<typeof FRAGMENT_183>;
type FragmentSelf183 = NonNullable<FragmentResult183>;

export type FragmentToken183 =
  | FragmentSelf183["__typename"]
  | FragmentSelf183["typenameHint"] | FragmentToken181 | FragmentToken182;
