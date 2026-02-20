import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken408 } from "./fragment408";
import type { FragmentToken409 } from "./fragment409";

export const FRAGMENT_410 = gql(`
  fragment Fragment410 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult410 = ResultOf<typeof FRAGMENT_410>;
type FragmentSelf410 = NonNullable<FragmentResult410>;

export type FragmentToken410 =
  | FragmentSelf410["__typename"]
  | FragmentSelf410["typenameHint"] | FragmentToken408 | FragmentToken409;
