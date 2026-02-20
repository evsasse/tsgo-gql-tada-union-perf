import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken209 } from "./fragment209";
import type { FragmentToken210 } from "./fragment210";

export const FRAGMENT_211 = gql(`
  fragment Fragment211 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult211 = ResultOf<typeof FRAGMENT_211>;
type FragmentSelf211 = NonNullable<FragmentResult211>;

export type FragmentToken211 =
  | FragmentSelf211["__typename"]
  | FragmentSelf211["typenameHint"] | FragmentToken209 | FragmentToken210;
