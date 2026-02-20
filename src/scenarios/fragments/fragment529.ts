import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken527 } from "./fragment527";
import type { FragmentToken528 } from "./fragment528";

export const FRAGMENT_529 = gql(`
  fragment Fragment529 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult529 = ResultOf<typeof FRAGMENT_529>;
type FragmentSelf529 = NonNullable<FragmentResult529>;

export type FragmentToken529 =
  | FragmentSelf529["__typename"]
  | FragmentSelf529["typenameHint"] | FragmentToken527 | FragmentToken528;
